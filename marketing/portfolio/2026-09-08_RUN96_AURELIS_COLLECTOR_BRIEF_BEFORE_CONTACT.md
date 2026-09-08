# AURELIS RUN96 — Collector Brief Before Contact

## Customer Truth
**Don’t ask for the collector’s email before the work and decision question earn a private conversation.**

AURELIS already separated its acquisition preview from live payment, but the preview asked for name and email before the collector had defined what they selected, why they were considering it, and what they needed clarified. RUN96 reverses that order.

## Creative Strategy
**AUR-TXT-001 — Collector Brief Before Contact**

Hook: `The work should earn the conversation before the form asks for your email.`

CTA: `Select the works, define the inquiry, intended use, decision window, and the question that must be resolved. Review or copy the Collector Review Brief, then decide whether to request a private acquisition review.`

## Production Readiness
Implemented in active Base44 `src/pages/Checkout.jsx`:
- the collector defines inquiry type, intended use, decision window, and a real review objective before contact;
- a PII-free `Collector Review Brief` can be reviewed and copied before contact;
- the brief carries selected works, illustrative catalog total, and an explicit verification rule covering availability, edition details, final price, rights, shipping, tax, and fulfillment;
- `Request private acquisition review` is an explicit intent gate before name/email appear;
- changing the collector scope resets the review request;
- submission still creates only `AcquisitionInquiry`; it does not reserve inventory, accept terms, or process payment.

Final Base44 build: exit `0`.
Checkpoint: `6a9fd52415013d79d35d1f95`.
Base44 commit: `8204174817559ec637c317f0c1426175ab0c578e`.

Non-blocking build warnings: stale Browserslist/caniuse-lite data and existing ambiguous Tailwind duration utility warnings.

## Distribution Queue
AUR-TXT-001 is approved for durable queue and remains unpublished. AURELIS has `0/81` Base44 connectors connected, so no authenticated analytics, CRM, social, paid-media, or GitHub app-source handoff is available from this Base44 surface.

## Analytics / Evaluation
`AcquisitionInquiry` records at RUN96 start: `0`.

This is an instrumented starting point. It is not evidence of zero collector demand, sales, reservation activity, or purchase conversion.

## Winner Library
No winner promoted.

## Market Evidence Boundary
The Art Basel and UBS Art Market Report 2026 says dealer-sector sales increased 2% to an estimated $34.8 billion in 2025. It also reports that 40% of dealers’ online sales, on a per-business average, went to new buyers in 2025 while noting that converting one-off online buyers into longer-term relationships remains a challenge. That supports making the digital inquiry more useful and relationship-oriented rather than treating an email capture as the commercial win. It does not establish AURELIS sales or collector traction.

Source: https://www.artbasel.com/stories/the-art-basel-and-ubs-global-art-market-report-2026

## GitHub / Source Boundary
Current GitHub search did not expose a matching AURELIS application source for the active Base44 checkout implementation. This portfolio record is stored in the WCL/ProofBerry durable growth repository without claiming application-source parity.
