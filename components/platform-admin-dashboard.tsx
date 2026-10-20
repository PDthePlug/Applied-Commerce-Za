"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type School = { id: string; name: string; slug: string; status: string; created_at: string };
type Membership = { school_id: string; user_id: string; role: string; status: string };
type Cohort = { id: string; school_id: string; name: string; zimbabwe_form: number | null; grade: number; academic_year: number; status: string };
type Data = { schools: School[]; memberships: Membership[]; cohorts: Cohort[] };

export function PlatformAdminDashboard() {
  const [data, setData] = useState<Data>({ schools: [], memberships: [], cohorts: [] });
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/platform-admin/institutions", { cache: "no-store" });
      if (!response.ok) throw new Error(response.status === 403 ? "This account is not registered as a platform administrator." : "Platform data is unavailable.");
      setData(await response.json() as Data);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Platform data could not be loaded.");
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { const timer = window.setTimeout(() => { void load(); }, 0); return () => window.clearTimeout(timer); }, [load]);

  async function createInstitution(event: FormEvent) {
    event.preventDefault();
    setBusy(true); setError(""); setMessage("");
    try {
      const response = await fetch("/api/platform-admin/institutions", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, slug: slug.trim().toLowerCase(), ownerEmail }),
      });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Institution could not be created.");
      setMessage("Institution created and the initial owner membership assigned.");
      setName(""); setSlug(""); setOwnerEmail("");
      await load();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Institution could not be created.");
    } finally { setBusy(false); }
  }

  const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return <section className="settings-content">
    <h2>Platform operations</h2>
    <p>This workspace is guarded by the private platform-admin registry. Institution creation uses a database function that creates the school and grants an initial owner to an existing account in one operation.</p>
    {message && <p role="status">{message}</p>}
    {error && <p role="alert">{error}</p>}
    <div className="settings-content">
      <h3>Create institution and assign owner</h3>
      <form onSubmit={event => void createInstitution(event)}>
        <label>Institution name<input value={name} onChange={event => { setName(event.target.value); if (!slug || slug === slugify(name)) setSlug(slugify(event.target.value)); }} maxLength={160} required placeholder="e.g. Mbare Learning Centre" /></label>
        <label>Institution slug<input value={slug} onChange={event => setSlug(slugify(event.target.value))} maxLength={100} required pattern="[a-z0-9]+(-[a-z0-9]+)*" placeholder="mbare-learning-centre" /></label>
        <label>Existing owner account email<input type="email" value={ownerEmail} onChange={event => setOwnerEmail(event.target.value)} maxLength={254} required /></label>
        <button className="primary-button" type="submit" disabled={busy}>{busy ? "Creating institution…" : "Create institution"}</button>
      </form>
    </div>
    <div className="settings-content">
      <h3>Institutions</h3>
      {loading ? <p>Loading platform data…</p> : data.schools.length ? <ul>{data.schools.map(school => {
        const members = data.memberships.filter(item => item.school_id === school.id);
        const cohorts = data.cohorts.filter(item => item.school_id === school.id);
        const owners = members.filter(item => item.role === "owner" && item.status === "active").length;
        return <li key={school.id}><strong>{school.name}</strong> · {school.slug} · {school.status}<p>{owners} active owner(s) · {members.length} membership(s) · {cohorts.length} cohort(s)</p>{cohorts.map(cohort => <p key={cohort.id}>Form {cohort.zimbabwe_form ?? "—"} · {cohort.name} · {cohort.academic_year}</p>)}</li>;
      })}</ul> : <p>No institutions have been created yet.</p>}
    </div>
  </section>;
}
