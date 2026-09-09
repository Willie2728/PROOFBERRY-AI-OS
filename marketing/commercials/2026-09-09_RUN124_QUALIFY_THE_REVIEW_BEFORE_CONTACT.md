# ProofBerry AI / PAAOS — RUN124

## Customer Truth

**Qualify the review before the contact.**

A sharper no can improve the quality of the conversations that remain. A one-role review is only useful when the buyer has a live role, an accountable human decision owner, a comparison baseline, a minimum evidence rule, and enough evidence-lifecycle boundaries to interpret the test.

The review path should actively disqualify requests that expect autonomous final hiring decisions, guaranteed hiring outcomes, compliance guarantees, or integrations that have not actually been verified.

## Creative Strategy

### PB-TXT-134 — Qualify the review before the contact

**Hook:** A sharper no can improve the quality of the conversations that remain.

**Body:** ProofBerry is a fit when a buyer can inspect one bounded hiring-evidence workflow: one live role, one accountable human owner, one baseline, one minimum evidence rule, visible proof gaps, a delivery boundary, and a retention expectation. It is not a fit for autonomous final hiring decisions, guaranteed outcomes, compliance guarantees, or an evaluation that depends on an unverified ATS/API/portal integration.

**CTA:** Use the one-role fit screen, then request a review only if the buyer can inspect a bounded evidence workflow.

### PB-DOC-044 — One-Role Fit / Not-Fit Screen

**Good fit**
- One live role or requisition.
- An accountable human recruiter, hiring leader, or staffing owner.
- A comparison baseline and a minimum evidence rule.
- Missing or conflicting evidence can remain visible as a review gap.
- Evidence-delivery and retention expectations can be named.
- The buyer wants one bounded test before deciding whether role #2 is worth testing.

**Not a fit for this review path**
- Autonomous final hiring decisions with no accountable human reviewer.
- Guaranteed hire, time-to-fill, quality-of-hire, legal-compliance, or bias-free outcome claims.
- No live role, decision owner, or usable baseline.
- A required ATS, API, portal, or integration that has not been verified as available.
- Self-reported candidate material must be treated as verified evidence without provenance or corroboration where appropriate.
- The first conversation is expected to function as a contract, deployment commitment, or pilot acceptance.

## Production Readiness

Base44 changes:
- Added `public/marketing/PB-DOC-044-one-role-fit-screen.html`.
- Linked PB-DOC-044 from the Pilot Fit Snapshot with `conversion_asset_click` attribution: `asset_id=PB-DOC-044`, `action=open_one_role_fit_screen`.
- Updated the pre-contact CTA copy to PB-TXT-134.
- Corrected the `WaitlistSignup.pilot_evaluation_ready` schema description so the durable documentation now matches the live 4/4 definition: baseline + evidence-delivery boundary + evidence-retention boundary + minimum evidence rule.

Final build: exit 0 after correcting the known Base44 build working-directory issue (`cd /app && npm run build`). A prior invocation from `/workspace` exited 254 because `/workspace/package.json` was absent. Passing build is not a production deployment receipt.

Checkpoint: `6aa15107f492319647a888ae`

Base44 commit: `bce2a38c5169c28f54b43b091a3e9937ccd608c6`

Native MarketingAssets:
- PB-TXT-134: `6aa15113f492319647a888b2`
- PB-DOC-044: `6aa15113f492319647a888b3`

## Distribution Queue

Queue state: owned content is production-ready. No external publication receipt is claimed. Distribution remains subject to the currently connected provider/analytics surfaces and their granted scopes.

## Analytics / Evaluation

Primary diagnostic: `conversion_asset_click(PB-DOC-044 from pilot_fit_snapshot) -> qualified_review_submit`.

Interpretation rule: a fit-screen click is qualified-intent context, not evidence that the buyer is commercially qualified, budget-authorized, accepted into a pilot, or converted.

## Winner Library

Do not promote PB-TXT-134 or PB-DOC-044 to winner without measurement-eligible production telemetry and a predeclared qualified-conversion decision rule.

## Claims boundary

No candidate verification, pilot acceptance, hiring outcome, legal-compliance result, bias result, integration availability, revenue, ROI, or conversion lift is inferred from this asset, a successful build, or internal readiness state.
