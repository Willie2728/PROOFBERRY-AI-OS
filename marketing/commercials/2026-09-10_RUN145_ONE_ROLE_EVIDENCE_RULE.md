# ProofBerry RUN145 — One-Role Evidence Rule

## Customer Truth
ProofBerry's current top-level recruiter CTA had evolved to a one-live-role evidence-first scoping flow, but the hero, navbar, sticky CTA, final CTA and footer were still crediting stale creative PB-TXT-115. That would contaminate any future creative-performance decision. Candidate top-level attribution was also inconsistent in the footer.

## Creative Strategy
- **PB-TXT-155:** “Bring one live role. Define what proof would count before you review anyone.”
- **PB-DOC-061:** One-Role Evidence Rule Card.

The buyer rule is deliberately narrow: define one job-relevant capability, the minimum evidence packet, accountable human decision owner, decision window, and first review receipt before requesting scoping review.

## Production Readiness
Base44 source changes:
- Recruiter top-level conversion attribution now resolves to PB-TXT-155 across hero, navbar, sticky CTA, final CTA and footer UTM content.
- Candidate top-level attribution in navbar/final CTA/footer resolves to PB-TXT-152 rather than recruiter creative or the older PB-LP-039 footer value.
- Final CTA copy now asks for one real requisition and links to PB-DOC-061.
- `public/marketing/PB-DOC-061-one-role-evidence-rule-card.html` created.
- Footer year corrected to 2026.
- PB-EXP-012 includes PB-TXT-155 and PB-DOC-061 as challengers but remains planned.

Native Base44 records:
- PB-TXT-155: `6aa25b031a46fd742e18581f`
- PB-DOC-061: `6aa25b031a46fd742e185820`

Build history is preserved exactly: the first `/app` worker invocation returned a transient HTTP 500; an attempted `cwd=app` resolved to nonexistent `/app/app`; a `/workspace` check confirmed no package.json there; `/app/package.json` was verified; final `cd /app && npm run build` exited 0 with only the stale Browserslist/caniuse-lite warning.

Checkpoint: `6aa25b9cb5a9e5edc36f168a`  
Base44 checkpoint commit: `130202140a288c4a3b2481d9298c7890120aa5b5`

## Distribution Queue
Base44 connector readback: 2/81 connected (Google Sheets and GitHub API). LinkedIn, Instagram Business, Facebook Pages, Meta Ads, Google Analytics, Google Search Console and PostHog are disconnected; the available TikTok connector explicitly does not support content/video upload. No external publication is claimed.

## Analytics / Evaluation
Verified measurement-eligible production GrowthEvent baseline before RUN145 decision: 0. The creative remains a challenger. Source changes and a passing build are not conversion evidence.

## Winner Library
No winner promoted. Require attributable production traffic plus a qualified downstream durable receipt before deciding a winner.

## Source parity
A GitHub code search for the current “Scope One Live Role Review” source returned no result in the installed `Willie2728/PROOFBERRY-AI-OS` repository. Base44↔GitHub UI-source parity is therefore not claimed for these touched CTA files.

No video, image or audio was rendered; no post, ad, paid spend, production deployment, pilot acceptance, candidate verification, hiring outcome, conversion lift, revenue or ROI is claimed.