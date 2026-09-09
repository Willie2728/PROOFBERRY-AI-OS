# ProofBerry AI — RUN123

## PB-TXT-133 — Durable ready means four signals

**Customer truth:** A buyer-facing definition of evaluation readiness is not trustworthy if the durable signup record uses a weaker definition.

**Hook:** If “evaluation-ready” means 4/4 in the UI, it must mean 4/4 in the record too.

**Body:** ProofBerry’s recruiter flow defines evaluation readiness as four buyer-supplied review-quality boundaries: a comparison baseline, an evidence-delivery boundary, an evidence-retention boundary, and a minimum evidence rule. RUN123 aligns the durable `WaitlistSignup.pilot_evaluation_ready` flag with that same 4/4 definition instead of treating baseline selection alone as sufficient.

**CTA:** Use the Review Quality Scorecard, then request a one-role review only when the evaluation boundary is actually defined.

## Production / claims boundary

- Production-ready copy; no external publication receipt exists.
- No video, image, or audio was rendered.
- `evaluation_ready` is a buyer-defined planning state, not pilot acceptance, candidate verification, hiring performance, compliance, budget authority, or a hiring outcome.
- Current verified production measurement at creation: 0 measurement-eligible GrowthEvents and 0 winner MarketingAssets.

## Research context

SHRM’s 2026 coverage of AI-enabled candidate “skillfishing,” including analysis of nearly 20,000 interviews, reinforces the need for inspectable assessment design. This is category context only and is not evidence that ProofBerry detects or prevents cheating.