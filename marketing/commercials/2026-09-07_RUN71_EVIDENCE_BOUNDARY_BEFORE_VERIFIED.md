# ProofBerry AI — RUN71 Evidence Boundary Before “Verified”

## Customer Truth
Proof is a classification, not a blanket label. A hiring interface should distinguish what was candidate-stated, demonstrated, recruiter-observed, third-party verified when available, and unresolved instead of turning every visible artifact into “verified talent.”

## Creative Strategy
**PB-TXT-081**

**Hook:** Proof is a classification, not a blanket label.

**Body:** A hiring interface should not turn every demonstration into “verified talent.” ProofBerry is being built to preserve what was candidate-stated, demonstrated, recruiter-observed, third-party verified when available, and unresolved so hiring teams can inspect the evidence before a human decision. RUN71 removes blanket “verified talent,” “hire with confidence,” “shows who can actually do the job,” and permanent-free wording from the public landing surface.

**CTA:** Bring one live role. Inspect the evidence boundary before the conversation.

## Production Readiness
PB-LP-034 was implemented in connected Base44 across the public landing surface:
- `src/components/landing/HowItWorksSection.jsx`
- `src/components/landing/AudiencePathSelector.jsx`
- `src/components/landing/BadHireVideoSection.jsx`
- `src/components/landing/HeroVideoSection.jsx`
- `src/components/landing/CandidateValueSection.jsx`

Sandbox build exited 0.

Checkpoint: `6a9e9f668a4f9aa4b07f4876`

Base44 commit: `1690062ed76cd72864031810f3764172eb9a8f44`

Production deployment was not independently verified. Matching live landing component paths were not found in the connected GitHub repository during RUN71, so no guessed application-source parity write was made.

## Analytics / Evaluation
The ProofBerry GrowthEvent pool remains 26 records: 23 `landing_view`, 3 `waitlist_form_view`, and zero later-funnel events including zero `qualified_review_submit`. There are zero durable `staffing_design_partner_review` records.

PB-EXP-009 keeps attributable non-preview `pilot_qualified → qualified_review_submit` as the primary commercial signal. PB-TXT-081 is a challenger; PB-LP-034 is a claims-integrity/conversion-trust improvement and is not performance evidence.

## Winner Library
0 winner MarketingAssets. 0 RubricCriterion records. No winner promoted. Existing minimum-sample gate remains unchanged.

## Claims Guardrail
No hiring outcome, placement lift, accepted pilot, revenue, ROI, verification completeness, or conversion lift is claimed. No RUN71 media was rendered and no post was scheduled or published.