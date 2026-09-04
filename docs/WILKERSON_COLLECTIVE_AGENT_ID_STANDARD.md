# Wilkerson Collective — Agent ID Standard

**Version:** 1.0  
**Status:** LOCKED — applies to every product, every agent, every build across the Wilkerson Collective asset stack.

---

## Purpose

Every AI agent built under the Wilkerson Collective umbrella — whether it lives in ProofBerry, a standalone command center, a future product, or a client deployment — carries a **human-readable Agent ID** modeled after a SKU or inventory stock number.

This is not an API key. It is not a UUID. It is a short, memorable, inventory-style identifier that anyone in the organization can read, reference, and look up.

---

## Format

```
WC + [numeric sequence, zero-padded to minimum 2 digits]
```

| Component | Meaning |
|-----------|---------|
| `WC` | Wilkerson Collective prefix — fixed, never changes |
| `01`–`99` | Two-digit sequence (zero-padded) |
| `100`+ | Three-digit sequence when the roster exceeds 99 agents |

### Examples

| Agent ID | Agent |
|----------|-------|
| WC01 | Employment Law Advisor |
| WC02 | Compliance Researcher |
| WC03 | Talent Operations Expert |
| WC04 | First SynthSapian (Chief AI Operating Officer) |
| WC05 | Second SynthSapian (Autonomous Workforce Architect) |
| WC100+ | AI Employees (AIEs) — dynamic, assigned at creation |

---

## Rules

1. **Every agent gets an ID.** No exceptions. If it has a name, it has an ID.
2. **IDs are immutable.** Once assigned, an Agent ID never changes — even if the agent is renamed, redeployed, or retired.
3. **IDs are unique across the entire asset stack.** No two agents in any Wilkerson Collective product share the same ID.
4. **IDs are human-readable.** The format is deliberately simple — `WC04`, not `a1b2c3d4-e5f6-...`.
5. **IDs are displayed.** Every agent card, profile, chat header, dashboard, and export shows the Agent ID prominently, like a badge or inventory tag.
6. **IDs are queryable.** A user can ask "What is Agent WC04 doing?" and the system returns the agent's identity, purpose, current work, completed work, and upcoming work.
7. **IDs are exported.** Every export of agent data includes the Agent ID as a primary field.

---

## ProofBerry Assignment

| Range | Category |
|-------|----------|
| WC01–WC03 | HR Expert Agents (in-app conversational agents) |
| WC04–WC85 | SynthSapiens (digital humans in the PAAOS catalog) |
| WC100+ | AI Employees (AIEs — administrative AI staff, assigned dynamically) |

---

## Implementation Checklist

When building or updating any product with AI agents:

- [ ] Add `agent_id` field to every agent config file
- [ ] Add `agent_id` field to every agent entity schema
- [ ] Display `AgentIdBadge` on every agent card, profile, and chat header
- [ ] Include `agent_id` in all exports (PDF, CSV, email, share)
- [ ] Ensure `agent_id` is searchable and queryable
- [ ] Never reuse a retired ID — retired IDs are reserved permanently