# Valore AI Security Sentinel RUN149 — One Threat, One Signal

**Asset IDs:** VAL-SENT-TXT-003 + VAL-SENT-DOC-003  
**Status:** production-ready in Base44; not externally published; render not applicable; production deployment not verified.

## Customer Truth
A repeated click is not repeated institutional security demand, and preview/internal activity should never enter a market-readiness decision. A useful first signal is one deliberately scoped protected-art context, one threat, one decision window, and one buyer-defined proof requirement.

## Creative
**Hook:** “One deliberately scoped threat brief should create one qualified signal, not one signal per click.”

**CTA:** Define the threat and required receipt first; copy the brief or request technical review only after the scope is explicit.

## Production Change
`SentinelScopeSignal` now includes anonymous `session_id`, runtime `environment`, `measurement_eligible`, and `creative_asset_id`. The CTA excludes localhost/preview, writes known production signals as eligible, and deduplicates by anonymous session + event + artifact context + threat + decision window with retry-safe release on write failure. The owned card is `public/marketing/VAL-SENT-DOC-003-one-threat-one-signal.html`.

## Measurement / Claims Boundary
Verified RUN149 baseline: **0 eligible production SentinelScopeSignal records** and **0 SentinelPilotRequest records**. Threat briefs, provenance data, technical-review requests, or prototype concepts do not establish theft prevention, recovery, conservation safety, insurer acceptance, certification, authenticity, deployment, or product performance.

C2PA's current provenance guidance is a useful claims-model analogy: provenance systems can make origin/history assertions tamper-evident, but they do not by themselves make a value judgment that every provenance assertion or underlying real-world claim is true.
