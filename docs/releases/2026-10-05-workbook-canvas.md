# Continuous workbook canvas

## Product direction

The page itself is the learning surface. This evolves the certified BIS renderer baseline `f387665` in `PDthePlug/Applied-Commerce-Za`; it does not replace the curriculum or restart the platform.

## Changes

- Removed the outer publication panel, rounded activity/response panels and repeated metadata badges from learner lessons.
- Kept one readable page measure, continuous authored flow, section rules and the existing activity/reflection/evidence hierarchy.
- Embedded writing controls in that flow, retaining visible input boundaries and accessible focus treatment.
- Preserved relational tables and table-local overflow on narrow screens.
- Moved the reader's application menu into the top chrome so it cannot float over writing areas. The term map has a distinct list icon; the menu retains its existing destinations, dialog and Escape behaviour.
- Labelled lesson notes for assistive technology.

The content compiler, Zimbabwe overlays, Forms 1–4 placement, HBC mappings, source indices, response keys, portfolio bindings and storage schema are unchanged. No database migration is required. Persistence acceptance covers the existing device-local workbook store; this release does not claim cloud account or cohort persistence.

## Verification

The existing 50 curriculum/architecture tests, typecheck, lint and production build pass. All existing CI audit commands were run; the full runtime localisation audit covers 382 lessons with zero residue, and HBC, navigation and assessment audits report no failures.

Browser acceptance covers representative lessons in all four Forms at 360px, 430px and 1280px, asserting the delivered canvas styles and absence of page overflow. Three workbook journeys verify that table values, semantic keys, notes and completion survive refresh and next-lesson/browser-Back navigation. Menu positioning and Escape dismissal are covered; a writing area's hit target must remain unobstructed. Screenshots are inspected for desktop reading, activity flow, mobile reading and table writing.

## Release acceptance

GitHub CI and the Vercel deployment must be checked on the published revision, then the production learner routes exercised. A successful local build alone is not deployment acceptance. Rollback is a normal revert of this presentation change; existing learner responses need no migration.
