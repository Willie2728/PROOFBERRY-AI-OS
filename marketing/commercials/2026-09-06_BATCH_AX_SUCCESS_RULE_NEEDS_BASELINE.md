# ProofBerry AI — PB-TXT-062 / PB-DOC-029 / PB-LP-023

## Customer Truth
A staffing pilot can be buyer-qualified and still be hard to evaluate. A success rule becomes more interpretable when the buyer also names what the pilot will be compared against before the review starts.

## Creative Strategy
**Hook:** A success rule without a baseline is still hard to evaluate.

A live role, accountable owner, finite decision window, and buyer-defined success rule tell ProofBerry what the test is and what would make role #2 a yes. Run 52 adds an optional evaluation-baseline step after buyer qualification: current staffing process, current tool/workflow, manual review baseline, or explicitly not defined yet.

The baseline is not a contact gate and is not a promise that ProofBerry will outperform it.

## Production Readiness
- **PB-DOC-029** — 1200×1600 SVG, verified static source readback in connected Base44. Not a video and not published.
- **PB-TXT-062** — production-ready text only. Not scheduled or published.
- **PB-LP-023** — connected Base44 recruiter-path update and GrowthEvent schema update. `pilot_baseline_select` records the baseline key; `pilot_evaluation_ready` fires only when the recruiter is already pilot-qualified and has selected a usable baseline. Free-text success criteria are not copied into anonymous GrowthEvent telemetry.
- Base44 sandbox build: exit code 0. Checkpoint `6a9dcad1400cc5d2f05435c0`; app commit `d01f6c2c2d94a4a23075d8c0fc5ad9404167c272`.
- Production deployment was not independently verified.

## Distribution Queue
Primary sequence: qualified staffing creative → recruiter live-role path → buyer qualification → optional baseline selection → contact start → submit.

Use only authenticated destinations. Do not mark Scheduled, Posted, or live without platform verification.

## Analytics / Evaluation
Primary new evaluation-quality signal: attributable non-preview `pilot_evaluation_ready` after `pilot_qualified`.

Downstream decision sequence remains: `pilot_qualified` → `waitlist_form_start` → `waitlist_submit`. Baseline selection is not a substitute for conversion and is not a candidate-evaluation score.

Historical ProofBerry growth data remains insufficient for winner selection; preview traffic is excluded from buyer conclusions.

## Winner Library
Untested. No winner promoted in Run 52.

## Claims Boundary
Do not claim validated selection, predictive validity, identity/fraud verification, bias elimination, ATS integration, improved hiring outcomes, ROI, placement lift, or baseline outperformance. Consequential hiring decisions remain human-owned.
