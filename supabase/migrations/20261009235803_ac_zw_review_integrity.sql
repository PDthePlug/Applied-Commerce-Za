-- Prevent duplicate reviews by the same facilitator for one evidence record.
create unique index if not exists evidence_reviews_record_reviewer_uidx
  on public.evidence_reviews (evidence_record_id, reviewer_id);
