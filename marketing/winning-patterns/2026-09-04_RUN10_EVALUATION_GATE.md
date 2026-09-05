# ProofBerry Growth Run 10 — Evaluation Gate

Date: 2026-09-04 PDT

## Current state

No ProofBerry creative is promoted to `winner` in this run.

PB-EXP-009 remains the active **ready** capability-layer experiment family. Run 10 adds PB-CAR-008 and PB-TXT-015 as narrower role-relevance challengers rather than creating another overlapping experiment.

## Minimum decision rule

A comparable asset must have:

1. Verified publication with a durable platform URL/ID.
2. Correct UTM attribution.
3. At least 100 attributed landing sessions or 20 attributed waitlist signups for the comparable variant.
4. No material claims/compliance failure.

Primary metric: qualified waitlist signup rate from attributed landing sessions.
Secondary diagnostics: waitlist form view rate, audience-select rate, form-start rate, submit rate, and audience mix.

## Run 10 instrumentation improvement

The first-party funnel now supports:

`landing_view → waitlist_form_view → audience_select → waitlist_form_start → waitlist_submit`

This separates three previously conflated failure modes: visitors who never reach the form, visitors who see it but do not choose a path, and visitors who choose/start but do not submit.

## Experiment backlog rule

Do not open another ProofBerry messaging experiment until at least one current family receives verified attributed distribution traffic. The present bottleneck is distribution, not idea generation.
