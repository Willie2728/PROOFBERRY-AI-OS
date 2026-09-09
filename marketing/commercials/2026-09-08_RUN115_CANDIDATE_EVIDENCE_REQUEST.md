# ProofBerry RUN115 — Candidate Evidence Request

## Customer Truth
Evidence-first hiring still creates friction if the buyer has to invent the candidate request from scratch. A recruiter needs a bounded, privacy-conscious template that asks for inspectable evidence without asking for more résumé polish, confidential employer material, or unnecessary sensitive information.

## Creative Strategy
**PB-TXT-125 — Ask for evidence without asking for more résumé polish.**

**PB-DOC-039 — Candidate Evidence Request Template** asks for:
1. one relevant work artifact;
2. the candidate's contribution and limits;
3. material AI/tool/collaborator assistance;
4. an inspectable outcome receipt when legitimately available; and
5. unresolved questions that still require human review.

The template explicitly tells candidates not to provide passwords/API keys, protected health information, government identifiers, employer/client confidential material, or unnecessary protected-characteristic information.

## Production Readiness
Base44 MarketingAsset records:
- PB-TXT-125: `6aa0d1a7b849f45d1cccf6e5` — `production_ready`
- PB-DOC-039: `6aa0d1a7b849f45d1cccf6e6` — `production_ready`

Base44 artifact: `public/marketing/PB-DOC-039-candidate-evidence-request-template.html`

The Trust Gap surface now links to PB-DOC-039 and records a production-only `conversion_asset_click` with `asset_id=PB-DOC-039`, `action=open_candidate_evidence_request_template`, and `surface=trust_gap`.

Final Base44 checkpoint: `6aa0d1da0ae77d18fbe999e4`

Base44 commit: `106077a92576911b37112d4c1e3c14599bf7203b`

Final build: **exit 0**. Only the existing stale Browserslist/caniuse-lite warning remained.

## Analytics / Evaluation
Verified RUN115 baseline before winner evaluation:
- measurement-eligible production GrowthEvents: **0**
- staffing design-partner review WaitlistSignup records: **0**
- winner MarketingAssets: **0**

`PB-EXP-012` remains **planned**. PB-TXT-125 and PB-DOC-039 are challengers. New diagnostic: `conversion_asset_click(PB-DOC-039 from trust_gap) → qualified_review_submit`.

## Claim Boundary
PB-DOC-039 is a request framework. It is not identity verification, authorship certification, a credential, a background check, a bias audit, legal advice, compliance certification, a skill score, or a hiring recommendation. No candidate evidence has been verified by creating or opening this asset.

## Distribution State
`published=false`, `rendered=false`, `production_deployment_verified=false`. No social post, ad, email, or video is claimed live or rendered.
