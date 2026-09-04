import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Bot, Loader2, Zap, Globe } from 'lucide-react';
import AgentIdBadge from '@/components/shared/AgentIdBadge';
import AgentExportPanel from '@/components/shared/AgentExportPanel';

const STATUS_STYLES = {
  active: 'bg-green-500/20 text-green-400',
  standby: 'bg-yellow-500/20 text-yellow-400',
  training: 'bg-blue-500/20 text-blue-300',
};

export default function AIERoster({ onConsult }) {
  const [aies, setAies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const list = await base44.entities.AIE.list('-updated_date', 50);
        setAies(list || []);
      } catch {}
      setLoading(false);
    })();
  }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader2 className="w-7 h-7 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl text-foreground mb-1">AI Employees (AIEs)</h2>
        <p className="text-sm text-muted-foreground">Intelligent AI staff with administrative capabilities. Assign tasks or engage directly.</p>
      </div>
      {aies.length === 0 ? (
        <div className="bg-card border border-border rounded-2xl p-10 text-center text-muted-foreground">
          <Bot className="w-8 h-8 mx-auto mb-3 opacity-50" /> No AI Employees deployed yet.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aies.map(a => (
            <div key={a.id} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.avatar_gradient || 'from-primary to-accent'} flex items-center justify-center`}>
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${STATUS_STYLES[a.status] || STATUS_STYLES.active}`}>{a.status || 'active'}</span>
              </div>
              {a.agent_id && <div className="mb-2"><AgentIdBadge agentId={a.agent_id} size="sm" /></div>}
              <h3 className="font-heading font-bold text-foreground">{a.name}</h3>
              <p className="text-xs text-accent font-semibold mb-3">{a.role}</p>
              {a.specialty && <p className="text-sm text-muted-foreground mb-3">{a.specialty}</p>}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {(a.capabilities || []).slice(0, 4).map((c, i) => (
                  <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{c}</span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {a.region_scope || 'Global'}</span>
                <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {a.tasks_completed || 0} tasks</span>
              </div>
              {a.agent_name ? (
                <button onClick={() => onConsult(a.agent_name, a.name, a.agent_id)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold px-4 py-2.5 rounded-xl transition-all hover:scale-105">Engage</button>
              ) : (
                <button disabled className="w-full bg-muted text-muted-foreground text-sm font-bold px-4 py-2.5 rounded-xl cursor-not-allowed">Administrative Only</button>
              )}
              <div className="mt-2.5"><AgentExportPanel agent={a} /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}