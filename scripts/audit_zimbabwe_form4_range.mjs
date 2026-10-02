import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const TARGET_GRADE=Number(process.env.TARGET_GRADE??11);
const SOURCE_TERMS=(process.env.SOURCE_TERMS??"3,4")
  .split(",").map(Number).filter(Number.isFinite);

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const meta=index.grades.find(item=>item.grade===TARGET_GRADE);
if(!meta) throw new Error(`Grade ${TARGET_GRADE} metadata not found`);
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));
const bundle=inflate(Array.from({length:meta.bundleParts},(_,i)=>
  fs.readFileSync(path.join(root,`grade-${TARGET_GRADE}.part-${i+1}.b64`),"utf8").trim()
).join(""));

const rules=[
  ["rand",/\b(?:R\s?\d[\d,.]*|rand|rands)\b/i],
  ["south-africa",/\bSouth Africa(?:n)?\b/i],
  ["sars",/\bSARS\b|South African Revenue Service/i],
  ["nsfas",/\bNSFAS\b/i],
  ["matric",/\bmatric\b/i],
  ["source-grade",/\bGrade\s+(?:8|9|10|11|12)\b/i],
  ["taxi-rank",/\btaxi rank\b|\btaxi driver\b|\btaxis\b/i],
  ["spaza",/\bspaza\b/i],
  ["stokvel",/\bstokvels?\b/i],
  ["sa-place",/\b(?:Johannesburg|Soweto|Tembisa|Cape Town|Durban|Umlazi|Pretoria|Atteridgeville|Katlehong|Alexandra|Gauteng|Limpopo)\b/i],
  ["uif-sdl",/\b(?:UIF|SDL)\b|Unemployment Insurance Fund|Skills Development Levy/i],
  ["tfsa",/\bTFSA\b|tax[- ]free savings account/i],
  ["sa-retail-bond",/\bretail bonds?\b/i],
  ["jse",/\bJSE\b|Johannesburg Stock Exchange/i],
  ["sa-credit",/\bcredit score(?:s)?\b/i],
  ["sa-retirement",/\b(?:retirement annuit\w*|provident fund\w*|preservation fund\w*)/i],
  ["sa-education",/\b(?:National Senior Certificate|NSC|DBE|CAPS)\b/i],
];
const blockText=block=>block.kind==="text"?block.text:block.kind==="table"?block.rows.flat().join(" | "):"";
const lessons=[];
for(const term of bundle.terms.filter(term=>SOURCE_TERMS.includes(term.term))){
  for(const unit of term.units.filter(unit=>unit.type==="lesson")){
    const examples=[];
    unit.blocks.forEach((block,index)=>{
      const value=blockText(block);
      const hits=rules.filter(([,re])=>re.test(value)).map(([name])=>name);
      if(hits.length) examples.push({
        block:index,kind:block.kind,hits,
        text:value.length>1200?value.slice(0,1200)+"…":value,
      });
    });
    const titleHits=rules.filter(([,re])=>re.test(unit.title)).map(([name])=>name);
    if(titleHits.length) examples.unshift({block:"title",kind:"title",hits:titleHits,text:unit.title});
    lessons.push({
      sourceTerm:term.term,lesson:unit.startLesson,endLesson:unit.endLesson,
      id:unit.id,title:unit.title,
      hits:[...new Set(examples.flatMap(example=>example.hits))],
      examples,
    });
  }
}
console.log(JSON.stringify({
  grade:TARGET_GRADE,sourceTerms:SOURCE_TERMS,compiledUnits:lessons.length,
  unitsWithReviewFlags:lessons.filter(item=>item.hits.length).length,lessons,
},null,2));
