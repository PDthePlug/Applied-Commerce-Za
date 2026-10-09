import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const foundation = fs.readFileSync("supabase/migrations/20261010090000_ac_zw_platform_foundation.sql", "utf8");
const hardening = fs.readFileSync("supabase/migrations/20261010093000_ac_zw_rls_hardening.sql", "utf8");
const delivery = fs.readFileSync("lib/zimbabwe-delivery.ts", "utf8");
const architecture = fs.readFileSync("tests/zimbabwe-architecture.test.mjs", "utf8");
const env = fs.readFileSync(".env.example", "utf8");

test("AC ZW backend foundation includes the learner, evidence, portfolio and institution domains", () => {
  for (const table of [
    "profiles", "learner_profiles", "account_preferences", "schools", "school_memberships",
    "cohorts", "cohort_staff", "cohort_enrolments", "curriculum_releases",
    "lesson_progress", "lesson_notes", "prompt_responses", "assessment_attempts",
    "evidence_definitions", "evidence_records", "evidence_reviews",
    "portfolio_artifacts", "portfolio_evidence", "audit_events",
  ]) assert.match(foundation, new RegExp(`create table public\\.${table}\\b`, "i"), `missing ${table}`);
});

test("learner-owned preferences are row-scoped and contain no role assignment field", () => {
  assert.match(foundation, /create table public\.account_preferences[\s\S]*?user_id uuid primary key references auth\.users\(id\)/i);
  assert.match(foundation, /account_preferences_select_own[\s\S]*?user_id = \(select auth\.uid\(\)\)/i);
  assert.match(foundation, /account_preferences_insert_own[\s\S]*?with check \(user_id = \(select auth\.uid\(\)\)\)/i);
  assert.match(foundation, /account_preferences_update_own[\s\S]*?with check \(user_id = \(select auth\.uid\(\)\)\)/i);
  assert.doesNotMatch(foundation.match(/create table public\.account_preferences[\s\S]*?\);/i)?.[0] ?? "", /role|is_admin|permissions/i);
});

test("client access to the trusted platform-admin registry is explicitly denied", () => {
  assert.match(hardening, /platform_admin_registry_deny_client_access[\s\S]*?to anon, authenticated[\s\S]*?using \(false\) with check \(false\)/i);
  assert.match(foundation, /private\.is_platform_admin\(\)[\s\S]*?from private\.platform_admins[\s\S]*?status='active'/i);
  assert.doesNotMatch(foundation, /grant all privileges on all tables in schema public, private to anon/i);
});

test("learner data has row-level security and evidence write policies combine learner/staff scope", () => {
  for (const table of [
    "profiles", "learner_profiles", "lesson_progress", "lesson_notes", "prompt_responses",
    "portfolio_artifacts", "portfolio_evidence", "evidence_records", "evidence_reviews",
    "schools", "school_memberships", "cohorts", "cohort_staff", "cohort_enrolments",
  ]) assert.match(foundation, new RegExp(`alter table public\\.${table} enable row level security`, "i"), `RLS missing for ${table}`);
  assert.match(hardening, /evidence_records_insert_learner_or_assigned_staff[\s\S]*?learner_id = \(select auth\.uid\(\)\)[\s\S]*?private\.can_review_learner\(learner_id\)/i);
  assert.match(hardening, /evidence_records_update_learner_or_assigned_staff[\s\S]*?using[\s\S]*?with check/i);
});

test("the backend release metadata preserves source identities and the four-Form, three-Term delivery contract", () => {
  assert.match(foundation, /source_grade_ids_preserved":true/);
  assert.match(foundation, /source_term_ids_preserved":true/);
  assert.match(foundation, /delivery_forms":4/);
  assert.match(foundation, /delivery_terms_per_form":3/);
  assert.match(foundation, /Form 1=Grade 8; Form 2=Grade 9; Form 3=Grade 10 plus Grade 11 Terms 1-2; Form 4=Grade 11 Terms 3-4 plus Grade 12/);
  assert.match(delivery, /form: 1 \| 2 \| 3 \| 4/);
  assert.match(architecture, /Zimbabwe O-Level map uses four Forms and twelve delivery terms/);
  assert.match(architecture, /restored Grade 9 lessons 23-34/);
});

test("the example environment points only to the dedicated ZW project and leaves backend activation gated", () => {
  assert.match(env, /NEXT_PUBLIC_SUPABASE_PROJECT_REF=hkarxzjmttjetotduvyx/);
  assert.match(env, /NEXT_PUBLIC_SUPABASE_URL=https:\/\/hkarxzjmttjetotduvyx\.supabase\.co/);
  assert.match(env, /NEXT_PUBLIC_APPLIED_COMMERCE_BACKEND_MODE=local/);
  assert.match(env, /Never place a service-role key in a NEXT_PUBLIC_\* variable/);
});
