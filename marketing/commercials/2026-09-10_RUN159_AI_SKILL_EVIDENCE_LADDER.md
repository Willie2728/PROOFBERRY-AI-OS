# RUN159 — ProofBerry AI-Skill Evidence Ladder

## Customer Truth
Two current signals point in the same direction: employers are asking for more AI capability while AI-enhanced applications are making skills harder to verify. Robert Half reported in March 2026 that 65% of hiring managers in its survey said AI-enhanced resumes made skills harder to verify; UBS announced in September 2026 that incoming junior-banking candidates will need to demonstrate AI proficiency beginning in 2027. These are category signals, not ProofBerry performance evidence.

## Creative Strategy
**PB-TXT-169:** “AI skill is easy to say. Decide what evidence earns an interview.”

Conversion premise: do not force recruiters to treat a self-report, course/certificate, work artifact, observed task, and downstream receipt as equivalent. Ask the buyer to predeclare the minimum evidence level for one live role before candidate materials arrive.

## Production Readiness
**PB-DOC-075 — AI-Skill Evidence Ladder**

The buyer aid separates five evidence levels: claim; credential/learning record; inspectable work artifact; observed task; outcome/external receipt. It also asks for the AI-assistance rule, accountable human reviewer, and decision rule. It explicitly does not verify candidate identity, skill, authorship, employability, or hiring outcome.

Base44 source updated: `src/components/landing/WaitlistSection.jsx`.
Static buyer aid: `public/marketing/PB-DOC-075-ai-skill-evidence-ladder.html`.
Final Base44 build: exit 0.
Checkpoint: `6aa3203c3e8f05c3dc5454c9`.
Base44 commit: `dff3922b708744c028505868498f0c0b3f6f0579`.

## Distribution Queue
Not released externally in RUN159. Publication requires a supported authenticated destination and destination-side verification.

## Analytics / Evaluation
Measurement-eligible production `GrowthEvent` records at run start: **0**. PB-TXT-169 and PB-DOC-075 are challengers, not winners.

## Winner Library
No promotion. Winner state remains evidence-gated.

## Claims Boundary
This run does not claim ProofBerry detects AI use, verifies credentials, authenticates authorship, predicts job performance, improves hiring outcomes, or reduces time-to-hire.

## Research
- Robert Half, 2026-03-10: https://press.roberthalf.com/2026-03-10-Robert-Half-survey-67-of-HR-leaders-report-AI-generated-applications-are-slowing-hiring
- Financial Times, 2026-09-06: https://www.ft.com/content/76b370ff-b5f6-4e22-aa30-da08b1abb8f8
