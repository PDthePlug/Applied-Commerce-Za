import { zimbabweTargetTerms } from "./zimbabwe";

export type ZimbabweDeliveryModeId = "school-periods" | "weekly-workshop" | "intensive-programme";

export type ZimbabweDeliveryMode = {
  id: ZimbabweDeliveryModeId;
  label: string;
  rhythm: string;
  bestFor: string;
  guidance: string;
};

export type ZimbabweTermDeliveryPlan = {
  form: 1 | 2 | 3 | 4;
  term: 1 | 2 | 3;
  title: string;
  sourceLessonUnits: number;
  recommendedSequences: number;
  sequenceSize: string;
  phases: Array<{
    id: "orient" | "build" | "apply" | "evidence";
    label: string;
    share: number;
    purpose: string;
  }>;
  projectFocus: string;
  learnerEvidence: string[];
};

export const zimbabweDeliveryModes: ZimbabweDeliveryMode[] = [
  {
    id:"school-periods",
    label:"School-period model",
    rhythm:"Two shorter periods per week, with selected independent evidence tasks between periods.",
    bestFor:"Schools placing Applied Commerce inside the ordinary timetable.",
    guidance:"Combine tightly related source lesson units into one teaching sequence. Use class time for explanation, discussion, modelling and feedback; move observation, tracking, interviews and portfolio completion into guided independent work where appropriate.",
  },
  {
    id:"weekly-workshop",
    label:"Weekly workshop model",
    rhythm:"One longer facilitated block per week, supported by structured learner tasks between sessions.",
    bestFor:"Independent schools, enrichment timetables and facilitated programme delivery.",
    guidance:"Treat each facilitated block as a learning sequence rather than a single source lesson. End every block with one explicit action or evidence task that carries learning into the learner's home, school or community context.",
  },
  {
    id:"intensive-programme",
    label:"Intensive programme model",
    rhythm:"Longer workshop sessions delivered in concentrated cycles, with project work continuing between sessions.",
    bestFor:"Sponsored cohorts, holiday programmes, youth-development programmes and pilots outside the normal subject timetable.",
    guidance:"Protect project observation and reflection time even when facilitation is compressed. Do not collapse a multi-day habit, research or community project into one workshop simply to fit the calendar.",
  },
];

const LESSON_COUNTS:Record<string,number> = {
  "1-1":26,"1-2":26,"1-3":27,
  "2-1":34,"2-2":20,"2-3":21,
  "3-1":36,"3-2":40,"3-3":40,
  "4-1":40,"4-2":40,"4-3":32,
};

function sequenceCount(sourceUnits:number){
  if(sourceUnits<=21) return 6;
  if(sourceUnits<=27) return 7;
  if(sourceUnits<=34) return 8;
  return 9;
}

function sequenceSize(sourceUnits:number,sequences:number){
  const low=Math.max(2,Math.floor(sourceUnits/sequences));
  const high=Math.max(low,Math.ceil(sourceUnits/sequences));
  return low===high ? `about ${low} source lesson units per sequence` : `about ${low}–${high} source lesson units per sequence`;
}

export const zimbabweTermDeliveryPlans: ZimbabweTermDeliveryPlan[] = zimbabweTargetTerms.map(term=>{
  const sourceLessonUnits=LESSON_COUNTS[`${term.form}-${term.term}`];
  const recommendedSequences=sequenceCount(sourceLessonUnits);
  return {
    form:term.form,
    term:term.term,
    title:term.title,
    sourceLessonUnits,
    recommendedSequences,
    sequenceSize:sequenceSize(sourceLessonUnits,recommendedSequences),
    phases:[
      {
        id:"orient",
        label:"Orient & connect",
        share:15,
        purpose:"Activate prior evidence, establish the term question and connect the learning to the learner's Zimbabwean context.",
      },
      {
        id:"build",
        label:"Build capability",
        share:35,
        purpose:"Teach and practise the core concepts, tools, calculations, behaviours and decision frameworks.",
      },
      {
        id:"apply",
        label:"Apply in context",
        share:35,
        purpose:"Use observation, experiments, interviews, tracking or projects to test the learning in real life.",
      },
      {
        id:"evidence",
        label:"Evidence & reflect",
        share:15,
        purpose:"Complete the portfolio artefact, presentation or applied assessment and identify what carries forward.",
      },
    ],
    projectFocus:term.projectFocus,
    learnerEvidence:term.learnerEvidence,
  };
});

export function zimbabweDeliveryPlan(form:number,term:number){
  return zimbabweTermDeliveryPlans.find(item=>item.form===form&&item.term===term) ?? null;
}
