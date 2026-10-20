import { createClient } from "@/lib/supabase/server";

const PRIVATE_HEADERS = { "cache-control": "private, no-store" };
const MAX_ROWS = 2500;
const MAX_BODY_BYTES = 1_000_000;

type ProgressRow = {
  unitId: string;
  grade: number;
  term: number;
  completedAt?: string;
  lastOpenedAt?: string;
};
type NoteRow = { unitId: string; grade: number; term: number; note: string };
type PromptRow = { key: string; unitId: string; grade: number; term: number; value: string };
type ArtifactRow = { unitId: string; grade: number; term: number; markerKey: string; title: string; evidence: Array<{ key: string; label: string; position: number }> };
type Snapshot = {
  version: 1;
  activeGrade?: number;
  activeForm?: 1 | 2 | 3 | 4;
  completed: Record<string, string>;
  responses: Record<string, string>;
  promptResponses: Record<string, string>;
  profile?: { displayName?: string; grade?: number; form?: 1 | 2 | 3 | 4 };
  lastOpened?: { grade: number; term: number; unitId: string; at: string };
  progressRows: ProgressRow[];
  noteRows: NoteRow[];
  promptRows: PromptRow[];
  artifactRows: ArtifactRow[];
};

async function learnerAccountAllowed(supabase: Awaited<ReturnType<typeof createClient>>, userId: string) {
  const [membership, staff, platform] = await Promise.all([
    supabase.from("school_memberships").select("id").eq("user_id", userId).eq("status", "active").limit(1),
    supabase.from("cohort_staff").select("id").eq("user_id", userId).eq("status", "active").limit(1),
    supabase.rpc("is_platform_admin"),
  ]);
  if (membership.error || staff.error || platform.error) throw membership.error ?? staff.error ?? platform.error;
  return !(membership.data?.length || staff.data?.length || platform.data === true);
}

function fail(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: PRIVATE_HEADERS });
}
function validText(value: unknown, max = 20000): value is string {
  return typeof value === "string" && value.length <= max;
}
function validSourcePosition(grade: unknown, term: unknown) {
  return Number.isInteger(grade) && Number(grade) >= 8 && Number(grade) <= 12
    && Number.isInteger(term) && Number(term) >= 1 && Number(term) <= 4;
}
function validUnitId(value: unknown): value is string {
  return validText(value, 300) && value.trim().length > 0 && !/[\u0000-\u001f]/.test(value);
}
function validTimestamp(value: unknown): value is string {
  return typeof value === "string" && Number.isFinite(Date.parse(value));
}
function snapshotValid(value: unknown): value is Snapshot {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const s = value as Partial<Snapshot>;
  if (s.version !== 1 || !s.completed || !s.responses || !s.promptResponses || !Array.isArray(s.progressRows) || !Array.isArray(s.noteRows) || !Array.isArray(s.promptRows) || !Array.isArray(s.artifactRows)) return false;
  if (s.progressRows.length > MAX_ROWS || s.noteRows.length > MAX_ROWS || s.promptRows.length > MAX_ROWS || s.artifactRows.length > MAX_ROWS) return false;
  if (Object.keys(s.completed).length > MAX_ROWS || Object.keys(s.responses).length > MAX_ROWS || Object.keys(s.promptResponses).length > MAX_ROWS) return false;
  if (![s.completed, s.responses, s.promptResponses].every(map => Object.entries(map ?? {}).every(([key, item]) => validText(key, 500) && validText(item, 20000)))) return false;
  if (s.activeForm !== undefined && ![1,2,3,4].includes(s.activeForm)) return false;
  if (s.activeGrade !== undefined && (!Number.isInteger(s.activeGrade) || s.activeGrade < 8 || s.activeGrade > 12)) return false;
  if (s.profile && (s.profile.displayName !== undefined && !validText(s.profile.displayName, 160) || s.profile.grade !== undefined && (!Number.isInteger(s.profile.grade) || s.profile.grade < 8 || s.profile.grade > 12) || s.profile.form !== undefined && ![1,2,3,4].includes(s.profile.form))) return false;
  if (s.lastOpened && (!validSourcePosition(s.lastOpened.grade, s.lastOpened.term) || !validUnitId(s.lastOpened.unitId) || !validTimestamp(s.lastOpened.at))) return false;
  if (!s.progressRows.every(row => row && validUnitId(row.unitId) && validSourcePosition(row.grade,row.term) && (row.completedAt === undefined || validTimestamp(row.completedAt)) && (row.lastOpenedAt === undefined || validTimestamp(row.lastOpenedAt)))) return false;
  if (!s.noteRows.every(row => row && validUnitId(row.unitId) && validSourcePosition(row.grade,row.term) && validText(row.note,20000))) return false;
  if (!s.promptRows.every(row => row && validText(row.key,500) && validUnitId(row.unitId) && validSourcePosition(row.grade,row.term) && validText(row.value,20000))) return false;
  return true;
}

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: auth, error: authError } = await supabase.auth.getUser();
    if (authError || !auth.user) return fail("Sign in to sync learning progress.", 401);
    const userId = auth.user.id;
    if (!(await learnerAccountAllowed(supabase, userId))) return fail("Learning-state sync is reserved for learner accounts; staff and platform-admin roles remain separate.", 403);
    const [profileResult, learnerResult, progressResult, notesResult, promptsResult] = await Promise.all([
      supabase.from("profiles").select("display_name").eq("id", userId).maybeSingle(),
      supabase.from("learner_profiles").select("current_grade,current_form,preferred_name").eq("user_id", userId).maybeSingle(),
      supabase.from("lesson_progress").select("grade,term,unit_id,status,completed_at,last_opened_at").eq("learner_id", userId).eq("curriculum_version", "ac-zw-source-v1"),
      supabase.from("lesson_notes").select("unit_id,note").eq("learner_id", userId).eq("curriculum_version", "ac-zw-source-v1"),
      supabase.from("prompt_responses").select("unit_id,prompt_key,response").eq("learner_id", userId).eq("curriculum_version", "ac-zw-source-v1"),
    ]);
    const errors = [profileResult.error, learnerResult.error, progressResult.error, notesResult.error, promptsResult.error].filter(Boolean);
    if (errors.length) throw errors[0];
    const completed: Record<string,string> = {};
    let lastOpened: Snapshot["lastOpened"];
    for (const row of progressResult.data ?? []) {
      if (row.status === "completed" && row.completed_at) completed[row.unit_id] = row.completed_at;
      if (row.last_opened_at && (!lastOpened || Date.parse(row.last_opened_at) > Date.parse(lastOpened.at))) {
        lastOpened = { grade: row.grade, term: row.term, unitId: row.unit_id, at: row.last_opened_at };
      }
    }
    const responses = Object.fromEntries((notesResult.data ?? []).map(row => [row.unit_id,row.note]));
    const promptResponses = Object.fromEntries((promptsResult.data ?? []).map(row => {
      const response = row.response && typeof row.response === "object" && "text" in row.response ? String(row.response.text ?? "") : typeof row.response === "string" ? row.response : JSON.stringify(row.response);
      return [row.prompt_key,response];
    }));
    const currentForm = learnerResult.data?.current_form;
    const preferredName = learnerResult.data?.preferred_name ?? profileResult.data?.display_name ?? "";
    const currentGrade = learnerResult.data?.current_grade ?? undefined;
    return Response.json({
      state: {
        version: 1, completed, responses, promptResponses,
        activeGrade: currentGrade,
        activeForm: currentForm,
        profile: { displayName: preferredName, grade: currentGrade, form: currentForm },
        lastOpened,
      },
    }, { headers: PRIVATE_HEADERS });
  } catch (error) {
    console.error("AC Zimbabwe learning-state read failed", error);
    return fail("Learning progress could not be loaded. Local progress remains available.", 503);
  }
}

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") ?? 0);
    if (length > MAX_BODY_BYTES) return fail("Learning snapshot is too large.", 413);
    const supabase = await createClient();
    const { data: auth, error: authError } = await supabase.auth.getUser();
    if (authError || !auth.user) return fail("Sign in to sync learning progress.", 401);
    const expectedUserId = request.headers.get("x-ac-expected-user-id");
    if (expectedUserId && expectedUserId !== auth.user.id) return fail("The active account changed. Reload before syncing.", 409);
    let body: unknown;
    try { body = await request.json(); } catch { return fail("Learning snapshot is not valid JSON.", 400); }
    if (!snapshotValid(body)) return fail("Learning snapshot failed validation.", 400);
    const userId = auth.user.id;
    if (!(await learnerAccountAllowed(supabase, userId))) return fail("Learning-state sync is reserved for learner accounts; staff and platform-admin roles remain separate.", 403);
    const version = "ac-zw-source-v1";
    const now = new Date().toISOString();
    const progress = body.progressRows.map(row => ({
      learner_id: userId, curriculum_version: version, grade: row.grade, term: row.term, unit_id: row.unitId,
      status: row.completedAt ? "completed" : "in_progress",
      started_at: row.completedAt ?? row.lastOpenedAt ?? now,
      completed_at: row.completedAt ?? null,
      last_opened_at: row.lastOpenedAt ?? null,
      updated_at: now,
    }));
    const notes = body.noteRows.map(row => ({
      learner_id: userId, curriculum_version: version, grade: row.grade, term: row.term, unit_id: row.unitId,
      note: row.note, updated_at: now,
    }));
    const prompts = body.promptRows.map(row => ({
      learner_id: userId, curriculum_version: version, grade: row.grade, term: row.term, unit_id: row.unitId,
      prompt_key: row.key, response_kind: "text", response: { text: row.value }, answered_at: now, updated_at: now,
    }));
    if (progress.length) { const result = await supabase.from("lesson_progress").upsert(progress,{onConflict:"learner_id,curriculum_version,unit_id"}); if (result.error) throw result.error; }
    if (notes.length) { const result = await supabase.from("lesson_notes").upsert(notes,{onConflict:"learner_id,curriculum_version,unit_id"}); if (result.error) throw result.error; }
    if (prompts.length) { const result = await supabase.from("prompt_responses").upsert(prompts,{onConflict:"learner_id,curriculum_version,unit_id,prompt_key"}); if (result.error) throw result.error; }
    if (body.promptRows.length) {
      const evidence = body.promptRows.map(row => ({
        learner_id: userId, response_key: row.key, response_value: row.value,
        status: "captured" as const, updated_at: now,
      }));
      const savedEvidence = await supabase.from("evidence_records").upsert(evidence, {
        onConflict: "learner_id,response_key",
      });
      if (savedEvidence.error) throw savedEvidence.error;
    }
    if (body.artifactRows.length) {
      const artifacts = body.artifactRows.map(row => ({
        learner_id: userId, curriculum_version: version, grade: row.grade, term: row.term,
        unit_id: row.unitId, marker_key: row.markerKey, title: row.title,
        artifact_type: "curriculum_evidence" as const, status: "captured" as const, updated_at: now,
      }));
      const savedArtifacts = await supabase.from("portfolio_artifacts").upsert(artifacts, {
        onConflict: "learner_id,curriculum_version,unit_id,marker_key",
      }).select("id,unit_id,marker_key");
      if (savedArtifacts.error) throw savedArtifacts.error;
      const responseIds = await supabase.from("prompt_responses").select("id,unit_id,prompt_key")
        .eq("learner_id", userId).eq("curriculum_version", version);
      if (responseIds.error) throw responseIds.error;
      const responseIdByKey = new Map((responseIds.data ?? []).map(row => [row.prompt_key, row.id]));
      const artifactIdByKey = new Map((savedArtifacts.data ?? []).map(row => [`${row.unit_id}::${row.marker_key}`, row.id]));
      const links: Array<{ artifact_id: string; prompt_response_id: string; label: string; position: number }> = [];
      const artifactIds = [...artifactIdByKey.values()];
      for (const row of body.artifactRows) {
        const artifactId = artifactIdByKey.get(`${row.unitId}::${row.markerKey}`);
        if (!artifactId) continue;
        for (const evidence of row.evidence) {
          const responseId = responseIdByKey.get(evidence.key);
          if (responseId) links.push({ artifact_id: artifactId, prompt_response_id: responseId, label: evidence.label, position: evidence.position });
        }
      }
      if (artifactIds.length) {
        const removedLinks = await supabase.from("portfolio_evidence").delete().in("artifact_id", artifactIds);
        if (removedLinks.error) throw removedLinks.error;
      }
      if (links.length) {
        const savedLinks = await supabase.from("portfolio_evidence").insert(links);
        if (savedLinks.error) throw savedLinks.error;
      }
    }
    const profile = body.profile ?? {};
    const grade = profile.grade ?? body.activeGrade ?? null;
    const form = profile.form ?? body.activeForm ?? null;
    const learner = await supabase.from("learner_profiles").upsert({
      user_id: userId, current_grade: grade, current_form: form,
      preferred_name: profile.displayName ?? null, updated_at: now,
    }, { onConflict: "user_id" });
    if (learner.error) throw learner.error;
    const profileUpdate = await supabase.from("profiles").update({
      display_name: profile.displayName ?? null, updated_at: now,
    }).eq("id", userId);
    if (profileUpdate.error) throw profileUpdate.error;
    return Response.json({ ok: true, syncedAt: now }, { headers: PRIVATE_HEADERS });
  } catch (error) {
    console.error("AC Zimbabwe learning-state write failed", error);
    return fail("Learning progress could not be synced. Your device copy has been kept.", 503);
  }
}
