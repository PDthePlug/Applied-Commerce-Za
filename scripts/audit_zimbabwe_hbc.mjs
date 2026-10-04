import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import ts from "typescript";

const root=path.resolve("public/curriculum");
const index=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
const inflate=encoded=>JSON.parse(zlib.gunzipSync(Buffer.from(encoded,"base64")).toString("utf8"));

function loadGrade(grade){
  const meta=index.grades.find(item=>item.grade===grade);
  if(!meta) throw new Error(`Grade ${grade} metadata not found.`);
  const bundle=inflate(Array.from({length:meta.bundleParts},(_,i)=>
    fs.readFileSync(path.join(root,`grade-${grade}.part-${i+1}.b64`),"utf8").trim()
  ).join(""));
  for(const patchMeta of meta.patches??[]){
    const patch=inflate(patchMeta.parts.map(part=>
      fs.readFileSync(path.join(root,part),"utf8").trim()
    ).join(""));
    const term=bundle.terms.find(item=>item.term===patch.term);
    const lessonNumbers=new Set(
      patch.units.filter(unit=>unit.type==="lesson").map(unit=>unit.startLesson)
    );
    term.units=[
      ...term.units.filter(unit=>!(unit.type==="lesson"&&lessonNumbers.has(unit.startLesson))),
      ...patch.units,
    ].sort((a,b)=>(a.startLesson??999)-(b.startLesson??999));
  }
  return bundle;
}

function transpile(file){
  const source=fs.readFileSync(file,"utf8");
  return ts.transpileModule(source,{
    compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}
  }).outputText.replace(/^export\s+/gm,"");
}

const hbcApi=new Function(
  `${transpile("lib/zimbabwe-hbc.ts")}\nreturn {hbcAlignmentForUnit};`
)();
const zimbabweApi=new Function(
  `${transpile("lib/zimbabwe.ts")}\nreturn {zimbabweTargetTerms,hbcCompetencyLabels};`
)();

function placement(grade,sourceTerm,startLesson,type){
  if(grade===8){
    const term=startLesson!=null?(startLesson<=26?1:startLesson<=53?2:3):(sourceTerm<=1?1:sourceTerm===2?2:3);
    return {form:1,term};
  }
  if(grade===9){
    let term;
    if(type==="assessment") term=sourceTerm===1?1:sourceTerm===3?2:3;
    else term=startLesson!=null?(startLesson<=34?1:startLesson<=54?2:3):(sourceTerm===1?1:sourceTerm<=3?2:3);
    return {form:2,term};
  }
  if(grade===10) return {form:3,term:sourceTerm<=2?1:2};
  if(grade===11) return sourceTerm<=2?{form:3,term:3}:{form:4,term:1};
  if(grade===12) return {form:4,term:sourceTerm<=2?2:3};
  throw new Error(`Unsupported source grade ${grade}`);
}

const failures=[];
const counts={lessons:0,assessments:0,community:0,heritage:0};
const competencyCounts={};
const evidenceCounts={};

for(const gradeNumber of [8,9,10,11,12]){
  const grade=loadGrade(gradeNumber);
  for(const sourceTerm of grade.terms){
    for(const unit of sourceTerm.units){
      if(unit.type!=="lesson"&&unit.type!=="assessment") continue;
      if(unit.type==="lesson") counts.lessons+=1; else counts.assessments+=1;

      const p=placement(gradeNumber,sourceTerm.term,unit.startLesson,unit.type);
      const architecture=zimbabweApi.zimbabweTargetTerms.find(item=>item.form===p.form&&item.term===p.term);
      if(!architecture){
        failures.push({id:unit.id,reason:"missing target-term architecture",placement:p});
        continue;
      }

      const alignment=hbcApi.hbcAlignmentForUnit(unit,p,architecture.competencies);
      if(!alignment.competencies.length) failures.push({id:unit.id,reason:"no competencies"});
      if(!alignment.evidenceMode) failures.push({id:unit.id,reason:"no evidence mode"});
      if(!alignment.rationale.length) failures.push({id:unit.id,reason:"no rationale"});

      if(alignment.communityApplication) counts.community+=1;
      if(alignment.heritageApplication) counts.heritage+=1;
      evidenceCounts[alignment.evidenceMode]=(evidenceCounts[alignment.evidenceMode]??0)+1;
      for(const competency of alignment.competencies){
        if(!zimbabweApi.hbcCompetencyLabels[competency]){
          failures.push({id:unit.id,reason:`unknown competency ${competency}`});
        }
        competencyCounts[competency]=(competencyCounts[competency]??0)+1;
      }
    }
  }
}

if(counts.lessons!==382){
  failures.push({reason:`expected 382 lessons, found ${counts.lessons}`});
}

for(const term of zimbabweApi.zimbabweTargetTerms){
  if(!term.competencies?.length) failures.push({reason:`Form ${term.form} Term ${term.term} has no competencies`});
  if(!term.projectFocus?.trim()) failures.push({reason:`Form ${term.form} Term ${term.term} has no project focus`});
}

console.log(JSON.stringify({
  counts,
  competencyCounts,
  evidenceCounts,
  failures,
},null,2));

if(failures.length) process.exit(1);
