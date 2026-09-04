import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Bot, BriefcaseBusiness, Check, Download, Filter, Globe2, Layers3,
  Printer, Search, ShieldCheck, Sparkles, UsersRound, Wand2, X
} from 'lucide-react';
import AppNavbar from '@/components/shared/AppNavbar';
import AppFooter from '@/components/shared/AppFooter';
import BackToTop from '@/components/shared/BackToTop';
import AgentIdBadge from '@/components/shared/AgentIdBadge';
import PaaosAutonomyConsole from '@/components/synthsapiens/PaaosAutonomyConsole';
import PaaosRoiCalculator from '@/components/synthsapiens/PaaosRoiCalculator';
import PaaosTrustSections from '@/components/synthsapiens/PaaosTrustSections';
import PaaosVslPanel from '@/components/synthsapiens/PaaosVslPanel';
import SynthSapiensAdSeries from '@/components/synthsapiens/SynthSapiensAdSeries';
import {
  competitorBaseline,
  packageTemplates,
  synthsapiensDepartments,
  synthsapiensRoster
} from '@/data/synthsapiensWorkforce';
import { paaosOutcomePacks } from '@/data/paaosMarketability';

const operatingCards = [
  ['Verify', 'Proof signals, role requirements, skills evidence, rubric scoring, and performance history are captured before work scales.'],
  ['Provide', 'Employers select identifiable, role-specific SYNTHSAPIENS and human talent options by outcome, department, or capability.'],
  ['Operate', 'Volare routes work across systems, sub-agents, approvals, delivery channels, and accountable reporting.'],
  ['Defend', 'Governance, audit trails, security interfaces, and hard-copy outputs make the platform enterprise-legible.']
];

export default function SynthSapiensCatalog() {
  const [department, setDepartment] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState(() => new Set(synthsapiensRoster.slice(0, 7).map(role => role.id)));

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return synthsapiensRoster.filter(role => {
      const departmentMatch = department === 'All' || role.department === department;
      const searchable = [role.agentId, role.agent_id, role.name, role.title, role.department, role.descriptor, role.capabilities.join(' '), role.subAgents.join(' '), role.packageFit, role.coverage, role.supervisor, role.accessLevel].join(' ').toLowerCase();
      return departmentMatch && (!search || searchable.includes(search));
    });
  }, [department, query]);

  const selected = useMemo(() => synthsapiensRoster.filter(role => selectedIds.has(role.id)), [selectedIds]);
  const selectedDepartments = useMemo(() => new Set(selected.map(role => role.department)).size, [selected]);

  const toggleRole = (roleId) => {
    setSelectedIds(current => {
      const next = new Set(current);
      if (next.has(roleId)) next.delete(roleId);
      else next.add(roleId);
      return next;
    });
  };

  const applyTitles = (titles) => {
    const next = new Set(
      synthsapiensRoster
        .filter(role => titles.includes(role.title))
        .map(role => role.id)
    );
    setSelectedIds(next);
    setDepartment('All');
  };

  const printPackage = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const subAgentCount = synthsapiensRoster.reduce((total, role) => total + role.subAgents.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppNavbar />

      <main>
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,46,255,.20),transparent_34%),radial-gradient(circle_at_82%_74%,rgba(35,184,255,.14),transparent_34%)]" />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_.95fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300 mb-6">
                <Sparkles className="w-4 h-4" /> PAAOS pronounced Pay Us · by PROOFBERRY
              </div>
              <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl leading-[.88] tracking-tight">
                The premier verified autonomous workforce platform.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                PROOFBERRY PAAOS helps employers verify, provide, operate, track, and govern the most capable role-specific workforce: human talent, AI employees, and identifiable SYNTHSAPIENS organized through proof, accountability, and clear controls.
              </p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                <Metric value={synthsapiensRoster.length} label="SYNTHSAPIENS" />
                <Metric value={synthsapiensDepartments.length} label="Departments" />
                <Metric value={subAgentCount} label="Sub-agents" />
                <Metric value="360°" label="Visibility" />
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#packs" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold hover:bg-cyan-100 transition-colors">
                  Choose a workforce pack <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#catalog" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                  Browse SYNTHSAPIENS
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
              <PaaosVslPanel scriptId="platform" compact />
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="grid md:grid-cols-4 gap-4">
            {operatingCards.map(([title, copy], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  {[Layers3, Bot, ShieldCheck, BriefcaseBusiness][index] && React.createElement([Layers3, Bot, ShieldCheck, BriefcaseBusiness][index], { className: 'w-5 h-5 text-cyan-300' })}
                </div>
                <h3 className="font-heading font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-16">
          <PaaosTrustSections onApplyPack={(pack) => applyTitles(pack.roles)} />
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-16">
          <PaaosRoiCalculator />
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-16">
          <PaaosAutonomyConsole />
        </section>

        <section id="catalog" className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">
                <UsersRound className="w-4 h-4" /> Complete SYNTHSAPIENS library
              </div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl tracking-tight">Select identifiable role-specific digital workers.</h2>
              <p className="mt-3 text-muted-foreground max-w-3xl">
                Every SYNTHSAPIEN includes an identifier, photorealistic profile, role descriptor, capabilities, specialties, operating mode, and supporting sub-agents so employers understand what each role does and why it matters.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[.05] p-4 min-w-[280px] print:border-black print:bg-white">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300 mb-2 print:text-black">Selected package</p>
              <div className="text-3xl font-black text-white print:text-black">{selected.length}</div>
              <p className="text-sm text-muted-foreground print:text-black">roles across {selectedDepartments || 0} departments</p>
              <div className="mt-3 flex gap-2">
                <button onClick={printPackage} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-black hover:bg-cyan-100 transition-colors"><Printer className="w-3.5 h-3.5" /> Print</button>
                <button onClick={printPackage} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/10 transition-colors print:text-black print:border-black"><Download className="w-3.5 h-3.5" /> PDF</button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr] gap-6">
            <aside className="space-y-5 lg:sticky lg:top-24 h-fit print:hidden">
              <div className="rounded-2xl border border-white/10 bg-card p-4">
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2 mb-3"><Search className="w-4 h-4" /> Search</label>
                <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search role, skill, sub-agent..." className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-card p-4">
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2 mb-3"><Filter className="w-4 h-4" /> Departments</label>
                <div className="space-y-2 max-h-[430px] overflow-auto pr-1">
                  {['All', ...synthsapiensDepartments].map(dep => (
                    <button key={dep} onClick={() => setDepartment(dep)} className={`w-full text-left rounded-xl px-3 py-2 text-sm transition-colors ${department === dep ? 'bg-primary text-primary-foreground font-bold' : 'hover:bg-muted text-muted-foreground hover:text-foreground'}`}>{dep}</button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-card p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">Starter packs</p>
                <div className="space-y-2">
                  {[...packageTemplates, ...paaosOutcomePacks].map(template => (
                    <button key={template.id} onClick={() => applyTitles(template.roles)} className="w-full text-left rounded-xl border border-border bg-muted/40 p-3 hover:border-primary/50 transition-colors">
                      <span className="block text-sm font-bold text-foreground">{template.name}</span>
                      <span className="block text-xs text-muted-foreground mt-1">{template.roles.length} SYNTHSAPIENS</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              {selected.length > 0 && (
                <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[.05] p-5 print:border-black print:bg-white">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-lg print:text-black">Current workforce package</h3>
                      <p className="text-sm text-muted-foreground print:text-black">Selected roles become the employer's proposed PAAOS package with proof, oversight, reporting, and delivery controls.</p>
                    </div>
                    <button onClick={() => setSelectedIds(new Set())} className="text-xs font-bold text-muted-foreground hover:text-white flex items-center gap-1 print:hidden"><X className="w-3 h-3" /> Clear</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.slice(0, 22).map(role => <span key={role.id} className="rounded-full bg-black/30 border border-white/10 px-3 py-1.5 text-xs text-white print:bg-white print:text-black print:border-black">{role.title}</span>)}
                    {selected.length > 22 && <span className="rounded-full bg-black/30 border border-white/10 px-3 py-1.5 text-xs text-muted-foreground print:bg-white print:text-black print:border-black">+{selected.length - 22} more</span>}
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(role => (
                  <RoleCard key={role.id} role={role} selected={selectedIds.has(role.id)} onToggle={() => toggleRole(role.id)} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <SynthSapiensAdSeries />
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[.035] p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300 mb-3">
                  <Globe2 className="w-4 h-4" /> Competitor watch active
                </div>
                <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight">Daily market intelligence keeps the moat sharp.</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The watch tracks AI employee platforms, enterprise agent builders, digital coworkers, governance layers, and digital human adoption so PROOFBERRY can keep strengthening its positioning.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {competitorBaseline.map(name => (
                  <div key={name} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200">{name}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
      <BackToTop />
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4 print:border-black print:bg-white">
      <div className="text-3xl font-black text-white print:text-black">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide print:text-black">{label}</div>
    </div>
  );
}

function RoleCard({ role, selected, onToggle }) {
  return (
    <motion.article layout className="group overflow-hidden rounded-2xl border border-white/10 bg-card hover:border-cyan-300/40 transition-colors print:border-black print:bg-white">
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        <img src={role.image} alt={`Photorealistic ${role.title} SYNTHSAPIEN`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute left-4 right-4 bottom-4">
          <div className="flex items-center gap-2 mb-2">
            <AgentIdBadge agentId={role.agentId} size="sm" />
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">{role.department}</p>
          </div>
          <h3 className="font-heading font-black text-xl text-white leading-tight">{role.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-sm font-bold text-foreground print:text-black">{role.agentId} · {role.name}</p>
            <p className="text-xs text-muted-foreground print:text-black">{role.operatingMode}</p>
          </div>
          <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase text-primary print:border-black print:text-black">{role.status}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed min-h-[78px] print:text-black">{role.descriptor}</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-lg border border-white/10 bg-black/20 p-2 text-muted-foreground print:border-black print:bg-white print:text-black">Proof: {role.proofScore}</div>
          <div className="rounded-lg border border-white/10 bg-black/20 p-2 text-muted-foreground print:border-black print:bg-white print:text-black">Access: {role.accessLevel}</div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {role.capabilities.map(capability => <span key={capability} className="rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground print:border print:border-black print:bg-white print:text-black">{capability}</span>)}
        </div>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[.035] p-3 print:border-black print:bg-white">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 print:text-black">Supporting specialist sub-agents</p>
          <div className="space-y-1.5">
            {role.subAgents.map(agent => <div key={agent} className="flex items-center gap-2 text-xs text-slate-300 print:text-black"><Wand2 className="w-3 h-3 text-emerald-300 print:text-black" /> {agent}</div>)}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-lg border border-white/10 bg-black/20 p-2 text-muted-foreground print:border-black print:bg-white print:text-black">Fit: {role.packageFit}</div>
          <div className="rounded-lg border border-white/10 bg-black/20 p-2 text-muted-foreground print:border-black print:bg-white print:text-black">{role.coverage}</div>
          <div className="rounded-lg border border-white/10 bg-black/20 p-2 text-muted-foreground print:border-black print:bg-white print:text-black">Supervisor: {role.supervisor}</div>
          <div className="rounded-lg border border-white/10 bg-black/20 p-2 text-muted-foreground print:border-black print:bg-white print:text-black">Exports: {role.exportChannels.length} channels</div>
        </div>
        <button onClick={onToggle} className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors print:hidden ${selected ? 'bg-emerald-300 text-black hover:bg-emerald-200' : 'bg-white text-black hover:bg-cyan-100'}`}>
          {selected ? <Check className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
          {selected ? 'Selected for package' : 'Add to workforce package'}
        </button>
      </div>
    </motion.article>
  );
}