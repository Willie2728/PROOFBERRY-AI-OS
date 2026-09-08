# ProofBerry AI — RUN87

## Production-Only Measurement + Auditable Hiring Decision

**Customer Truth:** preview activity is not production growth, and a staffing buyer should be asked to inspect one auditable hiring decision rather than more applicant volume.

**Creative:** `PB-TXT-097` — “Don’t send me more applicants. Show me one hiring decision I can audit.”

**CTA:** Bring one live role. Define the evidence, human owner, and decision receipt before you scale the workflow.

## Measurement correction

RUN87 adds an explicit evidence gate to the `GrowthEvent` model:

- `environment`: `production | preview | unknown`
- `measurement_eligible`: boolean

Production tracking paths now write `environment=production` and `measurement_eligible=true` only after the existing preview-runtime guard. The legacy 26 stored events were migrated out of experiment denominators:

- 5 are explicitly verified preview-runtime events.
- 21 have unknown historical environment.
- 0 are currently measurement-eligible production events.

This means the old “26 event baseline” must not be used as production traffic or as evidence for a Winner Library decision.

## Production readiness

- `PB-TXT-097` Base44 MarketingAsset: `6a9f560b229b45dbef88085e`
- `PB-AN-001` measurement implementation: `6a9f560b229b45dbef88085f`
- Final sandbox build: exit `0`
- Base44 checkpoint: `6a9f5740470a44adfbdc811b`
- Base44 commit: `2dcfa0aef6096b44d92fbec13a18d45b4eccc31f`

Two earlier tooling attempts did not constitute failed final application builds: one bulk-edit attempt could not run because `python` was absent, and one Node bulk-edit command was safety-gated before execution. The production edits were then applied with the file-edit API and the final build passed.

## Analytics / Winner Library

- Durable `staffing_design_partner_review` requests: `0`
- Measurement-eligible production GrowthEvents: `0`
- Winner MarketingAssets: `0`
- RubricCriterion records: `0`

`PB-EXP-009` now excludes preview/unknown legacy traffic and includes `PB-TXT-097` as a challenger. No winner may be declared until a comparable published variant reaches the pre-registered sample threshold using measurement-eligible production events only.

## Distribution truth

This RUN87 creative is production-ready but **not published**. No RUN87 video, image, or audio was rendered, and no external post or production deployment receipt was created in this run.