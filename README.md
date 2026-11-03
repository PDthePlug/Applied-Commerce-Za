# Applied Commerce Zimbabwe

A Zimbabwe-market adaptation of the Applied Commerce® digital learning platform.

This repository was created from the South African `PDthePlug/Applied-Commerce-` baseline. The original repository remains untouched.

## Product scope

The Zimbabwe core programme is now being designed for the **four-year O-Level pathway only: Forms 1–4**.

Forms 5–6 / A-Level are intentionally out of scope. The five authored South African source years are being re-sequenced into four Zimbabwe years and three terms per year, with **Form 4 as the Launch Year**. The runtime currently preserves **382 source lesson units** for traceability; these are not assumed to be 382 classroom periods, because related source lessons can be merged during the Zimbabwe manuscript pass.

## Source correction

The source repository was updated after this Zimbabwe fork was created. Its authoritative correction for **Grade 9 Term 2 lessons 23–34** has now been ported into this repository.

The corrected Grade 9 source contains:

- 75 lessons for the year;
- 18 lessons in source Term 2 rather than 6;
- the restored lesson-number sequence 23–34;
- runtime patch loading and regression tests that protect the restored content.

## Four-year source allocation

| Zimbabwe year | Source material |
| --- | --- |
| Form 1 | Grade 8 |
| Form 2 | Corrected Grade 9 |
| Form 3 | Grade 10 + Grade 11 Terms 1–2 |
| Form 4 | Grade 11 Terms 3–4 + Grade 12 |

See `docs/ZIMBABWE-OLEVEL-ARCHITECTURE.md` for the 12-term delivery model.

## Zimbabwe edition principles

The adaptation preserves the Myah Life Design Framework™, learner evidence model, projects, reflection, recurring narrative and developmental progression while localising the economic and institutional context.

The working alignment lens is Zimbabwe's Heritage-Based Curriculum 2024–2030. This is an **alignment proposition**, not a claim of Ministry approval, ZIMSEC endorsement or prescribed-textbook status.

## Localisation rules

The Zimbabwe edition must localise meaning, not simply replace words.

Examples include:

- DBE framing → Zimbabwe HBC / Ministry context where relevant;
- Grade 8–12 navigation → Forms 1–4 delivery structure;
- four source terms → three Zimbabwe delivery terms per year;
- rand-only examples → credible Zimbabwe multi-currency examples;
- SARS → ZIMRA only where the function is genuinely equivalent;
- NSFAS → verified Zimbabwean tertiary-funding routes, not a fabricated direct equivalent;
- stokvel → mukando / savings-club contexts where appropriate;
- spaza / taxi-rank scenes → credible Zimbabwean trading and transport settings;
- South African school-leaving language → Zimbabwe O-Level and post-O-Level transition language.

See `docs/ZIMBABWE-LOCALISATION.md` for the full editorial standard.

## Runtime status

The platform still stores source content internally using the original Grade 8–12 IDs. This preserves traceability and learner evidence while the Zimbabwe delivery layer is being built.

The final Zimbabwe learner navigation will expose only:

- Form 1;
- Form 2;
- Form 3;
- Form 4 · Launch Year.

## Development

```bash
npm install
npm run dev
npm test
npm run typecheck
npm run lint
npm run build
```

## Source-preservation rule

Do not manufacture lesson numbering, silently remove authored tension, or bulk-replace national terms without checking meaning. Zimbabwe localisation is an editorial restructuring, not a string-replacement exercise.

## Installable app

The Zimbabwe edition has its own PWA identity (AC Zimbabwe), Android/desktop install controls in Settings → Install app, Safari installation guidance and standalone launch metadata. The worker caches only the public offline recovery page and icons. It never caches account pages, API responses, authentication callbacks, RSC payloads or learner answers.

An already open lesson can continue saving responses in the existing account-scoped local store while offline. Reopening pages, loading lessons, sign-in and staff tools require connectivity; installation does not download the curriculum. Online events restart account synchronisation, and failed curriculum-metadata requests can retry. Replacement workers wait until existing app windows close instead of reloading active lessons.

Validation: `npm ci`, `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`, then `npx playwright test tests/browser/pwa.spec.mjs`. The browser tests cover manifest/icon dimensions and worker headers, install event dismissal/completion, responsive settings, offline answer persistence and recovery, and the cache allowlist. Cloud sync against the live Zimbabwe backend and physical Android/iOS installation must be checked separately before claiming those paths are verified.
