import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play, X, Sparkles, ArrowRight } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { base44 } from '@/api/base44Client';

const HERO_VIDEO_URL = 'https://media.base44.com/videos/public/6a1d1bb02ac6b7c2e1ae40f7/50aa5581e_MyMovie2.MOV';

const isInternalPreviewRuntime = () => {
  const hostname = window.location.hostname.toLowerCase();
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.includes('preview');
};

const trackHeroConversion = (assetId, action, audience) => {
  if (isInternalPreviewRuntime()) return;
  const params = new URLSearchParams(window.location.search);
  let sessionId = sessionStorage.getItem('proofberry_growth_session');
  if (!sessionId) {
    sessionId = (window.crypto?.randomUUID?.() || `pb-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    sessionStorage.setItem('proofberry_growth_session', sessionId);
  }

  base44.entities.GrowthEvent.create({
    event_type: 'conversion_asset_click',
    session_id: sessionId,
    path: window.location.pathname,
    audience,
    source: params.get('utm_source') || 'direct',
    campaign: params.get('utm_campaign') || 'organic',
    content_variant: params.get('utm_content') || 'default',
    occurred_at: new Date().toISOString(),
    environment: 'production',
    measurement_eligible: true,
    metadata: { asset_id: assetId, action, surface: 'hero' },
  }).catch(() => {});
};

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [videoOpen]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="hero-animated-gradient absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-primary/40 mb-8 shadow-lg shadow-primary/20">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span>
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">Early Access · Evidence-First Workforce OS</span>
              <Sparkles className="w-3.5 h-3.5 text-primary/70" />
            </div>
            <div className="flex justify-center mb-8"><Logo variant="hero" /></div>
            <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.88] tracking-tighter text-foreground uppercase mb-6">Stop Hiring{' '}<span className="gradient-text">Blind.</span></h1>
            <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">An autonomous <span className="gradient-text">Workforce OS</span> built around reviewable capability evidence and accountable human decisions.</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">From hiring consultation to AI interviews, skill demonstrations, reviewer evidence, onboarding, and ongoing employee support &mdash; ProofBerry is being built to connect more of the workforce lifecycle while keeping humans in control of consequential hiring and advancement decisions.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col items-center gap-4 mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button type="button" onClick={() => { trackHeroConversion('PB-TXT-115', 'scope_one_live_role_review', 'recruiter'); window.dispatchEvent(new CustomEvent('proofberry:set-audience', { detail: { audience: 'recruiter' } })); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); }} className="group relative inline-flex items-center justify-center rounded-full transition-transform hover:scale-105">
                <span className="absolute -inset-1 rounded-full bg-[linear-gradient(90deg,#8B2EFF,#B34DFF,#23B8FF)] blur-lg opacity-50 group-hover:opacity-80 transition-opacity animate-pulse" aria-hidden="true" />
                <span className="relative inline-flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#8B2EFF,#B34DFF,#23B8FF)] text-white px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-primary/40 ring-1 ring-white/10">Scope One Live Role Review<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
              </button>
              <button onClick={() => { trackHeroConversion('PB-FILM-HERO', 'watch_system_film', null); document.getElementById('autonomous-film')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center gap-2 glass text-foreground px-8 py-4 rounded-full font-bold text-base hover:border-primary/50 transition-all hover:scale-105"><Play className="w-5 h-5 text-accent" />Watch System Film</button>
            </div>
            <p className="max-w-2xl text-center text-xs sm:text-sm text-muted-foreground">Staffing teams: scope one live role, an accountable owner, a decision window, and the evidence rule for review before you share contact details. A request starts a scoping conversation; it is not pilot acceptance or a hiring outcome.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Review the evidence workflow &rarr;</a>
              <a href="/marketing/PB-DOC-032-one-role-evidence-review-checklist.html" onClick={() => trackHeroConversion('PB-TXT-116', 'open_one_role_evidence_checklist', 'recruiter')} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Run the 60-second evidence check &rarr;</a>
              <button type="button" onClick={() => { trackHeroConversion('PB-TXT-086-CANDIDATE', 'candidate_early_access', 'candidate'); window.dispatchEvent(new CustomEvent('proofberry:set-audience', { detail: { audience: 'candidate' } })); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">I&rsquo;m a Candidate &rarr;</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide"><span className="glass rounded-full px-4 py-2 text-foreground">Role-specific evidence</span><span className="glass rounded-full px-4 py-2 text-foreground">Human decision authority</span><span className="glass rounded-full px-4 py-2 text-foreground">Candidate + recruiter workflows</span></div>
            <div className="glass rounded-xl px-5 py-3 max-w-2xl text-center">
              <p className="text-sm text-foreground font-semibold mb-1">In a June 2026 Indeed/Harris Poll survey, <span className="text-primary">71% of large-company hiring managers</span> said rising application volume made qualified candidates harder to find, and 72% feared missing top talent in the volume.</p>
              <a href="https://www.indeed.com/news/releases/indeeds-ai-powered-sourcing-assistant-helps-employers-hire-over-30-faster" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#94a3b8', fontSize: '11px', fontStyle: 'italic' }}>Source: Indeed &amp; The Harris Poll, June 15, 2026</a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"><span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span><motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowDown className="w-4 h-4 text-primary" /></motion.div></motion.div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }} onClick={() => setVideoOpen(false)}>
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.2 }} className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
              <button onClick={() => setVideoOpen(false)} className="absolute -top-10 right-0 text-white hover:text-primary transition-colors flex items-center gap-1 text-sm font-semibold"><X className="w-5 h-5" /> Close</button>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}><video src={HERO_VIDEO_URL} controls autoPlay playsInline className="absolute inset-0 w-full h-full object-contain" /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
