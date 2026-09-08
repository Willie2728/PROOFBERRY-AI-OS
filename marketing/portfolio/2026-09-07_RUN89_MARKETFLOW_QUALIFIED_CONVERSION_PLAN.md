# MarketFlow AI — RUN89

## Asset
**MF-TXT-001 — Define the Conversion Before the Content Loop**

**Hook:** More content is not a growth strategy.

Before MarketFlow activates a campaign, the operator should be able to answer four questions: What qualified action should the buyer take? Where will that action happen? How will attribution be verified? What decision rule will determine whether the campaign earns another iteration or scale?

RUN89 adds that gate to Campaign Builder. A campaign cannot be activated until the qualified conversion goal, destination, measurement plan, and success threshold are defined.

**CTA:** Define the conversion before you activate the content loop.

## Customer Truth
High publishing frequency can create activity without commercial learning. Content generation should be subordinate to a predeclared qualified conversion and measurement plan, not treated as growth by itself.

## Product Change
Campaign records now support `qualified_conversion_goal`, `destination_url`, `measurement_plan`, `success_threshold`, and `activation_basis=qualified_conversion`. Campaign Builder requires all four planning fields before activation and explicitly states that activation starts internal content generation only; it does not publish externally or prove conversion.

## Current Baseline
At RUN89 review: 1 Product record (`Free Gas`), 24 active MarketingChannel records, 0 Campaign records, and 0 ContentPiece records. No campaign or content performance is therefore inferred.

## Build Receipt
- Base44 checkpoint: `6a9f732f487c063a0485f9ce`
- Base44 commit: `facf66afbd08d148247f955c31fddf610020be90`
- Final application build: exit `0`
- Base44 connectors: 0/81 connected at review time
- Matching installed GitHub repository: not found
- External publication: not verified / not claimed
- Production deployment: not independently verified

## Winner Rule
Content volume, channel planning scores, and draft approval do not create a winner. Promote a creative only after an authenticated publishing handoff plus attributable qualified-conversion evidence meets the predeclared sample/decision rule.
