# ProofBerry AI — RUN79
## Demo Score Is Not Candidate Proof

**Asset ID:** PB-TXT-089  
**Implementation:** PB-LP-038  
**Status:** Production-ready; not published  
**Audience:** Recruiters, staffing firms, employers

## Customer Truth
A staffing buyer should be able to tell, at a glance, whether a score or evidence card represents real candidate evidence or illustrative product UI. Sample numbers that look authoritative create the wrong kind of trust.

## Creative Strategy
**Hook:** A demo score should never impersonate candidate evidence.

**Deployable copy:**
A polished scorecard can look authoritative even when it is only sample UI. Before a hiring team trusts a number, it should be able to answer three questions: what artifact supports it, where the signal came from, and what still needs human review. ProofBerry is being built to make those boundaries visible. Bring one live role. Inspect the evidence packet before you buy the promise.

**CTA:** Inspect one live role. Ask what the artifact is, where the signal came from, and what still requires human judgment.

## Production Readiness
RUN79 changed the live Base44 application so SkillLab no longer makes blanket competitor claims or states that AI evaluates every candidate decision. The sample score panel is labeled as illustrative evaluation UI and its sample verdict was replaced with a human-review state. The Demo Gallery now routes staffing buyers into the one-live-role path and records a `conversion_asset_click` with `surface=demo_gallery` outside preview runtimes. All 10 current `DemoVideo` records were durably marked `is_demo=true`.

Final Base44 sandbox build exited 0. Checkpoint: `6a9f020c55fc81e5372ab8d4`. Base44 commit: `94cd092f9ddae67db09c9d204c48bee54e798f23`.

## Distribution Queue
Approved for text/social/landing derivative use after authenticated channel access exists. No RUN79 post, ad, image, video, or audio was published or rendered.

## Analytics / Evaluation
Current ProofBerry baseline remains 26 GrowthEvents: 23 `landing_view`, 3 `waitlist_form_view`, and zero later-funnel events including zero `qualified_review_submit`. There are zero durable `staffing_design_partner_review` requests. RUN79 adds `demo_gallery conversion_asset_click(PB-TXT-089) → pilot_qualified → qualified_review_submit` as a diagnostic sequence. A gallery click is not buyer qualification, contact, pilot acceptance, or hiring outcome.

## Winner Library
No winner promoted. Existing gate remains: do not declare a winner until each comparable published variant reaches at least 100 attributed landing sessions or 20 attributed waitlist signups.

## Claims Boundary
Robert Half reported on March 10, 2026 that 65% of surveyed hiring managers said AI-enhanced resumes made candidate skills harder to verify. This is category research, not ProofBerry performance evidence. ProofBerry does not claim that a demo score, model score, evidence card, or successful sandbox build proves a candidate can do a job.
