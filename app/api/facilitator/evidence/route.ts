import { createClient } from "@/lib/supabase/server";

const PRIVATE_HEADERS = { "cache-control": "private, no-store" };
const REVIEW_STATES = new Set(["in-review", "accepted", "needs-revision", "verified"]);
function fail(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: PRIVATE_HEADERS });
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
    const { data: evidence, error } = await auth.supabase.from("evidence_records")
      .select("id,learner_id,response_key,response_value,status,captured_at,updated_at")
      .order("updated_at", { ascending: false }).limit(500);
    if (error) throw error;
    const records = evidence ?? [];
    const learnerIds = [...new Set(records.map(row => row.learner_id))];
    const recordIds = records.map(row => row.id);
    const [profilesResult, reviewsResult] = await Promise.all([
      learnerIds.length ? auth.supabase.from("profiles").select("id,display_name").in("id", learnerIds) : Promise.resolve({ data: [], error: null }),
      recordIds.length ? auth.supabase.from("evidence_reviews").select("id,evidence_record_id,reviewer_id,status,feedback,reviewed_at,criteria_scores").in("evidence_record_id", recordIds).order("reviewed_at", { ascending: false }) : Promise.resolve({ data: [], error: null }),
    ]);
    if (profilesResult.error) throw profilesResult.error;
    if (reviewsResult.error) throw reviewsResult.error;
    const names = new Map((profilesResult.data ?? []).map(row => [row.id, row.display_name ?? "Learner"]));
    return Response.json({
      evidence: records.map(row => ({
        ...row,
        learner_name: names.get(row.learner_id) ?? "Learner",
        reviews: (reviewsResult.data ?? []).filter(review => review.evidence_record_id === row.id),
      })),
    }, { headers: PRIVATE_HEADERS });
  } catch (error) {
    console.error("AC Zimbabwe facilitator evidence read failed", error);
    return fail("Evidence could not be loaded for this workspace.", 503);
  }
}

export async function POST(request: Request) {
  try {
    const auth = await requireUser();
    if ("response" in auth) return auth.response;
    const length = Number(request.headers.get("content-length") ?? 0);
    if (length > 16000) return fail("Review payload is too large.", 413);
    let body: Record<string, unknown>;
    try { body = await request.json() as Record<string, unknown>; }
    catch { return fail("Review payload is not valid JSON.", 400); }
    const evidenceRecordId = body.evidenceRecordId;
    const status = body.status;
    const feedback = body.feedback;
    const criteriaScores = body.criteriaScores ?? {};
    if (typeof evidenceRecordId !== "string" || evidenceRecordId.length > 100) return fail("Choose a valid evidence record.", 400);
    if (typeof status !== "string" || !REVIEW_STATES.has(status)) return fail("Choose a valid review status.", 400);
    if (typeof feedback !== "string" || feedback.length > 4000) return fail("Feedback must be 4,000 characters or fewer.", 400);
    if (!criteriaScores || typeof criteriaScores !== "object" || Array.isArray(criteriaScores) || JSON.stringify(criteriaScores).length > 8000) return fail("Review criteria are invalid.", 400);
    const { data: evidence, error: evidenceError } = await auth.supabase.from("evidence_records")
      .select("id,learner_id").eq("id", evidenceRecordId).maybeSingle();
    if (evidenceError) throw evidenceError;
    if (!evidence) return fail("Evidence was not found or is outside this account's assigned scope.", 404);

    const existing = await auth.supabase.from("evidence_reviews").select("id")
      .eq("evidence_record_id", evidence.id).eq("reviewer_id", auth.user.id).maybeSingle();
    if (existing.error) throw existing.error;
    const now = new Date().toISOString();
    const values = {
      evidence_record_id: evidence.id, reviewer_id: auth.user.id, status,
      feedback, criteria_scores: criteriaScores as import("@/lib/database.types").Json,
      reviewed_at: now, updated_at: now,
    };
    const saved = existing.data
      ? await auth.supabase.from("evidence_reviews").update(values).eq("id", existing.data.id)
      : await auth.supabase.from("evidence_reviews").insert(values);
    if (saved.error) throw saved.error;
    const evidenceUpdate = await auth.supabase.from("evidence_records")
      .update({ status, updated_at: now }).eq("id", evidence.id);
    if (evidenceUpdate.error) throw evidenceUpdate.error;
    return Response.json({ ok: true, evidenceRecordId: evidence.id, status, reviewedAt: now }, { headers: PRIVATE_HEADERS });
  } catch (error) {
    console.error("AC Zimbabwe facilitator evidence review failed", error);
    return fail("The review could not be saved. Check that the learner is assigned to this workspace.", 503);
  }
}
