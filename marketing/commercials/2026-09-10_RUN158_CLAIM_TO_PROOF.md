# RUN158 — Claim to Proof

## Customer Truth
Candidate conversion was still carrying internal campaign language and an older auxiliary proof-gap link. The high-intent job is simpler: help a candidate turn one role-relevant capability claim into an artifact a human reviewer can inspect before asking for contact information.

## Creative Strategy
**PB-TXT-168 — Turn one skill claim into proof a reviewer can inspect.**

Core message: choose one target role and one capability claim, inventory what evidence is actually available, then define the smallest next artifact that makes the claim easier for a human reviewer to inspect.

CTA: build the proof map first; use the Claim-to-Proof Worksheet to connect the claim to a real task, candidate contribution, inspectable artifact, observable outcome, and reviewer question.

## Production Readiness
**PB-DOC-074 — Claim-to-Proof Worksheet**

The worksheet asks for:
1. target role;
2. skill/capability claim;
3. one real task demonstrating the claim;
4. an inspectable artifact;
5. the candidate's own contribution, including the role of AI/tools when applicable;
6. an observable outcome or external receipt;
7. the question a human reviewer should be able to answer.

Decision rule: if the reviewer still has to trust résumé wording instead of inspecting the work, the proof gap is not closed.

Base44 source touched:
- `src/components/landing/WaitlistSection.jsx`
- `public/marketing/PB-DOC-074-claim-to-proof-worksheet.html`

Final Base44 build: exit 0.
Checkpoint: `6aa3148bb0003fabe9bc9c1f`
Base44 checkpoint commit: `18098a1edb097638289f57f84372c3416ca38af2`

## Distribution Queue
Not released externally. Publishing destinations were checked separately in the run ledger. No social post, ad, email campaign, or paid spend is claimed live.

## Analytics / Evaluation
Before RUN158 durable writes, verified measurement-eligible production ProofBerry GrowthEvents: **0**.

Candidate proof-map copy and candidate early-access click attribution now use `PB-TXT-168`; opening the new worksheet uses `PB-DOC-074` attribution. Preview/localhost traffic remains excluded by the existing measurement layer.

## Winner Library
No promotion. `winner=false` until qualified production evidence supports a decision.

## Claims boundary
The worksheet organizes evidence. It does not verify identity, authenticity, skill level, employability, hiring suitability, or credential status. Human reviewers retain consequential hiring decisions. No production deployment is claimed from file presence, checkpoint creation, or a passing build.
