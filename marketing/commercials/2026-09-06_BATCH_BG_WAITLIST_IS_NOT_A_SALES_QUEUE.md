# ProofBerry AI — Run 63

## PB-TXT-073 — A waitlist is not a sales queue

### Customer Truth
A generic waitlist row does not tell an operator which staffing buyer has actually qualified a bounded one-role review. Qualified demand needs its own visible commercial route so a serious request does not become stale inside generic signup volume.

### Deployable copy
**Hook:** A waitlist is not a sales queue.

A waitlist tells you who raised a hand. A sales queue tells you who has a live problem, an accountable owner, a decision window, and a defined success rule. ProofBerry now keeps qualified one-role review requests visible as their own commercial route instead of flattening them into generic signup volume.

**CTA:** Bring one live role. Define the test. Request the bounded review.

### Production readiness
Run 63 updated the Base44 admin surface so `staffing_design_partner_review` records are prioritized, routing status is visible, marketing opt-in stays separate, and the CSV carries request/routing fields. Headline admin stats now surface actual waitlist count, qualified review-request count, and routing exceptions while sample-only UI values are explicitly labeled as samples.

ProofBerry sandbox build passed after correcting the tool working directory: checkpoint `6a9e5a89feac15c22c971d11`, Base44 commit `92ebd1f1b77bbe8a429975f1ed46a66f0afb001f`. The first command failed in `/workspace` before the application build ran; the corrected `/app` build exited 0. Production deployment was not independently verified.

### Analytics / evaluation
The historical GrowthEvent pool remains 26 records: 23 `landing_view`, 3 `waitlist_form_view`, zero later-funnel events including zero `qualified_review_submit`. PB-EXP-009 keeps attributable non-preview `pilot_qualified → qualified_review_submit` as the primary commercial signal. Admin queue visibility and notification state are operational guardrails, not buyer conversions.

### Claims boundary
Do not claim a booked call, accepted pilot, response SLA, placement improvement, conversion lift, email-delivery success, production deployment, or live publication without direct evidence.
