# PROOFBERRY AI-OS

**Parent Company:** Wilkerson Collective Labs

PROOFBERRY AI-OS is an AI workforce, job-readiness, enterprise training, recruiting, and workforce-verification operating system built around identifiable, role-specific autonomous AI workers called **SYNTHSAPIENS**.

## Product Mission

PROOFBERRY is designed to make AI labor visible, understandable, accountable, trainable, deployable, and verifiable for employers, workforce-development organizations, staffing firms, educators, job seekers, and enterprise teams.

The platform combines:

- AI-powered mock interviews and job-readiness coaching
- Enterprise training and simulation
- Candidate and recruiter dashboards
- 24/7 job-board aggregation and opportunity matching
- Autonomous role-specific SYNTHSAPIENS workers
- Persistent Agent IDs and human-readable agent identity records
- Workforce performance reporting and audit trails
- Digital and legacy hard-copy reporting
- CRM, email, social, and enterprise-system integrations
- Integrated security and capability verification
- Organization-level workforce governance

## Core Positioning

PROOFBERRY aims to be the premier workplace system for deploying and verifying the most capable, identifiable, role-specific autonomous workforce while preserving ease of use, visibility, trackability, accountability, and security.

## SYNTHSAPIENS Workforce

Every SYNTHSAPIEN must have:

- A human-readable name
- A unique Agent ID formatted like a simple inventory/SKU identifier rather than an API key
- Role title
- Department
- Specialty and skill profile
- Capability manifest
- Permission profile
- Model/tool access profile
- Training history
- Performance history
- Security verification state
- Version/fingerprint record
- Current availability and deployment status

SYNTHSAPIENS should be presented as fully realized AI workers, including photorealistic/rigged avatar support where deployed in immersive interfaces.

## Primary Users

- Job seekers
- Workforce development programs
- Job Corps and similar organizations
- Staffing agencies
- Recruiters
- Small businesses
- Enterprise employers
- Training departments
- HR and talent teams
- Educators and career-development organizations

## Major Product Modules

### 1. Candidate Workspace
- Resume/profile intake
- Skills inventory
- Mock interviews
- AI interview scoring
- Role-specific coaching
- Job-readiness plans
- Practice history
- Progress reporting
- Job matching
- Application tracking

### 2. Recruiter & Employer Workspace
- Candidate discovery
- Candidate comparison
- Screening workflows
- Role requirements
- Interview orchestration
- Training assignment
- AI workforce deployment
- Performance dashboards
- Compliance/audit reporting

### 3. Job Opportunity Engine
Continuously aggregate and normalize opportunities from supported sources such as:

- LinkedIn
- Indeed
- Monster
- Upwork
- Other approved job boards and employer sources

The system should support matching, ranking, duplicate detection, freshness scoring, and transparent reasons for recommendations.

### 4. Enterprise Training & Simulation
- Role-specific practice scenarios
- Interview simulations
- Customer-service simulations
- Sales simulations
- Workplace skills training
- Manager coaching
- Compliance/training modules
- Assessment and certification records

### 5. SYNTHSAPIENS Catalog
A browsable catalog of AI workers organized by sector, role, specialty, skills, and deployment type.

Each catalog entry should explain:

- Who the SYNTHSAPIEN is
- What role it performs
- What it can do
- What systems it can use
- Required approvals
- Why the role matters
- What outcomes it is designed to improve

### 6. Agent Identity & Accountability
All AI workers must be identifiable and traceable.

Required concepts:

- Persistent Agent ID
- Human-readable identity card
- Parent/child agent relationships
- Assigned owner/team
- Active tasks
- Tool and data permissions
- Activity history
- Decision/action logs
- Escalation path
- Performance metrics
- Version history

### 7. Integrations
Target integration layers include:

- CRM systems
- Email systems
- Calendar systems
- Social media platforms
- HRIS/ATS systems
- Job boards
- Document systems
- Knowledge bases
- Enterprise identity systems
- Reporting/export systems

### 8. Reporting
Reports must be readable, visual, and exportable.

Support:

- Digital dashboards
- PDF/print-ready reports
- Candidate reports
- Training reports
- Workforce reports
- Agent-performance reports
- Audit reports
- Security reports
- Executive summaries

### 9. Security & Capability Gate
PROOFBERRY should inherit the Wilkerson Collective Labs capability-gate standard for inbound skills, MCP servers, plugins, repositories, packages, workflows, model tools, API connectors, and updates.

Required checks include:

- Identity/source verification
- Static and semantic inspection
- Supply-chain analysis
- Permission analysis
- Secret/exfiltration analysis
- Risk scoring
- Sandboxed behavioral verification
- Claimed-vs-observed behavior comparison
- Cryptographic fingerprint/version approval
- Continuous revalidation on change

## UX Requirements

The product should emphasize:

- Clear dashboards
- Large, readable status panels
- Role-specific views
- Visual progress indicators
- Minimal ambiguity
- Simple navigation
- Desktop and mobile responsiveness
- Accessible presentation
- Easy-to-understand controls
- Transparency around what each AI worker is doing

Canonical autonomous-agent lifecycle states are: `idle`, `working`, `blocked`, `awaiting_approval`, `completed`, and `failed`. Important autonomous actions must expose permissions, approval requirements, Capability Gate status, escalation ownership, and audit history.

## Company Pages

The product should contain polished public-facing sections for:

- About Us
- Mission
- Values
- Why PROOFBERRY
- Use Cases
- SYNTHSAPIENS
- Security
- Enterprise
- Workforce Development
- Contact / Demo Request

## Commercial Positioning

PROOFBERRY is a Wilkerson Collective Labs product. Commercial deployments may include SaaS subscriptions, enterprise licensing, workforce packages, training packages, managed AI workforce services, and custom integrations.

## Development Source of Truth

This GitHub repository is the canonical source of truth for PROOFBERRY AI-OS code, specifications, architecture, implementation notes, and release history.

All material product changes should be reflected here before being considered complete.

Current delivery status against issue #1 is tracked in `docs/IMPLEMENTATION_STATUS.md`. Canonical product requirements remain in `docs/PRODUCT_REQUIREMENTS.md`.

### Validation

Governance validation has a dependency-free Node test suite. Run:

```bash
npm test
```

A feature is not complete until behavior, applicable UI states, error/permission handling, validation/tests, documentation, and source-of-truth updates are all present.
