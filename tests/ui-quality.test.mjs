import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read=(path)=>fs.readFileSync(path,"utf8");

test("shared learner presentation system is wired into lessons",()=>{
  const blocks=read("components/content-blocks.tsx");
  const system=read("components/presentation-system.tsx");
  assert.match(blocks,/DeepeningInsightPanel/);
  assert.match(blocks,/LearningNotice/);
  assert.match(blocks,/PortfolioCaptureNotice/);
  assert.match(blocks,/ResponseSurface/);
  assert.match(system,/This work is added to your portfolio automatically/);
});

test("profile is part of the learner shell",()=>{
  const shell=read("components/app-shell.tsx");
  const profile=read("components/profile-dashboard.tsx");
  assert.match(shell,/href:"\/profile"/);
  assert.match(profile,/Your Applied Commerce Zimbabwe learning record/);
  assert.ok(fs.existsSync("app/profile/page.tsx"));
});

test("book-era platform language does not leak into product chrome",()=>{
  const files=[
    "components/home-dashboard.tsx",
    "components/learn-library.tsx",
    "components/grade-map.tsx",
    "components/grade-card.tsx",
    "components/portfolio-dashboard.tsx",
    "components/progress-dashboard.tsx",
    "components/lesson-reader.tsx",
  ].map(read).join("\n");
  assert.doesNotMatch(files,/learner books become/i);
  assert.doesNotMatch(files,/supplied learner books/i);
  assert.doesNotMatch(files,/lesson pages/i);
  assert.doesNotMatch(files,/detected in source/i);
  assert.doesNotMatch(files,/handbook marks work/i);
});

test("known screenshot regressions remain covered by interaction rules",()=>{
  const blocks=read("components/content-blocks.tsx");
  assert.match(blocks,/INTERROGATIVE_RE/);
  assert.match(blocks,/PART_HEADING_RE/);
  assert.match(blocks,/headerOnly/);
  assert.match(blocks,/Add another row/);
  assert.match(blocks,/block\.text\.includes\("☐"\)/);
  assert.match(blocks,/Captured/);
});

test("center menu keeps five learner destinations and accessible dialog behavior",()=>{
  const shell=read("components/app-shell.tsx");
  for(const href of ["/","/learn","/portfolio","/progress","/profile"]){
    assert.match(shell,new RegExp(`href:"${href.replaceAll("/","\\/")}"`));
  }
  assert.match(shell,/aria-haspopup="dialog"/);
  assert.match(shell,/event\.key!=="Tab"/);
});

test("home is a learner welcome dashboard, not a duplicated curriculum index",()=>{
  const home=read("components/home-dashboard.tsx");
  assert.match(home,/Good to see you/);
  assert.match(home,/Welcome to Applied Commerce/);
  assert.match(home,/Pick up where you left off/);
  assert.match(home,/View the full curriculum/);
  assert.doesNotMatch(home,/Choose where you are learning/);
  assert.doesNotMatch(home,/grade-section/);
  assert.doesNotMatch(home,/GradeCard/);
});

test("thinking equation notices do not promote ordinary narrative into banners",()=>{
  const blocks=read("components/content-blocks.tsx");
  const presentation=read("components/presentation-system.tsx");
  const compiler=read("scripts/compile_curriculum.py");
  assert.match(blocks,/isEquationMarker/);
  assert.match(blocks,/equation-reference/);
  assert.match(blocks,/ThinkingEquationNotice/);
  assert.match(presentation,/thinking-equation-notice/);
  assert.doesNotMatch(compiler,/'THINKING EQUATION' in u/);
  assert.match(compiler,/re\.fullmatch\(r'THINKING EQUATION'/);
});

test("home adopts BIS Today hierarchy without a giant enclosing hero card",()=>{
  const home=read("components/home-dashboard.tsx");
  assert.match(home,/home-today-hero/);
  assert.match(home,/Good to see you/);
  assert.match(home,/home-today-status/);
  assert.match(home,/home-dashboard-grid/);
  assert.match(home,/Continue your learning/);
  assert.doesNotMatch(home,/className="hero home-dashboard-hero"/);
  assert.doesNotMatch(home,/hero-metrics/);
});


test("Zimbabwe edition stays explicit about school placement and HBC status",()=>{
  const shell=read("components/app-shell.tsx");
  const library=read("components/learn-library.tsx");
  const deployment=read("app/institutions/deploy/page.tsx");
  const config=read("lib/zimbabwe.ts");
  assert.match(shell,/zimbabweEdition\.editionLabel/);
  assert.match(library,/Zimbabwe O-Level pathway/);
  assert.match(deployment,/Forms 1–4|Zimbabwean secondary learners/);
  assert.match(config,/Heritage-Based Curriculum 2024–2030/);
  assert.match(config,/does not imply Ministry approval/);
});


test("Zimbabwe learner navigation exposes four Forms and three terms",()=>{
  const library=read("components/learn-library.tsx");
  const formMap=read("components/form-map.tsx");
  const route=read("app/learn/form/[form]/page.tsx");
  assert.match(library,/Four Forms\. Three terms each/);
  assert.match(library,/FormCard/);
  assert.match(formMap,/All forms/);
  assert.match(formMap,/Term \{term\.term\}/);
  assert.match(route,/\[1,2,3,4\]/);
});


test("Zimbabwe Form maps expose HBC competency and project evidence metadata",()=>{
  const map=read("components/form-map.tsx");
  const config=read("lib/zimbabwe.ts");
  assert.match(map,/HBC competency focus/);
  assert.match(map,/Project evidence:/);
  assert.match(map,/source lessons/);
  assert.match(config,/business-financial-literacy/);
  assert.match(config,/communication-teamwork/);
  assert.match(config,/planning-organising/);
});


test("Zimbabwe lesson localisation uses explicit source-preserving overlays",()=>{
  const overlay=read("lib/zimbabwe-content.ts");
  const reader=read("components/lesson-reader.tsx");
  const delivery=read("lib/zimbabwe-curriculum.ts");
  assert.match(overlay,/zimbabweContentOverrides/);
  assert.match(overlay,/Source unit IDs remain unchanged/);
  assert.match(reader,/applyZimbabweUnitOverlay/);
  assert.match(delivery,/applyZimbabweSummaryOverlay/);
  assert.match(overlay,/textReplacements/);
  assert.match(overlay,/applyReviewedTextReplacements/);
  assert.doesNotMatch(overlay,/replaceAll\([^\n]*(?:rand|South Africa|spaza|stokvel|taxi rank)/i);
});


test("Form 1 closing sequence is structurally localised for Zimbabwe",()=>{
  const overlay=read("lib/zimbabwe-content.ts");
  assert.match(overlay,/LOOKING BACK AT FORM 1/);
  assert.match(overlay,/LOOKING AHEAD TO FORM 2/);
  assert.match(overlay,/FINAL PORTFOLIO AND FAREWELL TO FORM 1/);
  assert.match(overlay,/all three terms/);
  assert.match(overlay,/Read it in Form 4/);
  assert.match(overlay,/three terms of evidence/);
  assert.match(overlay,/kind:"remove"/);
  assert.match(overlay,/Shona, Ndebele/);
  assert.doesNotMatch(overlay,/all four terms/);
  assert.doesNotMatch(overlay,/four terms of evidence/);
});


test("Form 1 three-term overlay contains no phantom fourth term or source-grade transitions",()=>{
  const overlay=read("lib/zimbabwe-content.ts");
  assert.doesNotMatch(overlay,/Term 4/);
  assert.doesNotMatch(overlay,/Grade 8/);
  assert.doesNotMatch(overlay,/Grade 9/);
  assert.match(overlay,/FOUNDATIONS REVIEW AND PORTFOLIO CHECKPOINT/);
  assert.match(overlay,/MY RELATIONSHIP WITH RESOURCES — NEXT CYCLE/);
  assert.match(overlay,/WHAT HABITS TAUGHT ME — PROJECT REFLECTION/);
  assert.match(overlay,/From Term 3: Financial identity, agency and your first capstone/);
});


test("Form 1 Zimbabwe overlay contains no South African edition residue already covered by localisation",()=>{
  const overlay=read("lib/zimbabwe-content.ts");
  for(const residue of [
    /\bspaza\b/i,
    /\bstokvel\b/i,
    /taxi rank/i,
    /South Africa/i,
    /\bSoweto\b/i,
    /\bUmlazi\b/i,
    /\bJohannesburg\b/i,
    /\bDurban\b/i,
    /\bPretoria\b/i,
    /\bGrade 8\b/i,
    /\bGrade 9\b/i,
    /\bGrade 12\b/i,
    /\bTerm 4\b/i,
    /\bR\s?\d/i,
    /\brand(?:s)?\b/i,
  ]) assert.doesNotMatch(overlay,residue);
  assert.match(overlay,/\bmukando\b/i);
  assert.match(overlay,/\btuckshop\b/i);
  assert.match(overlay,/\bkombi\b/i);
  assert.match(overlay,/US\$/);
});


test("Form 2 structural localisation is protected",()=>{
  const overlay=read("lib/zimbabwe-content.ts");
  assert.match(overlay,/ENTERPRISE FOUNDATIONS REVIEW AND PORTFOLIO/);
  assert.match(overlay,/COMMUNITY MONEY MAP REFLECTION — LETTER TO MY FUTURE SELF/);
  assert.match(overlay,/TERM 2 REFLECTION — HABITS, EXECUTION & NEXT MOVE/);
  assert.match(overlay,/Looking Ahead to Term 3 — Community Enterprise/);
  assert.match(overlay,/FAREWELL TO FORM 2/);
  assert.match(overlay,/three terms of it/);
  assert.match(overlay,/THE MUKANDO SYSTEM/);
  assert.match(overlay,/Zimbabwe, mukando and other community savings arrangements/);
});

test("Zimbabwe vocabulary-column cleaner accepts bold and plain South African language headers",()=>{
  const overlay=read("lib/zimbabwe-content.ts");
  assert.match(overlay,/\(\?:\\\*\\\*\)\?/);
  assert.match(overlay,/isiZulu\|isiXhosa\|Afrikaans\|Sepedi\|Setswana/);
});
