import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const api=fs.readFileSync("app/api/learning-state/route.ts","utf8");
const bridge=fs.readFileSync("components/learning-persistence-bridge.tsx","utf8");
const store=fs.readFileSync("lib/learning-store.ts","utf8");
const layout=fs.readFileSync("app/layout.tsx","utf8");
const migration=fs.readFileSync("supabase/migrations/20261009234929_ac_zw_learning_state.sql","utf8");
const types=fs.readFileSync("lib/database.types.ts","utf8");

test("learning sync requires a verified session and binds every write to auth.uid()",()=>{
 assert.match(api,/supabase\.auth\.getUser\(\)/);
 assert.match(api,/const userId = auth\.user\.id/);
 assert.match(api,/learner_id: userId/);
 assert.match(api,/user_id: userId/);
 assert.match(api,/x-ac-expected-user-id/);
 assert.match(api,/learnerAccountAllowed\(supabase, userId\)/);
 assert.match(api,/from\("school_memberships"\).*?eq\("status", "active"\)/);
 assert.match(api,/from\("cohort_staff"\).*?eq\("status", "active"\)/);
 assert.match(api,/MAX_BODY_BYTES/);
 assert.match(api,/snapshotValid\(body\)/);
 assert.doesNotMatch(api,/service_role|SERVICE_ROLE|SUPABASE_SERVICE_ROLE_KEY/i);
});

test("server-backed rows preserve source curriculum identities and account-owned keys",()=>{
 assert.match(api,/curriculum_version: version/);
 assert.match(api,/unit_id: row\.unitId/);
 assert.match(api,/prompt_key: row\.key/);
 assert.match(api,/onConflict:"learner_id,curriculum_version,unit_id"/);
 assert.match(api,/onConflict:"learner_id,curriculum_version,unit_id,prompt_key"/);
 assert.match(migration,/current_form between 1 and 4/);
 assert.match(types,/current_form: number \| null/);
});

test("local-first migration merges local and remote records before initial upload",()=>{
 assert.match(store,/applied-commerce-learning-state-v1/);
 assert.match(store,/export function readLocalLearningState/);
 assert.match(store,/export function replaceLearningState/);
 assert.match(store,/setLearningStorageScope\(userId: string \| null\)/);
 assert.match(store,/\$\{KEY\}:\$\{resolved\}/);
 assert.match(bridge,/function mergeState\(local: LearningState, remote: Partial<LearningState>\)/);
 assert.match(bridge,/completed: \{ \...\(remote\.completed \?\? \{\}\), \...local\.completed \}/);
 assert.match(bridge,/replaceLearningState\(merged, user\.id\)/);
 assert.match(bridge,/applied-commerce-learning-state-claimed-user-v1/);
 assert.match(bridge,/readLocalLearningState\(claimedUser \? user\.id : null\)/);
 assert.match(bridge,/local learning data was preserved/i);
 assert.match(bridge,/local learning data was preserved/i);
 assert.match(layout,/LearningPersistenceBridge/);
});

test("sync maps stable source unit IDs and does not rewrite Zimbabwe Form or Term identities",()=>{
 assert.match(bridge,/for \(const grade of grades\)/);
 assert.match(bridge,/map\.set\(unit\.id, \{ grade: grade\.grade, term: term\.term \}\)/);
 assert.match(bridge,/const unitId = key\.split\("::"\)\[0\]/);
 assert.match(api,/grade: row\.grade, term: row\.term, unit_id: row\.unitId/);
 assert.match(api,/current_form: form/);
});
