# VerifyTrust RUN81 — Scope One Identity Workflow Before the Verification Promise

Date: 2026-09-07

## Customer Truth
Identity verification starts with an assurance target and a bounded workflow — not a green checkmark.

NIST SP 800-63A-4 describes identity proofing as a process in which an applicant provides evidence that allows a credential service provider to assert identity at a useful identity assurance level, and it defines requirements for three IALs. That supports asking a buyer to define the assurance need and operating boundary first. It does **not** establish that VerifyTrust conforms to NIST or is certified.

Sources:
- https://www.nist.gov/publications/nist-sp-800-63a-4digital-identity-guidelines-identity-proofing-and-enrollment
- https://pages.nist.gov/800-63-4/sp800-63a.html

## Creative Strategy
**VT-TXT-001 — Scope One Identity Workflow Before the Verification Promise**

Hook: **Identity verification starts with an assurance target and a bounded workflow — not a green checkmark.**

CTA: **Submit one bounded integration request and make the architecture earn the next step.**

WCL MarketingAsset: `6a9f1dfb2b8506bcccc1c0cb`, status `approved`, `published=false`.

## Production Readiness
RUN81 created the durable `IntegrationPilotRequest` entity with fields for:
- business email and organization;
- requester role;
- one bounded identity-proofing use case;
- buyer-selected assurance target or uncertainty (`exploratory`, `ial1`, `ial2`, `ial3`, `unsure`);
- provider/integration boundary;
- privacy, retention, consent, or deletion requirement;
- decision window;
- separately controlled marketing consent;
- internal request status.

The public CTA now stores a request only after a successful entity write. It explicitly warns users not to submit identity documents, biometrics, or other sensitive identity evidence in the scoping form. The success state says the durable record is a **scoping receipt only** — not pilot acceptance, a contract, NIST conformance, production deployment, certification, SLA, or identity-verification result.

Build:
- Final sandbox build exited `0`.
- Checkpoint: `6a9f1dba71896012615d16cd`
- Base44 commit: `5bcc4f32e1ac61d2e5c0e5ae701a69d75fb891c1`
- Production deployment was not independently verified.

No matching installed GitHub repository for VerifyTrust was found in RUN81, so Base44 application-source parity was not fabricated.

## Distribution Queue
VerifyTrust currently has 0 of 81 Base44 connectors connected. No authenticated enterprise-outbound, analytics, CRM, or social destination receipt was verified in RUN81.

## Analytics / Evaluation
`IntegrationPilotRequest` records after instrumentation: exactly **0**.

This is a newly instrumented qualified-intent baseline, not evidence of zero market demand.

## Winner Library
VT-TXT-001 is untested and unpublished. No winner was promoted.

## Claims Boundary
RUN81 does not claim a verification provider is connected, a government ID is validated, a liveness/biometric/fraud result is produced, an IAL is achieved, NIST conformance is established, a certification exists, or production identity proofing is deployed.