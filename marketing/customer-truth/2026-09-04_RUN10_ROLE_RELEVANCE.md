# ProofBerry Growth Run 10 — Customer Truth: Role Relevance

Date: 2026-09-04 PDT

## Signal

ProofBerry should narrow its capability-evidence message from generic “prove your skills” toward **role-relevant proof**: define what the job requires, then organize evidence that maps to those requirements.

Current market signals support that direction without requiring exaggerated claims:

- SHRM Labs' 2026 assessment-design coverage emphasizes scenario-based evaluation and follow-up explanation because polished or AI-assisted answers can be difficult to distinguish from genuine understanding. A candidate who can explain the reasoning behind an answer provides a stronger signal than polish alone.
- LinkedIn’s skills-first guidance consistently recommends identifying the core skills for a role, evaluating those specific skills, and using work samples or simulations that accurately represent the work rather than testing generic credentials.

## WCL interpretation

The useful ProofBerry message is not “prove everything.” It is:

> **Prove what matters for the role.**

For candidates, this reduces the burden of trying to market every experience at once. For recruiters and employers, it keeps evaluation anchored to the work the role actually requires.

## Claims boundary

Do not claim ProofBerry predicts job performance, eliminates bad hires, guarantees interviews, or objectively proves every skill. Position it as a system being built to organize **role-relevant capability evidence**, structured evaluation, and human-governed hiring decisions.

## Run 10 telemetry snapshot

Before the new telemetry upgrade, ProofBerry’s GrowthEvent table contained 13 landing-view events across 9 unique anonymous browser sessions, all direct/organic, with 0 recorded form-starts and 0 waitlist submits. The sample is too small and likely includes internal/testing traffic, so it does not support a conversion verdict.

Run 10 therefore adds `waitlist_form_view` and `audience_select` events so future traffic can distinguish page exposure from waitlist visibility, audience intent, form start, and submit.
