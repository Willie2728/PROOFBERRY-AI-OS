# RUN141 — ProofBerry AI — Explicit Candidate Intent Before Funnel Attribution

## Customer Truth
A default landing-page tab is not the same thing as a visitor deliberately identifying as a candidate. ProofBerry previously initialized the candidate experience by default, and the `waitlist_form_start` event attached `audience=candidate` even when the visitor had not explicitly selected Candidate and had not arrived through a candidate-specific audience URL. That can overstate candidate-funnel starts and weaken experiment attribution.

## Creative Strategy
**PB-TXT-151:** “A default tab is not candidate intent. Start with one claim worth proving.”

Candidate value proposition: choose one target role, one capability claim, deliberately review the evidence already available, treat missing evidence as a build list, and request early access only if that workflow is useful.

## Production Readiness
- `src/components/landing/WaitlistSection.jsx` now records `waitlist_form_start.audience` only after explicit audience selection or a deliberate audience URL.
- The event metadata now includes `audience_explicitly_selected` so downstream analysis can separate an explicit choice from a default surface.
- `PB-DOC-057 — One-Claim Proof Starter` was created at `public/marketing/PB-DOC-057-one-claim-proof-starter.html`.
- Base44 MarketingAsset records were created for PB-TXT-151 and PB-DOC-057 with `production_ready` status.
- PB-EXP-011 includes both assets as challengers but remains non-conclusive.

## Distribution Queue
Owned-funnel assets are production-ready inside the Base44 workspace. External attributable distribution is blocked because the reviewed social/ads/analytics connectors are not connected. No post, ad, email, video, or external publication is claimed live.

## Analytics / Evaluation
Verified pre-release baseline: 0 measurement-eligible production GrowthEvents and 0 winner MarketingAssets. Candidate funnel-start analysis should not classify a default tab impression or default-state form start as explicit candidate intent.

## Winner Library
No promotion. PB-TXT-151 and PB-DOC-057 remain challengers until attributable production traffic and durable downstream candidate submissions exist.

## Claims Boundary
This run does not establish candidate skill verification, hiring outcomes, recruiter adoption, conversion lift, revenue, deployment, or Winner Library performance. Robert Half’s March 10, 2026 survey supports the market problem—AI-generated application volume is making skills harder to verify—but it does not establish ProofBerry performance.
