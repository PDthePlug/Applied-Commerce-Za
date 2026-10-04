import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

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

function currentPlacement(sourceGrade,sourceTerm,startLesson,type){
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

const rows=[];
for(const gradeNumber of [8,9,10,11,12]){
  const grade=loadGrade(gradeNumber);
  for(const sourceTerm of grade.terms){
    for(const unit of sourceTerm.units){
      if(unit.type!=="assessment") continue;
      rows.push({
        sourceGrade:gradeNumber,
        sourceTerm:sourceTerm.term,
        id:unit.id,
        label:unit.label,
        title:unit.title,
        startLesson:unit.startLesson??null,
        endLesson:unit.endLesson??null,
        placement:currentPlacement(gradeNumber,sourceTerm.term,unit.startLesson,unit.type),
      });
    }
  }
}

const counts={};
for(const row of rows){
  const key=`F${row.placement.form}T${row.placement.term}`;
  counts[key]=(counts[key]??0)+1;
}

console.log(JSON.stringify({assessmentCount:rows.length,counts,rows},null,2));
