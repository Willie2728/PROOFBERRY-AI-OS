# ProofBerry AI — Run 59 — Qualified Demand Deserves a Qualified Route

## Customer Truth
A qualified commercial request should not be indistinguishable from a general early-access signup in the durable record. ProofBerry already separates recruiter exploration from a live-role pilot and requires an explicit request before contact is revealed. Run 59 makes that distinction durable after submission.

## Creative Strategy
**PB-TXT-069 — Qualified Demand Deserves a Qualified Route**

Hook: **A sales-ready staffing request should not land in the same bucket as general early access.**

CTA: Bring one live role, one accountable owner, one finite decision window, and one buyer-defined role #2 success rule. If the fit is real, explicitly request the one-role review.

Copy:
> ProofBerry now keeps candidate early access, staffing exploration, employer/workforce access, and an explicitly requested one-role design-partner review as different durable request states. That makes commercial intent measurable without pretending every email is a qualified lead.

## Production Readiness
**PB-LP-030 — Qualified Review Routing**

Implemented in connected Base44:
- Added `WaitlistSignup.request_type` with distinct values for candidate early access, staffing early access, staffing design-partner review, and employer/workforce early access.
- Added prospective anonymous `GrowthEvent` type `qualified_review_submit`.
- `qualified_review_submit` fires only after buyer qualification, explicit one-role review request, contact submission, and successful durable signup creation.
- The event does not store the live-role text, owner text, free-text success criterion, name, or email.
- The event explicitly records `acceptance_implied: false`.

Verification: Base44 sandbox build exited 0 after one incorrect working-directory attempt failed before the build could execute. Checkpoint: `6a9e2e3681a0c13b2aa4f4f6`. Base44 app commit: `c82b6b526bab07a932574d519327fceb9c559eb3`.

Production deployment was not independently verified.

## Distribution Queue
PB-TXT-069 is `production_ready` text only. It is not rendered, queued, scheduled, published, or live.

## Analytics / Evaluation
Historical pool at Run 59 start remains 26 GrowthEvents: 23 `landing_view`, 3 `waitlist_form_view`, and zero later-funnel events, including zero `qualified_review_submit`.

PB-EXP-009 primary metric is now attributable non-preview `pilot_qualified → qualified_review_submit`. Intermediate metrics retain `pilot_review_request_click` and `waitlist_form_start` so qualification, explicit commercial intent, contact start, and durable qualified submission remain separate stages.

Do not interpret `qualified_review_submit` as pilot acceptance, scheduling, SLA, placement, hiring result, or revenue.

## Winner Library
No winner promoted. The registered minimum sample remains at least 100 attributed landing sessions or 20 attributed waitlist signups for each comparable published variant before declaring a winner.

## Claims Boundary
This campaign claims only the implemented routing and telemetry behavior. It does not claim conversion lift, product validation, staffing outcomes, ROI, production deployment, or a live sales response.