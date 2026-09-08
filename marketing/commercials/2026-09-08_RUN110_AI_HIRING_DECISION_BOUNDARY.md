# RUN110 — ProofBerry AI Hiring Decision Boundary

**Asset IDs:** PB-TXT-120 + PB-DOC-035  
**Status:** Production-ready; unpublished; untested in verified production traffic.  
**Customer truth:** Before an enterprise buyer debates whether an AI hiring tool is “accurate,” they need to know what decision the system is allowed to influence or make, what remains human-owned, what evidence must remain inspectable, and what validation / notice questions require review.

## Creative strategy

**Hook:** Before you ask whether the AI is accurate, ask what decision it is allowed to make.  
**CTA:** Run the AI hiring decision-boundary checklist before you scope a live role.

PB-DOC-035 is a no-contact buyer review aid covering: decision boundary, accountable human owner, evidence provenance, validation, notice / review rights, data boundary, audit trail, and stop / escalation rules. It links to the existing illustrative evidence packet so a buyer can inspect the evidence model before submitting contact information.

## Production readiness

Base44 files:
- `src/components/landing/TrustGapSection.jsx`
- `public/marketing/PB-DOC-035-ai-hiring-decision-boundary-checklist.html`

Build verification: `npm run build` exited 0 after one transient Base44 worker disconnect.  
Base44 checkpoint: `6aa08b07b33ff5522eb4633c`  
Base44 checkpoint commit: `ed644278f3bccfa175790a365417ffff63167077`

The CTA records `conversion_asset_click` only outside local / preview runtimes with `asset_id=PB-DOC-035`, `surface=trust_gap`, and production measurement eligibility. This is instrumentation, not evidence of deployment or conversion.

## Distribution queue

Approved for the owned-product queue only. No authenticated external social, paid, email, or analytics publication receipt is attached to RUN110; do not mark published without one.

## Analytics / evaluation

RUN110 started with exactly 0 `GrowthEvent` records satisfying `environment=production` and `measurement_eligible=true`, and 0 ProofBerry `MarketingAsset` records with `status=winner`. PB-EXP-012 remains planned. New diagnostic sequence: `conversion_asset_click(PB-DOC-035 from trust_gap) → qualified_review_submit`.

## Winner library

No winner promoted. Build success, internal clicks, or category research are not sufficient to establish a winner.

## Claims boundary

PB-DOC-035 is a buyer-scoping aid. It is not legal advice, a bias audit, a validation study, a compliance certification, candidate verification, a hiring recommendation, or proof that a particular control is operating in production. Jurisdiction-specific requirements must be reviewed for the buyer’s actual deployment.