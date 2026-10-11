import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import ts from "typescript";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function loadGrade(grade){
  const meta=index.grades.find(item=>item.grade===grade);
  if(!meta) throw new Error(`Grade ${grade} metadata missing`);
  const bundle=inflate(Array.from({length:meta.bundleParts},(_,i)=>
    fs.readFileSync(path.join(root,`grade-${grade}.part-${i+1}.b64`),"utf8").trim()
  ).join(""));
  for(const patchMeta of meta.patches??[]){
    const patch=inflate(patchMeta.parts.map(part=>fs.readFileSync(path.join(root,part),"utf8").trim()).join(""));
    const term=bundle.terms.find(item=>item.term===patch.term);
    const numbers=new Set(patch.units.filter(u=>u.type==="lesson").map(u=>u.startLesson));
    term.units=[
      ...term.units.filter(u=>!(u.type==="lesson"&&numbers.has(u.startLesson))),
      ...patch.units,
    ].sort((a,b)=>(a.startLesson??999)-(b.startLesson??999));
  }
  return bundle;
}

const source=fs.readFileSync("lib/zimbabwe-content.ts","utf8");
let js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
js=js.replace(/^export\s+/gm,"");
const api=new Function(`${js}\nreturn {applyZimbabweUnitOverlay};`)();

const rules=[
  ["rand",/\b(?:R\s?\d[\d,.]*|rand|rands)\b/i],
  ["south-africa",/\bSouth Africa(?:n)?\b/i],
  ["source-grade",/\bGrade\s+(?:8|9|10|11|12)\b/i],
  ["phantom-term-4",/\bTerm\s+4\b/i],
  ["matric",/\bmatric\b|post-matric/i],
  ["legacy-transport",/\btaxi rank\b|\btaxi driver\b|\btaxis\b/i],
  ["legacy-retail",/\bspaza\b|\bstokvels?\b/i],
  ["sa-place",/\b(?:Johannesburg|Soweto|Tembisa|Cape Town|Durban|Umlazi|Pretoria|Atteridgeville|Limpopo|Katlehong|Alexandra|Gauteng|KwaZulu-Natal)\b/i],
  ["sa-institution",/\\b(?:NSFAS|National Student Financial Aid Scheme|UNISA|University of South Africa|SARS|South African Revenue Service|UIF|Unemployment Insurance Fund|SDL|Skills Development Levy|CAPS|DBE|Department of Basic Education|JSE|Johannesburg Stock Exchange|NSC|National Senior Certificate)\\b/i],
  ["sa-product",/\\bTFSA\\b|Tax-Free Savings Account|\\bretirement annuit(?:y|ies)\\b/i],
  ["sa-legal-instrument",/\\b(?:National Credit Act|Wills Act|Administration of Estates Act|Intestate Succession Act|South African law)\\b/i],
];

function normalizeRestoredGrade9(unit){
  if(unit.grade!==9||unit.term!==2||unit.type!=="lesson"||unit.startLesson<23||unit.startLesson>34) return unit;
  let removeCapsTable=false;
  const blocks=unit.blocks.flatMap(block=>{
    if(block.kind==="text"){
      const value=block.text.trim();
      if(/^CAPS Integration$/i.test(value)){removeCapsTable=true;return [];}
      if(/^Pride 2\.0 executing\.?$/i.test(value)||/^I will now complete Lessons 24[–-]34\b/i.test(value)) return [];
      if(/^💭\s*Truth\s*\/\s*Danger\s*\/\s*Your Move\s*$/i.test(value)){
        removeCapsTable=false; return [{...block,text:"💭 Deepening Insight"}];
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
let count=0;
for(const gradeNo of [8,9,10,11,12]){
  const bundle=loadGrade(gradeNo);
  for(const sourceTerm of bundle.terms){
    for(const raw of sourceTerm.units){
      if(raw.type!=="lesson") continue;
      count+=1;
      const unit=api.applyZimbabweUnitOverlay(normalizeRestoredGrade9(raw));
      const text=[unit.title,...unit.blocks.map(blockText)].join("\n");
      const hits=rules.filter(([,re])=>re.test(text)).map(([name])=>name);
      if(!hits.length) continue;
      const examples=[];
      unit.blocks.forEach((block,index)=>{
        const value=blockText(block);
        const blockHits=rules.filter(([,re])=>re.test(value)).map(([name])=>name);
        if(blockHits.length) examples.push({block,blockIndex:index,hits:blockHits,text:value.slice(0,650)});
      });
      rows.push({grade:gradeNo,sourceTerm:sourceTerm.term,lesson:unit.startLesson,id:unit.id,title:unit.title,hits,examples:examples.slice(0,6)});
    }
  }
}

console.log(JSON.stringify({renderedLessons:count,residualLessons:rows.length,rows},null,2));
