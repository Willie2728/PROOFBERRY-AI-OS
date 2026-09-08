# RUN105 — ProofBerry Scope-Review Message Alignment

## Customer Truth

If the next commercial step is a scoping review, every owned conversion surface should say that. A CTA that says “test one role” overstates the current state when the actual action is to define the live role, accountable owner, decision window, evidence rule, and request a review.

## Creative Strategy

**Asset:** PB-TXT-115  
**Hook:** Scope the review. Do not promise a test you have not yet run.  
**CTA:** Scope One Live Role Review.

Supporting copy:

> If the next step is a scoping review, say so everywhere. ProofBerry now uses one honest recruiter CTA across the owned path: Scope One Live Role Review. The request defines the live role, accountable owner, decision window, and evidence rule before contact. It does not imply pilot acceptance, candidate verification, or a hiring outcome.

## Production Readiness

Base44 owned-path recruiter messaging was aligned across:

- `src/components/landing/HeroSection.jsx`
- `src/components/landing/Navbar.jsx`
- `src/components/landing/StickyWaitlistButton.jsx`
- `src/components/landing/FinalCTASection.jsx`
- `src/components/shared/AppFooter.jsx`

Attribution for the aligned recruiter CTA now uses `PB-TXT-115` on the tracked hero/navbar/sticky/final surfaces; the footer carries `utm_content=PB-TXT-115`.

Final Base44 build: **exit 0**.  
Checkpoint: `6aa044b36b990bc31f54406c`  
Base44 commit: `1fb6b7993ae0a0c762f2304febebc97db5387e71`

Two pre-build path checks failed before the successful application build: the shell defaulted to `/workspace` with no package manifest, and an explicit `/app` cwd invocation resolved to `/app/app`. The corrected command `cd /app && npm run build` passed. A stale Browserslist/caniuse-lite warning remains non-blocking.

## Distribution Queue

PB-TXT-115 is production-ready for owned landing and channel adaptation, but external distribution remains evidence-gated. No post or ad is considered live without an authenticated destination receipt or verified public URL.

## Analytics / Evaluation

RUN105 begins with **0 measurement-eligible production GrowthEvents**. PB-EXP-012 remains **planned**. PB-TXT-115 was added as a challenger, with a focus on the attributable sequence `conversion_asset_click(PB-TXT-115) → qualified_review_submit` and on CTA-state consistency across owned recruiter surfaces.

No winner can be selected from build success, copy preference, preview activity, or internal records.

## Winner Library

No RUN105 ProofBerry winner promoted.

## Market evidence

Robert Half reported on March 10, 2026 that 67% of surveyed U.S. HR leaders said AI-generated applications were slowing hiring and 65% of hiring managers said AI-enhanced resumes made skills harder to verify. This supports the evidence-first problem framing; it does not establish ProofBerry performance.

Source: https://press.roberthalf.com/2026-03-10-Robert-Half-survey-67-of-HR-leaders-report-AI-generated-applications-are-slowing-hiring

## Claims boundary

Do not claim that PB-TXT-115 proves a pilot exists, a candidate is verified, a hiring outcome improved, a production deployment occurred, or conversion increased. No RUN105 video, image, or audio was rendered by this asset, and no external post was verified live.
