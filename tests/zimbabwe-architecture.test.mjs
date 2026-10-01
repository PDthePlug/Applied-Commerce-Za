import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const meta=(grade)=>index.grades.find(item=>item.grade===grade);
const inflate=(encoded)=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function bundle(grade){
  const g=meta(grade);
  const encoded=Array.from({length:g.bundleParts},(_,i)=>
    fs.readFileSync(path.join(root,`grade-${grade}.part-${i+1}.b64`),"utf8").trim()
  ).join("");
  const result=inflate(encoded);

  for(const patchMeta of g.patches??[]){
    const patch=inflate(patchMeta.parts.map(part=>
      fs.readFileSync(path.join(root,part),"utf8").trim()
    ).join(""));
    const term=result.terms.find(item=>item.term===patch.term);
    const patchedNumbers=new Set(
      patch.units.filter(unit=>unit.type==="lesson"&&typeof unit.startLesson==="number").map(unit=>unit.startLesson)
    );
    term.units=[
      ...term.units.filter(unit=>!(unit.type==="lesson"&&typeof unit.startLesson==="number"&&patchedNumbers.has(unit.startLesson))),
      ...patch.units,
    ].sort((a,b)=>(a.startLesson??Number.MAX_SAFE_INTEGER)-(b.startLesson??Number.MAX_SAFE_INTEGER));
  }
  return result;
}

function placement(grade,sourceTerm,startLesson){
  if(grade===8) return [1,startLesson<=26?1:startLesson<=53?2:3];
  if(grade===9) return [2,startLesson<=25?1:startLesson<=50?2:3];
  if(grade===10) return [3,sourceTerm<=2?1:2];
  if(grade===11) return sourceTerm<=2?[3,3]:[4,1];
  if(grade===12) return [4,sourceTerm<=2?2:3];
  throw new Error(`Unsupported source grade ${grade}`);
}

function deliveryCounts(){
  const counts={
    1:[0,0,0],
    2:[0,0,0],
    3:[0,0,0],
    4:[0,0,0],
  };
  for(const grade of [8,9,10,11,12]){
    for(const term of bundle(grade).terms){
      for(const unit of term.units.filter(unit=>unit.type==="lesson")){
        const [form,targetTerm]=placement(grade,term.term,unit.startLesson);
        counts[form][targetTerm-1]+=1;
      }
    }
  }
  return counts;
}

test("Zimbabwe O-Level map uses four Forms and twelve delivery terms",()=>{
  const counts=deliveryCounts();
  assert.deepEqual(counts[1],[26,26,27]);
  assert.deepEqual(counts[2],[25,25,25]);
  assert.deepEqual(counts[3],[36,40,40]);
  assert.deepEqual(counts[4],[40,40,32]);
  assert.deepEqual(Object.values(counts).map(terms=>terms.reduce((sum,n)=>sum+n,0)),[79,75,116,112]);
  assert.equal(Object.values(counts).flat().reduce((sum,n)=>sum+n,0),382);
});

test("restored Grade 9 lessons 23-34 are all present in the Form 2 map",()=>{
  const term2=bundle(9).terms.find(term=>term.term===2);
  const restored=term2.units.filter(unit=>unit.type==="lesson"&&unit.startLesson>=23&&unit.startLesson<=34);
  assert.deepEqual(restored.map(unit=>unit.startLesson),Array.from({length:12},(_,i)=>23+i));

  const targetTerms=restored.map(unit=>placement(9,2,unit.startLesson)[1]);
  assert.deepEqual(targetTerms.slice(0,3),[1,1,1]);
  assert.deepEqual(targetTerms.slice(3),Array(9).fill(2));
});

test("Form 4 remains the launch year and A-Level is excluded from the core map",()=>{
  const config=fs.readFileSync("lib/zimbabwe.ts","utf8");
  assert.match(config,/launchYear:\s*"Form 4"/);
  assert.match(config,/Forms 1–4 · O-Level pathway/);
  assert.doesNotMatch(config,/Form 5 source|Form 6 source/);
});
