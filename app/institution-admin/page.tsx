import type { Metadata } from "next";
import "../settings/settings.css";
import { requireWorkspaceAccess } from "@/lib/server/workspace-access";
import { createClient } from "@/lib/supabase/server";
import { InstitutionAdminDashboard } from "@/components/institution-admin-dashboard";
export const metadata: Metadata = { title: "Institution administration" };

export default async function InstitutionAdminPage() {
  const access = await requireWorkspaceAccess("institution-admin");
  const supabase = await createClient();
  const { data: schools } = access.isPlatformAdmin
    ? await supabase.from("schools").select("id,name,slug,status").order("name")
    : access.institutionAdminIds.length
      ? await supabase.from("schools").select("id,name,slug,status").in("id", access.institutionAdminIds).order("name")
      : { data: [] };
  return <div className="settings-page">
    <header className="settings-header"><p className="eyebrow">Protected workspace</p><h1>Institution administration</h1><p className="settings-intro">Signed in as {access.user.email ?? "an authorised account"}. Access is limited to institutions where this account has an active owner/admin membership, unless the trusted platform-admin registry grants broader authority.</p></header>
    <section className="settings-content"><h2>Authorised institutions</h2>{schools?.length ? <ul>{schools.map(school=><li key={school.id}>{school.name} · {school.slug} · {school.status}</li>)}</ul> : <p>No institution administration assignments are currently available to this account.</p>}</section><InstitutionAdminDashboard/>
  </div>;
}
