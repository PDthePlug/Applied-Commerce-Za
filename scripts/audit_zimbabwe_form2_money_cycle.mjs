import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const meta=index.grades.find(item=>item.grade===9);
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));
const encoded=Array.from({length:meta.bundleParts},(_,i)=>
  fs.readFileSync(path.join(root,`grade-9.part-${i+1}.b64`),"utf8").trim()
).join("");
const bundle=inflate(encoded);

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
  ["sa-place",/\b(?:Johannesburg|Soweto|Tembisa|Cape Town|Durban|Umlazi|Pretoria|Atteridgeville|Limpopo)\b/i],
  ["source-grade",/\bGrade\s+(?:8|9|10|11|12)\b/i],
  ["source-term",/\bTerm\s+[1-4]\b/i],
];

const text=block=>block.kind==="text"?block.text:block.kind==="table"?block.rows.flat().join(" | "):"";
const detail=[];
for(const term of bundle.terms){
  for(const unit of term.units){
    if(unit.type!=="lesson"||unit.startLesson<17||unit.startLesson>34) continue;
    const examples=[];
    unit.blocks.forEach((block,index)=>{
      const value=text(block);
      const hits=rules.filter(([,re])=>re.test(value)).map(([name])=>name);
      if(hits.length){
        examples.push({
          block:index,
          kind:block.kind,
          hits,
          text:value.length>900?value.slice(0,900)+"…":value,
        });
      }
    });
    detail.push({
      lesson:unit.startLesson,
      id:unit.id,
      title:unit.title,
      examples,
    });
  }
}
console.log(JSON.stringify(detail,null,2));
