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
