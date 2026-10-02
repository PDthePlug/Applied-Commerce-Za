# Zimbabwe O-Level Architecture

## Decision

The core Zimbabwe edition of Applied Commerce will run across **Forms 1–4 only**.

Forms 5–6 / A-Level are intentionally out of scope for this edition. The current five-year South African source sequence will be compressed and re-sequenced into the four-year Zimbabwe O-Level pathway, with **Form 4 as the launch year**.

This avoids forcing a five-year Grade 8–12 model into a six-year Zimbabwe secondary structure and keeps the programme aligned to the point where most learners complete O-Level and make consequential post-school decisions.

## Source correction before restructuring

The authoritative South African repository now includes a repair for the previously incomplete Grade 9 Term 2 sequence.

The Zimbabwe repository has imported that source correction:

- Grade 9 Term 2 now contains **18 lessons** rather than 6.
- The missing numbered lessons **23–34 inclusive** are restored from the original `PDthePlug/Applied-Commerce-` repository.
- The corrected Grade 9 source now contains **75 lessons** across the year.
- The patch loader, curriculum metadata, types, rendering normalization and curriculum tests have all been ported with the restored content.

The Zimbabwe restructuring must therefore use the corrected Grade 9 source, not the older incomplete bundle.

## Four-year source allocation

| Zimbabwe year | Primary source material | Source lessons | Role in progression |
| --- | --- | ---: | --- |
| Form 1 | Grade 8 | 79 | Identity, money foundations, habits, budgeting and first capstone |
| Form 2 | Grade 9 corrected source | 75 | Work, value, enterprise, execution and community projects |
| Form 3 | Grade 10 + Grade 11 Terms 1–2 | 116 | Assets, systems, investing, leverage, leadership and responsibility |
| Form 4 | Grade 11 Terms 3–4 + Grade 12 | 112 | Advanced wealth, legacy, adulthood, work, risk and Life Launch |

This uses all five authored source years while ending the Zimbabwe core programme at O-Level.

## Twelve-term delivery model

Zimbabwe uses three school terms per year. The four-year product therefore has **12 delivery terms**.

### Form 1 — Identity, Money & Habits

**Term 1 — Identity, Beliefs, Saving & First Income**  
Working source: Grade 8 lessons 1–26. **26 source lessons.**

**Term 2 — Earning, Spending, Budgeting & Habit Formation**  
Working source: Grade 8 lessons 27–53. Grade 8 has no authored Lesson 36, so this range contains **26 source lessons**.

**Term 3 — Financial Identity, Agency & First Capstone**  
Working source: Grade 8 lessons 54–80. **27 source lessons.**

The revised Form 1 split is deliberately balanced at **26 / 26 / 27 source lessons**. Lesson-number ranges remain editorial boundaries rather than a promise that each source lesson will remain one classroom period.

### Form 2 — Work, Value & Enterprise

**Term 1 — Work, Value & How Money Moves**  
Working source: Grade 9 lessons 1–25.

**Term 2 — Enterprise Capability, Habits & Execution**  
Working source: Grade 9 lessons 26–54. **29 source lessons.**

**Term 3 — Community Enterprise & Portfolio**  
Working source: Grade 9 lessons 55–75. **21 source lessons.**

This is now viable because lessons 23–34 have been restored to the source. The Form 2 split is deliberately **25 / 29 / 21 source lessons** rather than mathematically even.

The reason is pedagogical: Lesson 50 launches a 21-day Habit Transformation project and Lessons 51–54 complete, reflect on and integrate that project. Splitting Term 2 at Lesson 50 would send learners into a school-term boundary immediately after project launch. Keeping Lessons 26–54 together preserves the full execution cycle, while Lessons 55–75 form a clean community-enterprise and portfolio term.

### Form 3 — Assets, Systems, Leverage & Leadership

**Term 1 — Income, Saving, Investing & Assets**  
Source: Grade 10 Terms 1–2.

**Term 2 — Systems, Tax & Financial Independence**  
Source: Grade 10 Terms 3–4.

**Term 3 — Leverage, Leadership & Responsibility**  
Source: Grade 11 Terms 1–2.

This is the deliberate compression point. The first half of the previous Grade 11 year moves into Form 3 so Form 4 is not overloaded. The source-unit distribution is **36 / 40 / 40**.

### Form 4 — The Launch Year

**Term 1 — Advanced Wealth, Growth & Legacy**  
Source: Grade 11 Terms 3–4.

**Term 2 — Adult Money, Contracts, Work & Career Launch**  
Source: Grade 12 Terms 1–2.

**Term 3 — Risk, Protection, Integration & Life Launch**  
Source: Grade 12 Terms 3–4.

Form 4 is the final O-Level Applied Commerce year. Its source-unit distribution is **40 / 40 / 32**. The capstone remains the Life Launch Plan, adapted for Zimbabwean education, work, enterprise, banking, tax, contracts, risk and post-school realities.

## Why this compression works

The five-year source sequence already has a natural hinge:

- Grade 10 completes the core money-and-systems layer.
- Grade 11 Terms 1–2 introduce leverage and leadership, which can be taught before the final year.
- Grade 11 Terms 3–4 move into advanced wealth and legacy.
- Grade 12 is explicitly a launch-year curriculum.

Moving the first half of Grade 11 into Form 3 therefore preserves the authored progression while giving Form 4 a coherent launch-year identity.

## What is not being done

The Zimbabwe edition will **not**:

- treat Form 5 and Form 6 as extensions of the same core programme;
- relabel Grade 11 as Form 5 or Grade 12 as Form 6;
- carry South African term boundaries into Zimbabwe unchanged;
- simply divide lesson counts mathematically without checking story and concept continuity;
- claim that the current runtime source stages are the final learner-facing Zimbabwe structure.

## Runtime status

The platform now has a Zimbabwe delivery layer that exposes only Forms 1–4 and groups the original source lessons into the 12 target terms above while preserving the original Grade 8–12 lesson IDs underneath.

Current protected delivery counts:

| Form | Term 1 | Term 2 | Term 3 | Total source lessons |
| --- | ---: | ---: | ---: | ---: |
| Form 1 | 26 | 26 | 27 | 79 |
| Form 2 | 25 | 29 | 21 | 75 |
| Form 3 | 36 | 40 | 40 | 116 |
| Form 4 | 40 | 40 | 32 | 112 |
| **Total** |  |  |  | **382** |

These are **source lesson units, not final classroom-period counts**. During manuscript localisation, tightly related lessons may be combined into longer Zimbabwe learning sequences. Original lesson IDs remain available for provenance and learner-evidence migration.

The next curriculum milestone is unit-level HBC competency tagging, three-term manuscript restructuring and Zimbabwe-specific content localisation.

## A-Level

A-Level is not part of the current product scope.

If an advanced post-O-Level product is ever developed, it should be designed as a separate Applied Commerce extension rather than being created by stretching the current five-year source sequence.
