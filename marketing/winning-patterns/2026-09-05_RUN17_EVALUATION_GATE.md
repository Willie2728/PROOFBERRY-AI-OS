# ProofBerry Winner / Evaluation Gate — Run 17

Date: 2026-09-05

## Current First-Party Telemetry

Re-read directly from ProofBerry Base44 `GrowthEvent` before the Run 17 funnel changes:
- 20 total events
- 18 `landing_view`
- 2 `waitlist_form_view`
- 0 `audience_select`
- 0 `waitlist_form_start`
- 0 `waitlist_submit`

There are also three legacy WaitlistSignup records from June/July 2026. They predate the current instrumentation and are not counted as Run 17 conversions.

## Decision

**No winner.**

The sample remains too small and too likely to include internal/direct traffic to support a conversion claim.

Run 17 implemented a recruiter-specific conversion layer (`PB-LP-004`):
- recruiter/staffing CTA routing with audience preselection;
- buyer-specific CTA wording;
- optional company field;
- optional live-role / candidate-review problem field;
- preserved explicit marketing consent.

This is an implementation improvement inside the existing recruiter/staffing experiment family, not a new experiment family.

## Evaluation Gate

Do not declare PB-DOC-004, PB-TXT-026, PB-TXT-027, or PB-LP-004 a winner until:
1. a supported external channel is authenticated;
2. the exact asset is verified published;
3. traffic carries asset-level attribution;
4. comparable variants reach at least 100 attributed landing sessions each **or** 20 attributed qualified waitlist signups each;
5. the winner does not rely on unsupported hiring, speed, revenue, bias, fraud, placement, or accuracy claims.

## Primary Metric

Qualified recruiter/staffing waitlist signup rate from attributed landing sessions.

## Secondary Metrics

- recruiter/staffing waitlist-form-view rate
- form-start rate
- submit rate
- company-detail completion rate
- live-role/problem-detail completion rate
- attributed sessions by asset and channel

## Winner Library

No new Winner Library entry was promoted in Run 17.
