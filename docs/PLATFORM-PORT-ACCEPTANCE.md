# AC Zimbabwe platform-port acceptance gates

This checklist is the release gate for the AC platform foundation port. A database schema being present is **not** proof that the application is ready to use it.

## Current foundation state

- [x] Dedicated Supabase project exists separately from AC Main.
- [x] Schema-only platform migration applied; no South African user or learner rows were copied.
- [x] Source Grade 8–12 and Term 1–4 identities remain intact in persistence; Zimbabwe delivery mapping remains owned by the Zimbabwe curriculum layer.
- [x] RLS enabled on platform tables and private platform-admin registry denied to anon/authenticated clients.
- [x] Supabase security advisor has no current findings after first-pass hardening.
- [ ] Application auth/session integration.
- [ ] Authenticated role tests against real users and the dedicated project.
- [ ] Vercel preview configuration and end-to-end tests.
- [ ] Production backend activation.

## Required role-based acceptance

Use separate test accounts and at least two institutions/cohorts. Test direct route navigation and direct database/API access, not just hidden navigation.

### Learner
- [ ] Can access own profile, preferences, progress, notes, prompt responses and portfolio.
- [ ] Cannot read or mutate another learner's rows by changing IDs.
- [ ] Cannot access facilitator, institution administration or platform administration routes.
- [ ] Reload/sign-in on a second browser restores server-persisted state without changing curriculum unit IDs.

### Facilitator
- [ ] Can view learners only in assigned cohorts and only perform permitted evidence/review actions.
- [ ] Cannot manage school membership, create institutions or grant platform-admin access.
- [ ] Cannot read another facilitator's unassigned cohort or learner data through direct API calls.

### Institution administrator
- [ ] Can manage only the institution(s) with an active owner/admin membership.
- [ ] Cannot access another institution by changing school/cohort IDs.
- [ ] Cannot grant platform-admin authority or bypass trusted role registry.

### Platform administrator
- [ ] Authority comes only from the private `platform_admins` registry, never user-editable profile metadata or JWT role claims.
- [ ] Can create/manage institutions and administer operational workflows.
- [ ] Private registry cannot be read or modified by anon/authenticated clients.
- [ ] Administrative actions are auditable.

## Curriculum regression gate

- [ ] Run `npm test`, `npm run typecheck`, `npm run lint`, `npm run build` and browser tests.
- [ ] All existing Form 1–4, three-term delivery, source-to-Form mapping, Grade 9 lessons 23–34, HBC, assessment-placement and navigation-boundary tests pass unchanged.
- [ ] Compare compiler/runtime output and unit IDs before/after the platform port; no curriculum resequencing or identity drift is accepted.

## Activation rule

Keep `NEXT_PUBLIC_APPLIED_COMMERCE_BACKEND_MODE=local` until the full authenticated acceptance suite passes. Do not add credentials to Vercel or switch production runtime mode before that gate is reviewed.
