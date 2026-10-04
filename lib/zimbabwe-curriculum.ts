import { curriculum } from "./curriculum";
import type { UnitSummary } from "./types";
import { zimbabweOLevelPlan, zimbabweTargetTerms } from "./zimbabwe";
import type { HbcCompetencyId } from "./zimbabwe";
import { hbcAlignmentForUnit } from "./zimbabwe-hbc";
import type { HbcAlignment } from "./zimbabwe-hbc";
import { applyZimbabweSummaryOverlay } from "./zimbabwe-content";

export type ZimbabwePlacement = {
  form: 1 | 2 | 3 | 4;
  term: 1 | 2 | 3;
};

export type ZimbabweUnitRef = UnitSummary & {
  sourceGrade: number;
  sourceTerm: number;
  href: string;
  hbc: HbcAlignment;
};

export type ZimbabweDeliveryTerm = {
  term: 1 | 2 | 3;
  title: string;
  units: ZimbabweUnitRef[];
  assessmentCount: number;
  competencies: HbcCompetencyId[];
  projectFocus: string;
  applicationContext: string;
  learnerEvidence: string[];
};

export type ZimbabweFormIndex = {
  form: 1 | 2 | 3 | 4;
  title: string;
  purpose: string;
  unitCount: number;
  terms: ZimbabweDeliveryTerm[];
};

function asForm(value:number):1|2|3|4 {
  if(value===1||value===2||value===3||value===4) return value;
  throw new Error(`Unsupported Zimbabwe form: ${value}`);
}

function asTerm(value:number):1|2|3 {
  if(value===1||value===2||value===3) return value;
  throw new Error(`Unsupported Zimbabwe term: ${value}`);
}

export function zimbabwePlacementForSource(
  sourceGrade:number,
  sourceTerm:number,
  startLesson?:number,
  type:"lesson"|"assessment"="lesson",
):ZimbabwePlacement {
  if(sourceGrade===8){
    const term=startLesson!=null
      ? (startLesson<=26?1:startLesson<=53?2:3)
      : (sourceTerm<=1?1:sourceTerm===2?2:3);
    return {form:1,term:asTerm(term)};
  }

  if(sourceGrade===9){
    let term:number;
    if(type==="assessment"){
      term=sourceTerm===1?1:sourceTerm===3?2:3;
    }else{
      term=startLesson!=null
        ? (startLesson<=34?1:startLesson<=54?2:3)
        : (sourceTerm===1?1:sourceTerm<=3?2:3);
    }
    return {form:2,term:asTerm(term)};
  }

  if(sourceGrade===10){
    return {form:3,term:sourceTerm<=2?1:2};
  }

  if(sourceGrade===11){
    return sourceTerm<=2
      ? {form:3,term:3}
      : {form:4,term:1};
  }

  if(sourceGrade===12){
    return {form:4,term:sourceTerm<=2?2:3};
  }

  throw new Error(`Source Grade ${sourceGrade} is outside the Zimbabwe O-Level source map.`);
}

export function defaultZimbabweFormForSourceGrade(sourceGrade?:number):1|2|3|4 {
  if(sourceGrade===9) return 2;
  if(sourceGrade===10||sourceGrade===11) return 3;
  if(sourceGrade===12) return 4;
  return 1;
}

function sourceGradesForForm(form:1|2|3|4){
  if(form===1) return [8];
  if(form===2) return [9];
  if(form===3) return [10,11];
  return [11,12];
}

export const zimbabweCurriculum = {
  form: async(formValue:number):Promise<ZimbabweFormIndex>=>{
    const form=asForm(formValue);
    const plan=zimbabweOLevelPlan.find(item=>item.form===form);
    if(!plan) throw new Error(`Form ${form} is not configured.`);

    const sourceGrades=sourceGradesForForm(form);
    const grades=await Promise.all(sourceGrades.map(grade=>curriculum.grade(grade)));
    const makeTerm=(term:1|2|3):ZimbabweDeliveryTerm=>{
      const architecture=zimbabweTargetTerms.find(item=>item.form===form&&item.term===term);
      return {
        term,
        title:architecture?.title ?? `Term ${term}`,
        units:[],
        assessmentCount:0,
        competencies:architecture?.competencies ?? [],
        projectFocus:architecture?.projectFocus ?? "",
        applicationContext:architecture?.applicationContext ?? "",
        learnerEvidence:architecture?.learnerEvidence ?? [],
      };
    };
    const terms:[ZimbabweDeliveryTerm,ZimbabweDeliveryTerm,ZimbabweDeliveryTerm]=[
      makeTerm(1),
      makeTerm(2),
      makeTerm(3),
    ];

    for(const grade of grades){
      for(const sourceTerm of grade.terms){
        for(const unit of sourceTerm.units){
          const placement=zimbabwePlacementForSource(grade.grade,sourceTerm.term,unit.startLesson,unit.type);
          if(placement.form!==form) continue;
          const overlaid=applyZimbabweSummaryOverlay({
            ...unit,
            sourceGrade:grade.grade,
            sourceTerm:sourceTerm.term,
            href:`/learn/${grade.grade}/term/${sourceTerm.term}/${unit.id}`,
          });
          terms[placement.term-1].units.push({
            ...overlaid,
            hbc:hbcAlignmentForUnit(overlaid,placement,terms[placement.term-1].competencies),
          });
        }

        for(const assessment of sourceTerm.assessments){
          const placement=zimbabwePlacementForSource(grade.grade,sourceTerm.term,assessment.startLesson,assessment.type);
          if(placement.form!==form) continue;
          terms[placement.term-1].assessmentCount+=1;
          const overlaid=applyZimbabweSummaryOverlay({
            ...assessment,
            sourceGrade:grade.grade,
            sourceTerm:sourceTerm.term,
            href:`/learn/${grade.grade}/term/${sourceTerm.term}/${assessment.id}`,
          });
          terms[placement.term-1].units.push({
            ...overlaid,
            hbc:hbcAlignmentForUnit(overlaid,placement,terms[placement.term-1].competencies),
          });
        }
      }
    }

    return {
      form,
      title:plan.title,
      purpose:plan.purpose,
      unitCount:terms.reduce((sum,term)=>sum+term.units.filter(unit=>unit.type==="lesson").length,0),
      terms,
    };
  },

  allForms: async()=>Promise.all([1,2,3,4].map(form=>zimbabweCurriculum.form(form))),
};
