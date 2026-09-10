# ProofBerry RUN146 — Count the Decision, Not the Reload

**Asset:** PB-TXT-156  
**Audience:** staffing leaders, recruiters, hiring operators  
**Status:** production-ready owned-funnel creative; not externally published  

## Customer Truth
A qualified buyer milestone is useful only if it represents a deliberate state change. A page reload or component remount is not a second buyer decision.

## Hook
**Count the decision, not the reload.**

## Deployable copy
Bring one live role. Define the accountable owner, finite decision window, buyer-side success rule, and the evidence boundaries that would make a one-role review interpretable. ProofBerry can then measure the buyer milestone once per anonymous browser session instead of treating repeated page activity as additional demand.

## CTA
**Scope one live role once, then evaluate the evidence rule—not repeated page activity.**

## Measurement rule
RUN146 adds browser-session deduplication to automatic recruiter milestones: `buyer_readiness_complete`, `pilot_scope_ready`, `pilot_fit_snapshot_view`, and `pilot_evaluation_ready`. Known preview/localhost runtime remains excluded. Failed event writes release the dedupe key so a real retry can be recorded.

## Evidence boundary
This asset does not claim a pilot was accepted, a candidate was verified, hiring improved, production deployment occurred, or conversion increased. Winner status requires attributable measurement-eligible production evidence.