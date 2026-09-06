# PB-TXT-061 — Contact Comes After Fit

**Run:** WCL Growth Run 51  
**Product:** ProofBerry AI  
**Audience:** staffing agency owners, recruiting leaders, pilot owners  
**State:** production-ready text only; not scheduled; not published

## Customer Truth
A staffing pilot should not become “qualified” because someone typed an email address. The buyer-side pilot should demonstrate fit first: one live requisition, one accountable owner, one finite 14/30/60-day decision window, and one buyer-defined rule for whether the workflow earns role #2.

## Creative
**Hook:** If you say contact comes after fit, the form should actually behave that way.

A staffing pilot should not become “qualified” because someone typed an email address.

ProofBerry’s live-role path now does the opposite: first define one live requisition, one accountable owner, one finite decision window, and the buyer’s own rule for whether the workflow earns role #2. Only after that buyer-side fit is complete does the contact step appear.

If the team is still exploring, it can choose the lighter early-access path instead.

The goal is fewer unqualified conversations and a cleaner signal about who is actually ready to evaluate one bounded role. Consequential hiring decisions remain human-owned.

**CTA:** Bring one live role, one owner, one 14/30/60-day decision window, and one success rule. Then decide whether the one-role review is worth your contact details.

## Production Readiness
- PB-DOC-028: verified static SVG by complete Base44 source readback; not a video; not published.
- PB-LP-022: live-role contact fields are structurally hidden until buyer-side qualification is complete; Base44 sandbox build verified exit 0.
- Production deployment has not been independently verified.

## Claims Boundary
External staffing research may be cited only as attributed category context. Do not claim validated selection, identity or fraud verification, legal compliance, predictive validity, bias elimination, ATS integration, placement lift, ROI, or automatic hiring.

## Evaluation
Primary decision sequence: attributed non-preview recruiter session → `pilot_qualified` → `waitlist_form_start` → `waitlist_submit`.

Do not declare a winner until the registered PB-EXP-009 sample gate is met.