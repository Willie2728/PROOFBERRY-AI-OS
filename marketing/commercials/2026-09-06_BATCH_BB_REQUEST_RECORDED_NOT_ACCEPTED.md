# PB-TXT-068 — Request Recorded, Not Accepted

## Customer Truth
A successful form submission should confirm what the system actually did. It should not imply pilot acceptance, scheduling, access, an SLA, or guaranteed follow-up when those outcomes have not been verified.

## Creative Strategy
**Hook:** A submit confirmation should confirm the request — not invent an acceptance, SLA, or guaranteed follow-up.

ProofBerry's one-role design-partner path is strongest when each stage has a precise meaning:

1. `pilot_qualified` means the buyer defined one live role, an accountable owner, a finite decision window, and a buyer-defined success rule for whether the workflow earns role #2.
2. `pilot_review_request_click` means the qualified buyer explicitly chose to open the commercial-contact step.
3. `waitlist_form_start` means the buyer voluntarily began entering contact information.
4. `waitlist_submit` means the request was recorded.

`waitlist_submit` does **not** mean the design-partner pilot was accepted, scheduled, assigned an SLA, or proven to produce a hiring or staffing outcome.

## Deployable Copy
### Primary version
**A submit confirmation should confirm the request — not invent the follow-up.**

ProofBerry lets a staffing buyer define one bounded role, an accountable owner, a decision window, and the rule that would make role #2 worth considering. The buyer then decides whether to request a conversation.

If they submit, the system confirms one thing: **the request was recorded.**

No fake acceptance. No invented response time. No implied hiring recommendation or performance guarantee.

**CTA:** Bring one live role. Define the boundary. Decide whether the one-role review is worth the conversation.

### Short version
**Request recorded ≠ pilot accepted.**

ProofBerry keeps buyer qualification, explicit review intent, contact, and acceptance as separate states so the funnel does not manufacture certainty that does not exist.

**CTA:** Qualify one role, then deliberately request the review.

## Production Readiness
- Text asset only.
- Base44 landing-page confirmation copy updated as PB-LP-029.
- Base44 sandbox build verified with exit code 0.
- Base44 checkpoint: `6a9e20b68bf07ee8e38a3549`.
- Base44 app commit: `d32bdbf378cedff5a885521c25d07bce2bd7ab18`.
- Production deployment not independently verified.
- No image or video rendered in this run.
- No post scheduled or published.

## Distribution Queue
Hold at **Prompt Ready / production-ready text** until an authenticated channel is available. Optimize for attributable recruiter/staffing-buyer traffic, not broad impressions.

## Analytics / Evaluation
The primary ProofBerry commercial-intent signal remains `pilot_qualified → pilot_review_request_click`. Run 58 does not change the qualification gate. It improves post-submit expectation accuracy. Future post-submit evaluation should only use independently instrumented acceptance, scheduling, response, or pilot-start events; do not infer those outcomes from `waitlist_submit`.

## Winner Library
No winner promotion. Historical GrowthEvent pool at Run 58 start: 26 total events — 23 `landing_view`, 3 `waitlist_form_view`, and zero later-funnel events. Registered minimum sample remains unchanged.