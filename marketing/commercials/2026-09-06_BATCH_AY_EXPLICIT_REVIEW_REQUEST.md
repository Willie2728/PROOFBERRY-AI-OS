# ProofBerry AI — RUN54 / PB-TXT-064

## Customer Truth
A buyer-qualified one-role pilot is not the same thing as willingness to start a commercial conversation.

## Creative Strategy
**Hook:** A qualified pilot is not a sales conversation until the buyer chooses the next step.

A staffing buyer can qualify a one-role ProofBerry pilot without agreeing to a sales conversation. That distinction matters. The live-role path now separates buyer qualification from the moment the buyer explicitly chooses the next step. After defining the role, accountable owner, decision window, and role #2 success rule, the buyer can review the proposed evidence packet, copy the internal pilot brief, and—only when ready—request the one-role review.

That request does not share contact information or change candidate status. It is a prospective buyer-intent signal that precedes contact-form start. Consequential hiring decisions remain human-owned.

**CTA:** Qualify one bounded role, carry the brief internally, then explicitly request the one-role review when the conversation is worth starting.

## Production Readiness
- PB-TXT-064: production-ready text only.
- PB-LP-025: implemented in connected Base44; `pilot_review_request_click` added to GrowthEvent.
- Base44 sandbox build: exit code 0.
- Checkpoint: `6a9de7b9b43f168f46c06b22`.
- Base44 commit: `b4bede36bcdd95fe5d9b17b74c19c1c4a93b26f8`.
- Production deployment: not independently verified.

## Distribution Queue
Queue only to authenticated channels. Do not mark Scheduled, Posted, or live without destination-side verification.

## Analytics / Evaluation
Prospective sequence: `pilot_qualified → pilot_brief_copy → pilot_review_request_click → waitlist_form_start → waitlist_submit`.

`pilot_review_request_click` is explicit willingness to start a conversation, not a product-performance result, candidate score, hiring outcome, or completed conversion.

## Claims Boundary
Do not claim validated selection, predictive validity, identity/fraud verification, bias elimination, compliance, ATS integration, placement improvement, ROI, automatic hiring, or baseline superiority without evidence.
