import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function load(grade){
  const meta=index.grades.find(item=>item.grade===grade);
  if(!meta) throw new Error(`Grade ${grade} metadata not found`);
  const encoded=Array.from({length:meta.bundleParts},(_,i)=>
    fs.readFileSync(path.join(root,`grade-${grade}.part-${i+1}.b64`),"utf8").trim()
  ).join("");
  return inflate(encoded);
}

for(const grade of [11,12]){
  const bundle=load(grade);
  const terms=grade===11?[3,4]:[1,2,3,4];
  console.log(`GRADE ${grade}`);
  for(const termNo of terms){
    const term=bundle.terms.find(item=>item.term===termNo);
    if(!term) throw new Error(`Grade ${grade} term ${termNo} missing`);
    const lessons=term.units.filter(u=>u.type==="lesson");
    console.log(`TERM ${termNo} — ${lessons.length} compiled lesson units`);
    for(const unit of lessons){
      console.log(JSON.stringify({
        id:unit.id,
        startLesson:unit.startLesson,
        endLesson:unit.endLesson,
        title:unit.title,
      }));
    }
  }
}
