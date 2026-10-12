# ACSA Enhancement Parity & Zimbabwe Adaptation Register

**Baseline date:** 12 October 2026  
**South African source repository:** `PDthePlug/Applied-Commerce-`  
**South African main at audit:** `4d05279d63f026bf6bae5006c369586e94fbd95a`  
**Zimbabwe target repository:** `PDthePlug/Applied-Commerce-Za`  
**Zimbabwe audit baseline:** `7cfb0ca671f7fb84034bf59971719173326c9123` (`feat/ac-zw-learning-persistence`)  
**Status:** Inventory opened; no feature parity or release approval is implied by this register.

## Objective

Continuously absorb the useful platform, learner-experience, accessibility, security, and testing improvements from ACSA into AC Zimbabwe, adapting them to Zimbabwe's product and curriculum rather than blindly copying or merging South African code.

## Non-negotiable boundaries

- Keep Zimbabwe's dedicated Supabase project `hkarxzjmttjetotduvyx`, Vercel project, credentials, user records, institution data, and platform-admin registry separate from Applied Commerce Main.
- Preserve Zimbabwe Forms 1–4, the Grade 8–12 source mapping, three-term delivery model, existing stable lesson/source IDs, HBC alignment, Zimbabwe-localised curriculum, and the BIS/Unified Learner Document presentation pipeline.
- Never import South African legal, tax, financial, curriculum, institution, or policy content as Zimbabwe fact. Localise and verify against Zimbabwe primary sources.
- Never copy migrations or migration-ledger edits without comparing actual schemas, grants, RLS policies, triggers, functions, and migration history. Do not replay SA migrations in the ZW project.
- Do not use service-role bypasses, weaken RLS to make tests pass, or count a UI response as proof of a successful write. Every positive write journey must read the persisted value back; every denial journey must assert both the denial and absence of side effects.
- A feature is not complete until its adapted tests pass on the exact candidate commit. Production deployment status is separate from product acceptance and editorial sign-off.

## ACSA source inventory and adaptation decisions

| ACSA source / capability | Current evidence | Zimbabwe disposition | Priority / acceptance evidence |
|---|---|---|---|
| PR #25, merged: BIS-style profile and settings; per-account appearance, accent, text size and reading width; validated preferences API and owner-only RLS | ACSA main includes the profile/settings architecture. ZW PR #2 already ports authentication and Zimbabwe Form 1–4 preferences. | **Parity audit, then fill gaps.** Preserve Form 1–4 options and account-owned settings. Compare validation, no-store behavior, failed-save rollback, password change/reset, account-switch race protection, and RLS. | P1. Browser test each setting, reload and verify persistence; switch accounts and prove no cross-account preference bleed; test invalid payload and unauthenticated denial. |
| PR #27, merged: dark/system theme contrast, settings persistence, stale-request protection | ACSA main contains the merged theme and preference hardening. | **Port/adapt.** The recent Zimbabwe lesson-card/text contrast defect makes this a high-priority visual parity item. Map SA tokens to ZW `foundation.css`, `reader.css`, `presentation.css`, `responsive.css`, and document-system styles; retain light/warm themes and Zimbabwe brand choices. | P0. Browser checks at phone and desktop widths, light/dark/system modes, every appearance/accent/text-size/reading-width option; assert computed foreground/background contrast for lesson prose, cards, tables, workbook and assessment controls; confirm saved preferences survive reload. |
| PR #28, dark-mode lesson/card contrast branch | Source PR exists; merge/production status must be rechecked against live ACSA main before using it as an authoritative merged implementation. | **Inspect exact diff and CI first; then port only the necessary, non-duplicated fixes.** Do not assume the PR's state from its title alone. | P0, coupled to the theme acceptance matrix above. |
| PR #29, merged: learner portfolio progressive disclosure | ACSA main commit `4d05279` collapses captured responses, supporting evidence, earlier answers and repeated portfolio instructions while keeping key context visible. | **Port/adapt the interaction pattern.** Keep response data, review status, feedback, stable prompt IDs, lesson links, and historic/legacy answers intact. Use semantic native disclosures and visible focus styles; do not collapse assessment instructions or active response controls. | P1. Browser tests for collapsed defaults, counts, expand/collapse keyboard use, evidence links, historical response preservation, facilitator review fields and narrow-screen layout. |
| PR #30, portfolio disclosure regression hardening | Open/draft source branch in the audit snapshot. Adds regression coverage for collapsed evidence and retention of historical answers/review fields. | **Use as a test-design source after checking its latest status and CI.** Adapt assertions to ZW's portfolio and BIS renderer, not copied selectors. | P1. Regression tests must fail if response/review fields disappear, historical values mutate, or the summary/count becomes inaccurate. |
| PR #22, platform-admin learning sync and account access | Merged ACSA history. | **Audit against ZW's explicit rule that staff/admin accounts cannot be converted into learner records by sync.** Port only safeguards or UX not already present. | P1. Test both platform admins, sign-in/out, role switch, learner-state endpoints, and absence of unwanted learner profiles. |
| PRs #13–16, institutional provisioning, facilitator operations, platform-admin authorization | Merged ACSA history; ZW PRs #1–4 now include corresponding schema, scoped workspaces, institution operations, facilitator review and platform-admin provisioning. | **Runtime parity and security verification, not blind feature copying.** Compare business behavior, status/error handling, auditability and UI. Keep Zimbabwe cohort/Form semantics. | P0. Authenticated learner, facilitator, institution-admin and both platform-admin journeys; positive writes with database read-back; cross-user/cross-cohort/cross-institution denial with no side effects; zero skipped tests. |
| PR #21 and PR #26, schema/migration and canonical backend reconciliation | ACSA is reconciling its own canonical Supabase target and migration history. | **Process/diagnostic patterns only. Do not port ACSA's project reference or migration ledger.** ZW stays on its own backend and must reconcile its own ledger to its own migrations. | P0. Exact source-to-live schema/ledger reconciliation and authenticated acceptance before any future migration or environment change. |
| PR #31, feature-branch/environment reconciliation | Open documentation branch in the audit snapshot, intended to classify branches, migration drift and role acceptance. | **Adopt the inventory discipline.** Maintain a ZW-specific branch-to-feature/migration/test map; classify each change as already present, adapt, superseded, or reject. | P1. Every candidate enhancement has source SHA, ZW target files, risk, tests, and acceptance status recorded. |

## Current ZW baseline already present — verify, do not duplicate

The current Zimbabwe feature chain already contains:
- Dedicated Supabase schema and RLS hardening, private platform-admin registry, role-scoped workspace guards and account preferences.
- Authenticated learning-state persistence with user-partitioned local storage, merge-on-sign-in behavior, progress/notes/response writes and staff/admin sync restrictions.
- Institution/cohort operations, facilitator evidence queue/review route, platform-admin institution provisioning, and cross-institution authorization tests.
- Generated database types and Zimbabwe-specific editorial/source review register.

These capabilities are **implemented in the candidate branch, not all fully accepted at runtime**. The latest authenticated browser suite recorded 28 passed, 1 failed, 0 skipped; facilitator evidence-review persistence returned HTTP 503 due to an RLS denial. Resolve this by identifying the real request identity/scope and preserving the policy boundary—not by weakening RLS. Re-run all positive write/read-back and denial tests after correction.

## Execution order

1. **Re-baseline ACSA source.** Re-read current `main`, all open PRs, latest workflow outcomes, and recently merged commits before each port. A PR title or stale summary is not proof that its code is merged or production-ready.
2. **Create a capability diff.** For each source change, record exact source commit/PR, relevant files and tests, current ZW equivalent, gap, and disposition. Prefer behavior-level adaptation over cherry-picking whole commits.
3. **P0: fix the visible reader/theme parity gap** and add responsive, contrast-aware browser acceptance.
4. **P0: finish authenticated role acceptance and persistence correctness.** Resolve facilitator review RLS/runtime identity; assert institution-admin positive cohort creation/read-back separately from expected cross-institution denial; verify both platform-admin accounts; no skipped tests or false successes.
5. **P1: adapt portfolio progressive disclosure** and its historical-response/review-field regression suite.
6. **P1: complete settings/preference parity and stale-account race checks.**
7. **Re-run the full suite on one exact candidate SHA**, inspect the diff and schema implications, and record evidence in this register.
8. **Keep editorial sign-off independent.** Zimbabwe lesson-level legal and financial review remains open until passage-level dispositions, named reviewer/date, and current primary-source evidence are recorded.
9. Only after all relevant technical and editorial gates pass may the exact verified SHA be considered for production promotion.

## Gate status at this baseline

- ACSA enhancement inventory: **in progress**
- Zimbabwe visual/theme parity: **not yet certified**
- Zimbabwe authenticated browser acceptance: **blocked** (28 passed / 1 failed / 0 skipped in the latest recorded run)
- Zimbabwe lesson-level legal/financial sign-off: **open**
- Production release certification: **not granted by this register**
