# RUN91 — Scope Signal Before Contact

## Customer Truth
A serious AI-workforce buyer should be able to define the work before being asked for contact information. The useful pre-contact signal is not a generic CTA click; it is whether the buyer can name one bounded workflow, the consequential action that remains under human approval, and the artifact, log, output, or provider receipt required to evidence the first run.

## Creative Strategy
**Hook:** Before you send your email, prove you can define the work.

A serious AI-workforce test should be specific enough to answer three questions before contact details appear:

1. What bounded task should the system perform?
2. Which consequential action stays under human approval?
3. What artifact, log, output, or provider receipt would prove the first run happened correctly?

ProofBerry now measures those buyer-side scope signals before the contact step so growth decisions can distinguish real workflow intent from generic curiosity.

**CTA:** Define the task, human approval boundary, and first-run receipt. Then request the scoping review.

## Production Readiness
- Base44 MarketingAsset: `PB-TXT-101` — `production_ready`
- Measurement implementation: `PB-AN-002` — `production_ready`
- New production-only GrowthEvent states: `workforce_scope_ready` and `workforce_review_request_click`
- Both events retain the existing preview-runtime exclusion and session-level dedupe.
- Final Base44 build: exit `0`
- Checkpoint: `6a9f8e439a7e0ad0e73e609c`
- Base44 commit: `853dcf0e62f267d91f645d324a532bb7fe48fff1`

One earlier shell invocation failed before the application build because the tool resolved `/workspace/package.json`; the corrected `/app` build passed. That recovered tooling-path failure is preserved in Build Liaison status.

## Distribution Queue
Approved for owned landing / founder-led outbound derivative, but **not published**. No external publication receipt exists for RUN91.

## Analytics / Evaluation
Current verified baseline at the time of this run:
- measurement-eligible production `workforce_scope_ready`: `0`
- measurement-eligible production `workforce_review_request_click`: `0`
- durable `employer_workforce_early_access` requests: `0`
- Winner Library MarketingAssets: `0`
- RubricCriterion records: `0`

These zeros are measurement baselines, not evidence of zero market demand.

## Winner Library
No asset is promoted. Winner status requires attributable production exposure plus downstream qualified action; preview or unknown traffic is excluded.

## Claims Boundary
This asset does not claim a SYNTHSAPIEN is deployed, a workflow is integrated, human approval is technically enforced, an execution occurred, a pilot was accepted, or conversion improved. Those states require their own receipts.
