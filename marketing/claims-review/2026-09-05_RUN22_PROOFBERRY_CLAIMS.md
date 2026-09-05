# ProofBerry Claims Review — Run 22

Date: 2026-09-05

## Base44 public/product surfaces hardened

The connected ProofBerry Base44 source was edited in these files:

- `src/components/landing/CandidateValueSection.jsx`
- `src/components/landing/FeatureCardsSection.jsx`
- `src/components/landing/ProofSection.jsx`
- `src/pages/Investor.jsx`
- `src/components/candidate/onboarding/OnboardingModal.jsx`
- `src/data/cinematicVideos.js`

## What changed

Targeted language was removed or reframed where it implied unsupported or overly absolute claims, including:

- a verified score proving a candidate;
- zero-bias / pure-signal positioning;
- AI evaluating hiring performance objectively;
- recruiter access to everything by default;
- eye-contact / confidence scoring being treated as hiring evidence;
- a fixed 75% AI resume-rejection statistic;
- guaranteed-style hiring language such as `Prove it. Show it. Get hired.`;
- a ProofBerry-generated hiring recommendation in an illustrative investor demo;
- unsupported proprietary-model and hard market-size claims on the inspected investor page.

Replacement copy emphasizes role-relevant evidence, structured criteria, reviewer inspection, active consent, human-owned consequential decisions, and planned/early-access boundaries.

## Verification

A targeted post-edit Base44 grep returned zero matches for the reviewed phrases:
`verified score`, `Zero Bias`, `Pure skill, pure signal`, `AI evaluates performance objectively`, `VERIFIED — RECOMMENDED`, `ProofBerry recommends Candidate B`, `AI scoring includes eye contact`, `recruiters will see everything`, `Full report generated after each session`, `Every skill claim becomes verifiable`, `AI filters reject 75%`, `recruiters actually watch`, `Prove it. Show it. Get hired`, and `The static resume is dead`.

During the OnboardingModal edit, a transient missing-comma syntax error was introduced by the patch operation. Build Liaison caught it immediately from the returned diff and repaired all four affected object literals before the run continued. Base44 shell build verification remains unavailable because `run_command` still executes inside an empty `/workspace` without the app's `package.json`; therefore this record does not claim a successful npm build.
