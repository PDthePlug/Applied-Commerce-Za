"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type School = { id: string; name: string; slug: string; status: string };
type Cohort = { id: string; school_id: string; name: string; grade: number; zimbabwe_form: number | null; academic_year: number; status: string };
type Membership = { id: string; school_id: string; user_id: string; role: string; status: string };
type Staff = { id: string; cohort_id: string; user_id: string; role: string; status: string };
type Enrolment = { id: string; cohort_id: string; learner_id: string; learner_name: string; status: string; enrolled_at: string };
type Data = { schools: School[]; cohorts: Cohort[]; memberships: Membership[]; staff: Staff[]; enrolments: Enrolment[] };

async function postAction(body: Record<string, unknown>) {
  const response = await fetch("/api/institution-admin", {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({})) as { error?: string };
  if (!response.ok) throw new Error(data.error ?? "The action could not be completed.");
}

export function InstitutionAdminDashboard() {
  const [data, setData] = useState<Data>({ schools: [], cohorts: [], memberships: [], staff: [], enrolments: [] });
  const [schoolId, setSchoolId] = useState("");
  const [cohortId, setCohortId] = useState("");
  const [cohortName, setCohortName] = useState("");
  const [form, setForm] = useState("1");
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [memberEmail, setMemberEmail] = useState("");
  const [memberRole, setMemberRole] = useState("educator");
  const [staffEmail, setStaffEmail] = useState("");
  const [staffRole, setStaffRole] = useState("educator");
  const [learnerEmail, setLearnerEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/institution-admin", { cache: "no-store" });
      if (!response.ok) throw new Error("Institution data is unavailable for this account.");
      const next = await response.json() as Data;
      setData(next);
      setSchoolId(current => next.schools.some(item => item.id === current) ? current : next.schools[0]?.id ?? "");
      setCohortId(current => next.cohorts.some(item => item.id === current) ? current : next.cohorts[0]?.id ?? "");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Institution data could not be loaded.");
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { const timer = window.setTimeout(() => { void load(); }, 0); return () => window.clearTimeout(timer); }, [load]);

  async function act(event: FormEvent, body: Record<string, unknown>, success: string) {
    event.preventDefault();
    setBusy(true); setError(""); setMessage("");
    try {
      await postAction(body);
      setMessage(success);
      await load();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The action could not be completed.");
    } finally { setBusy(false); }
  }

  const cohorts = data.cohorts.filter(item => !schoolId || item.school_id === schoolId);
  const cohortNameFor = (id: string) => data.cohorts.find(item => item.id === id)?.name ?? "Cohort";
  const schoolNameFor = (id: string) => data.schools.find(item => item.id === id)?.name ?? "Institution";

  return <section className="settings-content">
    <h2>Institution operations</h2>
    <p>Changes are checked against active institution memberships and cohort assignments by the database. Email actions require the person to already have an Applied Commerce account.</p>
    {message && <p role="status">{message}</p>}
    {error && <p role="alert">{error}</p>}
    {loading ? <p>Loading authorised institution data…</p> : data.schools.length === 0 ? <p>No institutions are assigned to this account.</p> : <>
      <div className="settings-content">
        <h3>Create a cohort</h3>
        <form onSubmit={event => void act(event, { action: "create-cohort", schoolId, name: cohortName, form: Number(form), academicYear: Number(year) }, "Cohort created.")}>
          <label>Institution<select value={schoolId} onChange={event => setSchoolId(event.target.value)}>{data.schools.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
          <label>Cohort name<input value={cohortName} onChange={event => setCohortName(event.target.value)} maxLength={120} required placeholder="e.g. Form 2 Enterprise — 2026" /></label>
          <label>Zimbabwe Form<select value={form} onChange={event => setForm(event.target.value)}>{[1,2,3,4].map(value => <option key={value} value={value}>Form {value}</option>)}</select></label>
          <label>Academic year<input type="number" min={2020} max={2100} value={year} onChange={event => setYear(event.target.value)} required /></label>
          <button className="primary-button" disabled={busy} type="submit">Create cohort</button>
        </form>
      </div>
      <div className="settings-content">
        <h3>Add an institution member</h3>
        <form onSubmit={event => void act(event, { action: "add-member", schoolId, email: memberEmail, role: memberRole }, "Institution membership updated.")}>
          <label>Institution<select value={schoolId} onChange={event => setSchoolId(event.target.value)}>{data.schools.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
          <label>Existing account email<input type="email" value={memberEmail} onChange={event => setMemberEmail(event.target.value)} required /></label>
          <label>Institution role<select value={memberRole} onChange={event => setMemberRole(event.target.value)}><option value="educator">Educator</option><option value="admin">Administrator</option></select></label>
          <button className="primary-button" disabled={busy} type="submit">Add member</button>
        </form>
      </div>
      <div className="settings-content">
        <h3>Assign facilitator</h3>
        <form onSubmit={event => void act(event, { action: "add-cohort-staff", cohortId, email: staffEmail, role: staffRole }, "Facilitator assignment updated.")}>
          <label>Cohort<select value={cohortId} onChange={event => setCohortId(event.target.value)}>{cohorts.map(item => <option key={item.id} value={item.id}>{schoolNameFor(item.school_id)} · {item.name}</option>)}</select></label>
          <label>Existing account email<input type="email" value={staffEmail} onChange={event => setStaffEmail(event.target.value)} required /></label>
          <label>Facilitator role<select value={staffRole} onChange={event => setStaffRole(event.target.value)}><option value="lead">Lead facilitator</option><option value="educator">Educator</option><option value="assistant">Assistant</option></select></label>
          <button className="primary-button" disabled={busy || cohorts.length === 0} type="submit">Assign facilitator</button>
        </form>
      </div>
      <div className="settings-content">
        <h3>Enrol a learner</h3>
        <form onSubmit={event => void act(event, { action: "enrol-learner", cohortId, email: learnerEmail }, "Learner enrolled.")}>
          <label>Cohort<select value={cohortId} onChange={event => setCohortId(event.target.value)}>{cohorts.map(item => <option key={item.id} value={item.id}>{schoolNameFor(item.school_id)} · {item.name}</option>)}</select></label>
          <label>Existing learner account email<input type="email" value={learnerEmail} onChange={event => setLearnerEmail(event.target.value)} required /></label>
          <button className="primary-button" disabled={busy || cohorts.length === 0} type="submit">Enrol learner</button>
        </form>
      </div>
      <div className="settings-content">
        <h3>Current cohorts and assignments</h3>
        {data.cohorts.length ? <ul>{data.cohorts.map(item => <li key={item.id}>{schoolNameFor(item.school_id)} · {item.name} · Form {item.zimbabwe_form ?? "—"} · Source Grade {item.grade} · {item.academic_year} · {item.status}</li>)}</ul> : <p>No cohorts have been created yet.</p>}
        <h3>Institution members</h3>
        <ul>{data.memberships.map(item => <li key={item.id}>{schoolNameFor(item.school_id)} · {item.role} · {item.status}</li>)}</ul>
        <h3>Facilitator assignments</h3>
        <ul>{data.staff.map(item => <li key={item.id}>{cohortNameFor(item.cohort_id)} · {item.role} · {item.status}</li>)}</ul>
        <h3>Learner enrolments</h3>
        <ul>{data.enrolments.map(item => <li key={item.id}>{cohortNameFor(item.cohort_id)} · {item.learner_name} · {item.status}</li>)}</ul>
      </div>
    </>}
  </section>;
}
