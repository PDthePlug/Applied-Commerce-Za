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

**Term 1 — Identity, Beliefs & Money Foundations**  
Working source: Grade 8 lessons 1–20.

**Term 2 — Resources, Value, Budgeting & Habits**  
Working source: Grade 8 lessons 21–50.

**Term 3 — Habit Strength, Agency & First Capstone**  
Working source: Grade 8 lessons 51–80.

The Grade 8 source has 79 actual lesson units, so lesson-number ranges are editorial boundaries rather than a promise that every number exists exactly once. Final placement is driven by content continuity.

### Form 2 — Work, Value & Enterprise

**Term 1 — Work, Value & How Money Moves**  
Working source: Grade 9 lessons 1–25.

**Term 2 — Enterprise Capability, Habits & Execution**  
Working source: Grade 9 lessons 26–50.

**Term 3 — Community Enterprise & Portfolio**  
Working source: Grade 9 lessons 51–75.

This is now viable because lessons 23–34 have been restored to the source.

### Form 3 — Assets, Systems, Leverage & Leadership

**Term 1 — Income, Saving, Investing & Assets**  
Source: Grade 10 Terms 1–2.

**Term 2 — Systems, Tax & Financial Independence**  
Source: Grade 10 Terms 3–4.

**Term 3 — Leverage, Leadership & Responsibility**  
Source: Grade 11 Terms 1–2.

This is the deliberate compression point. The first half of the previous Grade 11 year moves into Form 3 so Form 4 is not overloaded.

### Form 4 — The Launch Year

**Term 1 — Advanced Wealth, Growth & Legacy**  
Source: Grade 11 Terms 3–4.

**Term 2 — Adult Money, Contracts, Work & Career Launch**  
Source: Grade 12 Terms 1–2.

**Term 3 — Risk, Protection, Integration & Life Launch**  
Source: Grade 12 Terms 3–4.

Form 4 is the final O-Level Applied Commerce year. Its capstone remains the Life Launch Plan, adapted for Zimbabwean education, work, enterprise, banking, tax, contracts, risk and post-school realities.

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

## Runtime transition

The current platform still stores source material by the original Grade 8–12 bundle IDs. That is intentional for traceability.

The next runtime milestone is to introduce a Zimbabwe delivery layer that:

1. exposes only Forms 1–4 to learners;
2. groups source lessons into the 12 target terms above;
3. preserves original lesson IDs behind the scenes;
4. allows individual lessons to be moved without breaking saved learner evidence;
5. converts source-term intros and assessments into the correct Zimbabwe term;
6. records HBC competency mapping against each final unit;
7. removes all visible Grade 8–12 source-language from the final learner navigation.

## A-Level

A-Level is not part of the current product scope.

If an advanced post-O-Level product is ever developed, it should be designed as a separate Applied Commerce extension rather than being created by stretching the current five-year source sequence.
