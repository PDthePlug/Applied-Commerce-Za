import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const reviewApi=fs.readFileSync("app/api/facilitator/evidence/route.ts","utf8");
const reviewUi=fs.readFileSync("components/facilitator-evidence-dashboard.tsx","utf8");
const institutionApi=fs.readFileSync("app/api/institution-admin/route.ts","utf8");
const institutionUi=fs.readFileSync("components/institution-admin-dashboard.tsx","utf8");
const platformApi=fs.readFileSync("app/api/platform-admin/institutions/route.ts","utf8");
const platformUi=fs.readFileSync("components/platform-admin-dashboard.tsx","utf8");
const migration=fs.readFileSync("supabase/migrations/20261009235541_ac_zw_institution_operations.sql","utf8");
const reviewMigration=fs.readFileSync("supabase/migrations/20261009235803_ac_zw_review_integrity.sql","utf8");
const aclMigration=fs.readFileSync("supabase/migrations/20261009235935_ac_zw_owner_rpc_acl.sql","utf8");
const persistence=fs.readFileSync("app/api/learning-state/route.ts","utf8");
const bridge=fs.readFileSync("components/learning-persistence-bridge.tsx","utf8");

test("facilitator review is authenticated and relies on RLS-scoped evidence visibility",()=>{
 assert.match(reviewApi,/supabase\.auth\.getUser\(\)/);
 assert.match(reviewApi,/from\("evidence_records"\)[\s\S]*?eq\("id", evidenceRecordId\)/);
 assert.match(reviewApi,/from\("evidence_reviews"\)/);
 assert.match(reviewApi,/reviewer_id: auth\.user\.id/);
 assert.match(reviewApi,/from\("evidence_records"\)[\s\S]*?update\(\{ status, updated_at: now \}\)/);
 assert.match(reviewUi,/Save review/);
 assert.match(reviewUi,/api\/facilitator\/evidence/);
});

test("institution actions use the existing guarded database functions and source-safe Form mapping",()=>{
 assert.match(institutionApi,/rpc\("add_school_member_by_email"/);
 assert.match(institutionApi,/rpc\("add_cohort_staff_by_email"/);
 assert.match(institutionApi,/rpc\("enrol_learner_by_email"/);
 assert.match(institutionApi,/zimbabwe_form: Number\(form\)/);
 assert.match(institutionApi,/grade: FORM_SOURCE_GRADE\[Number\(form\)\]/);
 assert.match(institutionUi,/Create a cohort/);
 assert.match(institutionUi,/Add an institution member/);
 assert.match(institutionUi,/Assign facilitator/);
 assert.match(institutionUi,/Enrol a learner/);
});

test("platform institution provisioning requires trusted registry and assigns owner atomically",()=>{
 assert.match(platformApi,/rpc\("is_platform_admin"\)/);
 assert.match(platformApi,/rpc\("create_school_with_owner"/);
 assert.match(platformUi,/Create institution and assign owner/);
 assert.match(migration,/if v_actor is null or not private\.is_platform_admin\(\)/);
 assert.match(migration,/insert into public\.school_memberships\(school_id,user_id,role,status\)[\s\S]*?'owner','active'/);
 assert.match(migration,/cohorts_zimbabwe_form_check/);
 assert.match(reviewMigration,/unique index if not exists evidence_reviews_record_reviewer_uidx/);
 assert.match(aclMigration,/revoke execute on function public\.create_school_with_owner\(text,text,text\) from public, anon/i);
});

test("portfolio artefacts and evidence records are persisted with learner-owned response keys",()=>{
 assert.match(persistence,/from\("evidence_records"\)\.upsert/);
 assert.match(persistence,/from\("portfolio_artifacts"\)\.upsert/);
 assert.match(persistence,/from\("portfolio_evidence"\)\.insert/);
 assert.match(bridge,/buildPortfolioDefinitions/);
 assert.match(bridge,/responsesForPortfolio/);
});
