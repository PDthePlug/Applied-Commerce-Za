import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function loadGrade(grade){
  const meta=index.grades.find(item=>item.grade===grade);
  if(!meta) throw new Error(`Grade ${grade} metadata missing.`);
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
    ].sort((a,b)=>{
      const lesson=(a.startLesson??999)-(b.startLesson??999);
      return lesson || (a.position??0)-(b.position??0);
    });
  }
  return bundle;
}

function placement(sourceGrade,sourceTerm,startLesson,type="lesson"){
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
  throw new Error(`Unsupported source grade ${sourceGrade}`);
}

const forms=new Map([1,2,3,4].map(form=>[form,new Map([1,2,3].map(term=>[term,[]]))]));
const allIds=[];
for(const gradeNumber of [8,9,10,11,12]){
  const grade=loadGrade(gradeNumber);
  for(const sourceTerm of grade.terms){
    for(const unit of sourceTerm.units){
      if(unit.type!=="lesson") continue;
      const p=placement(gradeNumber,sourceTerm.term,unit.startLesson,unit.type);
      forms.get(p.form).get(p.term).push({
        id:unit.id,
        sourceGrade:gradeNumber,
        sourceTerm:sourceTerm.term,
        lesson:unit.startLesson,
        title:unit.title,
      });
      allIds.push(unit.id);
    }
  }
}

const expected={
  1:[26,26,27],
  2:[34,20,21],
  3:[36,40,40],
  4:[40,40,32],
};
const failures=[];
const summary={};

if(allIds.length!==382) failures.push(`Expected 382 lessons, found ${allIds.length}`);
if(new Set(allIds).size!==allIds.length) failures.push("A source lesson ID is assigned more than once before placement.");

for(const [form,terms] of forms){
  summary[form]=[];
  for(const [term,units] of terms){
    const expectedCount=expected[form][term-1];
    summary[form].push({
      term,
      count:units.length,
      first:units[0]??null,
      last:units.at(-1)??null,
    });
    if(units.length!==expectedCount){
      failures.push(`Form ${form} Term ${term}: expected ${expectedCount} lessons, found ${units.length}`);
    }
    const ids=units.map(unit=>unit.id);
    if(new Set(ids).size!==ids.length) failures.push(`Form ${form} Term ${term} contains duplicate lesson IDs`);
  }
}

const assigned=[...forms.values()].flatMap(terms=>[...terms.values()]).flat();
if(assigned.length!==382) failures.push(`Placement assigned ${assigned.length} lessons instead of 382`);
if(new Set(assigned.map(unit=>unit.id)).size!==382) failures.push("Zimbabwe placement does not produce 382 unique lesson IDs.");

function assertBoundary(label,condition){
  if(!condition) failures.push(label);
}
const f1t1=forms.get(1).get(1), f1t2=forms.get(1).get(2), f1t3=forms.get(1).get(3);
assertBoundary("Form 1 Term 1 must end at Lesson 26",f1t1.at(-1)?.lesson===26);
assertBoundary("Form 1 Term 2 must begin at Lesson 27",f1t2[0]?.lesson===27);
assertBoundary("Form 1 Term 2 must end at Lesson 53",f1t2.at(-1)?.lesson===53);
assertBoundary("Form 1 Term 3 must begin at Lesson 54",f1t3[0]?.lesson===54);

const f2t1=forms.get(2).get(1), f2t2=forms.get(2).get(2), f2t3=forms.get(2).get(3);
assertBoundary("Form 2 Term 1 must end at restored Lesson 34",f2t1.at(-1)?.lesson===34);
assertBoundary("Form 2 Term 2 must begin at Lesson 35",f2t2[0]?.lesson===35);
assertBoundary("Form 2 Term 2 must end at Lesson 54",f2t2.at(-1)?.lesson===54);
assertBoundary("Form 2 Term 3 must begin at Lesson 55",f2t3[0]?.lesson===55);

const f3t1=forms.get(3).get(1), f3t2=forms.get(3).get(2), f3t3=forms.get(3).get(3);
assertBoundary("Form 3 Term 1 must contain only Grade 10 Terms 1–2",f3t1.every(u=>u.sourceGrade===10&&u.sourceTerm<=2));
assertBoundary("Form 3 Term 2 must contain only Grade 10 Terms 3–4",f3t2.every(u=>u.sourceGrade===10&&u.sourceTerm>=3));
assertBoundary("Form 3 Term 3 must contain only Grade 11 Terms 1–2",f3t3.every(u=>u.sourceGrade===11&&u.sourceTerm<=2));

const f4t1=forms.get(4).get(1), f4t2=forms.get(4).get(2), f4t3=forms.get(4).get(3);
assertBoundary("Form 4 Term 1 must contain only Grade 11 Terms 3–4",f4t1.every(u=>u.sourceGrade===11&&u.sourceTerm>=3));
assertBoundary("Form 4 Term 2 must contain only Grade 12 Terms 1–2",f4t2.every(u=>u.sourceGrade===12&&u.sourceTerm<=2));
assertBoundary("Form 4 Term 3 must contain only Grade 12 Terms 3–4",f4t3.every(u=>u.sourceGrade===12&&u.sourceTerm>=3));

console.log(JSON.stringify({summary,failures},null,2));
if(failures.length) process.exit(1);
