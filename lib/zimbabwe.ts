export const zimbabweEdition = {
  productName: "Applied Commerce Zimbabwe",
  editionLabel: "Zimbabwe Edition",
  curriculumReference: "Heritage-Based Curriculum 2024–2030",
  schoolSpan: "Forms 1–4 · O-Level pathway",
  schoolTerms: 3,
  launchYear: "Form 4",
  alignmentNotice:
    "Designed to support Heritage-Based Curriculum competencies and project-based learning. This does not imply Ministry approval, ZIMSEC endorsement or prescribed-textbook status.",
} as const;

export type ZimbabweStage = {
  sourceGrade: number;
  stage: string;
  schoolPlacement: string;
  shortPlacement: string;
  theme: string;
};

export const zimbabweStages: Record<number, ZimbabweStage> = {
  8: {
    sourceGrade: 8,
    stage: "Form 1 source",
    schoolPlacement: "Form 1",
    shortPlacement: "F1",
    theme: "Mindset & Financial Philosophy",
  },
  9: {
    sourceGrade: 9,
    stage: "Form 2 source",
    schoolPlacement: "Form 2",
    shortPlacement: "F2",
    theme: "Work, Value & Enterprise",
  },
  10: {
    sourceGrade: 10,
    stage: "Form 3 core",
    schoolPlacement: "Form 3",
    shortPlacement: "F3",
    theme: "Building Lasting Value",
  },
  11: {
    sourceGrade: 11,
    stage: "Forms 3–4 bridge",
    schoolPlacement: "Forms 3–4",
    shortPlacement: "F3–4",
    theme: "Leverage, Leadership, Wealth & Legacy",
  },
  12: {
    sourceGrade: 12,
    stage: "Form 4 launch",
    schoolPlacement: "Form 4",
    shortPlacement: "F4",
    theme: "The Launch Year",
  },
};

export type ZimbabweFormPlan = {
  form: 1 | 2 | 3 | 4;
  title: string;
  purpose: string;
  sourceCycles: Array<{grade:number; terms:number[]}>;
  targetTerms: 3;
  sourceLessonCount: number;
};

export type HbcCompetencyId =
  | "problem-solving"
  | "critical-thinking"
  | "leadership"
  | "communication-teamwork"
  | "research"
  | "innovation"
  | "technological-skills"
  | "entrepreneurship"
  | "business-financial-literacy"
  | "self-management"
  | "planning-organising";

export const hbcCompetencyLabels: Record<HbcCompetencyId,string> = {
  "problem-solving": "Problem solving",
  "critical-thinking": "Critical thinking",
  "leadership": "Leadership",
  "communication-teamwork": "Communication & teamwork",
  "research": "Research",
  "innovation": "Innovation",
  "technological-skills": "Technological skills",
  "entrepreneurship": "Entrepreneurship",
  "business-financial-literacy": "Business & financial literacy",
  "self-management": "Self-management",
  "planning-organising": "Planning & organising",
};

export type ZimbabweTargetTerm = {
  form: 1 | 2 | 3 | 4;
  term: 1 | 2 | 3;
  title: string;
  source: string[];
  competencies: HbcCompetencyId[];
  projectFocus: string;
};

export const zimbabweTargetTerms: ZimbabweTargetTerm[] = [
  {
    form:1,term:1,title:"Identity, Beliefs, Saving & First Income",
    source:["Grade 8 lessons 1–26"],
    competencies:["business-financial-literacy","critical-thinking","self-management"],
    projectFocus:"Personal money foundations portfolio",
  },
  {
    form:1,term:2,title:"Earning, Spending, Budgeting & Habit Formation",
    source:["Grade 8 lessons 27–53"],
    competencies:["business-financial-literacy","entrepreneurship","planning-organising","problem-solving"],
    projectFocus:"Budget and habit evidence",
  },
  {
    form:1,term:3,title:"Financial Identity, Agency & First Capstone",
    source:["Grade 8 lessons 54–80"],
    competencies:["self-management","planning-organising","problem-solving","communication-teamwork"],
    projectFocus:"First Applied Commerce capstone",
  },

  {
    form:2,term:1,title:"Work, Value & How Money Moves",
    source:["Grade 9 lessons 1–34"],
    competencies:["entrepreneurship","business-financial-literacy","research","critical-thinking"],
    projectFocus:"Enterprise portfolio and completed Community Money Map",
  },
  {
    form:2,term:2,title:"Habits, Agency & Execution",
    source:["Grade 9 lessons 35–54"],
    competencies:["problem-solving","self-management","planning-organising","technological-skills"],
    projectFocus:"Full 21-day Habit Transformation project",
  },
  {
    form:2,term:3,title:"Community Enterprise & Portfolio",
    source:["Grade 9 lessons 55–75"],
    competencies:["entrepreneurship","research","communication-teamwork","leadership","problem-solving"],
    projectFocus:"Community enterprise project",
  },

  {
    form:3,term:1,title:"Income, Saving, Investing & Assets",
    source:["Grade 10 Terms 1–2"],
    competencies:["business-financial-literacy","critical-thinking","entrepreneurship","planning-organising"],
    projectFocus:"Value-creation and investment plans",
  },
  {
    form:3,term:2,title:"Systems, Tax & Financial Independence",
    source:["Grade 10 Terms 3–4"],
    competencies:["business-financial-literacy","critical-thinking","problem-solving","planning-organising"],
    projectFocus:"Financial system and financial-independence plan",
  },
  {
    form:3,term:3,title:"Leverage, Leadership & Responsibility",
    source:["Grade 11 Terms 1–2"],
    competencies:["leadership","communication-teamwork","self-management","planning-organising","problem-solving"],
    projectFocus:"Leverage plan and leadership philosophy",
  },

  {
    form:4,term:1,title:"Advanced Wealth, Growth & Legacy",
    source:["Grade 11 Terms 3–4"],
    competencies:["business-financial-literacy","critical-thinking","leadership","planning-organising"],
    projectFocus:"10-year wealth plan and life-and-legacy plan",
  },
  {
    form:4,term:2,title:"Adult Money, Contracts, Work & Career Launch",
    source:["Grade 12 Terms 1–2"],
    competencies:["communication-teamwork","entrepreneurship","self-management","planning-organising","technological-skills"],
    projectFocus:"Post-O-Level transition and career-launch plans",
  },
  {
    form:4,term:3,title:"Risk, Protection, Integration & Life Launch",
    source:["Grade 12 Terms 3–4"],
    competencies:["problem-solving","business-financial-literacy","self-management","planning-organising","leadership"],
    projectFocus:"Risk-and-protection plan and final Life Launch Plan",
  },
];

export const zimbabweOLevelPlan: ZimbabweFormPlan[] = [
  {
    form: 1,
    title: "Identity, Money & Habits",
    purpose: "Build financial self-awareness, resource discipline, budgeting habits and the learner evidence routine.",
    sourceCycles: [{grade:8,terms:[1,2,3,4]}],
    targetTerms: 3,
    sourceLessonCount: 79,
  },
  {
    form: 2,
    title: "Work, Value & Enterprise",
    purpose: "Move from personal finance into work, value chains, enterprise, habits, community problems and applied projects.",
    sourceCycles: [{grade:9,terms:[1,2,3,4]}],
    targetTerms: 3,
    sourceLessonCount: 75,
  },
  {
    form: 3,
    title: "Assets, Systems, Leverage & Leadership",
    purpose: "Build the systems-thinking and leverage layer before the final school year.",
    sourceCycles: [
      {grade:10,terms:[1,2,3,4]},
      {grade:11,terms:[1,2]},
    ],
    targetTerms: 3,
    sourceLessonCount: 116,
  },
  {
    form: 4,
    title: "Wealth, Adult Systems & Life Launch",
    purpose: "Use the final O-Level year to integrate advanced wealth, legacy, adult financial systems, work, risk and the Life Launch Plan.",
    sourceCycles: [
      {grade:11,terms:[3,4]},
      {grade:12,terms:[1,2,3,4]},
    ],
    targetTerms: 3,
    sourceLessonCount: 112,
  },
];

export function zimbabweStage(sourceGrade: number): ZimbabweStage {
  return zimbabweStages[sourceGrade] ?? {
    sourceGrade,
    stage: `Source stage ${sourceGrade}`,
    schoolPlacement: "O-Level pathway",
    shortPlacement: "O-Level",
    theme: "Applied Commerce",
  };
}

export function schoolStageLabel(sourceGrade: number) {
  const stage = zimbabweStage(sourceGrade);
  return `${stage.stage} · ${stage.schoolPlacement}`;
}
