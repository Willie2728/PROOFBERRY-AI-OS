# ProofBerry Customer Truth — Run 38 — A real pilot needs a finite decision window

Date: 2026-09-06
Status: Durable research/strategy record. Not published marketing.

## Customer Truth

**"Exploring" is not a decision window.**

ProofBerry's recruiter intake already classifies design-partner readiness around three buyer-side signals: one active requisition, one named pilot/decision owner, and one decision window. Run 38 found a qualification integrity defect: the UI option `exploring — no decision window yet` was still truthy in the readiness calculation, so an otherwise complete record could be classified 3/3 even though no actual decision window existed.

That weakens qualified traffic because curiosity and measurable pilot readiness are not the same state.

## Research signal

SHRM's State of AI in HR 2026 reports that 56% of HR professionals do not formally measure the success of their AI investments and only 16% use their own ROI metric. Robert Half reported on March 10, 2026 that 67% of U.S. HR leaders said AI-generated applications were slowing hiring and 65% of hiring managers said AI-enhanced resumes made skills harder to verify.

These findings support a bounded evaluation process with an explicit decision horizon. They are category evidence only; they are not ProofBerry performance claims.

## Operating rule

For the early-access design-partner path, the decision-window readiness signal now counts only when the buyer selects a finite window: 14 days, 30 days, or 60 days. `Exploring` remains a valid early-access state but does not count toward 3/3 design-partner readiness.

Consequential hiring decisions remain human-owned. Buyer-readiness classification is not candidate scoring.
