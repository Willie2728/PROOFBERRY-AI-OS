# PROOFBERRY AI-OS — Product Requirements

## Status
Canonical implementation requirements for the current PROOFBERRY direction.

## Product pillars

1. **Workforce identity** — Every autonomous worker has a name, persistent Agent ID, role, permissions, capabilities, owner, activity history, and version history.
2. **Workforce visibility** — Users can see what agents are doing, why, with what tools/data, and whether human approval is required.
3. **Workforce accountability** — Actions, handoffs, outputs, errors, escalations, and performance are auditable.
4. **Job readiness** — Mock interviewing, coaching, assessment, resume/profile support, job matching, and progress reporting.
5. **Enterprise training** — Scenario-based skills training, assessment, certification, and organization reporting.
6. **Recruiting** — Candidate discovery, comparison, screening, job matching, interview workflows, and recruiter dashboards.
7. **Autonomous workforce** — Deployable role-specific SYNTHSAPIENS with measurable skills, permissions, and outcomes.
8. **Security** — Capability Gate validation for tools, skills, packages, plugins, connectors, workflows, and updates.

## Required application areas

### Public product experience
- Home/landing page
- About Us
- Mission
- Values
- Why PROOFBERRY
- Use Cases
- SYNTHSAPIENS catalog
- Security
- Enterprise
- Workforce Development
- Demo/contact CTA
- Front-page product video area

### Candidate experience
- Account/profile
- Resume/profile ingestion
- Skill inventory
- Target role selection
- Mock interview studio
- Interview transcript and scoring
- Coaching recommendations
- Training plan
- Job matches
- Application tracker
- Progress dashboard
- Exportable candidate report

### Recruiter/employer experience
- Employer workspace
- Role/requisition creation
- Candidate search and matching
- Candidate comparison
- Screening pipelines
- Interview workflow
- Training assignments
- AI workforce catalog/deployment
- Reporting
- Audit history

### SYNTHSAPIENS catalog
Every SYNTHSAPIEN record must support:
- Display name
- Agent ID
- Role
- Department
- Sector
- Skills
- Tools
- Model configuration
- Permissions
- Security status
- Current deployment
- Availability
- Training history
- Performance history
- Version/fingerprint
- Parent/child agent relationships
- Escalation owner

### Agent ID standard
Agent IDs must be short and human-readable, visually similar to an inventory or stock number, not secret-looking credentials. IDs are immutable once assigned. The UI should never confuse Agent IDs with API keys or tokens.

### Job engine
- Multi-source ingestion from approved sources
- Normalization
- Deduplication
- Freshness tracking
- Role/location/skills matching
- Match score explanations
- Application status tracking
- Source attribution

### Training engine
- Scenario library
- Role-specific simulations
- Voice/text/video-capable sessions where enabled
- Rubric scoring
- Improvement recommendations
- Repeated-practice tracking
- Certifications/completion records
- Organization-level analytics

### Reporting
- Candidate performance reports
- Training progress reports
- Employer workforce reports
- Agent performance reports
- Security/audit reports
- Executive summaries
- Digital dashboard view
- Print/PDF-ready view

### Integrations
Architect for connectors to:
- CRM
- Email
- Calendar
- ATS/HRIS
- Job boards
- Social media
- Documents/storage
- Knowledge bases
- Enterprise identity
- Reporting/export destinations

### Security — Capability Gate
All inbound extensibility must support:
1. Identity/source verification
2. Static/semantic inspection
3. Supply-chain inspection
4. Permission analysis
5. Secret/exfiltration analysis
6. Risk scoring
7. Red Room sandbox behavioral verification
8. Claimed-vs-observed behavior comparison
9. Cryptographic fingerprint/version approval
10. Continuous revalidation after change

### UX
- Clear visual hierarchy
- Large readable panels
- Status at a glance
- Plain-language labels
- Responsive desktop/mobile layouts
- Accessibility-conscious typography and controls
- Explicit agent state: idle / working / blocked / awaiting approval / completed / failed
- User-visible auditability for important autonomous actions

## Brand architecture
- Product: **PROOFBERRY AI-OS**
- Autonomous workers: **SYNTHSAPIENS**
- Parent company: **Wilkerson Collective Labs**

## Definition of done for future features
A feature is not complete until:
- behavior is implemented,
- UI state is represented where applicable,
- errors and permissions are handled,
- tests or validation exist,
- documentation is updated,
- GitHub source of truth reflects the change.
