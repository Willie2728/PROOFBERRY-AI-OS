# ProofBerry AI — RUN76

## Customer Truth
A staffing buyer with one live requisition is more commercially useful than a generic waitlist click. The conversion path should ask for a bounded role, accountable owner, decision window, and buyer-defined success rule before contact details appear.

## Creative Strategy
**Asset:** PB-TXT-086 — One Live Role Fast Path

**Hook:** Your next hiring pilot should start with one live role — not a platform-wide promise.

**Script:** Most hiring pilots start too big. ProofBerry starts with one live role. Define the requisition, the accountable owner, and the decision window. Then inspect the evidence workflow before you share contact details. No fake placement claims. No AI hiring decision. One bounded review, with the human decision still yours. Test one live role.

**CTA:** Test one live role. Define the owner and decision window before sharing contact details.

## Production Readiness
Status: PRODUCTION READY / NOT RENDERED.

25-second vertical storyboard:
1. 0–4s — overloaded application queue; overlay ONE LIVE ROLE.
2. 4–9s — Live role / Accountable owner / Decision window.
3. 9–15s — evidence packet tiles: demonstration, assessment context, unresolved questions.
4. 15–20s — human reviewer retains advancement authority.
5. 20–25s — ProofBerry workflow CTA: TEST ONE LIVE ROLE.

Do not depict a real placement, accepted pilot, customer logo, verified candidate outcome, or hiring result unless independently evidenced.

## Product / Conversion Improvement
RUN76 changes the Base44 hero from generic waitlist language to a recruiter-oriented **Test One Live Role** primary CTA. It removes the unsupported maturity shorthand **Level 5 · Autonomous Workforce OS** and replaces it with **Early Access · Evidence-First Workforce OS**.

The hero CTA records an attributable `conversion_asset_click` for PB-TXT-086, performs an in-page recruiter audience handoff, and scrolls directly to the existing one-role qualification path without forcing a page reload. Candidate early access receives its own in-page handoff.

Base44 sandbox build passed with exit code 0 after one transient Durable Object connection failure that occurred before a successful retry. Checkpoint: `6a9ed5f0911c737910eb0b63`; Base44 commit: `cd551a4198213ee3df2da08fac8437dbf0ceb981`. Production deployment was not independently verified.

The matching GitHub application paths `src/components/landing/HeroSection.jsx` and `src/components/landing/WaitlistSection.jsx` returned 404, so no guessed source-parity write was performed.

## Distribution Queue
Approved for founder-led LinkedIn/short-form testing once an authenticated distribution path is verified. No RUN76 post or video is claimed scheduled or live.

## Analytics / Evaluation
Current ProofBerry GrowthEvent baseline remains 26 records: 23 `landing_view`, 3 `waitlist_form_view`, and zero later-funnel events including zero `qualified_review_submit`. There are zero durable `staffing_design_partner_review` requests.

`PB-EXP-009` now includes PB-TXT-086 and the sequence `hero conversion_asset_click(PB-TXT-086) → pilot_qualified → qualified_review_submit` as a secondary diagnostic. The primary commercial metric remains attributable non-preview `pilot_qualified → qualified_review_submit`.

## Winner Library
No winner is declared. Keep the existing minimum-sample rule: no winner until each comparable published variant has at least 100 attributed landing sessions or 20 attributed waitlist signups.

## Claims Boundary
A hero click is not buyer qualification. Buyer qualification is not commercial fit. A request is not pilot acceptance. A pilot is not a placement or hiring outcome. No revenue, ROI, placement, or performance claim is inferred from the sandbox build.
