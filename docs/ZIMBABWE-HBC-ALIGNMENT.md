# Applied Commerce Zimbabwe — HBC Alignment Standard

## Status

This document defines the internal curriculum-alignment standard used by **Applied Commerce Zimbabwe**.

Applied Commerce is an independent commercial programme. The alignment described here does **not** imply Ministry approval, ZIMSEC endorsement, examination status or prescribed-textbook status.

## Policy basis

The Zimbabwe edition is designed around the current Heritage-Based Curriculum (HBC) direction for Primary and Secondary Education 2024–2030.

The alignment model is grounded in the following current public evidence:

1. **Problem solving and innovation**  
   In Parliament on 26 February 2026, the Minister of Primary and Secondary Education described the HBC as emphasising problem-solving skills, innovation, research and learner responses to societal challenges.

   Source: Parliament of Zimbabwe, Senate, 26 February 2026  
   https://www.parlzim.gov.zw/wp-content/uploads/2026/03/SENATE-26-FEBRUARY-2026.pdf

2. **School-Based Projects (SBPs)**  
   The same policy direction replaced CALA with school-based projects and emphasises learner-led identification of real local challenges, research, innovation and practical solutions.

   Source: Parliament of Zimbabwe, Questions Without Notice, 26 February 2026  
   https://www.parlzim.gov.zw/wp-content/uploads/2026/06/Questions-Without-Notice-Senate-26-February-2026.pdf

3. **Business and Enterprise Skills**  
   ZIMSEC continues to assess Business and Enterprise Skills at Ordinary Level (subject 4048), confirming that enterprise capability is part of the formal secondary-school ecosystem.

   Source: ZIMSEC Business and Enterprise Skills 4048/01  
   https://www5.zimsec.co.zw/download/business-and-enterprise-skills-4048-01/

4. **Local relevance and indigenisation**  
   ZIMSEC states that teaching and assessment materials should be relevant to Zimbabwe's socio-economic environment and use contexts learners can recognise and apply.

   Source: ZIMSEC About Us  
   https://www5.zimsec.co.zw/about-us/

## Applied Commerce HBC competency set

Applied Commerce uses the following internal competency IDs:

- Problem solving
- Critical thinking
- Leadership
- Communication & teamwork
- Research
- Innovation
- Technological skills
- Entrepreneurship
- Business & financial literacy
- Self-management
- Planning & organising

These are not presented as an official Ministry coding taxonomy. They are an Applied Commerce alignment vocabulary used to make the programme's relationship to HBC intent visible and testable.

## Unit-level alignment

Every learner-facing lesson and assessment receives an HBC alignment object containing:

- one or more competency tags;
- an evidence mode:
  - practice,
  - reflection,
  - investigation,
  - project,
  - presentation, or
  - assessment;
- a flag for community/local application where relevant;
- a flag for heritage/locally rooted application where relevant;
- a short explanation of why the tags were applied.

The alignment engine is deliberately explainable.

A unit first inherits the competency priorities of its Zimbabwe Form/Term. Additional competencies are added only when transparent title/type rules apply. Examples:

- budgeting, tax, insurance, investing or credit → business & financial literacy;
- enterprise, customers, pricing and markets → entrepreneurship;
- research, mapping, interviews and audits → research + critical thinking;
- project, plan, tracker and system work → planning & organising + self-management;
- leadership, partnership and community work → leadership + communication/teamwork;
- digital, online, platform and scam topics → technological skills + critical thinking;
- design, prototype, experiment and solution work → innovation + problem solving.

The original source lesson IDs remain unchanged for provenance and learner-evidence migration.

## Twelve-term applied-evidence architecture

### Form 1

**Term 1 — Identity, Beliefs, Saving & First Income**  
Local application: household beliefs, saving practices, first earning and the learner's economic environment.  
Expected evidence: identity/belief audit, saving or first-income evidence, personal money reflection.

**Term 2 — Earning, Spending, Budgeting & Habit Formation**  
Local application: everyday spending, local trade, budgeting and repeated resource behaviours.  
Expected evidence: budget/money-flow record, earning/spending evidence, habit tracker.

**Term 3 — Financial Identity, Agency & First Capstone**  
Local application: learner-selected goal or need integrating identity, resources and action.  
Expected evidence: habit evidence, capstone artefact, presentation and end-of-year reflection.

### Form 2

**Term 1 — Work, Value & How Money Moves**  
Local application: kombi ranks, tuckshops, markets, households, supply chains and community money/value flows.  
Expected evidence: enterprise test, Community Money Map, term reflection.

**Term 2 — Habits, Agency & Execution**  
Local application: routines, digital behaviour, goal execution, peer influence and resilience.  
Expected evidence: 21-day transformation tracker, midpoint adjustment, final habit-system reflection.

**Term 3 — Community Enterprise & Portfolio**  
Local application: a real local need investigated before action.  
Expected evidence: needs assessment, project plan/budget/partnership record, completed project and presentation.

### Form 3

**Term 1 — Income, Saving, Investing & Assets**  
Local application: Zimbabwean earning, saving, investing, small-business systems and asset-building.  
Expected evidence: value-creation plan, savings/investment comparison, asset decision evidence.

**Term 2 — Systems, Tax & Financial Independence**  
Local application: Zimbabwe tax, retirement, insurance, estate and financial-independence decisions using current official sources.  
Expected evidence: financial-system map, regulatory research evidence, financial-independence plan.

**Term 3 — Leverage, Leadership & Responsibility**  
Local application: school, household, enterprise and community situations requiring responsible coordination of people and resources.  
Expected evidence: leverage audit, leadership case evidence, personal leadership philosophy.

### Form 4

**Term 1 — Advanced Wealth, Growth & Legacy**  
Local application: long-horizon wealth, stewardship, family responsibility, estate thinking and legacy.  
Expected evidence: 10-year wealth plan, stewardship decisions, Life-and-Legacy Plan.

**Term 2 — Adult Money, Contracts, Work & Career Launch**  
Local application: post-O-Level pathways, employment, enterprise, contracts and career decisions.  
Expected evidence: transition plan, application/career artefacts, contract/workplace decision evidence.

**Term 3 — Risk, Protection, Integration & Life Launch**  
Local application: adult financial risk, protection and the learner's first years beyond O-Level.  
Expected evidence: risk-and-protection plan, integrated decisions, final Life Launch Plan and presentation.

## School-Based Project relationship

Applied Commerce projects are designed so schools can use programme evidence to **support** HBC School-Based Project practice where appropriate.

However:

- an Applied Commerce project is not automatically an official SBP;
- the school remains responsible for applying current Ministry/ZIMSEC project requirements;
- teachers/facilitators should select the evidence that fits the school's approved learning-area assessment plan;
- learners should investigate real needs and gather real evidence rather than submit generic or copied projects.

The strongest Applied Commerce SBP candidates are the Community Money Map, Community Enterprise Project, financial-system/financial-independence investigations, and the Life Launch integration work.

## Quality gate

CI runs `scripts/audit_zimbabwe_hbc.mjs`.

The audit must confirm that:

- all **382 source lessons** in the four-year Zimbabwe pathway receive HBC alignment;
- every included assessment also receives alignment;
- no unit has an empty competency set;
- no unit lacks an evidence mode or rationale;
- all 12 Zimbabwe terms define competency priorities, local application and expected evidence.

This converts HBC alignment from a marketing statement into a testable product property.
