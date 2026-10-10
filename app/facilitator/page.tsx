import type { Metadata } from "next";
import "../settings/settings.css";
import { requireWorkspaceAccess } from "@/lib/server/workspace-access";
import { createClient } from "@/lib/supabase/server";
import { FacilitatorEvidenceDashboard } from "@/components/facilitator-evidence-dashboard";
export const metadata: Metadata = { title: "Facilitator workspace" };

export default async function FacilitatorWorkspacePage() {
  const access = await requireWorkspaceAccess("facilitator");
  const supabase = await createClient();
  const cohortQuery = supabase.from("cohorts").select("id,name,grade,zimbabwe_form,academic_year,status");
  const { data: cohorts } = access.isPlatformAdmin
    ? await cohortQuery.order("academic_year", { ascending: false })
    : access.institutionAdminIds.length
      ? await cohortQuery.in("school_id", access.institutionAdminIds).order("academic_year", { ascending: false })
      : access.cohortIds.length
        ? await cohortQuery.in("id", access.cohortIds).order("academic_year", { ascending: false })
        : { data: [] };
  return <div className="settings-page">
    <header className="settings-header"><p className="eyebrow">Protected workspace</p><h1>Facilitator workspace</h1><p className="settings-intro">Signed in as {access.user.email ?? "an authorised account"}. This route is available only to assigned cohort staff, institution administrators and platform administrators.</p></header>
    <section className="settings-content"><h2>Assigned cohorts</h2>{cohorts?.length ? <ul>{cohorts.map(cohort=><li key={cohort.id}>{cohort.name} · Form {cohort.zimbabwe_form ?? "—"} · Source Grade {cohort.grade} · {cohort.academic_year} · {cohort.status}</li>)}</ul> : <p>No cohort assignments are currently available to this account.</p>}</section><FacilitatorEvidenceDashboard/>
  </div>;
}
