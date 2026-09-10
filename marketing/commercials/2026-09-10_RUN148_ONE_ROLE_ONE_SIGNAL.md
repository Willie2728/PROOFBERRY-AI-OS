# RUN148 — One Role, One Signal

## Customer Truth
Repeated CTA clicks are not repeated recruiter demand. ProofBerry already separated scoping-ready from evaluation-ready recruiter intent, but `conversion_asset_click` could still be written repeatedly for the same asset/action inside one browser session.

## Creative Strategy
**PB-TXT-158:** “Bring one live role. Leave with one evidence rule your team can actually review.”

Deployable copy:

> AI can make applications look polished. It cannot make the evidence underneath them automatically trustworthy. ProofBerry’s one-role review starts with a narrower question: what proof would your team need to inspect before a candidate claim deserves more weight? Bring one live role, name the decision owner and decision window, define the minimum evidence packet, and keep the consequential hiring decision human-owned. One bounded review is more useful than another pile of unverified claims.

CTA: **Scope one live role and define the evidence rule before reviewing candidates.**

Supporting buyer aid: **PB-DOC-064 — One Role, One Signal**.

## Production Readiness
`trackConversionAssetClick` now deduplicates by anonymous session + audience + asset + action. Failed telemetry writes release the dedupe key so a legitimate retry remains possible. PB-DOC-064 was added as an owned static buyer-enablement asset. Base44 final build exited 0. Checkpoint: `6aa2858b3c812e49180d3968`; Base44 commit: `1f121c36c5341abea6a4613c3350b7b1389786d6`.

## Distribution Queue
Production-ready, not externally published. ProofBerry currently has 2/81 Base44 connectors connected (Google Sheets and GitHub API). LinkedIn, Instagram Business, Facebook Pages, Meta Ads, Google Analytics, Google Search Console and PostHog are disconnected; the exposed TikTok connector does not support content/video uploading.

## Analytics / Evaluation
Verified measurement-eligible production GrowthEvents: **0**. Winner MarketingAssets: **0**. PB-EXP-012 remains planned; PB-TXT-158 and PB-DOC-064 are challengers. Repeated CTA activity is not treated as new creative evidence.

## Winner Library
No promotion. Build success, internal approval, source changes, and repeated interactions are not customer outcomes.

## Claims Boundary
No hiring result, pilot acceptance, conversion lift, revenue, ROI, external publication, video render, or production deployment is claimed.