# AvatarConnect RUN149 — One Avatar, One Signal

**Asset IDs:** AVC-TXT-002 + AVC-DOC-002  
**Status:** production-ready in Base44; not externally published; render not applicable; production deployment not verified.

## Customer Truth
Qualified avatar demand should be measured only after the buyer has defined one bounded use case, a ready likeness-authority basis, any required consent workflow, provider/runtime state, decision timing, and a first-workflow receipt. Repeated field edits or preview activity are not additional demand.

## Creative
**Hook:** “One deliberately qualified avatar scope should create one anonymous production signal—not one signal per field edit or preview session.”

**CTA:** Prove one authorized avatar workflow before scaling the likeness.

## Production Change
RUN149 adds `AvatarScopeSignal` with anonymous session identity, authority basis, buyer-declared consent-workflow readiness, provider state, decision window, source/campaign/content attribution, runtime environment, and measurement eligibility. The owned CTA emits one `scope_ready` signal per anonymous production session and excludes localhost/preview. It does not store the free-text use case, receipt text, or email in the anonymous signal. The durable contact request remains a separate `AvatarPilotRequest` receipt.

The owned buyer card is `public/marketing/AVC-DOC-002-one-avatar-one-signal.html`.

## Measurement / Rights Boundary
Verified RUN149 baseline: **0 measurement-eligible production AvatarScopeSignal records** and **0 AvatarPilotRequest records**. A qualified scope is not independent identity verification, consent verification, provider connection, avatar creation, deployment, performance, or legal clearance.

Current talent-industry guidance reinforces the positioning: an August 26, 2026 SAG-AFTRA/Cameo/CAA/UTA/WME statement emphasizes explicit authorization and talent control over names, voices, likenesses, and AI-generated digital replicas. That supports consent-first qualification without proving AvatarConnect compliance or performance.
