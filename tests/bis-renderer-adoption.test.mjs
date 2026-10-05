import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read=(path)=>fs.readFileSync(path,"utf8");

test("Zimbabwe learner lessons adopt the BIS unified document contract",()=>{
  const reader=read("components/lesson-reader.tsx");
  const css=read("app/learner-document-system.css");
  const globals=read("app/globals.css");

  for(const token of [
    "learner-document-stage",
    "learner-document",
    "learner-document-header",
    "learner-document-heading-row",
    "learner-document-outcomes",
    "learner-document-meta",
    "learner-document-progress",
    "learner-document-body",
    "learner-document-footer",
  ]) {
    assert.match(reader,new RegExp(token));
    assert.match(css,new RegExp(token));
  }
  assert.match(globals,/learner-document-system\.css/);
});

test("BIS renderer adoption preserves Zimbabwe content and evidence identities",()=>{
  const reader=read("components/lesson-reader.tsx");
  const blocks=read("components/content-blocks.tsx");
  const overlay=read("lib/zimbabwe-content.ts");

  assert.match(reader,/applyZimbabweUnitOverlay/);
  assert.match(reader,/promptResponses=\{state\.promptResponses\}/);
  assert.match(reader,/onSavePromptResponse=\{savePromptResponse\}/);
  assert.match(reader,/saveResponse\(unitId,event\.target\.value\)/);
  assert.match(blocks,/function promptId\(unitId:string,blockIndex:number,slot:string\|number\)/);
  assert.match(overlay,/Source unit IDs remain unchanged/);
});

test("learner document uses one publication surface and a clear endpoint hierarchy",()=>{
  const reader=read("components/lesson-reader.tsx");
  const css=read("app/learner-document-system.css");

  assert.match(reader,/className="lesson-document learner-document"/);
  assert.match(reader,/data-document-primary="true"/);
  assert.match(reader,/learner-completion-toggle/);
  assert.doesNotMatch(reader,/className="reader-footer"/);
  assert.match(css,/Preserve authored row\/column relationships/);
  assert.match(css,/overflow-x:auto/);
});

test("renderer rules explicitly protect authored curriculum meaning",()=>{
  const doc=read("docs/BIS-RENDERER-ADOPTION.md");
  assert.match(doc,/must not rewrite, shorten, reorder, reinterpret/i);
  assert.match(doc,/If content renders badly, repair the renderer/i);
  assert.match(doc,/BIS governs learner presentation architecture/);
  assert.match(doc,/all source lesson IDs/);
  assert.match(doc,/prompt-response IDs/);
});
