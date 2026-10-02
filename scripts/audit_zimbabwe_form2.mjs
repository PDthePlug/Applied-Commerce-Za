import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const meta=index.grades.find(item=>item.grade===9);
if(!meta) throw new Error("Grade 9 metadata not found.");

const inflate=encoded=>JSON.parse(
  zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8")
);

const bundleEncoded=Array.from({length:meta.bundleParts},(_,i)=>
  fs.readFileSync(path.join(root,`grade-9.part-${i+1}.b64`),"utf8").trim()
).join("");
const bundle=inflate(bundleEncoded);

for(const patchMeta of meta.patches??[]){
  const patchEncoded=patchMeta.parts.map(part=>
    fs.readFileSync(path.join(root,part),"utf8").trim()
  ).join("");
  const patch=inflate(patchEncoded);
  const term=bundle.terms.find(item=>item.term===patch.term);
  const patchNumbers=new Set(
    patch.units
      .filter(unit=>unit.type==="lesson"&&typeof unit.startLesson==="number")
      .map(unit=>unit.startLesson)
  );
  term.units=[
    ...term.units.filter(unit=>!(
      unit.type==="lesson"&&
      typeof unit.startLesson==="number"&&
      patchNumbers.has(unit.startLesson)
    )),
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
  ["caps",/\bCAPS\b|\bDBE\b/i],
];

function blockText(block){
  if(block.kind==="text") return block.text;
  if(block.kind==="table") return block.rows.flat().join(" | ");
  return "";
}

const rows=[];
for(const term of bundle.terms){
  for(const unit of term.units){
    if(unit.type!=="lesson") continue;
    const text=[unit.title,...unit.blocks.map(blockText)].join("\n");
    const hits=rules.filter(([,re])=>re.test(text)).map(([name])=>name);
    if(hits.length) rows.push({
      lesson:unit.startLesson,
      id:unit.id,
      sourceTerm:term.term,
      title:unit.title,
      hits,
    });
  }
}

console.log(JSON.stringify({
  grade9Lessons:bundle.terms.flatMap(t=>t.units).filter(u=>u.type==="lesson").length,
  lessonsWithZimbabweResidue:rows.length,
  rows,
},null,2));
