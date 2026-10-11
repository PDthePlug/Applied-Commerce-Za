import { createClient } from "@/lib/supabase/server";

const PRIVATE_HEADERS = { "cache-control": "private, no-store" };
const FORM_SOURCE_GRADE: Record<number,number> = { 1: 8, 2: 9, 3: 10, 4: 12 };
function fail(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: PRIVATE_HEADERS });
}
function isUuid(value: unknown): value is string {
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
function validEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
async function requireUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return { response: fail("Sign in is required.", 401) } as const;
  return { supabase, user: data.user } as const;
}

export async function GET() {
  try {
    const auth = await requireUser();
    if ("response" in auth) return auth.response;
    const schoolsResult = await auth.supabase.from("schools").select("id,name,slug,status").order("name");
    if (schoolsResult.error) throw schoolsResult.error;
    const schools = schoolsResult.data ?? [];
    const schoolIds = schools.map(school => school.id);
    const cohortsResult = schoolIds.length
      ? await auth.supabase.from("cohorts").select("id,school_id,name,grade,zimbabwe_form,academic_year,status,starts_on,ends_on").in("school_id", schoolIds).order("academic_year", { ascending: false })
      : { data: [], error: null };
    if (cohortsResult.error) throw cohortsResult.error;
    const cohorts = cohortsResult.data ?? [];
    const cohortIds = cohorts.map(cohort => cohort.id);
    const [membersResult, staffResult, enrolmentsResult] = await Promise.all([
      schoolIds.length ? auth.supabase.from("school_memberships").select("id,school_id,user_id,role,status").in("school_id", schoolIds) : Promise.resolve({data:[],error:null}),
      cohortIds.length ? auth.supabase.from("cohort_staff").select("id,cohort_id,user_id,role,status").in("cohort_id", cohortIds) : Promise.resolve({data:[],error:null}),
      cohortIds.length ? auth.supabase.from("cohort_enrolments").select("id,cohort_id,learner_id,status,enrolled_at").in("cohort_id", cohortIds) : Promise.resolve({data:[],error:null}),
    ]);
    if (membersResult.error || staffResult.error || enrolmentsResult.error) throw membersResult.error ?? staffResult.error ?? enrolmentsResult.error;
    const learnerIds = [...new Set((enrolmentsResult.data ?? []).map(row => row.learner_id))];
    const learnerProfiles = learnerIds.length
      ? await auth.supabase.from("profiles").select("id,display_name").in("id", learnerIds)
      : { data: [], error: null };
    if (learnerProfiles.error) throw learnerProfiles.error;
    const names = new Map((learnerProfiles.data ?? []).map(row => [row.id,row.display_name ?? "Learner"]));
    return Response.json({
      schools, cohorts, memberships: membersResult.data ?? [], staff: staffResult.data ?? [],
      enrolments: (enrolmentsResult.data ?? []).map(row => ({ ...row, learner_name: names.get(row.learner_id) ?? "Learner" })),
    }, { headers: PRIVATE_HEADERS });
  } catch (error) {
    console.error("AC Zimbabwe institution workspace read failed", error);
    return fail("Institution data could not be loaded for this account.", 503);
  }
}

export async function POST(request: Request) {
  try {
    const auth = await requireUser();
    if ("response" in auth) return auth.response;
    const length = Number(request.headers.get("content-length") ?? 0);
    if (length > 12000) return fail("Request is too large.", 413);
    let body: Record<string, unknown>;
    try { body = await request.json() as Record<string, unknown>; }
    catch { return fail("Request is not valid JSON.", 400); }
    const action = body.action;
    if (action === "create-cohort") {
      if (!isUuid(body.schoolId) || typeof body.name !== "string" || !body.name.trim() || body.name.length > 120) return fail("Provide a valid institution and cohort name.", 400);
      const form = body.form;
      const year = body.academicYear;
      if (!Number.isInteger(form) || ![1,2,3,4].includes(Number(form))) return fail("Choose Form 1, 2, 3 or 4.", 400);
      if (!Number.isInteger(year) || Number(year) < 2020 || Number(year) > 2100) return fail("Choose a valid academic year.", 400);
      const inserted = await auth.supabase.from("cohorts").insert({
        school_id: body.schoolId, name: body.name.trim(), zimbabwe_form: Number(form),
        grade: FORM_SOURCE_GRADE[Number(form)], academic_year: Number(year), status: "active",
      }).select("id,name,school_id,zimbabwe_form,grade,academic_year,status").single();
      if (inserted.error) throw inserted.error;
      return Response.json({ ok: true, cohort: inserted.data }, { headers: PRIVATE_HEADERS });
    }
    if (action === "add-member") {
      if (!isUuid(body.schoolId) || !validEmail(body.email) || !["admin","educator"].includes(String(body.role))) return fail("Provide a valid institution, existing account email and supported role.", 400);
      const result = await auth.supabase.rpc("add_school_member_by_email", {
        p_school_id: body.schoolId, p_email: body.email.trim(), p_role: String(body.role),
      });
      if (result.error) throw result.error;
      return Response.json({ ok: true, userId: result.data }, { headers: PRIVATE_HEADERS });
    }
    if (action === "add-cohort-staff") {
      if (!isUuid(body.cohortId) || !validEmail(body.email) || !["lead","educator","assistant"].includes(String(body.role))) return fail("Provide a valid cohort, existing account email and supported staff role.", 400);
      const result = await auth.supabase.rpc("add_cohort_staff_by_email", {
        p_cohort_id: body.cohortId, p_email: body.email.trim(), p_role: String(body.role),
      });
      if (result.error) throw result.error;
      return Response.json({ ok: true, userId: result.data }, { headers: PRIVATE_HEADERS });
    }
    if (action === "enrol-learner") {
      if (!isUuid(body.cohortId) || !validEmail(body.email)) return fail("Provide a valid cohort and existing learner account email.", 400);
      const result = await auth.supabase.rpc("enrol_learner_by_email", {
        p_cohort_id: body.cohortId, p_email: body.email.trim(),
      });
      if (result.error) throw result.error;
      return Response.json({ ok: true, learnerId: result.data }, { headers: PRIVATE_HEADERS });
    }
    return fail("Choose a supported institution action.", 400);
  } catch (error) {
    console.error("AC Zimbabwe institution workspace action failed", error);
    return fail("The action was not completed. Check the account, institution and role assignments.", 403);
  }
}
