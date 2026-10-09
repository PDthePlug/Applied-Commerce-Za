-- Preserve the Zimbabwe delivery identity alongside the source curriculum grade.
-- Grade/term/unit_id remain the stable source identity used by the compiler and existing content.
alter table public.learner_profiles
  add column if not exists current_form smallint;

alter table public.learner_profiles
  drop constraint if exists learner_profiles_current_form_check;

alter table public.learner_profiles
  add constraint learner_profiles_current_form_check
  check (current_form is null or current_form between 1 and 4);
