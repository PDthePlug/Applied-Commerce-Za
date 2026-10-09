import type { Metadata } from "next";
import "../settings/settings.css";
import { requireWorkspaceAccess } from "@/lib/server/workspace-access";
import { createClient } from "@/lib/supabase/server";
export const metadata: Metadata = { title: "Platform administration" };

export default async function PlatformAdminPage() {
  const access = await requireWorkspaceAccess("platform-admin");
  const supabase = await createClient();
  const { data: schools } = await supabase.from("schools").select("id,name,slug,status").order("name");
  return <div className="settings-page">
    <header className="settings-header"><p className="eyebrow">Trusted platform-admin registry</p><h1>Platform administration</h1><p className="settings-intro">Signed in as {access.user.email ?? "an authorised account"}. This workspace requires an active record in the private platform-admin registry; profile metadata and client-selected roles do not grant access.</p></header>
    <section className="settings-content"><h2>Institutions</h2>{schools?.length ? <ul>{schools.map(school=><li key={school.id}>{school.name} · {school.slug} · {school.status}</li>)}</ul> : <p>No institutions have been created yet.</p>}<p>The registry-backed role gate is active. Institution provisioning and operational controls will be ported in the next isolated workspace change.</p></section>
  </div>;
}
