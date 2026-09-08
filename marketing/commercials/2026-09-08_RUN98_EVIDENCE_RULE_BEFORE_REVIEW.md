# RUN98 — Evidence Rule Before Review

## Customer Truth
A one-role pilot is not evaluation-ready merely because the buyer has a live requisition, owner, decision window, and success rule. The buyer should also be able to state what evidence a candidate claim must carry before it is considered review-ready.

## Creative Strategy
**PB-TXT-108 — Define what evidence earns review before the call.**

CTA: Choose the minimum evidence packet a candidate claim must carry before client or hiring-team review, then request the one-role review.

The evidence rule is deliberately optional at this stage. It improves evaluation quality without adding another mandatory contact gate before ProofBerry has production-qualified funnel evidence supporting the extra friction.

## Production Readiness
Implemented in Base44 `src/components/landing/WaitlistSection.jsx` as an optional buyer-defined evidence rule with four choices: reviewable work sample; context + candidate action; outcome/external receipt; reviewer trace/follow-up path.

Selected requirements are carried into the internal pilot brief, Pilot Fit Snapshot, durable request message, and GrowthEvent metadata (`evidence_requirements`, `evidence_requirement_count`). The interface states that the rule is buyer-defined and does not verify a candidate, create a credential, or make a hiring decision.

Base44 checkpoint: `6a9fefe613214a3f2062e3c3`
Base44 commit: `f48869c56bc4414ea8d3dc28405a656b3fa099fe`
Final application build: exit 0.
Recovered pre-build tooling failures: default `/workspace` build exited 254 because `package.json` was absent; a `cwd=/app` invocation resolved `/app/app` and exited 1; `cd /app && npm run build` passed.

## Distribution Queue
Production-ready and unpublished. No external publication receipt is attached. ProofBerry currently has 2/81 Base44 connectors connected (GitHub API and Google Sheets). Authenticated social, paid-media, and analytics destinations needed for measured distribution remain disconnected; the exposed TikTok connector does not support content/video upload.

## Analytics / Evaluation
Current measurement-eligible production GrowthEvent count at RUN98 review: 0. Winner MarketingAsset count: 0.

Primary qualified conversion remains `qualified_review_submit`. RUN98 adds `evidence_requirement_count` and the selected evidence rules as diagnostics so future production traffic can show whether stronger buyer evidence discipline correlates with durable one-role review requests.

## Winner Library
No winner promoted. Production evidence is insufficient.

## Claims Boundary
This asset does not claim candidate verification, hiring outcomes, pilot acceptance, product-performance lift, production deployment, revenue, or ROI. No RUN98 video, image, audio, social post, or ad is represented as rendered or live.
