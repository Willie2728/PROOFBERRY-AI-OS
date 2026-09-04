import React, { useMemo, useState } from 'react';
import {
  Activity, Bot, Camera, Copy, Download, FileUp, Globe2, History,
  ImagePlus, Mail, MonitorUp, Printer, Search, Share2, ShieldCheck, UploadCloud
} from 'lucide-react';
import { synthsapiensRoster, wcAgentIdentityStandard } from '@/data/synthsapiensWorkforce';

const intakeIcons = {
  'Computer upload': FileUp,
  'Internet URL': Globe2,
  'Web browser context': MonitorUp,
  Camera,
  'Add photo': ImagePlus,
  'Manual note': UploadCloud
};

const exportIcons = {
  PDF: Download,
  CSV: Download,
  Print: Printer,
  Email: Mail,
  'Share link': Share2,
  Dropbox: UploadCloud,
  'ChatGPT handoff': Bot,
  Contacts: Share2,
  CRM: Activity,
  'Mail system': Mail,
  'Social channel': Share2
};

export default function WcAgentRegistryPanel() {
  const [lookup, setLookup] = useState('WC010');
  const [selectedId, setSelectedId] = useState('WC010');

  const activeAgent = useMemo(() => {
    const normalized = selectedId.trim().toLowerCase();
    return synthsapiensRoster.find(agent => agent.agentId.toLowerCase() === normalized) || synthsapiensRoster[9];
  }, [selectedId]);

  const visibleAgents = useMemo(() => synthsapiensRoster.slice(0, 18), []);

  const runLookup = () => {
    const normalized = lookup.trim();
    const match = synthsapiensRoster.find(agent => agent.agentId.toLowerCase() === normalized.toLowerCase());
    if (match) setSelectedId(match.agentId);
  };

  const copyAgentBrief = async () => {
    const brief = `${activeAgent.agentId} — ${activeAgent.name}, ${activeAgent.title}. Purpose: ${activeAgent.descriptor} Current: ${activeAgent.currentFocus} Done: ${activeAgent.workHistory.join(' | ')} Next: ${activeAgent.nextActions.join(' | ')}`;
    if (navigator?.clipboard?.writeText) await navigator.clipboard.writeText(brief);
  };

  const printAgent = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <section id="agent-registry" className="rounded-[32px] border border-cyan-300/20 bg-slate-950/70 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-cyan-950/20 print:bg-white print:border-black">
      <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-8 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[.08] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 print:text-black print:border-black">
            <ShieldCheck className="w-4 h-4" /> WC Agent Registry Standard
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl mt-5 tracking-tight print:text-black">
            Every AI worker is identifiable, searchable, accountable, and exportable.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed print:text-black">
            {wcAgentIdentityStandard.differentiator}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 print:bg-white print:border-black">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300 font-bold print:text-black">Permanent standard</p>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              <StandardTile label="Prefix" value={wcAgentIdentityStandard.prefix} />
              <StandardTile label="Format" value="WC01 → WC99 → WC100+" />
              <StandardTile label="Owner" value={wcAgentIdentityStandard.owner} />
            </div>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed print:text-black">{wcAgentIdentityStandard.rule}</p>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[.035] p-4 print:bg-white print:border-black">
            <label className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2 print:text-black">
              <Search className="w-4 h-4" /> Ask for any agent by ID
            </label>
            <div className="mt-3 flex gap-2">
              <input
                value={lookup}
                onChange={(event) => setLookup(event.target.value.toUpperCase())}
                onKeyDown={(event) => { if (event.key === 'Enter') runLookup(); }}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-bold text-white outline-none focus:border-cyan-300 print:bg-white print:text-black print:border-black"
                placeholder="WC010"
              />
              <button onClick={runLookup} className="rounded-xl bg-white px-4 py-3 text-sm font-black text-black hover:bg-cyan-100 transition-colors print:hidden">Lookup</button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground print:text-black">Example: “What is Agent WC010 doing?” returns identity, role, purpose, completed work, active work, and next work.</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-black/40 overflow-hidden print:bg-white print:border-black">
          <div className="grid sm:grid-cols-[190px_1fr]">
            <div className="relative min-h-[260px] bg-muted overflow-hidden">
              <img src={activeAgent.image} alt={`${activeAgent.agentId} ${activeAgent.name}`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute left-4 bottom-4 right-4">
                <div className="inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-black shadow-lg shadow-cyan-900/40">{activeAgent.agentId}</div>
                <p className="mt-2 text-white font-black text-lg leading-tight">{activeAgent.name}</p>
                <p className="text-xs text-cyan-100">Photorealistic SYNTHSAPIEN</p>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300 font-black print:text-black">Active registry card</p>
                  <h3 className="font-heading text-2xl font-black mt-1 print:text-black">{activeAgent.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 print:text-black">{activeAgent.department} · {activeAgent.accessLevel}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-emerald-300 print:text-black">{activeAgent.proofScore}</div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground print:text-black">Proof score</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed print:text-black">{activeAgent.descriptor}</p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3 text-xs">
                <InfoBlock title="Purpose" items={[activeAgent.currentFocus]} />
                <InfoBlock title="Supervisor" items={[activeAgent.supervisor]} />
                <InfoBlock title="What they have done" items={activeAgent.workHistory} icon={History} />
                <InfoBlock title="What they are doing" items={activeAgent.activeWork} icon={Activity} />
                <InfoBlock title="What they will do next" items={activeAgent.nextActions} className="sm:col-span-2" />
              </div>

              <div className="mt-5 grid md:grid-cols-2 gap-4 print:hidden">
                <ChannelPanel title="Upload / feed this agent" channels={activeAgent.intakeChannels} iconMap={intakeIcons} />
                <ChannelPanel title="Export / share work" channels={activeAgent.exportChannels} iconMap={exportIcons} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2 print:hidden">
                <button onClick={copyAgentBrief} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"><Copy className="w-3.5 h-3.5" /> Copy brief</button>
                <button onClick={printAgent} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black hover:bg-cyan-100"><Printer className="w-3.5 h-3.5" /> Print / Save PDF</button>
                <button onClick={copyAgentBrief} className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[.08] px-4 py-2 text-xs font-bold text-emerald-200"><Share2 className="w-3.5 h-3.5" /> Share packet</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 p-4 print:hidden">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-bold mb-3">Fast registry</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {visibleAgents.map(agent => (
                <button key={agent.agentId} onClick={() => { setSelectedId(agent.agentId); setLookup(agent.agentId); }} className={`shrink-0 rounded-full border px-3 py-2 text-xs font-black transition-colors ${agent.agentId === activeAgent.agentId ? 'border-cyan-300 bg-cyan-300 text-black' : 'border-white/10 text-slate-300 hover:bg-white/10'}`}>
                  {agent.agentId}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StandardTile({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[.035] p-3 print:bg-white print:border-black">
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground print:text-black">{label}</p>
      <p className="mt-1 font-black text-white print:text-black">{value}</p>
    </div>
  );
}

function InfoBlock({ title, items, icon: Icon = Bot, className = '' }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/[.035] p-3 print:bg-white print:border-black ${className}`}>
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-black flex items-center gap-1.5 mb-2 print:text-black"><Icon className="w-3.5 h-3.5" /> {title}</p>
      <div className="space-y-1.5">
        {items.map(item => <p key={item} className="text-xs text-slate-300 leading-relaxed print:text-black">{item}</p>)}
      </div>
    </div>
  );
}

function ChannelPanel({ title, channels, iconMap }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[.035] p-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-black mb-2">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {channels.map(channel => {
          const Icon = iconMap[channel] || UploadCloud;
          return (
            <button key={channel} type="button" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 text-[11px] font-bold text-slate-200 hover:border-cyan-300/40 hover:bg-cyan-300/10 transition-colors">
              <Icon className="w-3 h-3" /> {channel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
