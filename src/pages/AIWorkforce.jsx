import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Users, Scale, Sparkles, Plug } from 'lucide-react';
import HRExpertAgents from '@/components/aiworkforce/HRExpertAgents';
import AIERoster from '@/components/aiworkforce/AIERoster';
import LawUpdatesFeed from '@/components/aiworkforce/LawUpdatesFeed';
import AgentChat from '@/components/aiworkforce/AgentChat';
import IntegrationsPanel from '@/components/aiworkforce/IntegrationsPanel';
import PaaosAdBanner from '@/components/paaos/PaaosAdBanner';

const TABS = [
  { id: 'experts', label: 'HR Expert Agents', icon: Scale },
  { id: 'employees', label: 'AI Employees', icon: Bot },
  { id: 'compliance', label: 'Compliance Feed', icon: Users },
  { id: 'integrations', label: 'Integrations', icon: Plug },
];

export default function AIWorkforce() {
  const [tab, setTab] = useState('experts');
  const [activeAgent, setActiveAgent] = useState(null);

  return (
    <div className="min-h-screen bg-background pb-ambient">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">ProofBerry AI OS</span>
          </div>
          <h1 className="font-heading font-black text-3xl text-foreground mb-2">AI Workforce</h1>
          <p className="text-muted-foreground max-w-2xl">
            Engage your autonomous HR Expert agents and AI Employees (AIEs). They research employment law daily,
            stay current across regions, and handle administrative work — with humans approving every consequential action.
          </p>
        </div>

        <div className="flex gap-2 mb-8 border-b border-border overflow-x-auto">
          {TABS.map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  tab === t.id ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" /> {t.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tab === 'experts' && <HRExpertAgents onConsult={(name, title, agentId) => setActiveAgent({ name, title, agentId })} />}
            {tab === 'employees' && <AIERoster onConsult={(name, title, agentId) => setActiveAgent({ name, title, agentId })} />}
            {tab === 'compliance' && <LawUpdatesFeed />}
            {tab === 'integrations' && <IntegrationsPanel />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <PaaosAdBanner variant="compact" />
      </div>

      <AnimatePresence>
        {activeAgent && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-card border-l border-border z-50 shadow-2xl"
          >
            <AgentChat agentName={activeAgent.name} title={activeAgent.title} agentId={activeAgent.agentId} onClose={() => setActiveAgent(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}