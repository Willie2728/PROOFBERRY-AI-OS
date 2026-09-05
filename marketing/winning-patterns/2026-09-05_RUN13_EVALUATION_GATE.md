# ProofBerry Run 13 — Analytics / Winner Gate

## Current telemetry

Run 13 queried the first-party `GrowthEvent` entity and found the same 20 historical records currently available:

- 18 `landing_view`
- 2 `waitlist_form_view`
- 0 `audience_select`
- 0 `waitlist_form_start`
- 0 `waitlist_submit`

Observed activity is direct/organic/default and may include internal or test visits. No post-PB-LP-003 qualified external cohort exists yet.

## Decision

No winner declared.

Do not open a new ProofBerry experiment family until authenticated distribution creates attributed traffic. `PB-CAR-011`, `PB-TXT-020`, and `PB-TXT-021` are queued creative, not winners.

`PB-EXP-008` remains the landing-conversion experiment and `PB-EXP-009` remains the consolidated recruiter/employer messaging experiment.

## Winner rule

A creative can graduate into the Winner Library only after:

1. verified publication state (platform post ID or URL);
2. attributable landing traffic carrying the creative/content ID;
3. a comparable sample meeting the preregistered experiment threshold; and
4. qualified conversion evidence, not raw impressions alone.

The current minimum threshold remains at least 100 attributed landing sessions or 20 attributed waitlist signups per comparable variant before declaring a winner.