# ProofBerry AI RUN75 — Score Context Is Not Sample Progress

## Customer Truth
A score screen should never invent progress. A model-generated score may be useful decision-support context, but sample history, default upward trends, and blanket `verified applicant` labels can make a recruiter or candidate infer evidence that does not exist.

## Creative Strategy
- Asset: `PB-TXT-085`
- Hook: **If the graph rises because the demo data says so, it is not candidate proof.**
- CTA: **Bring one live role. Inspect the artifact, provenance, and unresolved questions — not a manufactured trend.**
- Status: `production_ready`
- Base44 MarketingAsset record: `6a9ecab2b0f9de49fe253b9b`

Deployable copy:

> A candidate score can be useful decision-support. It becomes misleading when the screen fills gaps with sample progress, invented history, or a generic upward trend. ProofBerry now leaves missing score context empty, shows only values stored on the actual candidate profile, and keeps model scores separate from recordings, proof challenges, provenance, recruiter observations, third-party verification, and unresolved questions. Bring one live role. Inspect the artifact, provenance, and unresolved questions — not a manufactured trend.

## Production Readiness
Implementation asset: `PB-OPS-010`, Base44 MarketingAsset `6a9ecab2b0f9de49fe253b9c`.

Changed Base44 surfaces:
- `src/components/candidate/ScoreSection.jsx`: removed `CANDIDATES[0]`, sample 91/100 score, invented Jan–Jun score history, and canned score-boost promises; now loads the authenticated user's actual `CandidateProfile`, leaves missing scores/dimensions empty, and labels stored scores as model-generated decision support.
- `src/components/recruiter/ApplicantList.jsx`: `verified applicant` → `submitted evidence packet`; `ProofBerry Score` → `Historical model score`; assessment recommendation explicitly labeled model decision-support only.

Final sandbox build: exit `0`.
Checkpoint: `6a9ec96557bf84060b1ecd4c`.
Base44 commit: `8f97924a842fbed9794fa4d3693a3d6f99fd9c4d`.
Production deployment is not independently verified.

GitHub source parity: exact `src/components/candidate/ScoreSection.jsx` in this repository returned `404`, so no guessed application-source write was made.

## Distribution Queue
ProofBerry Base44 connectors at RUN75: `2/81` connected — GitHub API and Google Sheets. LinkedIn, TikTok, Instagram Business, Facebook Pages, Google Analytics, Search Console, and Meta Ads are disconnected. The TikTok connector states content/video upload is unsupported.

No RUN75 post was scheduled or claimed live.

## Analytics / Evaluation
- GrowthEvents: `26`
- `landing_view`: `23`
- `waitlist_form_view`: `3`
- later-funnel events: `0`
- `qualified_review_submit`: `0`
- durable `staffing_design_partner_review`: `0`

`PB-EXP-009` now includes `PB-TXT-085`. Primary commercial metric remains attributable non-preview `pilot_qualified → qualified_review_submit`. Score-context truthfulness is an integrity guardrail, not a conversion metric.

## Winner Library
- winner MarketingAssets: `0`
- RubricCriterion records: `0`
- no winner promoted
- minimum-sample gate retained: at least 100 attributed landing sessions or 20 attributed waitlist signups per comparable published variant.

## Research Signal
Robert Half reported March 10, 2026 that 65% of surveyed hiring managers said AI-enhanced resumes made candidate skills harder to verify. This supports the category need for inspectable evidence, but does not establish ProofBerry performance.

Source: https://press.roberthalf.com/2026-03-10-Robert-Half-survey-67-of-HR-leaders-report-AI-generated-applications-are-slowing-hiring

## Non-Claims
No video or image rendered. No post published. No candidate was independently verified by this run. No hiring decision, placement, booked conversation, pilot acceptance, conversion lift, revenue, or ROI was inferred from sandbox success.