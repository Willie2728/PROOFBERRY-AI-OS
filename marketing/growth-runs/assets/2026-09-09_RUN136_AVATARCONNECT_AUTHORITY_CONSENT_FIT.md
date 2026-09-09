# AvatarConnect — RUN136 Authority + Consent Fit Gate

## Customer Truth
A buyer selecting a likeness-authority option is not automatically qualified to proceed. “Not ready yet” must remain an incomplete planning state, and a non-self likeness needs a buyer-declared consent/authorization workflow before contact unlocks.

## Creative Strategy
- **AVC-TXT-001** — “A selected likeness is not automatically a ready likeness.”
- **AVC-DOC-001** — Authority + Consent Fit Card.

## Production Readiness
`scopeReady` now accepts only `self`, `authorized_team_member`, or `licensed_talent` as ready authority states. For `authorized_team_member` or `licensed_talent`, `consent_workflow_ready` must also be true before contact becomes available. A self-likeness may proceed without the separate consent-workflow checkbox, while all other provider/runtime, decision-window, use-case, and evidence-receipt requirements remain in force.

Static buyer enablement: `public/marketing/AVC-DOC-001-likeness-authority-consent-fit-card.html`.

Final Base44 build exited **0**. Checkpoint: `6aa1eaae1f7d979eb36e743d`. Base44 commit: `4c4b90b872b16c7252f60808b3035af90baa5ef9`.

## Analytics / Evaluation
Verified `AvatarPilotRequest` records: **0**.

## Winner Library
No promotion. A buyer-declared authority or consent state does not verify identity, legal authority, consent authenticity, licensing terms, provider connection, avatar generation, production deployment, performance, conversion lift, revenue, or ROI.

## Research Context
The FTC’s August 2026 final orders regarding the marketed “Active Listening” service prohibit misrepresentations about service capabilities and about whether consumers provided consent for voice-data collection/use. The matter is not an avatar-law precedent, but it reinforces the broader marketing principle that capability and consent claims need to match reality. NIST’s digital identity guidelines separately treat identity proofing as evidence-based rather than a mere self-asserted label. These sources support keeping AvatarConnect’s authority/consent states bounded; they do not verify AvatarConnect compliance.

Sources:
- https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about
- https://www.nist.gov/publications/nist-sp-800-63a-4digital-identity-guidelines-identity-proofing-and-enrollment
