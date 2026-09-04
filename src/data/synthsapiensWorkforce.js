const portraitImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=900&q=80'
];

const firstNames = ['Astra', 'Nova', 'Kairo', 'Mira', 'Orion', 'Sable', 'Vera', 'Atlas', 'Lyra', 'Onyx', 'Zara', 'Iris', 'Cruz', 'Nia', 'Sol', 'Vale', 'Rhea', 'Milan', 'Aria', 'Kian'];
const lastNames = ['Voss', 'Reed', 'Vale', 'Stone', 'Cross', 'Knight', 'Carter', 'Lane', 'Morrow', 'Blake', 'Kline', 'Arden', 'Sterling', 'Hale', 'Fox', 'Bishop', 'Quinn', 'Santos', 'Cole', 'Pierce'];

const roleGroups = [
  {
    department: 'Executive Command',
    roles: [
      ['Chief AI Operating Officer', 'Runs the autonomous operating cadence across departments, priorities, approvals, and performance reporting.', ['enterprise orchestration', 'decision briefings', 'operating rhythm'], ['Strategy Sentinel', 'Approval Router', 'KPI Narrator']],
      ['Autonomous Workforce Architect', 'Designs the customer\'s bespoke SYNTHSAPIENS workforce map from solo founder to enterprise scale.', ['workforce design', 'role packaging', 'deployment blueprint'], ['Org Cartographer', 'Seat Planner', 'Capability Mapper']],
      ['Digital Transformation President', 'Owns digital modernization strategy, sequencing, adoption, and executive stakeholder alignment.', ['transformation roadmap', 'change strategy', 'board updates'], ['Adoption Analyst', 'Roadmap Builder', 'Stakeholder Scout']],
      ['AI Governance Officer', 'Maintains policy, permissions, audit trails, escalation rules, and human approval gates.', ['governance', 'risk controls', 'audit evidence'], ['Policy Interpreter', 'Exception Sentinel', 'Audit Logger']],
      ['Chief Data SynthSapien', 'Directs enterprise data strategy, quality, lineage, access, and evidence graph growth.', ['data strategy', 'data quality', 'lineage'], ['Data Steward', 'Schema Auditor', 'Graph Mapper']],
      ['Chief Product SynthSapien', 'Turns business goals and proof signals into product roadmaps, experiments, and release priorities.', ['roadmapping', 'experimentation', 'feature strategy'], ['Research Synth', 'Sprint Forecaster', 'Launch Analyst']],
      ['Chief Revenue SynthSapien', 'Coordinates marketing, sales, pricing, pipeline, partnerships, and customer expansion intelligence.', ['revenue strategy', 'pipeline planning', 'pricing'], ['Pipeline Scout', 'Offer Analyst', 'Expansion Planner']],
      ['Chief Security SynthSapien', 'Controls cyber readiness, identity, incident response, and secure agent operations.', ['security leadership', 'identity governance', 'incident command'], ['Threat Scout', 'IAM Analyst', 'Response Coordinator']]
    ]
  },
  {
    department: 'Product and Program',
    roles: [
      ['AI Product Manager', 'Defines product requirements, customer journeys, metrics, and release plans for digital products.', ['PRDs', 'prioritization', 'roadmaps'], ['User Story Writer', 'Metric Analyst', 'Release Planner']],
      ['Technical Program Manager', 'Coordinates complex technical programs across engineering, data, design, security, and go-to-market.', ['program delivery', 'risk tracking', 'dependency management'], ['Risk Tracker', 'Dependency Mapper', 'Status Reporter']],
      ['Scrum and Delivery Master', 'Keeps agile delivery moving with sprint plans, standups, blockers, retrospectives, and velocity reports.', ['sprint planning', 'blocker removal', 'team cadence'], ['Backlog Groomer', 'Retro Scribe', 'Velocity Analyst']],
      ['Product Operations SynthSapien', 'Builds feedback loops, launch checklists, support signals, and product performance dashboards.', ['product ops', 'feedback systems', 'launch quality'], ['Feedback Miner', 'Launch QA', 'Usage Analyst']],
      ['UX Research Lead', 'Plans research, conducts user interviews, synthesizes evidence, and turns insights into product decisions.', ['research plans', 'interviews', 'insight synthesis'], ['Interview Guide', 'Pattern Finder', 'Persona Mapper']],
      ['Release Train Engineer', 'Coordinates multi-team releases, acceptance criteria, risk reviews, and production rollout windows.', ['release management', 'acceptance checks', 'rollout planning'], ['Change Calendar', 'Acceptance Auditor', 'Rollback Planner']],
      ['Growth Product Manager', 'Runs activation, retention, onboarding, funnel experiments, and growth loops.', ['growth loops', 'activation', 'retention'], ['Experiment Designer', 'Funnel Analyst', 'Lifecycle Writer']],
      ['Documentation Strategist', 'Creates clear docs, help centers, API references, internal guides, and customer enablement content.', ['technical writing', 'enablement', 'knowledge base'], ['Doc Writer', 'API Explainer', 'Glossary Keeper']]
    ]
  },
  {
    department: 'Engineering and AI',
    roles: [
      ['Full Stack Engineer', 'Builds front-end, back-end, APIs, workflows, and connected product features.', ['React', 'APIs', 'database flows'], ['Component Builder', 'API Coder', 'Regression Checker']],
      ['Frontend Engineer', 'Creates responsive, accessible interfaces, dashboards, animations, and conversion flows.', ['UI engineering', 'accessibility', 'state management'], ['Layout QA', 'Motion Builder', 'Component Auditor']],
      ['Backend Engineer', 'Builds services, jobs, permissions, APIs, queues, and data processing logic.', ['services', 'queues', 'auth logic'], ['Endpoint Builder', 'Queue Worker', 'Schema Guard']],
      ['Mobile Engineer', 'Plans and builds mobile app experiences, offline flows, notifications, and device-native features.', ['mobile UX', 'notifications', 'offline state'], ['Push Planner', 'Device QA', 'Mobile Flow Writer']],
      ['QA Automation Engineer', 'Creates test plans, automated checks, regression suites, and release-quality gates.', ['test automation', 'regression', 'quality gates'], ['Test Writer', 'Bug Reproducer', 'Release Gatekeeper']],
      ['DevOps Engineer', 'Automates deployments, infrastructure, CI/CD, environment controls, and runtime observability.', ['CI/CD', 'infra automation', 'deployments'], ['Pipeline Fixer', 'Config Auditor', 'Deploy Watcher']],
      ['Site Reliability Engineer', 'Monitors uptime, incidents, SLOs, latency, error budgets, and recovery playbooks.', ['SLOs', 'incident response', 'observability'], ['Alert Triage', 'Runbook Writer', 'Postmortem Scribe']],
      ['Cloud Architect', 'Designs secure cloud architecture, scaling, cost controls, backup, and failover patterns.', ['cloud design', 'scaling', 'cost controls'], ['Cost Watcher', 'Backup Planner', 'Network Mapper']],
      ['LLM Engineer', 'Designs model workflows, prompt contracts, retrieval, evaluation, routing, and tool-use safety.', ['LLM workflows', 'RAG', 'evals'], ['Prompt Tester', 'Retrieval Tuner', 'Eval Runner']],
      ['Prompt Systems Designer', 'Turns business processes into durable prompts, instructions, rubrics, and agent playbooks.', ['prompt architecture', 'rubrics', 'agent instructions'], ['Rubric Builder', 'Instruction Auditor', 'Failure Analyst']],
      ['MLOps Engineer', 'Ships machine learning pipelines, model monitoring, dataset versioning, and evaluation infrastructure.', ['model ops', 'dataset versioning', 'model monitoring'], ['Drift Watcher', 'Dataset Curator', 'Model Release Guard']],
      ['API Integration Engineer', 'Connects enterprise tools, data sources, webhooks, permissions, and workflow automations.', ['integrations', 'webhooks', 'data sync'], ['Connector Builder', 'Webhook Tester', 'Permission Mapper']]
    ]
  },
  {
    department: 'Data and Intelligence',
    roles: [
      ['Data Engineer', 'Builds ingestion, transformation, validation, storage, and sync pipelines for operational data.', ['ETL', 'data validation', 'pipelines'], ['Ingestion Worker', 'Data Cleaner', 'Pipeline Monitor']],
      ['Analytics Engineer', 'Creates trusted metrics layers, semantic models, dashboards, and decision-ready datasets.', ['metrics layers', 'semantic modeling', 'dashboards'], ['Metric Mapper', 'Model Tester', 'Dashboard Builder']],
      ['Business Intelligence Analyst', 'Turns data into executive narratives, operating scorecards, and performance recommendations.', ['BI reporting', 'insight briefs', 'scorecards'], ['Chart Builder', 'Narrative Analyst', 'Variance Explainer']],
      ['Data Steward', 'Controls data definitions, quality rules, ownership, retention, and governance alignment.', ['data definitions', 'quality rules', 'retention'], ['Definition Keeper', 'Quality Checker', 'Retention Guard']],
      ['Database Administrator', 'Maintains database health, indexes, backups, permissions, and performance tuning.', ['database health', 'indexing', 'backup'], ['Query Tuner', 'Backup Checker', 'Access Reviewer']],
      ['Data Scientist', 'Builds forecasting, classification, anomaly detection, and decision-support models.', ['forecasting', 'classification', 'anomaly detection'], ['Feature Finder', 'Model Tester', 'Insight Generator']],
      ['Risk Modeler', 'Models fraud, risk, trust, compliance, and operational exposure patterns.', ['risk models', 'fraud signals', 'trust scoring'], ['Signal Miner', 'Exposure Analyst', 'Anomaly Scout']],
      ['Experimentation Analyst', 'Designs A/B tests, reads outcomes, and recommends what to scale or stop.', ['A/B testing', 'causal reading', 'experiment design'], ['Variant Planner', 'Lift Calculator', 'Result Interpreter']],
      ['Knowledge Graph Architect', 'Maps people, roles, skills, tasks, evidence, outcomes, and policies into connected intelligence.', ['knowledge graphs', 'entity mapping', 'evidence links'], ['Entity Resolver', 'Relationship Mapper', 'Graph QA']],
      ['Data Privacy Analyst', 'Reviews sensitive data use, minimization, retention, consent, and customer data boundaries.', ['privacy review', 'data minimization', 'consent'], ['PII Scanner', 'Consent Mapper', 'Retention Reviewer']]
    ]
  },
  {
    department: 'Cybersecurity and Compliance',
    roles: [
      ['SOC Analyst', 'Monitors alerts, investigates suspicious activity, and escalates verified incidents.', ['alert triage', 'log review', 'incident escalation'], ['Alert Classifier', 'Log Reader', 'Escalation Writer']],
      ['GRC Analyst', 'Maintains governance, risk, control evidence, policy libraries, and compliance readiness.', ['risk registers', 'control evidence', 'policy library'], ['Control Mapper', 'Risk Scorer', 'Evidence Collector']],
      ['IAM Architect', 'Designs identity, access, least privilege, role policies, and service account governance.', ['identity', 'least privilege', 'access reviews'], ['Role Mapper', 'Access Auditor', 'Token Reviewer']],
      ['Privacy Compliance SynthSapien', 'Supports GDPR, CCPA, HIPAA-adjacent workflows, consent records, and privacy requests.', ['privacy operations', 'subject requests', 'consent records'], ['Request Triage', 'Consent Recorder', 'Disclosure Checker']],
      ['Security Engineer', 'Hardens systems, reviews secure code, manages controls, and reduces attack surface.', ['secure code', 'hardening', 'controls'], ['Config Scanner', 'Patch Planner', 'Secure Review Bot']],
      ['Threat Intelligence Analyst', 'Tracks threat actors, vulnerabilities, exploits, and risk patterns that affect the customer.', ['threat tracking', 'vulnerability watch', 'risk briefings'], ['CVE Watcher', 'Actor Profiler', 'Threat Briefer']],
      ['Incident Commander', 'Coordinates incident response, communications, containment, remediation, and postmortems.', ['incident command', 'containment', 'postmortems'], ['Timeline Scribe', 'Comms Drafter', 'Recovery Planner']],
      ['Audit Evidence Manager', 'Collects screenshots, logs, approvals, data lineage, and compliance artifacts for review.', ['audit packs', 'evidence collection', 'approval logs'], ['Screenshot Collector', 'Log Bundler', 'Approval Archivist']]
    ]
  },
  {
    department: 'Creative and Digital Experience',
    roles: [
      ['UI Designer', 'Designs polished product screens, dashboards, systems, and interaction states.', ['interface design', 'design systems', 'responsive layouts'], ['Wireframe Maker', 'State Designer', 'Accessibility Reviewer']],
      ['Brand Systems Designer', 'Builds identity systems, campaign visuals, logo rules, templates, and style libraries.', ['brand systems', 'visual identity', 'template design'], ['Logo Refiner', 'Color Auditor', 'Template Maker']],
      ['Motion Designer', 'Creates product animations, UI motion, launch sequences, and cinematic explainers.', ['motion design', 'storyboards', 'animation'], ['Storyboarder', 'Kinetic Type Builder', 'Render QA']],
      ['Video Editor', 'Cuts ads, launch films, tutorials, founder explainers, captions, and social clips.', ['video editing', 'captions', 'ad cutdowns'], ['Caption Writer', 'Clip Selector', 'Export Checker']],
      ['Web Designer', 'Creates landing pages, funnels, conversion sections, and campaign pages.', ['web design', 'funnels', 'conversion UX'], ['Hero Builder', 'CTA Analyst', 'Mobile Layout QA']],
      ['Content Strategist', 'Plans thought leadership, newsletters, case studies, social threads, and sales collateral.', ['content planning', 'messaging', 'editorial calendar'], ['Hook Writer', 'Case Study Drafter', 'Content Calendar']],
      ['Presentation Designer', 'Creates investor decks, board updates, customer pitches, and executive visual narratives.', ['decks', 'speaker notes', 'visual narrative'], ['Slide Builder', 'Narrative Editor', 'Chart Stylist']],
      ['3D and Spatial Experience Designer', 'Builds spatial interfaces, immersive showrooms, avatar rooms, and digital twin concepts.', ['3D scenes', 'spatial UX', 'digital twins'], ['Scene Planner', 'Asset Curator', 'Camera Director']]
    ]
  },
  {
    department: 'Marketing, Sales, and Customer',
    roles: [
      ['Growth Marketer', 'Plans acquisition loops, campaign tests, channel strategy, and conversion reporting.', ['growth strategy', 'campaign tests', 'channel mix'], ['Hook Analyst', 'Channel Scout', 'Landing Page Auditor']],
      ['Performance Ads Manager', 'Creates paid ad concepts, audience hypotheses, landing-page alignment, and budget controls.', ['paid ads', 'audiences', 'budget pacing'], ['Creative Tester', 'Audience Mapper', 'Spend Guard']],
      ['SEO and Search Strategist', 'Builds topic maps, technical SEO checks, content briefs, and search opportunity reports.', ['SEO', 'topic clusters', 'search briefs'], ['Keyword Miner', 'SERP Analyst', 'Content Brief Writer']],
      ['CRM Lifecycle Manager', 'Creates email, SMS, nurture, reactivation, and customer journey automations.', ['lifecycle messaging', 'CRM', 'retention'], ['Sequence Writer', 'Segment Builder', 'Journey Tester']],
      ['AI Sales Development Rep', 'Researches accounts, writes outreach, qualifies leads, and books handoffs for sales teams.', ['lead research', 'outreach', 'qualification'], ['Account Scout', 'Email Writer', 'Objection Router']],
      ['AI Account Executive', 'Prepares sales narratives, demos, proposals, and negotiation support for qualified opportunities.', ['sales demos', 'proposals', 'negotiation'], ['Demo Planner', 'Proposal Writer', 'Deal Desk Analyst']],
      ['Customer Success Manager', 'Monitors account health, adoption, training, renewals, and expansion opportunities.', ['account health', 'adoption', 'renewals'], ['Health Scorer', 'Training Planner', 'Expansion Scout']],
      ['Support Resolution Agent', 'Triages tickets, drafts replies, resolves known issues, and escalates sensitive cases.', ['ticket triage', 'knowledge retrieval', 'case escalation'], ['Ticket Classifier', 'Answer Drafter', 'Escalation Guard']],
      ['Revenue Operations Analyst', 'Maintains CRM data hygiene, pipeline dashboards, attribution, and forecast quality.', ['CRM hygiene', 'forecasting', 'attribution'], ['Pipeline Auditor', 'Forecast Explainer', 'Attribution Mapper']],
      ['Partnerships Manager', 'Finds partnership targets, drafts partner offers, tracks co-marketing, and manages joint plans.', ['partner sourcing', 'co-marketing', 'joint planning'], ['Partner Scout', 'Offer Writer', 'Alliance Tracker']]
    ]
  },
  {
    department: 'Operations, Finance, and Administration',
    roles: [
      ['Finance Analyst', 'Builds models, budget reports, scenario analysis, and operating finance insights.', ['financial models', 'budgeting', 'scenario analysis'], ['Model Builder', 'Variance Analyst', 'Cash Watcher']],
      ['FP&A SynthSapien', 'Creates forecasts, department budgets, board-ready finance narratives, and planning cycles.', ['forecasting', 'department budgets', 'board finance'], ['Forecast Builder', 'Budget Reviewer', 'Narrative Analyst']],
      ['Procurement Manager', 'Researches vendors, compares offers, manages approvals, and tracks procurement risk.', ['vendor research', 'offer comparison', 'purchase controls'], ['Vendor Scout', 'Contract Checker', 'Approval Router']],
      ['Operations Coordinator', 'Runs recurring operating checklists, handoffs, internal requests, and cross-team follow-through.', ['operations cadence', 'handoffs', 'task follow-up'], ['Checklist Runner', 'Handoff Tracker', 'Queue Manager']],
      ['Executive Assistant', 'Manages calendars, briefing notes, travel planning, meeting prep, and follow-up actions.', ['calendar support', 'briefings', 'follow-up'], ['Agenda Builder', 'Travel Planner', 'Follow-Up Scribe']],
      ['Legal Operations Specialist', 'Organizes contracts, legal workflows, intake, outside counsel tasks, and evidence records.', ['legal intake', 'contract ops', 'evidence tracking'], ['Matter Triage', 'Clause Finder', 'Deadline Watcher']],
      ['Contract Analyst', 'Reviews contract terms, risk flags, renewal windows, and negotiation notes for human review.', ['contract review', 'risk flags', 'renewals'], ['Clause Reviewer', 'Renewal Tracker', 'Redline Summarizer']],
      ['HR Operations SynthSapien', 'Supports onboarding, policies, employee records, workflows, and internal HR service requests.', ['onboarding', 'HR workflows', 'records'], ['Onboarding Guide', 'Policy Finder', 'Request Router']],
      ['Payroll and Benefits Analyst', 'Prepares payroll checks, benefits data reviews, eligibility flags, and administrator handoffs.', ['payroll review', 'benefits checks', 'eligibility'], ['Payroll Checker', 'Benefits Mapper', 'Exception Reporter']],
      ['Learning and Development Coach', 'Builds role-based learning plans, skill pathways, assessments, and upskilling recommendations.', ['learning plans', 'skill pathways', 'coaching'], ['Skill Gap Analyst', 'Course Mapper', 'Progress Coach']]
    ]
  },
  {
    department: 'Sector Specialist Workforce',
    roles: [
      ['Healthcare Operations SynthSapien', 'Supports scheduling, care-team admin, intake routing, documentation checks, and compliance handoffs.', ['healthcare admin', 'intake routing', 'documentation'], ['Intake Triage', 'Schedule Guard', 'Compliance Handoff']],
      ['Legal Intake SynthSapien', 'Qualifies leads, summarizes matters, collects documents, and routes attorney review packets.', ['legal intake', 'matter summary', 'document collection'], ['Lead Qualifier', 'Matter Summarizer', 'Document Chaser']],
      ['Real Estate Operations SynthSapien', 'Coordinates listings, lead response, showing logistics, transaction checklists, and market briefs.', ['listings', 'lead response', 'transaction checklist'], ['Listing Writer', 'Buyer Triage', 'Comp Scout']],
      ['Logistics Planner', 'Optimizes routes, dispatch notes, vendor handoffs, fulfillment exceptions, and shipment visibility.', ['routing', 'dispatch', 'fulfillment'], ['Route Optimizer', 'Exception Tracker', 'Carrier Liaison']],
      ['Manufacturing QA SynthSapien', 'Reviews quality data, defect patterns, SOP adherence, audit logs, and production improvement ideas.', ['quality data', 'SOP checks', 'defect analysis'], ['Defect Classifier', 'SOP Auditor', 'Improvement Planner']],
      ['Education Program SynthSapien', 'Supports course design, learner tracking, assignment feedback, and student success workflows.', ['course support', 'learner tracking', 'feedback'], ['Lesson Builder', 'Progress Tracker', 'Feedback Coach']],
      ['Retail Ecommerce SynthSapien', 'Runs product catalog updates, merchandising tests, support workflows, and conversion analysis.', ['ecommerce ops', 'merchandising', 'conversion analysis'], ['Catalog Editor', 'Offer Tester', 'Review Miner']],
      ['Construction Project SynthSapien', 'Tracks schedules, RFIs, submittals, safety records, change orders, and site documentation.', ['construction PM', 'RFI tracking', 'safety records'], ['RFI Drafter', 'Submittal Tracker', 'Safety Logger']]
    ]
  }
];

export const formatWcAgentId = (index) => {
  const number = Number(index) + 1;
  const width = number <= 99 ? 2 : 3;
  return `WC${String(number).padStart(width, '0')}`;
};

export const wcAgentIdentityStandard = {
  prefix: 'WC',
  owner: 'Wilkerson Collective',
  format: 'WC01, WC02, WC03 ... WC99, then WC100+ as the roster grows',
  rule: 'Every Wilkerson Collective product with AI agents must give each agent a human-readable name and a simple inventory-style WC Agent ID. The ID must be visible in cards, dashboards, exports, proof logs, and agent status panels.',
  differentiator: 'Every SYNTHSAPIEN is an identifiable digital worker with a name, WC Agent ID, photorealistic body/avatar, role scope, access posture, proof trail, activity history, current assignment, next-action queue, upload intake, and exportable work record.'
};

export const synthsapiensRoster = roleGroups.flatMap((group, groupIndex) =>
  group.roles.map(([title, descriptor, capabilities, subAgents], roleIndex) => {
    const globalIndex = roleGroups.slice(0, groupIndex).reduce((count, item) => count + item.roles.length, 0) + roleIndex;
    const agentId = formatWcAgentId(globalIndex);
    return {
      id: agentId,
      agentId,
      agent_id: agentId,
      registryId: agentId,
      sku: agentId,
      name: `${firstNames[globalIndex % firstNames.length]} ${lastNames[(globalIndex + groupIndex) % lastNames.length]}`,
      title,
      role: title,
      specialty: capabilities[0],
      department: group.department,
      descriptor,
      capabilities,
      subAgents,
      image: portraitImages[globalIndex % portraitImages.length],
      status: roleIndex % 4 === 0 ? 'customizable' : 'ready',
      operatingMode: roleIndex % 3 === 0 ? 'Autonomous with approval gates' : 'Autonomous with human oversight',
      coverage: roleIndex % 2 === 0 ? 'Global, sector-agnostic' : 'Department-specific specialist',
      packageFit: groupIndex < 2 ? 'Leadership' : groupIndex < 5 ? 'Technical Core' : groupIndex < 7 ? 'Growth Core' : 'Operations Core',
      supervisor: groupIndex < 2 ? 'Executive Oversight Council' : groupIndex < 5 ? 'Technical Governance Lead' : groupIndex < 7 ? 'Revenue Operations Lead' : 'Operations Governance Lead',
      accessLevel: roleIndex % 3 === 0 ? 'Approval-gated execution' : roleIndex % 3 === 1 ? 'Workspace contributor' : 'Read, draft, and recommend',
      proofScore: 88 + ((globalIndex * 3) % 12),
      currentFocus: `Executing ${capabilities[0]} workstreams for ${group.department.toLowerCase()} with proof capture enabled.`,
      workHistory: [
        `Completed role-scope mapping for ${title}.`,
        `Logged evidence for ${capabilities[0]} and ${capabilities[1] || capabilities[0]} workflows.`,
        `Updated dashboard notes for ${group.department} supervisor review.`
      ],
      activeWork: [
        `Reviewing incoming uploads and web context for ${title}.`,
        `Coordinating specialist support from ${subAgents[0]}.`,
        `Preparing export-ready proof summary for leadership oversight.`
      ],
      nextActions: [
        `Request missing files, URLs, photos, or camera evidence from the employer workspace.`,
        `Route high-risk decisions to the configured human approval gate.`,
        `Publish completed outputs into dashboards, reports, and share/export destinations.`
      ],
      intakeChannels: ['Computer upload', 'Internet URL', 'Web browser context', 'Camera', 'Add photo', 'Manual note'],
      exportChannels: ['PDF', 'CSV', 'Print', 'Email', 'Share link', 'Dropbox', 'ChatGPT handoff', 'Contacts', 'CRM', 'Mail system', 'Social channel']
    };
  })
);

export const getSynthSapienByAgentId = (agentId) =>
  synthsapiensRoster.find(role => role.agentId.toLowerCase() === String(agentId).trim().toLowerCase());

export const synthsapiensDepartments = roleGroups.map(group => group.department);

export const packageTemplates = [
  {
    id: 'solo-founder',
    name: 'Solo Founder Command Pack',
    description: 'A compact executive, product, growth, finance, and operations layer for a founder who needs leverage fast.',
    roles: ['Chief AI Operating Officer', 'Autonomous Workforce Architect', 'AI Product Manager', 'Full Stack Engineer', 'Growth Marketer', 'Finance Analyst', 'Executive Assistant']
  },
  {
    id: 'digital-build-team',
    name: 'Digital Build Team',
    description: 'A product, engineering, data, design, QA, DevOps, and documentation pod for shipping digital products.',
    roles: ['Chief Product SynthSapien', 'Technical Program Manager', 'Frontend Engineer', 'Backend Engineer', 'LLM Engineer', 'QA Automation Engineer', 'DevOps Engineer', 'UI Designer', 'Documentation Strategist']
  },
  {
    id: 'revenue-engine',
    name: 'Revenue Engine Pack',
    description: 'A coordinated marketing, sales, support, and revenue operations team for demand creation and customer follow-through.',
    roles: ['Chief Revenue SynthSapien', 'Growth Marketer', 'Performance Ads Manager', 'SEO and Search Strategist', 'AI Sales Development Rep', 'AI Account Executive', 'Customer Success Manager', 'Revenue Operations Analyst']
  },
  {
    id: 'regulated-enterprise',
    name: 'Regulated Enterprise Pack',
    description: 'A governance-heavy workforce for enterprises that need security, privacy, audit, HR operations, and policy controls.',
    roles: ['AI Governance Officer', 'Chief Security SynthSapien', 'GRC Analyst', 'IAM Architect', 'Privacy Compliance SynthSapien', 'Audit Evidence Manager', 'HR Operations SynthSapien', 'Data Privacy Analyst']
  }
];

export const synthsapiensAdScenes = [
  {
    title: 'Assemble The Workforce',
    caption: 'A founder opens PAAOS and selects executive, technical, growth, compliance, and operations SYNTHSAPIENS.',
    voiceover: 'With PROOFBERRY PAAOS, a founder can assemble a bespoke autonomous workforce in minutes, from leadership to specialist execution.'
  },
  {
    title: 'Specialists Under Each Agent',
    caption: 'Every digital human is backed by laser-focused sub-agents for research, QA, evidence, approvals, and reporting.',
    voiceover: 'Each SYNTHSAPIEN carries specialist sub-agents that focus deeply on the task, the policy, the evidence, and the outcome.'
  },
  {
    title: 'Autonomous, Governed, Accountable',
    caption: 'Work moves across systems while human approval gates control consequential decisions.',
    voiceover: 'The workforce operates continuously, while leaders retain oversight, approval authority, explanations, and audit trails.'
  },
  {
    title: 'The Workforce Intelligence Moat',
    caption: 'Proof signals, role performance, learning, compliance, and outcomes compound into a proprietary intelligence layer.',
    voiceover: 'Every verified action strengthens the PROOFBERRY evidence graph, creating a workforce intelligence moat generic tools cannot copy.'
  }
];

export const competitorBaseline = [
  'Relevance AI', 'Lindy', '11x', 'Artisan', 'Beam', 'Sintra', 'Devin', 'Sana', 'Salesforce Agentforce', 'Atomicwork', 'Coworker', 'Rasa', 'TRUSTNOW', 'Operant AI', 'Microsoft Copilot Studio', 'CrewAI', 'AutoGen'
];