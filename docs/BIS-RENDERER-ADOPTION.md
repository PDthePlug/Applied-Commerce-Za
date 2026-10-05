# BIS Renderer Adoption — Applied Commerce Zimbabwe

## Decision

Applied Commerce Zimbabwe adopts the **BIS Unified Learner Document System** as the presentation architecture for learner lessons.

The BIS implementation is the source of truth for document-stage layout, publication surface, heading hierarchy, progress treatment, evidence-control emphasis, table preservation and endpoint hierarchy.

Applied Commerce-specific controls may continue to evolve underneath this contract, but they must not replace the BIS document architecture.

## Authored-content boundary

The renderer must not rewrite, shorten, reorder, reinterpret or silently "improve" Zimbabwe curriculum content merely to improve presentation.

The following remain authoritative and must preserve their existing identities:

- Zimbabwe Form 1–4 placement;
- all source lesson IDs;
- Zimbabwe localisation overlays;
- HBC competency and evidence mappings;
- prompt-response IDs;
- learner note IDs;
- portfolio/evidence bindings.

If content renders badly, repair the renderer or presentation treatment first.

## Learner document contract

Every lesson uses:

1. one centred document stage;
2. one continuous publication surface;
3. a document header with Form/Term/Lesson context;
4. quiet progress and lesson-position metadata;
5. visible capability/evidence metadata without technical source-manuscript language;
6. continuous authored learning flow;
7. evidence controls that are visually stronger than passive prose;
8. tables that preserve row/column relationships and scroll locally when necessary;
9. lesson notes inside the document rather than as a competing dashboard card;
10. one clear endpoint hierarchy with Next/Term completion as the primary action.

## Responsive acceptance

At 360px, 430px and desktop widths:

- the learner document fits the viewport without page-level horizontal overflow;
- table overflow remains local to the table wrapper;
- learner inputs remain usable and legible;
- primary navigation remains reachable;
- term rail/menu behaviour remains unchanged;
- authored response values and IDs remain unchanged;
- previous/next lesson sequence continues to use the Zimbabwe three-term Form map.

## Synchronisation rule

When synchronising from other Applied Commerce repositories:

- **BIS governs learner presentation architecture.**
- Applied Commerce may contribute evidence, assessment, facilitator and other platform capabilities.
- No imported presentation layer may override the BIS document contract without an explicit product decision.
