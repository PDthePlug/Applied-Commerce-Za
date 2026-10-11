create or replace function private.can_manage_cohort_enrolments(target_cohort uuid)
returns boolean
language sql
stable
security definer
set search_path to ''
as $function$
  select (select auth.uid()) is not null and (
    private.is_platform_admin()
    or private.is_cohort_staff_member(target_cohort)
    or exists (
      select 1
      from public.cohorts c
      where c.id = target_cohort
        and private.has_school_role(c.school_id, array['owner'::text, 'admin'::text])
    )
  );
$function$;

drop policy if exists "cohort staff delete enrolments" on public.cohort_enrolments;
create policy "cohort staff delete enrolments"
on public.cohort_enrolments
for delete to authenticated
using (private.can_manage_cohort_enrolments(cohort_id));

drop policy if exists "cohort staff insert enrolments" on public.cohort_enrolments;
create policy "cohort staff insert enrolments"
on public.cohort_enrolments
for insert to authenticated
with check (private.can_manage_cohort_enrolments(cohort_id));

drop policy if exists "cohort staff update enrolments" on public.cohort_enrolments;
create policy "cohort staff update enrolments"
on public.cohort_enrolments
for update to authenticated
using (private.can_manage_cohort_enrolments(cohort_id))
with check (private.can_manage_cohort_enrolments(cohort_id));
