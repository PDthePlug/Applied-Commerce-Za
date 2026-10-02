import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import ts from "typescript";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const meta=index.grades.find(item=>item.grade===9);
if(!meta) throw new Error("Grade 9 metadata not found.");

const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));
const bundle=inflate(Array.from({length:meta.bundleParts},(_,i)=>
  fs.readFileSync(path.join(root,`grade-9.part-${i+1}.b64`),"utf8").trim()
).join(""));

for(const patchMeta of meta.patches??[]){
  const patch=inflate(patchMeta.parts.map(part=>
    fs.readFileSync(path.join(root,part),"utf8").trim()
  ).join(""));
  const term=bundle.terms.find(item=>item.term===patch.term);
  const numbers=new Set(patch.units.filter(u=>u.type==="lesson").map(u=>u.startLesson));
  term.units=[
    ...term.units.filter(u=>!(u.type==="lesson"&&numbers.has(u.startLesson))),
    ...patch.units,
  ].sort((a,b)=>(a.startLesson??999)-(b.startLesson??999));
}

const tsSource=fs.readFileSync("lib/zimbabwe-content.ts","utf8");
let js=ts.transpileModule(tsSource,{
  compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}
}).outputText;
js=js.replace(/^export\s+/gm,"");
const api=new Function(
  `${js}\nreturn {applyZimbabweUnitOverlay,zimbabweContentOverrides};`
)();

const rules=[
  ["rand",/\b(?:R\s?\d[\d,.]*|rand|rands)\b/i],
  ["south-africa",/\bSouth Africa(?:n)?\b/i],
  ["taxi-rank",/\btaxi rank\b|\btaxi driver\b|\btaxis\b/i],
  ["spaza",/\bspaza\b/i],
  ["stokvel",/\bstokvels?\b/i],
  ["sa-place",/\b(?:Johannesburg|Soweto|Tembisa|Cape Town|Durban|Umlazi|Pretoria|Atteridgeville|Limpopo|Katlehong)\b/i],
  ["source-grade",/\bGrade\s+(?:8|9|10|11|12)\b/i],
  ["source-term",/\bTerm\s+[1-4]\b/i],
  ["caps",/\bCAPS\b|\bDBE\b/i],
];

function runtimeNormalizeRestored(unit){
  if(unit.grade!==9||unit.term!==2||unit.type!=="lesson"||unit.startLesson<23||unit.startLesson>34) return unit;
  let removeCapsTable=false;
  const blocks=unit.blocks.flatMap(block=>{
    if(block.kind==="text"){
      const value=block.text.trim();
      if(/^CAPS Integration$/i.test(value)){removeCapsTable=true;return [];}
      if(/^Pride 2\.0 executing\.?$/i.test(value)||/^I will now complete Lessons 24[–-]34\b/i.test(value)) return [];
      if(/^💭\s*Truth\s*\/\s*Danger\s*\/\s*Your Move\s*$/i.test(value)){
        removeCapsTable=false;
        return [{...block,text:"💭 Deepening Insight"}];
      }
      if(removeCapsTable) removeCapsTable=false;
      return [block];
    }
    if(removeCapsTable&&block.kind==="table"){removeCapsTable=false;return [];}
    removeCapsTable=false;
    return [block];
  });
  return {...unit,blocks};
}

const blockText=block=>block.kind==="text"?block.text:block.kind==="table"?block.rows.flat().join(" | "):"";
const rows=[];
let lessonCount=0;
for(const term of bundle.terms){
  for(const sourceUnit of term.units){
    if(sourceUnit.type!=="lesson") continue;
    lessonCount+=1;
    const normalized=runtimeNormalizeRestored(sourceUnit);
    const unit=api.applyZimbabweUnitOverlay(normalized);
    const value=[unit.title,...unit.blocks.map(blockText)].join("\n");
    const hits=rules.filter(([,re])=>re.test(value)).map(([name])=>name);
    if(hits.length) rows.push({
      lesson:unit.startLesson,
      id:unit.id,
      title:unit.title,
      hasOverride:Boolean(api.zimbabweContentOverrides[unit.id]),
      hits,
    });
  }
}

console.log(JSON.stringify({
  form2Lessons:lessonCount,
  explicitForm2Overrides:Object.keys(api.zimbabweContentOverrides).filter(id=>id.startsWith("g9-")).length,
  runtimeLessonsWithResidue:rows.length,
  rows,
},null,2));
