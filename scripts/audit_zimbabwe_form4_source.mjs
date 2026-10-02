import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function load(grade){
  const meta=index.grades.find(item=>item.grade===grade);
  if(!meta) throw new Error(`Grade ${grade} metadata missing`);
  return inflate(Array.from({length:meta.bundleParts},(_,i)=>
    fs.readFileSync(path.join(root,`grade-${grade}.part-${i+1}.b64`),"utf8").trim()
  ).join(""));
}

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
const rows=[];
let lessonCount=0;

for(const grade of [11,12]){
  const bundle=load(grade);
  const allowedTerms=grade===11?[3,4]:[1,2,3,4];
  for(const sourceTerm of bundle.terms.filter(term=>allowedTerms.includes(term.term))){
    for(const unit of sourceTerm.units.filter(unit=>unit.type==="lesson")){
      lessonCount+=1;
      const examples=[];
      const titleHits=rules.filter(([,re])=>re.test(unit.title)).map(([name])=>name);
      if(titleHits.length) examples.push({block:"title",kind:"title",hits:titleHits,text:unit.title});
      unit.blocks.forEach((block,index)=>{
        const value=blockText(block);
        const hits=rules.filter(([,re])=>re.test(value)).map(([name])=>name);
        if(hits.length) examples.push({
          block:index,kind:block.kind,hits,
          text:value.length>900?value.slice(0,900)+"…":value,
        });
      });
      const hits=[...new Set(examples.flatMap(example=>example.hits))];
      if(hits.length) rows.push({
        grade,sourceTerm:sourceTerm.term,lesson:unit.startLesson,endLesson:unit.endLesson,
        id:unit.id,title:unit.title,hits,examples:examples.slice(0,6),
      });
    }
  }
}

console.log(JSON.stringify({
  form4CompiledLessons:lessonCount,
  lessonsWithReviewFlags:rows.length,
  rows,
},null,2));
