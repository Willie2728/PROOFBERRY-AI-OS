# ProofBerry AI — RUN136 Scope Change Reconfirmation

## Customer Truth
A review-intent click should apply to the one-role scope the buyer actually wants reviewed. If the buyer changes a material scope or evaluation field after requesting review, carrying the old click forward creates stale commercial-intent evidence.

## Creative Strategy
- **PB-TXT-146** — “The review request applies to the scope shown now.”
- **PB-DOC-052** — Scope Change Reconfirmation Card.

## Production Readiness
The recruiter one-role flow now resets `pilotReviewRequested` after any material change to the live role, accountable owner, decision window, success rule, baseline, review bottleneck, delivery boundary, retention boundary, or minimum evidence packet. The prior session dedupe key is cleared so a deliberate fresh review request can be measured for the revised scope. Contact closes until the buyer requests review again.

Native MarketingAssets:
- PB-TXT-146: `6aa1e9f21f7d979eb36e73d9`
- PB-DOC-052: `6aa1e9f21f7d979eb36e73da`

Final Base44 build exited **0**. Checkpoint: `6aa1ea1969e23b7f6ad0882a`. Base44 commit: `70ef1ca57f853a541dcba0d3e2cbf633b4c53d74`.

## Analytics / Evaluation
Verified before decision:
- measurement-eligible production GrowthEvents: **0**
- winner MarketingAssets: **0**

`PB-EXP-012` remains `planned`; PB-TXT-146 and PB-DOC-052 are challengers only.

## Winner Library
No promotion. Reconfirmation preserves buyer-intent integrity; it does not establish pilot acceptance, hiring outcomes, authority, budget, conversion lift, revenue, or ROI.

## Research Context
NIST’s 2026 work on evaluation probes emphasizes machine-readable audit trails and evidence that supports claims rather than relying on “the AI said so.” That supports preserving traceability between the current reviewed scope and the buyer’s explicit review-intent action; it is not ProofBerry performance evidence.

Source: https://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai
