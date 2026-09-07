# FreeFill — RUN86 — Pilot Proof Point Before Partnership

## Customer Truth
A simple fuel-reward idea is easy to understand, but it is not an operational loyalty network until the integration path, eligible-gallon source of truth, reward funding, and redemption receipt can be verified. A partner lead is more useful when it states what the first pilot must learn and when the organization expects to decide whether the concept deserves a next step.

## Creative Strategy
**Asset:** FF-TXT-001  
**Hook:** A free gallon is not a loyalty program until the integration, funding, and redemption receipt exist.  
**CTA:** Scope one partner pilot: choose the first proof point and decision window.

## Product / Conversion Changes
FreeFill was reframed from an operational promise into a bounded partner-pilot offer:
- hero changed from “Buy 5 gallons. Get 1 free.” to “Test the 5+1 fuel reward”;
- mechanics now separate integration, eligible-gallon measurement, reward funding, and verified redemption;
- modeled station/payment/sponsor economics are explicitly hypotheses rather than revenue;
- the partner form now records a `pilot_objective`, `decision_window`, optional `current_stack`, and an internal request state;
- the form writes directly to durable `PartnerApplication` storage and shows success only after that write succeeds;
- the unverified promise that the partnerships team would respond within two business days was removed.

Final Base44 sandbox build: exit 0.  
Checkpoint: `6a9f4eb559e5c75f55ec2f88`  
Base44 commit: `6ca7428c64e8d60dff526198a659ea96d12e5ddf`

## Analytics Baseline
Current PartnerApplication records: 0. This is a newly tightened qualification baseline, not evidence of zero market demand.

## Category Context
Recent U.S. fuel/convenience loyalty programs show that fuel discounts and cross-system integration remain active category themes. On July 31, 2026, NACS reported that Circle K's redesigned Inner Circle program could accumulate rewards up to $1 off per gallon, with a 5-cent-per-gallon launch promotion. On July 22, NACS reported that The Hub built HubPerks through integrations across fuel, POS, and other systems. On February 27, NACS reported Love's expanded its loyalty program across 608 travel stops. These are category examples, not validation of FreeFill's 5+1 economics.

Sources:
- https://www.convenience.org/stay-current/news/2026/july/31/circle-k-redesigns-its-loyalty-rewards
- https://www.convenience.org/stay-current/news/2026/july/22/the-hub-convenience-stores-launches-new-loyalty-program
- https://www.convenience.org/stay-current/news/2026/february/27/1-loves-upgrades-loyalty-program_tech

## Distribution / Commercial Boundary
No fuel-company partnership, issuer agreement, POS/payment integration, active consumer reward, reward funding commitment, redemption, sponsor agreement, transaction revenue, or production deployment is claimed in RUN86.

## Winner Library
No winner declared. The first meaningful commercial evidence is a durable, qualified partner-pilot request followed by a separately verified conversation/acceptance state and a bounded measurable pilot.