import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type Workspace = "facilitator" | "institution-admin" | "platform-admin";
export type WorkspaceAccess = {
  user: { id: string; email?: string };
  isPlatformAdmin: boolean;
  institutionIds: string[];
  institutionAdminIds: string[];
  cohortIds: string[];
};

export async function getWorkspaceAccess(): Promise<WorkspaceAccess | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) return null;
  try {
    const supabase = await createClient();
    const { data: authData, error: authError } = await supabase.auth.getUser();
    const user = authData.user;
    if (authError || !user) return null;

    const [platformResult, membershipResult, staffResult] = await Promise.all([
      supabase.rpc("is_platform_admin"),
      supabase.from("school_memberships").select("school_id,role,status").eq("user_id", user.id).eq("status", "active"),
      supabase.from("cohort_staff").select("cohort_id,role,status").eq("user_id", user.id).eq("status", "active"),
    ]);

    if (membershipResult.error || staffResult.error) return null;
    const memberships = membershipResult.data ?? [];
    const staff = staffResult.data ?? [];
    return {
      user: { id: user.id, email: user.email ?? undefined },
      isPlatformAdmin: !platformResult.error && platformResult.data === true,
      institutionIds: [...new Set(memberships.map(row => row.school_id))],
      institutionAdminIds: [...new Set(memberships.filter(row => row.role === "owner" || row.role === "admin").map(row => row.school_id))],
      cohortIds: [...new Set(staff.map(row => row.cohort_id))],
    };
  } catch {
    return null;
  }
}

export async function requireWorkspaceAccess(workspace: Workspace): Promise<WorkspaceAccess> {
  const access = await getWorkspaceAccess();
  if (!access) {
    redirect("/auth?next=" + encodeURIComponent("/" + (workspace === "institution-admin" ? "institution-admin" : workspace)));
  }
  if (access.isPlatformAdmin) return access;
  if (workspace === "platform-admin") redirect("/");
  if (workspace === "institution-admin" && access.institutionAdminIds.length === 0) redirect("/");
  if (workspace === "facilitator" && access.cohortIds.length === 0 && access.institutionAdminIds.length === 0) redirect("/");
  return access;
}
