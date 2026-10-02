import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import ts from "typescript";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function loadGrade(grade){
  const meta=index.grades.find(item=>item.grade===grade);
  if(!meta) throw new Error(`Grade ${grade} metadata not found.`);
  const bundle=inflate(Array.from({length:meta.bundleParts},(_,i)=>
    fs.readFileSync(path.join(root,`grade-${grade}.part-${i+1}.b64`),"utf8").trim()
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
  return bundle;
}

const tsSource=fs.readFileSync("lib/zimbabwe-content.ts","utf8");
let js=ts.transpileModule(tsSource,{
  compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}
}).outputText;
js=js.replace(/^export\s+/gm,"");
const api=new Function(`${js}\nreturn {applyZimbabweUnitOverlay,zimbabweContentOverrides};`)();

const rules=[
  ["rand",/\b(?:R\s?\d[\d,.]*|rand|rands)\b/i],
  ["south-africa",/\bSouth Africa(?:n)?\b|\bSARS\b/i],
  ["taxi-rank",/\btaxi rank\b|\btaxi driver\b|\btaxis\b/i],
  ["spaza",/\bspaza\b/i],
  ["stokvel",/\bstokvels?\b/i],
  ["sa-place",/\b(?:Johannesburg|Soweto|Tembisa|Cape Town|Durban|Umlazi|Pretoria|Atteridgeville|Limpopo|Katlehong|Alexandra)\b/i],
  ["source-grade",/\bGrade\s+(?:9|10|11|12)\b/i],
  ["uif-sdl",/\b(?:UIF|SDL)\b/i],
  ["tfsa",/\bTFSA\b|Tax-Free Savings Account/i],
  ["sa-retail-bond",/\bretail bond(?:s)?\b/i],
  ["sa-credit-score",/\bcredit score(?:s)?\b/i],
  ["sa-retirement",/\b(?:retirement annuity|RA contributions?)\b/i],
];

const blockText=block=>block.kind==="text"?block.text:block.kind==="table"?block.rows.flat().join(" | "):"";
const rows=[];
let count=0;
for(const grade of [loadGrade(10),loadGrade(11)]){
  for(const sourceTerm of grade.terms){
    if(grade.grade===11 && sourceTerm.term>2) continue;
    for(const sourceUnit of sourceTerm.units){
      if(sourceUnit.type!=="lesson") continue;
      count+=1;
      const unit=api.applyZimbabweUnitOverlay(sourceUnit);
      const value=[unit.title,...unit.blocks.map(blockText)].join("\n");
      const hits=rules.filter(([,re])=>re.test(value)).map(([name])=>name);
      if(/\bTerm\s+4\b/i.test(value)) hits.push("phantom-term-4");
      if(!hits.length) continue;
      const examples=[];
      unit.blocks.forEach((block,index)=>{
        const text=blockText(block);
        const blockHits=rules.filter(([,re])=>re.test(text)).map(([name])=>name);
        if(/\bTerm\s+4\b/i.test(text)) blockHits.push("phantom-term-4");
        if(blockHits.length) examples.push({
          block:index,kind:block.kind,hits:[...new Set(blockHits)],
          text:text.length>700?text.slice(0,700)+"…":text,
        });
      });
      rows.push({
        sourceGrade:grade.grade,
        sourceTerm:sourceTerm.term,
        lesson:unit.startLesson,
        id:unit.id,
        title:unit.title,
        hasOverride:Boolean(api.zimbabweContentOverrides[unit.id]),
        hits:[...new Set(hits)],
        examples:examples.slice(0,8),
      });
    }
  }
}
console.log(JSON.stringify({
  form3Lessons:count,
  explicitForm3Overrides:Object.keys(api.zimbabweContentOverrides).filter(id=>/^g(?:10|11)-/.test(id)).length,
  runtimeLessonsWithResidue:rows.length,
  rows,
},null,2));
