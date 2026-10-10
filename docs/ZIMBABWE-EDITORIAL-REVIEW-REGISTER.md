# Zimbabwe Editorial Review Register

**Baseline reviewed:** `fee6e81b2d329350663bc4419795b76cec7c6b7b`  
**Status:** Open — not approved for learner-facing publication  
**Scope:** Form 1–4 runtime, source-content residue, Zimbabwe legal/financial accuracy, three-term placement, HBC alignment, and narrative continuity.

## What automation establishes

The CI suite passes the current structural checks: 382 uniquely placed lessons across 12 Form/Term slots, Grade 9 Term 2 restoration, all-forms runtime keyword scan, three assessment placements, and HBC metadata coverage. These checks do not certify that every lesson is locally accurate or editorially complete.

The source-level review scripts report these review flags at the baseline:

| Source block | Lessons scanned | Lessons flagged |
|---|---:|---:|
| Form 2 / source Grade 9 | 75 | 64 |
| Form 3 / source Grade 10 Terms 1–4 plus source Grade 11 Terms 1–2 | 116 | 100 |
| Form 4 / source Grade 11 Terms 3–4 plus source Grade 12 | 112 | 93 |

A source flag is a review lead, not an automatic defect count. For example, a historical reference to a learner's earlier Grade may be valid narrative continuity, while an instruction to research a South African credit score is not suitable for the Zimbabwe edition without rewriting.

### Source-flag reconciliation completed

The flagged IDs from these three CI outputs were cross-checked against `zimbabweContentOverrides` at the current feature head:

| Source block | Flagged IDs | Explicit unit-level override | Missing override |
|---|---:|---:|---:|
| Form 2 / source Grade 9 | 64 | 64 | 0 |
| Form 3 / source Grade 10 + Grade 11 Terms 1–2 | 100 | 100 | 0 |
| Form 4 / source Grade 11 Terms 3–4 + Grade 12 | 93 | 93 | 0 |
| **Total** | **257** | **257** | **0** |

The all-forms runtime audit was also expanded to check spelled-out South African institutions and named South African legal instruments; the audit passed on the updated branch. This establishes explicit overlay coverage and no matches for the defined runtime markers. It does **not** by itself prove every remaining financial/legal claim is current or legally correct in Zimbabwe, nor does an override's presence alone constitute editorial approval.

## Required editorial decisions

### P0 — factual, legal and regulated-finance review

Do not publish the affected passage until a Zimbabwe-specific source has been checked or the claim has been rewritten as a non-jurisdictional concept.

- Tax, PAYE, VAT, deductions, thresholds and tax-planning examples.
- Credit scores, consumer credit and credit-reporting instructions.
- TFSA, retail bonds, investment accounts, retirement annuities and pension products.
- Insurance, medical cover, worker injury/liability, and compensation examples.
- Wills, witness eligibility, trusts, beneficiaries, estate administration and succession.
- Funding, university admissions, scholarships and school-to-tertiary transition routes.
- Fraud examples that name a South African authority or describe jurisdiction-specific enforcement powers.

### P1 — rebuild Zimbabwe economic context

Rewrite the example as a whole rather than globally substituting a country name, currency token or shop label.

- Replace rand-denominated budgets, prices, salaries, loan repayments, savings and investment tables with internally consistent Zimbabwe-credible scenarios. Choose USD or ZiG intentionally and explain exchange-rate risk where relevant; do not apply a single conversion rate to all source amounts.
- Review references to South Africa, South African locations, JSE, SARS, NSFAS, UNISA, UIF, SDL, DBE and CAPS.
- Rework spaza, stokvel and taxi-rank scenes to use an appropriate Zimbabwe setting such as a tuckshop/neighbourhood trader, mukando/savings club or kombi rank only where the scene meaning supports the change.
- Re-check all examples that assume South African products, laws, education routes, institutions or consumer protections.

### P2 — educational structure and narrative continuity

- Change learner-facing current-stage language from source Grades 8–12 to Forms 1–4 where it refers to the learner's present programme stage.
- Preserve earlier-grade references only when they accurately refer to a character's prior learning, and keep cross-year chronology coherent after the five-source-year to four-form re-sequencing.
- Review names, character ages, locations, household economics, and recurring story callbacks together.
- Verify that each adapted activity remains feasible for a Zimbabwe learner and produces the evidence expected by the target Form/Term.

## Primary Zimbabwe reference points for factual review

Use these as starting points, record the access/review date in the unit review sheet, and re-check the current version before publishing a claim.

- **PAYE and tax tables:** [ZIMRA — PAYE explained](https://zimra.co.zw/domestic-taxes/individual/paye-explained) and [ZIMRA — tax tables](https://www.zimra.co.zw/domestic-taxes/tax-tables). ZIMRA explains the escalating PAYE scale, points users to current USD/ZiG tables, and notes how mixed-currency salaries are handled. Avoid hard-coded rates or thresholds without a dated source. 
- **Credit records:** [Reserve Bank of Zimbabwe — Central Credit Registry overview](https://www.rbz.co.zw/index.php/financial-stability/credit-registry/overview). Use the registry's current guidance rather than South African credit-score services.
- **Capital markets and investments:** [SECZ — capital markets in Zimbabwe](https://seczim.co.zw/capital-markets-in-zimbabwe), [SECZ — FAQs on regulated instruments](https://seczim.co.zw/faqs/), and [SECZ — currently licensed entities](https://seczim.co.zw/regulated-entities/). Teach categories and risk principles, and direct learners to current licensed providers; do not imply every source-edition product is locally available.
- **Insurance and pensions:** [Insurance and Pensions Commission — consumer education](https://ipec.co.zw/consumer-education/) and [IPEC — understanding insurance and pensions](https://ipec.co.zw/local-news/understanding-insurance-and-pensions/). Use these for regulator terminology and consumer-protection context; verify specific policy and pension rules against current product terms.
- **Wills and estates:** [Zimbabwe Wills Act (ZimLII)](https://zimlii.org/akn/zw/act/1987/13/eng%402016-12-31), [Administration of Estates Act (ZimLII)](https://zimlii.org/akn/zw/act/ord/1907/6/eng%402025-02-24), and [Administration of Estates Amendment Act, 2024](https://zimlii.org/akn/zw/act/2024/3/eng%402024-11-22). The consolidated Acts page identifies its own update cut-off; check subsequent amendments and qualified legal guidance before treating any classroom summary as current law.

## Targeted high-risk content spot-check — 10 October 2026

These runtime overlays were inspected against the primary references above. This is a recorded spot-check of high-risk examples, not a claim that every unit has received legal review.

| Unit ID | Editorial disposition | Verification basis |
|---|---|---|
| `g10-t1-l03-003` | Replaced South African deductions and TFSA narrative with payslip literacy, lawful deductions and ZIMRA checking. | ZIMRA's PAYE guidance describes PAYE as tax on remuneration and points to current official tables. |
| `g10-t2-l25-025` | Replaced South African credit-score instructions with credit-record learning and the RBZ Central Credit Registry. | RBZ maintains a Central Credit Registry information page. |
| `g10-t2-l26-026` | Replaced named South African vehicles and availability claims with broad categories, risk/liquidity comparisons and a current-provider verification task. | SECZ material describes local shares, collective investment schemes and licensed intermediaries; availability must be rechecked before naming a product. |
| `g10-t3-l41-041` | Replaced South African tax explanation with a conceptual marginal-bracket lesson and explicit current-ZIMRA-table caveat; removed unsupported public-spending and tax-optimisation claims. | ZIMRA describes an escalating PAYE scale and publishes currency-specific tables. |
| `g10-t3-l42-042` | Removed the TFSA limit example and asks learners to verify current applicable rules rather than assume an incentive. | Current ZIMRA guidance is the appropriate source for tax treatment. |
| `g10-t3-l43-043`, `g11-t3-l47-047` | Replaced named South African retirement/tax products with regulated-category and verification language. | IPEC regulates insurance/pensions; SECZ regulates capital-market intermediaries. |
| `g11-t4-l64-064`, `g12-t3-l44-044`, `g12-t3-l45-045` | Removed the South African will-validity checklist; the runtime directs learners to current Zimbabwe law and qualified advice and avoids definitive product/beneficiary rules. | Zimbabwe Wills Act and estate-administration materials are linked above; amendment status must be checked for any precise legal claim. |
| `g12-t1-l03-003` | Replaced South African legal-aid references and frames court limits as requiring current verification. | Zimbabwe's Ministry of Justice lists the Legal Aid Directorate; the Small Claims Courts Act establishes the jurisdictional framework. |

## Publication evidence required per reviewed unit

Each reviewed unit must have a disposition recorded in a durable review sheet:

1. **Reviewed source ID** and exact lesson/assessment version.
2. **Flag and passage** that triggered review.
3. **Disposition:** fixed, valid continuity, generic concept, or intentionally retained with explanation.
4. **Zimbabwe replacement/source** for any factual legal, tax, finance, funding or education claim.
5. **Editorial reviewer and review date.**
6. **Validation:** learner-facing output inspected, source Grade/Term/unit identity preserved, runtime scan rerun, and relevant tests passed.

A green keyword scan alone does not close a review item. A unit is closed only when its text and context have been examined and its disposition is recorded.

## Release decision

**Editorial sign-off remains blocked.** The current runtime keyword scan reports no matches for its limited rule set, but the source audit still surfaces 257 review-flagged lessons across the three source blocks above. These require a unit-by-unit review; the flags must not be cleared by bulk replacement or by changing the audit to ignore them.

Do not represent this product as Ministry-approved, ZIMSEC-prescribed or an official HBC subject. Current HBC mapping is an internal alignment proposal unless separate formal approval evidence is obtained.
