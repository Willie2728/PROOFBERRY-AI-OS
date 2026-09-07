# ProofBerry RUN81 — Evidence Profile Before Premium Unlock

Date: 2026-09-07

## Customer Truth
A buyer should not pay for a blanket “verified” label. The useful product is an inspectable evidence profile that keeps candidate-stated information, demonstrations, model-generated context, recruiter observations, third-party verification when available, and unresolved questions visibly separate.

## Creative Strategy
**PB-TXT-091 — Evidence Profile Before Premium Unlock**

Hook: **Don’t pay for a verified label. Pay for evidence you can inspect.**

CTA: **Test one live role. Inspect one candidate evidence profile before you expand.**

Base44 MarketingAsset: `6a9f1dc9c60646e406fa1de9`, status `production_ready`.

## Production Readiness
**PB-OPS-012**, Base44 MarketingAsset `6a9f1dc9c60646e406fa1dea`, status `production_ready`.

RUN81 changed four remaining product surfaces:
- `src/components/auth/RoleSelect.jsx`: candidate promise no longer says “get hired”; recruiter promise no longer says “find verified talent fast.”
- `src/components/billing/UpgradeModal.jsx`: paid unlock now grants continued review of full **candidate evidence profiles**, not “full verified profiles.”
- `src/components/shared/AppFooter.jsx`: platform positioning is now **evidence-first** and emphasizes inspectable capability plus human-owned decisions.
- `src/components/council/SubmissionSelector.jsx`: optional context is now a **ProofBerry evidence profile**, not a “verified ProofBerry profile.”

Build record:
- First `npm run build` invocation ran from `/workspace` and exited 254 before the application build because `/workspace/package.json` was absent.
- Corrected `/app` build exited `0`.
- Checkpoint: `6a9f1d1ecef7a58627e7e18d`
- Base44 commit: `b91159897b03aa16f0b21943ed9e833a620ceeb7`
- Production deployment was not independently verified.

GitHub application-source parity remains unresolved: the reviewed Base44 app path `src/components/auth/RoleSelect.jsx` returned 404 in this repository. RUN81 did not write application code into a guessed GitHub path.

## Distribution Queue
WCL MarketingAsset: `6a9f1dfb2b8506bcccc1c0c9`, status `approved`, `published=false`, no destination receipt.

ProofBerry currently has 2 of 81 Base44 connectors connected: GitHub API and Google Sheets. LinkedIn, TikTok, Instagram Business, Facebook Pages, Google Analytics, Google Search Console, and Meta Ads remain disconnected. The exposed TikTok connector does not support content/video upload.

## Analytics / Evaluation
RUN81 read-back:
- 26 GrowthEvent records total
- 23 `landing_view`
- 3 `waitlist_form_view`
- 0 later-funnel events
- 0 `qualified_review_submit`
- 0 `staffing_design_partner_review` WaitlistSignup records

`PB-EXP-009` now includes `PB-TXT-091`. The evidence-profile language change is a conversion-trust guardrail, not measured conversion lift.

## Winner Library
- `MarketingAsset status=winner`: 0
- `RubricCriterion`: 0

No winner was promoted. Existing minimum gate remains at least 100 attributed landing sessions or 20 attributed waitlist signups per comparable published variant.

## Claims Boundary
RUN81 does not claim a candidate was verified, hired, placed, interviewed externally, or converted because of these changes. It does not claim the reviewed Base44 build is deployed to production. No RUN81 video, image, ad, or social post was rendered or published.