export const zimbabweEdition = {
  productName: "Applied Commerce Zimbabwe",
  editionLabel: "Zimbabwe Edition",
  curriculumReference: "Heritage-Based Curriculum 2024–2030",
  schoolSpan: "Forms 1–6",
  schoolTerms: 3,
  alignmentNotice:
    "Designed to support Heritage-Based Curriculum competencies and project-based learning. This does not imply Ministry approval or prescribed-textbook status.",
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
    stage: "Stage 1",
    schoolPlacement: "Form 1",
    shortPlacement: "F1",
    theme: "Mindset & Financial Philosophy",
  },
  9: {
    sourceGrade: 9,
    stage: "Stage 2",
    schoolPlacement: "Form 2",
    shortPlacement: "F2",
    theme: "Work, Value & Enterprise",
  },
  10: {
    sourceGrade: 10,
    stage: "Stage 3",
    schoolPlacement: "Form 3",
    shortPlacement: "F3",
    theme: "Building Lasting Value",
  },
  11: {
    sourceGrade: 11,
    stage: "Stage 4",
    schoolPlacement: "Forms 4–5 bridge",
    shortPlacement: "F4–5",
    theme: "The Leverage Year",
  },
  12: {
    sourceGrade: 12,
    stage: "Stage 5",
    schoolPlacement: "Form 6",
    shortPlacement: "F6",
    theme: "The Launch Year",
  },
};

export function zimbabweStage(sourceGrade: number): ZimbabweStage {
  return zimbabweStages[sourceGrade] ?? {
    sourceGrade,
    stage: `Stage ${sourceGrade}`,
    schoolPlacement: `Form pathway`,
    shortPlacement: "Form",
    theme: "Applied Commerce",
  };
}

export function schoolStageLabel(sourceGrade: number) {
  const stage = zimbabweStage(sourceGrade);
  return `${stage.stage} · ${stage.schoolPlacement}`;
}
