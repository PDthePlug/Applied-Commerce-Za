import type { Metadata } from "next";
import "../settings/settings.css";
import { requireWorkspaceAccess } from "@/lib/server/workspace-access";
import { createClient } from "@/lib/supabase/server";
export const metadata: Metadata = { title: "Facilitator workspace" };

export default async function FacilitatorWorkspacePage() {
  const access = await requireWorkspaceAccess("facilitator");
  const supabase = await createClient();
  const { data: cohorts } = access.cohortIds.length
    ? await supabase.from("cohorts").select("id,name,grade,academic_year,status").in("id", access.cohortIds).order("academic_year", { ascending: false })
    : await supabase.from("cohorts").select("id,name,grade,academic_year,status").limit(0);
  return <div className="settings-page">
    <header className="settings-header"><p className="eyebrow">Protected workspace</p><h1>Facilitator workspace</h1><p className="settings-intro">Signed in as {access.user.email ?? "an authorised account"}. This route is available only to assigned cohort staff, institution administrators and platform administrators.</p></header>
    <section className="settings-content"><h2>Assigned cohorts</h2>{cohorts?.length ? <ul>{cohorts.map(cohort=><li key={cohort.id}>{cohort.name} · Source Grade {cohort.grade} · {cohort.academic_year} · {cohort.status}</li>)}</ul> : <p>No cohort assignments are currently available to this account.</p>}<p>The role gate is active. Learner evidence review, reporting and cohort operations will be ported in the next isolated workspace change.</p></section>
  </div>;
}
