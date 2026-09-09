# ProofBerry RUN118 — Evidence Retention Boundary Before Scale

**Asset:** PB-TXT-128 + PB-DOC-040  
**Customer Truth:** If you cannot say when candidate evidence disappears, the review boundary is incomplete.

## Creative strategy

A recruiter can define the role, accountable decision owner, baseline, evidence packet and handoff destination and still have an unresolved governance question: how long should the candidate evidence remain available? RUN118 makes that expectation explicit before a one-role review expands.

**Hook:** If you cannot say when candidate evidence disappears, the review boundary is incomplete.

**Body:** A useful evidence packet can still create buyer friction when nobody has defined its retention window, accountable owner, or exit behavior. Predeclare the expectation—review window only, 30 days, 90 days, buyer-system policy, or explicitly unresolved—then validate it against the buyer's policy, applicable law and the product controls actually available.

**CTA:** Predeclare the evidence-retention boundary before you scale the review.

## Production readiness

The owned recruiter flow now carries an optional structured `retention_boundary` through the copied one-role brief, review-intent telemetry, qualified-review metadata, recruiter request context and Pilot Fit Snapshot. PB-DOC-040 is a static no-contact internal review aid at `public/marketing/PB-DOC-040-evidence-retention-boundary-card.html`.

This change does **not** claim that ProofBerry has implemented a particular deletion schedule, legal retention policy, regulatory compliance, ATS retention integration or candidate-data lifecycle certification. The selected value is buyer-side scoping context that must be validated before deployment.

## Analytics / evaluation

PB-EXP-012 remains `planned`. RUN118 adds PB-TXT-128 and PB-DOC-040 as challengers and adds `retention_boundary attached to pilot_review_request_click / qualified_review_submit` as a diagnostic. Verified pre-change baseline: **0 measurement-eligible production GrowthEvents and 0 winner MarketingAssets**. No Winner Library promotion is eligible.

## Distribution state

Production-ready does not mean published. No RUN118 ProofBerry social post, ad, email or video is claimed live. External attributable distribution remains blocked until a connected destination can return a provider/publication receipt.
