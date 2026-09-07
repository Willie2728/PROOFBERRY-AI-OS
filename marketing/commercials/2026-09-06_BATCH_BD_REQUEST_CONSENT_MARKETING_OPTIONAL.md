# PB-TXT-070 / PB-LP-031 — Request Consent, Marketing Optional

## Customer Truth
A qualified staffing buyer should not have to subscribe to marketing just to ask for a one-role review. The commercial request and the marketing subscription are separate buyer decisions.

## Creative Strategy
**Hook:** A buyer should not have to subscribe to marketing just to ask for a one-role review.

**Body:** ProofBerry now separates two decisions: permission to respond to the request, and optional permission to send product updates. Bring one live role, one accountable owner, one finite decision window, and one role #2 success rule. Then decide whether the one-role review is worth the conversation — without bundling that request into a marketing subscription.

**CTA:** Qualify one live role, request the review, and choose separately whether you want product updates.

## Production Readiness
- PB-LP-031 implemented in connected Base44 source: `src/components/landing/WaitlistSection.jsx`.
- Request-specific contact permission remains required for submission.
- Marketing opt-in is now a separate optional checkbox.
- `WaitlistSignup.optInMarketing` now reflects the optional buyer choice instead of being hard-coded `true`.
- `waitlist_submit` metadata records `marketing_opt_in` separately from the qualified-review state.
- Base44 sandbox build verified exit code 0.
- Base44 checkpoint: `6a9e3ccf6c9d86fbceb5f6b0`.
- Base44 app commit: `b306b829c1431ed87291e52fa6982e8ff5547b84`.
- Production deployment not independently verified.

## Distribution Queue
Status: **production-ready / not scheduled / not published**.

Suggested first channels once authenticated distribution is available: recruiter-focused LinkedIn post, founder/recruiter email, and landing-page retargeting copy. Do not publish through an unverified connector.

## Analytics / Evaluation
Primary commercial metric remains attributed non-preview `pilot_qualified → qualified_review_submit` rate. Track marketing opt-in share separately; do not treat optional marketing opt-in as a prerequisite for commercial qualification. Historical pool at Run 60 start remains 26 GrowthEvents: 23 `landing_view`, 3 `waitlist_form_view`, zero later-funnel events.

## Claims Boundary
Do not claim conversion lift, legal certification, pilot acceptance, scheduling, SLA, placement outcomes, hiring validity, or revenue. This change improves consent clarity and removes a measurement confound; its effect must be measured on authenticated non-preview traffic.
