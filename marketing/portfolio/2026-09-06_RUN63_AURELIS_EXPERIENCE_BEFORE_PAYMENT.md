# AURELIS — Run 63

## Experience Before Payment

### Customer Truth
A collector can become commercially interesting before a live payment stack exists. A prototype should capture qualified viewing or acquisition intent without collecting card data or pretending a demo cart created an order.

### Creative Strategy
**Hook:** Experience the work first. Discuss the acquisition second.

AURELIS is strongest when the collector can enter the house, explore the rooms, live with the work for a moment, and then decide whether a private acquisition conversation is worth having. The acquisition preview now records qualified interest without asking for card details or pretending a demo cart is a completed order.

**CTA:** Build a collection preview, then record a private viewing or acquisition inquiry.

### Production Readiness
Run 63 created an `AcquisitionInquiry` entity and replaced the simulated Contact and Checkout submits with durable inquiry writes. The acquisition preview no longer asks for card number, expiry, CVC, or shipping address. Success means **inquiry recorded**, not order placed, reserved, charged, or fulfilled. Catalog totals are explicitly illustrative/configurable prototype values.

AURELIS sandbox build exited 0. Checkpoint `6a9e5a8c041c38ea88cd7de0`; Base44 commit `ea6c38d4480f1a3857a0e28c31afa9215bb56f10`. Nonblocking warnings remain for stale Browserslist data and two ambiguous Tailwind duration classes. Production deployment, live payment, inventory reservation, shipping, tax, licensing, and fulfillment were not independently verified.

### Distribution / Evaluation
`AUR-TXT-001` is production-ready text only. It should be evaluated on qualified acquisition inquiries once attributable distribution exists, not on demo-cart additions or simulated checkout completions.

### Claims boundary
No payment, reservation, fulfillment, collector purchase, revenue, live inventory, production deployment, rendered media, or social publication is claimed in Run 63.
