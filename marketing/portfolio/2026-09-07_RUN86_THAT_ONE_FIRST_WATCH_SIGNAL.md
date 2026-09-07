# That One Content Suite — RUN86 — First-Watch Signal Before Production

## Customer Truth
A show concept, AI-host persona, or finished script is not a released episode and is not audience demand. Before spending production effort, the network can collect a low-friction anonymous signal: which show concept would earn a visitor's first watch, and optionally what topic they would want covered.

## Creative Strategy
**Asset:** TOCS-TXT-001  
**Hook:** A show concept is not an episode. Let the audience tell you which one deserves production first.  
**CTA:** Choose the one show you would watch first. Add one topic if you want.

## Product / Conversion Change
Created a durable `AudienceSignal` entity for anonymous `watch_first` preferences. The landing page now:
- keeps show concept/project status separate from release status;
- counts a released episode only when `status=published` **and** a `video_url` exists;
- displays the current released-media count instead of implying a live network library;
- lets visitors choose one show before any contact collection;
- stores an optional topic request without contact data;
- deduplicates the signal within the browser session;
- shows success only after the durable entity write succeeds.

The Production Studio now labels the metric `Released + media` and applies the same evidence gate.

Final Base44 sandbox build: exit 0.  
Checkpoint: `6a9f4eb02092ec7d885e870b`  
Base44 commit: `d5dc920ed213b5b85c3594d8eb50f39ce59da197`

## Analytics Baseline
Current durable baseline after instrumentation:
- Show records: 3
- Episode records: 0
- Script records: 0
- AudienceSignal records: 0
- Released episodes with stored video media: 0

These zeroes are an instrumentation baseline, not proof that there is no audience demand.

## Category Context
Edison Research's Infinite Dial 2026 reported that 58% of Americans age 12+ consumed a podcast in the prior month, 45% in the prior week, and 57% had both listened to and watched a podcast. This supports treating audio/video as a meaningful category, but it does not establish That One audience or performance.

Source: https://www.edisonresearch.com/the-infinite-dial-2026/

## Distribution / Release Boundary
No episode, video, audio file, YouTube upload, podcast feed item, subscriber, listener, stream, or external publication receipt was created or claimed in RUN86.

## Winner Library
No That One winner was declared. The first useful evidence is durable audience-priority signals followed by actual release receipts and attributable consumption.