# RUN78 — PB-TXT-088: Qualification Before Contact

## Customer Truth

Most hiring software asks for contact information before it knows whether the buyer has a concrete hiring problem. ProofBerry's highest-value path is the opposite: preserve one-live-role intent from the first CTA through the qualification flow, then treat contact, human review, pilot acceptance, and hiring outcomes as separate evidence states.

## Creative Strategy

**Hook:** Most hiring software asks for your email before it knows what you're hiring for.

**Core copy:** ProofBerry flips that sequence: define one live role, name the accountable owner, set the decision window, and decide what role #2 would have to prove before you share contact details. The goal is not more waitlist volume. It is a request that a staffing team can actually evaluate.

**CTA:** Test one live role.

## Production Readiness

- Base44 MarketingAsset `PB-TXT-088`: `6a9ef4229098d94ad5e170a1`, status `production_ready`.
- Base44 implementation asset `PB-LP-037`: `6a9ef4229098d94ad5e170a2`, status `production_ready`.
- Updated Base44 landing navigation to preserve recruiter vs candidate intent.
- Recruiter navbar CTA: `Hiring Team: Test One Role`.
- Candidate navbar CTA: `Candidate Access`.
- Sticky CTA now routes recruiter intent to the one-live-role flow.
- Navbar and sticky actions create `conversion_asset_click` only outside internal preview runtimes and preserve UTM/session attribution.
- Final sandbox build: exit `0`.
- Checkpoint: `6a9ef339832e1bfb8ba53f7b`.
- Base44 commit: `2e85e9d3243bcce5982d6b86e8168e4b2fa8ce40`.

Two earlier shell invocations failed before the application build because the tool was pointed at `/app/app` and `/workspace` rather than the app root. They are recorded as recovered tooling-path errors, not application failures.

## Distribution Queue

Approved/production-ready only. No RUN78 post was scheduled or claimed live. ProofBerry currently has 2/81 Base44 connectors connected (GitHub API and Google Sheets). LinkedIn, TikTok, Instagram Business, Facebook Pages, Google Analytics, Search Console, and Meta Ads remain disconnected; the exposed TikTok connector does not support content/video upload.

## Analytics / Evaluation

Fresh durable baseline remains exactly:

- 26 GrowthEvents total
- 23 `landing_view`
- 3 `waitlist_form_view`
- 0 later-funnel events
- 0 `qualified_review_submit`
- 0 durable `staffing_design_partner_review` requests

The primary commercial signal remains attributable non-preview `pilot_qualified → qualified_review_submit`. Navbar/sticky CTA clicks are diagnostic intent signals, not conversions by themselves.

## Winner Library

Fresh query: 0 `winner` MarketingAssets and 0 RubricCriterion records. No winner promoted.

## Claims Boundary

A CTA click is not qualification. Qualification is not contact. Contact is not a conversation. A conversation is not pilot acceptance. A pilot is not a hiring outcome. Successful sandbox build is not production deployment.

## Source-of-Truth Exception

The connected GitHub repository is the canonical ProofBerry source of truth, but current code search did not expose the matching Base44 `Navbar.jsx` application source. No guessed source path was written. The Base44 implementation is build-verified; Base44↔GitHub application-source parity remains unresolved through Build Liaison.
