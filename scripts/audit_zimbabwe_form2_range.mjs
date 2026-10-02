import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const START=Number(process.env.START_LESSON??1);
const END=Number(process.env.END_LESSON??16);
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
const blockText=block=>block.kind==="text"?block.text:block.kind==="table"?block.rows.flat().join(" | "):"";
const detail=[];
for(const term of bundle.terms){
  for(const unit of term.units){
    if(unit.type!=="lesson"||unit.startLesson<START||unit.startLesson>END) continue;
    const examples=[];
    unit.blocks.forEach((block,index)=>{
      const value=blockText(block);
      const hits=rules.filter(([,re])=>re.test(value)).map(([name])=>name);
      if(hits.length) examples.push({
        block:index,kind:block.kind,hits,
        text:value.length>1200?value.slice(0,1200)+"…":value,
      });
    });
    detail.push({lesson:unit.startLesson,id:unit.id,title:unit.title,examples});
  }
}
console.log(JSON.stringify({start:START,end:END,lessons:detail},null,2));
