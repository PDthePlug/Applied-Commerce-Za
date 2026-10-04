import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import ts from "typescript";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function loadGrade(grade){
  const meta=index.grades.find(item=>item.grade===grade);
  const bundle=inflate(Array.from({length:meta.bundleParts},(_,i)=>
    fs.readFileSync(path.join(root,`grade-${grade}.part-${i+1}.b64`),"utf8").trim()
  ).join(""));
  for(const patchMeta of meta.patches??[]){
    const patch=inflate(patchMeta.parts.map(part=>
      fs.readFileSync(path.join(root,part),"utf8").trim()
    ).join(""));
    const target=bundle.terms.find(term=>term.term===patch.term);
    const patchedNumbers=new Set(patch.units.filter(u=>u.type==="lesson").map(u=>u.startLesson));
    target.units=[
      ...target.units.filter(u=>!(u.type==="lesson"&&patchedNumbers.has(u.startLesson))),
      ...patch.units,
    ].sort((a,b)=>(a.startLesson??999)-(b.startLesson??999));
  }
  return bundle;
}

function placement(sourceGrade,sourceTerm,startLesson,type){
  if(sourceGrade===8){
    const term=startLesson!=null?(startLesson<=26?1:startLesson<=53?2:3):(sourceTerm<=1?1:sourceTerm===2?2:3);
    return {form:1,term};
  }
  if(sourceGrade===9){
    let term;
    if(type==="assessment") term=sourceTerm===1?1:sourceTerm===3?2:3;
    else term=startLesson!=null?(startLesson<=34?1:startLesson<=54?2:3):(sourceTerm===1?1:sourceTerm<=3?2:3);
    return {form:2,term};
  }
  if(sourceGrade===10) return {form:3,term:sourceTerm<=2?1:2};
  if(sourceGrade===11) return sourceTerm<=2?{form:3,term:3}:{form:4,term:1};
  if(sourceGrade===12) return {form:4,term:sourceTerm<=2?2:3};
  throw new Error("unsupported source grade");
}

const overlaySource=fs.readFileSync("lib/zimbabwe-content.ts","utf8");
let overlayJs=ts.transpileModule(overlaySource,{
  compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}
}).outputText.replace(/^export\s+/gm,"");
const overlayApi=new Function(`${overlayJs}\nreturn {applyZimbabweUnitOverlay};`)();

const rules=[
  ["source-grade",/\bGrade\s+(?:8|9|10|11|12)\b/i],
  ["source-term-4",/\bTerm\s+4\b/i],
  ["rand",/\b(?:R\s?\d[\d,.]*|rand|rands)\b/i],
  ["south-africa",/\bSouth Africa(?:n)?\b|\bSARS\b/i],
  ["taxi-rank",/\btaxi rank\b|\btaxi driver\b|\btaxis\b/i],
  ["spaza",/\bspaza\b/i],
  ["stokvel",/\bstokvels?\b/i],
  ["sa-place",/\b(?:Johannesburg|Soweto|Tembisa|Cape Town|Durban|Umlazi|Pretoria|Atteridgeville|Limpopo|Katlehong|Alexandra)\b/i],
];

const blockText=block=>block.kind==="text"?block.text:block.kind==="table"?block.rows.flat().join(" | "):"";
const rows=[];
const counts={};
for(const gradeNumber of [8,9,10,11,12]){
  const grade=loadGrade(gradeNumber);
  for(const sourceTerm of grade.terms){
    for(const sourceUnit of sourceTerm.units){
      if(sourceUnit.type!=="assessment") continue;
      const p=placement(gradeNumber,sourceTerm.term,sourceUnit.startLesson,sourceUnit.type);
      const unit=overlayApi.applyZimbabweUnitOverlay(sourceUnit);
      const key=`F${p.form}T${p.term}`;
      counts[key]=(counts[key]??0)+1;
      const examples=[];
      const combined=[unit.label,unit.title,...unit.blocks.map(blockText)].join("\n");
      const hits=rules.filter(([,re])=>re.test(combined)).map(([name])=>name);
      unit.blocks.forEach((block,index)=>{
        const text=blockText(block);
        const blockHits=rules.filter(([,re])=>re.test(text)).map(([name])=>name);
        if(blockHits.length) examples.push({
          block:index,
          kind:block.kind,
          hits:blockHits,
          text:text.length>1000?text.slice(0,1000)+"…":text,
        });
      });
      rows.push({
        sourceGrade:gradeNumber,
        sourceTerm:sourceTerm.term,
        id:unit.id,
        sourceLabel:sourceUnit.label,
        renderedLabel:unit.label,
        renderedTitle:unit.title,
        placement:p,
        hits,
        examples,
      });
    }
  }
}

console.log(JSON.stringify({
  assessmentCount:rows.length,
  counts,
  renderedAssessmentsWithResidue:rows.filter(row=>row.hits.length).length,
  rows,
},null,2));
