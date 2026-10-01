# Applied Commerce Zimbabwe

A Zimbabwe-market adaptation of the Applied Commerce® digital learning platform.

This repository was created from the South African `PDthePlug/Applied-Commerce-` baseline. The original repository remains untouched. The Zimbabwe edition preserves the product architecture that already works — focused reading, visible progression, learner evidence, portfolio capture, strong mobile ergonomics and institutional reporting — while localising the school model, economic context and commercial proposition for Zimbabwe.

## Current adaptation status

The source intellectual property is currently five authored learner books: Grades 8, 9, 10, 11 and 12, each organised into four source terms.

Zimbabwean secondary schooling is structured differently: Forms 1–4 at lower secondary, Forms 5–6 at upper secondary, and a three-term school calendar. **This repository does not silently rename five source books into six Forms.**

The platform therefore separates:

- the **authored source stage** used internally by the runtime;
- the **Zimbabwe school-placement layer** shown to schools and learners;
- the **editorial restructuring work** required before a full Forms 1–6 curriculum edition is treated as complete.

Current placement model:

| Authored source | Zimbabwe placement |
| --- | --- |
| Grade 8 source | Stage 1 · Form 1 |
| Grade 9 source | Stage 2 · Form 2 |
| Grade 10 source | Stage 3 · Form 3 |
| Grade 11 source | Stage 4 · Forms 4–5 bridge |
| Grade 12 source | Stage 5 · Form 6 |

The Forms 4–5 bridge is deliberately explicit. It marks the material that must be split and re-sequenced editorially rather than pretending the systems are identical.

## Zimbabwe edition principles

The adaptation is being built around the practical ambitions of Zimbabwe's Heritage-Based Curriculum 2024–2030: problem solving, critical thinking, communication, teamwork, leadership, research, innovation, entrepreneurial skills, business and financial literacy, self-management, planning and organising, and learning through real projects.

This is an **alignment proposition**, not a claim of Ministry approval, prescribed-textbook status or ZIMSEC endorsement.

## Localisation rules

The Zimbabwe edition must preserve the Myah Life Design Framework™, the authored learning progression, behavioural experiments, portfolio evidence and core pedagogical intent while localising the surrounding economic world.

Examples include:

- DBE framing → Zimbabwe HBC competency framing;
- South African school language → Forms, O Level, A Level and Zimbabwean transition language where contextually correct;
- rand-only examples → Zimbabwe's current multi-currency reality, with ZiG and USD used deliberately rather than mechanically;
- SARS → ZIMRA where the lesson genuinely concerns Zimbabwean tax administration;
- NSFAS → verified Zimbabwean tertiary funding routes rather than a fabricated direct equivalent;
- stokvel → mukando / savings club where that is the culturally correct example;
- spaza/taxi-rank/community examples → Zimbabwean equivalents such as tuckshops, markets, kombis and locally recognisable economic settings where the story requires localisation;
- South African place names → Zimbabwean settings only when the narrative can be changed without damaging continuity.

See `docs/ZIMBABWE-LOCALISATION.md` for the working editorial standard.

## Platform milestone

The current production-shaped platform includes:

- five authored learning stages mapped to a Zimbabwe school-placement layer;
- focused lesson reader with previous/next navigation;
- activities, reflections, checkpoints, stories, equations and portfolio cues;
- learner notes and responses;
- completion tracking and portfolio evidence;
- responsive learner shell;
- institutional offer and school-pilot positioning;
- learner, facilitator, programme-manager and sponsor demo perspectives.

## Curriculum build

The runtime curriculum is generated from source DOCX files:

```bash
python scripts/compile_curriculum.py /path/to/books public/curriculum
```

The original source filenames remain supported while editorially localised Zimbabwe manuscripts are developed.

## Development

```bash
npm install
npm run dev
```

Checks:

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

## Source-preservation rule

Do not manufacture lesson numbering, silently remove authored tension, or bulk-replace national terms without checking meaning. Zimbabwe localisation is an editorial adaptation, not a string-replacement exercise.
