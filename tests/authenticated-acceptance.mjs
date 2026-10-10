import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const url = process.env.AC_ZW_SUPABASE_URL;
const key = process.env.AC_ZW_SUPABASE_PUBLISHABLE_KEY;
assert.ok(url, "AC_ZW_SUPABASE_URL secret is required");
assert.ok(key, "AC_ZW_SUPABASE_PUBLISHABLE_KEY secret is required");

const ids = {
  platformAdminA: "f3830202-6fea-402d-a4c8-b99d64fbab2a",
  platformAdminB: "5c05ab9f-db4f-41d6-ae50-fa06dc4cf4ae",
  learner: "2bca5444-e1dd-485f-8bc1-a9fa2eabcaf2",
  institutionAdmin: "c7bd10bd-cfac-4b91-98fc-becb57f4d1da",
  facilitator: "b20589de-f26b-4788-bede-537921e0df3b",
  schoolA: "a1000000-0000-4000-8000-000000000001",
  schoolB: "a1000000-0000-4000-8000-000000000002",
  cohortA: "b1000000-0000-4000-8000-000000000001",
  cohortB: "b1000000-0000-4000-8000-000000000002",
};

const clients = new Map();
async function signIn(name, email, password) {
  assert.ok(password, `Missing password secret for ${name}`);
  const client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  const { data, error } = await client.auth.signInWithPassword({ email, password });
  assert.ifError(error);
  assert.ok(data.user, `${name} did not authenticate`);
  const expectedId = ids[name];
  if (expectedId) assert.equal(data.user.id, expectedId, `${name} authenticated as an unexpected user`);
  clients.set(name, client);
  return client;
}
function ok(result, message) {
  assert.ifError(result.error, message);
  return result.data;
}
function denied(result, message) {
  assert.ok(result.error, `${message}: expected RLS denial but operation succeeded`);
  assert.equal(result.error.code, "42501", `${message}: expected row-level security denial, got ${result.error.code}: ${result.error.message}`);
}

const adminA = await signIn("platformAdminA", "pdmpofu@gmail.com", process.env.AC_ZW_PLATFORM_ADMIN_PASSWORD);
const adminB = await signIn("platformAdminB", "pdmpofu1@gmail.com", process.env.AC_ZW_PLATFORM_ADMIN_2_PASSWORD);
const learner = await signIn("learner", process.env.AC_ZW_TEST_LEARNER_EMAIL, process.env.AC_ZW_TEST_LEARNER_PASSWORD);
const institutionAdmin = await signIn("institutionAdmin", process.env.AC_ZW_TEST_INSTITUTION_ADMIN_EMAIL, process.env.AC_ZW_TEST_INSTITUTION_ADMIN_PASSWORD);
const facilitator = await signIn("facilitator", process.env.AC_ZW_TEST_FACILITATOR_EMAIL, process.env.AC_ZW_TEST_FACILITATOR_PASSWORD);

for (const [name, client] of [["platform admin A", adminA], ["platform admin B", adminB]]) {
  const result = ok(await client.rpc("is_platform_admin"), `${name} registry check failed`);
  assert.equal(result, true, `${name} is not registered as a platform administrator`);
  assert.equal(await visible(client, "schools", ids.schoolA), 1, `${name} should see Institution A`);
  assert.equal(await visible(client, "schools", ids.schoolB), 1, `${name} should see Institution B`);
}
for (const [name, client] of [["learner", learner], ["institution admin", institutionAdmin], ["facilitator", facilitator]]) {
  const result = ok(await client.rpc("is_platform_admin"), `${name} registry check failed`);
  assert.equal(result, false, `${name} unexpectedly has platform-admin privileges`);
}

const visible = async (client, table, id) => {
  const result = await client.from(table).select("id").eq("id", id);
  return ok(result, `select ${table} failed`).length;
};
assert.equal(await visible(institutionAdmin, "schools", ids.schoolA), 1, "institution admin should see own school");
assert.equal(await visible(institutionAdmin, "schools", ids.schoolB), 0, "institution admin must not see another school");
assert.equal(await visible(institutionAdmin, "cohorts", ids.cohortA), 1, "institution admin should see own cohort");
assert.equal(await visible(institutionAdmin, "cohorts", ids.cohortB), 0, "institution admin must not see another institution's cohort");
assert.equal(await visible(facilitator, "cohorts", ids.cohortA), 1, "facilitator should see assigned cohort");
assert.equal(await visible(facilitator, "cohorts", ids.cohortB), 0, "facilitator must not see another institution's cohort");

const ownEnrolment = ok(await learner.from("cohort_enrolments").select("id").eq("cohort_id", ids.cohortA).eq("learner_id", ids.learner), "learner enrolment read failed");
assert.equal(ownEnrolment.length, 1, "learner should see own active enrolment");
const staffRows = ok(await learner.from("cohort_staff").select("id"), "learner cohort-staff read failed");
assert.equal(staffRows.length, 0, "learner must not see staff assignments");

denied(await institutionAdmin.from("cohorts").insert({
  school_id: ids.schoolB, name: `__negative_${randomUUID()}`, grade: 9, zimbabwe_form: 2, academic_year: 2026, status: "active",
}), "institution admin cross-institution cohort creation");
denied(await facilitator.from("cohort_enrolments").insert({
  cohort_id: ids.cohortB, learner_id: ids.learner, status: "active",
}), "facilitator cross-institution enrolment");

const unitId = `__auth_acceptance_${randomUUID()}`;
const created = [];
async function positiveWrite(table, values) {
  const data = ok(await learner.from(table).insert(values).select("id").single(), `learner own ${table} insert failed`);
  created.push([table, data.id]);
  const visibleRows = ok(await learner.from(table).select("id").eq("id", data.id), `learner own ${table} read failed`);
  assert.equal(visibleRows.length, 1, `learner should read own ${table} row`);
}
try {
  await positiveWrite("lesson_progress", {
    learner_id: ids.learner, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, status: "in_progress",
  });
  await positiveWrite("lesson_notes", {
    learner_id: ids.learner, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, note: "Temporary authenticated acceptance test",
  });
  await positiveWrite("prompt_responses", {
    learner_id: ids.learner, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, prompt_key: unitId, response_kind: "text", response: { test: true },
  });
  await positiveWrite("portfolio_artifacts", {
    learner_id: ids.learner, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, marker_key: unitId, title: "Temporary acceptance test artifact",
  });

  denied(await learner.from("lesson_progress").insert({
    learner_id: ids.institutionAdmin, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, status: "in_progress",
  }), "learner cross-user lesson progress write");
  denied(await learner.from("lesson_notes").insert({
    learner_id: ids.institutionAdmin, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, note: "Must be denied",
  }), "learner cross-user note write");
  denied(await learner.from("prompt_responses").insert({
    learner_id: ids.institutionAdmin, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, prompt_key: unitId, response_kind: "text", response: { test: true },
  }), "learner cross-user response write");
  denied(await learner.from("portfolio_artifacts").insert({
    learner_id: ids.institutionAdmin, curriculum_version: "ac-zw-auth-acceptance", grade: 9, term: 1,
    unit_id: unitId, marker_key: unitId, title: "Must be denied",
  }), "learner cross-user portfolio write");

  const facilitatorUpdate = ok(await facilitator.from("cohort_enrolments").update({ status: "active" })
    .eq("cohort_id", ids.cohortA).eq("learner_id", ids.learner).select("id"), "facilitator assigned-cohort enrolment update failed");
  assert.equal(facilitatorUpdate.length, 1, "facilitator should update enrolment in assigned cohort");
  console.log("PASS: authenticated role registry, institution/cohort scoping, learner-owned persistence, cross-user write denials, and facilitator enrolment operation.");
} finally {
  for (const [table, id] of created.reverse()) {
    const { error } = await learner.from(table).delete().eq("id", id);
    if (error) throw new Error(`Cleanup failed for temporary ${table} row ${id}: ${error.message}`);
  }
  for (const client of clients.values()) await client.auth.signOut();
}
