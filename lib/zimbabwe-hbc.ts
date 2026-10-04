import type { UnitSummary } from "./types";
import type { HbcCompetencyId } from "./zimbabwe";

export type HbcAlignment = {
  competencies: HbcCompetencyId[];
  evidenceMode:
    | "reflection"
    | "practice"
    | "investigation"
    | "project"
    | "presentation"
    | "assessment";
  communityApplication: boolean;
  heritageApplication: boolean;
  rationale: string[];
};

type Placement = {form:1|2|3|4;term:1|2|3};

const KEYWORD_RULES:Array<{
  pattern:RegExp;
  competencies:HbcCompetencyId[];
  rationale:string;
}> = [
  {
    pattern:/budget|money|saving|income|profit|cost|price|pricing|asset|invest|tax|credit|debt|insurance|wealth|financial|retirement|payslip|cash flow|cashflow/i,
    competencies:["business-financial-literacy","critical-thinking"],
    rationale:"Uses financial concepts, calculations or financial-system decisions.",
  },
  {
    pattern:/enterprise|business|customer|market|value creation|value-creation|sale|selling|entrepreneur|brand|competition|cooperative|supply chain|value chain/i,
    competencies:["entrepreneurship","business-financial-literacy"],
    rationale:"Applies enterprise thinking to value creation, customers or markets.",
  },
  {
    pattern:/problem|decision|risk|failure|resilien|obstacle|trade-off|tradeoff|scenario|challenge|protect|protection/i,
    competencies:["problem-solving","critical-thinking"],
    rationale:"Requires analysing a challenge, trade-off, risk or response.",
  },
  {
    pattern:/research|investigat|observe|observation|map|audit|interview|evidence|compare|review|reflection/i,
    competencies:["research","critical-thinking"],
    rationale:"Requires evidence gathering, inquiry, comparison or reflective analysis.",
  },
  {
    pattern:/plan|planning|goal|system|habit|tracker|time|routine|portfolio|launch|roadmap|strategy|strategic/i,
    competencies:["planning-organising","self-management"],
    rationale:"Requires planning, organisation, self-management or sustained execution.",
  },
  {
    pattern:/leader|leadership|team|partner|partnership|community|cooperat|stakeholder|mentor|network|legacy/i,
    competencies:["leadership","communication-teamwork"],
    rationale:"Works through people, relationships, teams or community responsibility.",
  },
  {
    pattern:/present|presentation|pitch|story|communicat|letter|explain|teach|workshop/i,
    competencies:["communication-teamwork"],
    rationale:"Requires communicating an idea, result, case or reflection to others.",
  },
  {
    pattern:/digital|online|technology|app|platform|cyber|scam|phishing|data/i,
    competencies:["technological-skills","critical-thinking"],
    rationale:"Applies technology or digital judgement in an economic context.",
  },
  {
    pattern:/design|create|prototype|innovation|idea|build|solution|experiment|test/i,
    competencies:["innovation","problem-solving"],
    rationale:"Requires designing, creating, testing or improving a solution.",
  },
];

const PROJECT_PATTERN=/project|capstone|portfolio|plan|workshop|presentation|community money map|habit transformation|life launch/i;
const COMMUNITY_PATTERN=/community|mukando|kombi|tuckshop|market|neighbour|elder|cooperative|household|family|local|heritage|legacy/i;
const HERITAGE_PATTERN=/mukando|community|family|household|local|heritage|legacy|cooperative|traditional|intergenerational/i;

function unique<T>(items:T[]):T[]{
  return [...new Set(items)];
}

function evidenceMode(unit:UnitSummary):HbcAlignment["evidenceMode"]{
  if(unit.type==="assessment") return "assessment";
  const text=`${unit.label} ${unit.title}`;
  if(/presentation|pitch/i.test(text)) return "presentation";
  if(/project|capstone|life launch|portfolio/i.test(text)) return "project";
  if(/research|investigat|map|audit|interview|observe/i.test(text)) return "investigation";
  if(/reflection|review|letter/i.test(text)) return "reflection";
  return "practice";
}

export function hbcAlignmentForUnit(
  unit:UnitSummary,
  placement:Placement,
  termCompetencies:HbcCompetencyId[],
):HbcAlignment{
  const text=`${unit.label} ${unit.title}`;
  const competencies=[...termCompetencies];
  const rationale:string[]=[
    `Supports the declared Form ${placement.form} Term ${placement.term} HBC competency focus.`,
  ];

  for(const rule of KEYWORD_RULES){
    if(!rule.pattern.test(text)) continue;
    competencies.push(...rule.competencies);
    rationale.push(rule.rationale);
  }

  if(unit.type==="assessment"){
    competencies.push("research","communication-teamwork","planning-organising");
    rationale.push("Assessment evidence requires learners to organise, communicate and substantiate what they have learned.");
  }

  const mode=evidenceMode(unit);
  if(mode==="project" || PROJECT_PATTERN.test(text)){
    competencies.push("problem-solving","planning-organising");
    rationale.push("Project work produces applied evidence rather than recall-only evidence.");
  }

  return {
    competencies:unique(competencies),
    evidenceMode:mode,
    communityApplication:COMMUNITY_PATTERN.test(text),
    heritageApplication:HERITAGE_PATTERN.test(text),
    rationale:unique(rationale),
  };
}
