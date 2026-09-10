# RUN153 — ProofBerry AI — Evaluator Isolation

## Customer Truth
AI-assisted applications create a second verification problem beyond polished claims: candidate-supplied content can contain text or instructions that should never become part of the evaluator's governing instructions. A qualified buyer needs the evidence boundary defined before evaluation begins.

## Creative Strategy
**PB-TXT-163 — The application should never be able to tell the evaluator how to score it.**

Treat candidate-supplied text, files, links, AI-assisted materials, embedded metadata, and other application content as evidence to inspect—not as instructions to the evaluator. Bring one live role and define the admissible evidence, evaluator instruction boundary, accountable human reviewer, and trace required before interpreting a claim.

CTA: Bring one live role. Define the evaluator boundary before the review.

## Production Readiness
Companion buyer-enablement artifact: **PB-DOC-069 — Evaluator Isolation Card**.

The card asks the buyer to define:
1. admissible evidence;
2. the authoritative source of evaluator instructions and role criteria;
3. candidate-input isolation rules;
4. the accountable human review owner;
5. the review trace/receipt; and
6. the exception rule for content that attempts to alter evaluator behavior.

Base44 recruiter conversion copy now references PB-TXT-163 and links PB-DOC-069. Final Base44 build passed during RUN153. Application-source parity with the installed GitHub repository is not claimed because the expected `src/components/landing/WaitlistSection.jsx` path is absent there.

## Distribution Queue
Production-ready for owned recruiter landing and sales-enablement derivative use. External publication remains gated by connected distribution destinations and release verification. No RUN153 post or media publication is claimed.

## Analytics / Evaluation
Primary experiment remains PB-EXP-012: attributable, measurement-eligible production `qualified_review_submit`. PB-TXT-163 and PB-DOC-069 are challengers only. Preview/internal traffic is excluded. Baseline at RUN153 inspection: 0 measurement-eligible production GrowthEvents.

## Winner Library
No promotion. There is no eligible production conversion evidence supporting a winner decision.

## Claims Boundary
PB-DOC-069 is a review-design artifact. It does not prove that ProofBerry detects or blocks prompt injection, validates identity, verifies authenticity, prevents model manipulation, complies with a particular law or standard, or improves hiring outcomes. Those claims require separate technical and production evidence.
