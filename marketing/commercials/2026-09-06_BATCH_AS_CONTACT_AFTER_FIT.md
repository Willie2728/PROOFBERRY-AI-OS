# PB-TXT-056 — Contact Comes After Fit

## Status
Production-ready text only. Not scheduled, posted, published, or verified live. No video rendered.

## Customer Truth
A staffing buyer can establish whether a one-role pilot is measurable before ProofBerry asks for contact details. An email address is not a qualification signal. For the current design-partner model, the buyer-side signals are one live requisition, one accountable owner, and one finite 14-, 30-, or 60-day decision window.

## Creative Strategy
**Hook:** The most valuable field in a staffing-pilot form is not the email address.

**Body:**
The most valuable field in a staffing-pilot form is not the email address. It is whether there is a live role, an accountable owner, and a date to decide what happens next.

ProofBerry's recruiter path now lets a staffing buyer establish those three pilot-fit signals before contact details.

Exploring is still welcome. A measurable one-role design-partner review is different:
- one live requisition;
- one accountable owner;
- one finite 14-, 30-, or 60-day decision window.

Contact information does not make the pilot qualified. The operating question is whether the workflow earns role #2.

**CTA:** Bring one live role and inspect the proposed evidence packet first.

## Production Readiness
Pair with the existing PB-DOC-025 one-role evidence packet and the recruiter-qualified waitlist path. Do not add validated-selection, predictive-validity, bias-elimination, identity-verification, placement-lift, or ROI claims.

## Distribution Queue
Proposed route: `/?audience=recruiter&utm_source=linkedin&utm_campaign=proofberry_contact_after_fit&utm_content=PB-TXT-056#waitlist`.

Queue only after an authenticated publishing path is available. Do not mark Scheduled or Posted without platform verification.

## Analytics / Evaluation
PB-LP-017 adds a separate `buyer_readiness_complete` event when a non-preview recruiter visitor reaches 3/3 pilot-fit signals. Contact fields now appear after qualification inputs, and `waitlist_form_start` is tied to contact-field focus rather than pre-contact qualification fields.

Primary sequence to evaluate:
`recruiter landing → buyer_intent_select(live_role) → buyer_readiness_complete → waitlist_form_start → waitlist_submit`.

Historical GrowthEvents are not a clean baseline because multiple records are identifiable Base44 preview traffic.

## Winner Library
No winner. Do not promote until the registered minimum sample and claims-integrity gates are met.
