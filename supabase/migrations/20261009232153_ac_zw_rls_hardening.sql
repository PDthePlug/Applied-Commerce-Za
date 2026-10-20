-- AC Zimbabwe first-pass security/performance hardening.
-- Platform admin authority is held only in the private registry; client roles cannot read or mutate it.
create policy platform_admin_registry_deny_client_access
  on private.platform_admins as permissive for all to anon, authenticated
  using (false) with check (false);

-- Keep the unique constraints as the canonical indexes; remove redundant standalone duplicates.
drop index if exists public.cohort_enrolments_cohort_learner_uidx;
drop index if exists public.cohort_staff_cohort_user_uidx;
drop index if exists public.school_memberships_school_user_uidx;
create index if not exists platform_admins_granted_by_idx
  on private.platform_admins (granted_by);

-- Combine overlapping evidence policies so each authenticated write is checked once.
drop policy if exists "assigned staff inserts evidence" on public.evidence_records;
drop policy if exists "learner inserts own evidence" on public.evidence_records;
create policy evidence_records_insert_learner_or_assigned_staff
  on public.evidence_records for insert to authenticated
  with check (
    learner_id = (select auth.uid())
    or private.can_review_learner(learner_id)
  );

drop policy if exists "learner or assigned staff updates evidence" on public.evidence_records;
drop policy if exists "learner updates own evidence" on public.evidence_records;
create policy evidence_records_update_learner_or_assigned_staff
  on public.evidence_records for update to authenticated
  using (
    learner_id = (select auth.uid())
    or private.can_review_learner(learner_id)
  )
  with check (
    learner_id = (select auth.uid())
    or private.can_review_learner(learner_id)
  );
