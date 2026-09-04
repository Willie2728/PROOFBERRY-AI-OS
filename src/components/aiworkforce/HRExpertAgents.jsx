import React from 'react';
import { Scale, Search, Users, MessageSquare, ArrowRight } from 'lucide-react';
import AgentIdBadge from '@/components/shared/AgentIdBadge';
import AgentExportPanel from '@/components/shared/AgentExportPanel';

const AGENTS = [
  {
    agent_id: 'WC01',
    name: 'employment_law_advisor',
    title: 'Employment Law Advisor',
    specialty: 'Employment Law & Compliance',
    icon: Scale,
    description: 'Answers employment-law questions across regions, grounded in the latest AI-researched legal updates.',
  },
  {
    agent_id: 'WC02',
    name: 'compliance_researcher',
    title: 'Compliance Researcher',
    specialty: 'Regulatory Research',
    icon: Search,
    description: 'Continuously researches and records the latest employment law and regulatory changes worldwide.',
  },
  {
    agent_id: 'WC03',
    name: 'talent_ops_expert',
    title: 'Talent Operations Expert',
    specialty: 'Hiring & Talent Strategy',
    icon: Users,
    description: 'Advises on role design, scorecards, and hiring strategy grounded in your candidate and job data.',
  },
];

export default function HRExpertAgents({ onConsult }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl text-foreground mb-1">HR Expert Agents</h2>
        <p className="text-sm text-muted-foreground">Autonomous HR specialists that evolve daily. Open a consultation to ask anything.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AGENTS.map(a => {
          const Icon = a.icon;
          return (
            <div key={a.name} className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <AgentIdBadge agentId={a.agent_id} size="sm" />
              </div>
              <span className="text-xs text-accent font-semibold mb-1">{a.specialty}</span>
              <h3 className="font-heading font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{a.description}</p>
              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={() => onConsult(a.name, a.title, a.agent_id)}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold px-4 py-2.5 rounded-xl transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" /> Consult <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <AgentExportPanel agent={{ agent_id: a.agent_id, name: a.title, role: a.specialty, specialty: a.description }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}