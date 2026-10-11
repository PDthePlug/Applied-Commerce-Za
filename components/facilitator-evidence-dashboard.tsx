"use client";

import { useCallback, useEffect, useState } from "react";

type Review = { id: string; status: string; feedback: string; reviewed_at: string; reviewer_id: string };
type Evidence = {
  id: string; learner_id: string; learner_name: string; response_key: string;
  response_value: string; status: string; captured_at: string; updated_at: string; reviews: Review[];
};

const STATUSES = [
  { value: "in-review", label: "In review" },
  { value: "accepted", label: "Accepted" },
  { value: "needs-revision", label: "Needs revision" },
  { value: "verified", label: "Verified" },
];

export function FacilitatorEvidenceDashboard() {
  const [items, setItems] = useState<Evidence[]>([]);
  const [feedback, setFeedback] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/facilitator/evidence", { cache: "no-store" });
      if (!response.ok) throw new Error(response.status === 401 ? "Sign in to review assigned learner evidence." : "Evidence is unavailable for this account.");
      const data = await response.json() as { evidence: Evidence[] };
      setItems(data.evidence);
      setFeedback(Object.fromEntries(data.evidence.map(item => [item.id, item.reviews[0]?.feedback ?? ""])));
      setStatus(Object.fromEntries(data.evidence.map(item => [item.id, STATUSES.some(option => option.value === item.status) ? item.status : "in-review"])));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Evidence could not be loaded.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { const timer = window.setTimeout(() => { void load(); }, 0); return () => window.clearTimeout(timer); }, [load]);

  async function save(item: Evidence) {
    setSaving(item.id);
    setError("");
    try {
      const response = await fetch("/api/facilitator/evidence", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ evidenceRecordId: item.id, status: status[item.id] ?? "in-review", feedback: feedback[item.id] ?? "", criteriaScores: {} }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({})) as { error?: string };
        throw new Error(body.error ?? "The review could not be saved.");
      }
      await load();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The review could not be saved.");
    } finally {
      setSaving(null);
    }
  }

  return <section className="settings-content" aria-labelledby="evidence-review-title">
    <h2 id="evidence-review-title">Learner evidence and review</h2>
    <p>Only evidence visible through the signed-in account’s assigned cohorts or authorised institution scope is returned by the database.</p>
    {error && <p role="alert">{error}</p>}
    {loading ? <p>Loading assigned evidence…</p> : items.length === 0
      ? <p>No learner evidence is currently available in this account’s assigned scope.</p>
      : <div className="settings-list">{items.map(item => <article className="settings-content" key={item.id}>
        <p className="eyebrow">{item.learner_name} · {item.status}</p>
        <h3>{item.response_key}</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{item.response_value || "No response text recorded."}</p>
        <label>Review status
          <select value={status[item.id] ?? "in-review"} onChange={event => setStatus(current => ({ ...current, [item.id]: event.target.value }))}>
            {STATUSES.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label>Feedback
          <textarea value={feedback[item.id] ?? ""} onChange={event => setFeedback(current => ({ ...current, [item.id]: event.target.value }))} maxLength={4000} rows={3} placeholder="Give specific, actionable feedback…" />
        </label>
        <button className="primary-button" type="button" disabled={saving === item.id} onClick={() => void save(item)}>{saving === item.id ? "Saving review…" : "Save review"}</button>
      </article>)}</div>}
  </section>;
}
