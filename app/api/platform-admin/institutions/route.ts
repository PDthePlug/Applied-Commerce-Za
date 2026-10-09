import { createClient } from "@/lib/supabase/server";

const PRIVATE_HEADERS = { "cache-control": "private, no-store" };
function fail(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: PRIVATE_HEADERS });
}
async function requirePlatformAdmin() {
  const supabase = await createClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) return { response: fail("Sign in is required.", 401) } as const;
  const { data, error } = await supabase.rpc("is_platform_admin");
  if (error) throw error;
  if (data !== true) return { response: fail("Platform administrator access is required.", 403) } as const;
  return { supabase, user: auth.user } as const;
}

export async function GET() {
  try {
    const auth = await requirePlatformAdmin();
    if ("response" in auth) return auth.response;
    const schoolsResult = await auth.supabase.from("schools").select("id,name,slug,status,created_at").order("created_at", { ascending: false });
    if (schoolsResult.error) throw schoolsResult.error;
    const schools = schoolsResult.data ?? [];
    const ids = schools.map(item => item.id);
    const [memberships, cohorts] = await Promise.all([
      ids.length ? auth.supabase.from("school_memberships").select("school_id,user_id,role,status").in("school_id", ids) : Promise.resolve({data:[],error:null}),
      ids.length ? auth.supabase.from("cohorts").select("id,school_id,name,zimbabwe_form,grade,academic_year,status").in("school_id", ids) : Promise.resolve({data:[],error:null}),
    ]);
    if (memberships.error || cohorts.error) throw memberships.error ?? cohorts.error;
    return Response.json({ schools, memberships: memberships.data ?? [], cohorts: cohorts.data ?? [] }, { headers: PRIVATE_HEADERS });
  } catch (error) {
    console.error("AC Zimbabwe platform administration read failed", error);
    return fail("Platform data could not be loaded.", 503);
  }
}

export async function POST(request: Request) {
  try {
    const auth = await requirePlatformAdmin();
    if ("response" in auth) return auth.response;
    const length = Number(request.headers.get("content-length") ?? 0);
    if (length > 12000) return fail("Request is too large.", 413);
    let body: Record<string, unknown>;
    try { body = await request.json() as Record<string, unknown>; }
    catch { return fail("Request is not valid JSON.", 400); }
    const name = body.name;
    const slug = body.slug;
    const ownerEmail = body.ownerEmail;
    if (typeof name !== "string" || !name.trim() || name.length > 160) return fail("Provide a valid institution name.", 400);
    if (typeof slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug.trim()) || slug.length > 100) return fail("Use a lowercase slug with letters, numbers and hyphens.", 400);
    if (typeof ownerEmail !== "string" || ownerEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail.trim())) return fail("Provide an existing account email for the institution owner.", 400);
    const created = await auth.supabase.rpc("create_school_with_owner", {
      p_name: name.trim(), p_slug: slug.trim(), p_owner_email: ownerEmail.trim(),
    });
    if (created.error) throw created.error;
    return Response.json({ ok: true, school: created.data }, { headers: PRIVATE_HEADERS });
  } catch (error) {
    console.error("AC Zimbabwe institution provisioning failed", error);
    return fail("The institution was not created. Confirm the owner has an existing account and the slug is unique.", 403);
  }
}
