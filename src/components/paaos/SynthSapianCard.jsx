import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, Crown, Wrench, LifeBuoy } from 'lucide-react';
import AgentIdBadge from '@/components/shared/AgentIdBadge';

const TIER_META = {
  leadership: { icon: Crown, label: 'Leadership', cls: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
  specialist: { icon: Wrench, label: 'Specialist', cls: 'text-primary bg-primary/10 border-primary/20' },
  support: { icon: LifeBuoy, label: 'Support', cls: 'text-accent bg-accent/10 border-accent/20' },
};

export default function SynthSapienCard({ synth, onAdd, selected, index = 0 }) {
  const tier = TIER_META[synth.tier] || TIER_META.specialist;
  const TierIcon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
      whileHover={{ y: -4 }}
      className={`group relative bg-card border rounded-2xl overflow-hidden transition-all duration-200 ${
        selected ? 'border-primary shadow-lg shadow-primary/20' : 'border-border hover:border-primary/40'
      }`}
    >
      {/* Portrait */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-secondary to-background">
        {synth.image_url ? (
          <img
            src={synth.image_url}
            alt={synth.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${synth.avatar_gradient || 'from-primary/30 to-accent/20'} flex items-center justify-center`}>
            <span className="font-heading font-black text-4xl text-white/80">{synth.name?.slice(0, 2) || 'AI'}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${tier.cls}`}>
            <TierIcon className="w-3 h-3" /> {tier.label}
          </div>
          {synth.agent_id && <AgentIdBadge agentId={synth.agent_id} size="sm" />}
        </div>
        {selected && (
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="font-heading font-bold text-foreground text-lg leading-tight">{synth.name}</h3>
          <span className="text-xs text-muted-foreground font-mono">${synth.daily_rate || 0}/day</span>
        </div>
        <p className="text-sm text-primary font-semibold mb-1">{synth.role}</p>
        {synth.specialty && (
          <p className="text-xs text-accent font-medium mb-2">{synth.specialty}</p>
        )}
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">{synth.description}</p>
        {synth.why_it_matters && (
          <div className="mb-3 p-2.5 rounded-lg bg-primary/5 border border-primary/15">
            <p className="text-[10px] font-bold text-primary uppercase tracking-wide mb-1">Why It Matters</p>
            <p className="text-[11px] text-foreground/70 leading-relaxed line-clamp-3">{synth.why_it_matters}</p>
          </div>
        )}

        {synth.capabilities && synth.capabilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {synth.capabilities.slice(0, 3).map((cap, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                {cap}
              </span>
            ))}
            {synth.capabilities.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md text-muted-foreground">+{synth.capabilities.length - 3}</span>
            )}
          </div>
        )}

        <button
          onClick={() => onAdd(synth)}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            selected
              ? 'bg-primary/15 text-primary border border-primary/30'
              : 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02]'
          }`}
        >
          {selected ? <><Check className="w-4 h-4" /> Added to Workforce</> : <><Plus className="w-4 h-4" /> Add to Workforce</>}
        </button>
      </div>
    </motion.div>
  );
}