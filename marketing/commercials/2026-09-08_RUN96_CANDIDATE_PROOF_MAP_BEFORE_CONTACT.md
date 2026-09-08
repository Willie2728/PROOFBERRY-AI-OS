# ProofBerry RUN96 — Candidate Proof Map Before Contact

## Customer Truth
**Map the proof before you share your email.**

The candidate path previously asked for contact before giving the job seeker a concrete way to translate a self-described capability into reviewable evidence. RUN96 makes the first exchange useful without PII: one target role + one capability claim becomes a Candidate Proof Map before contact appears.

## Creative Strategy
**PB-TXT-106 — Candidate Proof Map Before Contact**

Hook: `Map the proof before you share your email.`

CTA: `Choose one target role and one capability claim. Build and copy the Candidate Proof Map before you decide whether to request early access.`

The map asks the candidate to gather one reviewable work sample or artifact, the context/problem, what they personally did, and an outcome or receipt when available. It explicitly does not verify the claim, create a skill score or credential, or make a hiring recommendation.

## Production Readiness
Implemented in the active Base44 `src/components/landing/WaitlistSection.jsx`:
- candidate target role and capability claim are defined before contact;
- Candidate Proof Map can be reviewed and copied without email;
- explicit `Request candidate early access` intent is required before contact appears;
- durable `WaitlistSignup` fields preserve `candidate_target_role` and `candidate_capability_claim`;
- production-only, session-deduped events `candidate_proof_map_copy` and `candidate_access_request_click` were added;
- candidate inputs are labeled self-described and the UI warns against entering sensitive information.

Final client build: exit `0` from `/app`.
Checkpoint: `6a9fd4a623bc87248a20a175`.
Base44 commit: `5ebdfe1c5acd7a5107cb65a8f7d2915e5d0d3f4c`.

Recovered tooling failure: an initial build command ran from `/workspace` and exited `254` before the application build because `/workspace/package.json` was absent. The corrected `/app` build passed.

## Distribution Queue
PB-TXT-106 and PB-LP-048 are `production_ready` and unpublished. No authenticated external post/ad receipt exists.

## Analytics / Evaluation
RUN96 starting baseline:
- measurement-eligible production GrowthEvents: `0`;
- durable `candidate_early_access` requests: `0`;
- winner MarketingAssets: `0`.

`PB-EXP-011` is `ready`. Primary metric: production-eligible `candidate_access_request_click` among candidate sessions. Secondary evidence includes `candidate_proof_map_copy`, durable candidate early-access submissions, and the map-copy → access-request sequence. Empty production telemetry is an instrumentation baseline, not evidence of zero candidate demand.

## Winner Library
No winner promoted.

## Market Evidence Boundary
Robert Half reported on March 10, 2026 that 65% of surveyed hiring managers said AI-enhanced resumes made skills harder to verify and 67% of HR leaders said AI-generated applications were slowing hiring. That supports a product direction centered on inspectable underlying evidence rather than increasingly polished claims. It is category evidence, not ProofBerry performance evidence.

Source: https://press.roberthalf.com/2026-03-10-Robert-Half-survey-67-of-HR-leaders-report-AI-generated-applications-are-slowing-hiring

## GitHub / Source Boundary
The active Base44 application file is `src/components/landing/WaitlistSection.jsx`. The same path currently returns 404 in the connected `Willie2728/PROOFBERRY-AI-OS` repository, so this RUN96 record does not claim Base44↔GitHub application-source parity.
