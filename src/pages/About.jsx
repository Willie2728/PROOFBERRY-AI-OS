import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, Target, Hash, User, Eye, LayoutDashboard, Monitor } from 'lucide-react';
import AppNavbar from '@/components/shared/AppNavbar';
import AppFooter from '@/components/shared/AppFooter';
import BackToTop from '@/components/shared/BackToTop';
import PaaosVslPanel from '@/components/synthsapiens/PaaosVslPanel';
import { paaosMissionBlocks, paaosUseCases, paaosValuePillars } from '@/data/paaosMarketability';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppNavbar />
      <main>
        <section className="relative overflow-hidden px-6 pt-32 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(139,46,255,.20),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(51,224,161,.12),transparent_34%)]" />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[.92fr_1.08fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300 mb-5">
                <Building2 className="w-4 h-4" /> About PROOFBERRY
              </div>
              <h1 className="font-heading font-black text-5xl sm:text-7xl leading-[.92] tracking-tight">The workforce intelligence company for verified autonomous work.</h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
                PROOFBERRY is being built to make workplace capability visible, verifiable, deployable, and accountable. PAAOS extends the platform into a governed AI Autonomous Operating System where employers can assemble human talent, AI employees, and SYNTHSAPIENS into one trackable workforce layer.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="/synthsapiens" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold hover:bg-cyan-100 transition-colors">Explore PAAOS <ArrowRight className="w-4 h-4" /></a>
                <a href="/#waitlist" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">Request access</a>
              </div>
            </motion.div>
            <PaaosVslPanel scriptId="platform" compact />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-4">
          {paaosValuePillars.map((pillar, index) => (
            <motion.article key={pillar.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-2xl border border-white/10 bg-card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 mb-3">{pillar.metric}</p>
              <h2 className="font-heading font-black text-xl text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pillar.copy}</p>
            </motion.article>
          ))}
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">
                <Target className="w-4 h-4" /> Mission and value statements
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight">Clear enough to sell without a call.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">This page gives buyers the company story, why the platform matters, and why PROOFBERRY is positioned beyond ordinary agent tools.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {paaosMissionBlocks.map(block => (
                <article key={block.title} className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
                  <h3 className="font-heading font-bold text-lg text-white">{block.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{block.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300 mb-3">
              <CheckCircle2 className="w-4 h-4" /> Use cases
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight">The buyer sees their own business in the platform.</h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {paaosUseCases.map(useCase => (
              <article key={useCase.sector} className="rounded-2xl border border-white/10 bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 mb-2">{useCase.sector}</p>
                <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-bold text-white">Problem:</span> {useCase.pain}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed"><span className="font-bold text-white">PAAOS:</span> {useCase.deployment}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">
              <Hash className="w-4 h-4" /> The Wilkerson Collective Difference
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight">Not just AI agents. Identifiable digital workers with bodies, environments, and full visibility.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Most companies offering workplace AI employees hand you a name and a chat box. ProofBerry delivers a complete workforce operating system — and every agent carries a Wilkerson Collective Agent ID (WC01, WC02, WC03… WC100+) so you always know exactly who is doing what.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              { icon: Hash, title: 'Agent IDs (SKU-Style)', copy: 'Every agent — HR expert, AI Employee, or SynthSapian — carries a human-readable WC identifier. Ask "What is WC04 doing?" and get a precise answer: who they are, their purpose, what they have done, what they are doing, and what they will do next.' },
              { icon: User, title: 'Photorealistic Rigged Avatars', copy: 'We do not give you faceless bots. Every SynthSapian is a photorealistic, rigged digital human — a body with a face, a presence, and a profile. You see who you are working with.' },
              { icon: Monitor, title: 'The Workplace Environment', copy: 'We do not just deploy agents into the void. We build the workplace environment they operate in — the systems, the approval gates, the handoffs, the delivery channels, and the governance layer that makes their work real and accountable.' },
              { icon: Eye, title: 'Full Visibility', copy: 'No more trusting that something is running. You see what each agent is working on right now, what they have completed, and what is queued next — in real time, on screen.' },
              { icon: LayoutDashboard, title: 'Outcome Dashboards', copy: 'Panels, systems, and dashboards display the actual work: tasks completed, evidence collected, reports generated, compliance checks passed, and outcomes delivered. The work is visible, not invisible.' },
              { icon: Target, title: 'Interactive Interface', copy: 'Users do not just watch — they engage. Upload files, documents, URLs, and photos directly to any agent. Ask questions, give instructions, approve actions, and export or share everything an agent produces.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-card p-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </section>
      </main>
      <AppFooter />
      <BackToTop />
    </div>
  );
}