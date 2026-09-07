# ProofBerry AI — Growth Run 61

## Campaign: One Request. One Durable Record.

**Customer Truth**
A staffing buyer who has already qualified a bounded one-role review should create one durable commercial record, not duplicate signups or a second lower-fidelity record created by notification plumbing.

**Creative Strategy**
Hook: **One qualified request. One durable record.**
Supporting line: **No duplicate signup. No buried buyer signal.**
CTA: **Bring one live role and request the bounded one-role review.**

**Production Readiness**
- `PB-LP-032`: the landing page remains the only durable `WaitlistSignup` writer.
- `notifyWaitlist` is notification-only and receives the durable request classification, qualification snapshot, marketing-opt-in state, and source.
- Qualified requests can route with the subject `Qualified ProofBerry One-Role Review Request` without creating another lead record.
- `PB-DOC-031`: 1200×1600 SVG source prepared in Base44 at `public/marketing/PB-DOC-031-qualified-demand-one-record.svg`.
- `PB-TXT-071`: production-ready copy based on this campaign.
- Sandbox build passed after correcting the shell working directory. Production deployment was not independently verified.

**Distribution Queue**
Status: **Prompt Ready / not scheduled**. Recommended channels once authenticated publishing is available: LinkedIn founder/company post, recruiter email follow-up, sales deck insert, and website conversion-support card. No social post or email blast is claimed sent.

**Analytics / Evaluation**
Primary experiment signal remains attributed non-preview `pilot_qualified → qualified_review_submit`.
Run 61 adds a data-integrity check: **one submitted request should create one durable `WaitlistSignup` record**. Historical data currently contains a same-email recruiter pair created within a fraction of a second on July 4, 2026, consistent with the duplicate-write path that has now been removed. Historical records were not deleted.

**Winner Library**
No winner declaration until the registered sample gate is met. This campaign is a challenger, not a winner.

**Claims Boundary**
This work verifies source changes, a successful sandbox build, and a durable marketing brief. It does not prove production deployment, email delivery, pilot acceptance, scheduling, SLA, placement, hiring outcome, revenue, or conversion lift.