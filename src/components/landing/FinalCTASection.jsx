import React from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const isInternalPreviewRuntime = () => {
  const hostname = window.location.hostname.toLowerCase();
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.includes('preview');
};

const trackFinalConversion = (action, audience) => {
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
    metadata: { asset_id: 'PB-TXT-111', action, surface: 'final_cta' },
  }).catch(() => {});
};

const chooseAudienceAndScroll = (audience, action) => {
  trackFinalConversion(action, audience);
  window.dispatchEvent(new CustomEvent('proofberry:set-audience', { detail: { audience } }));
  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
};

export default function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="hero-animated-gradient absolute inset-0 pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/6 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-foreground mb-4">You&rsquo;ve Seen the System.<br /><span className="text-primary">Now Scope One Live Role Review.</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">Staffing teams can define the live requisition, accountable owner, decision window, and minimum evidence rule before sharing contact details. The next step is a scoping review—not an implied pilot.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button type="button" onClick={() => chooseAudienceAndScroll('recruiter', 'scope_one_live_role_review')} className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-primary/20">Scope One Live Role Review</button>
            <button type="button" onClick={() => chooseAudienceAndScroll('candidate', 'candidate_early_access')} className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-accent text-accent px-8 py-4 rounded-full font-bold text-base hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105">I&rsquo;m a Candidate — Join Early Access</button>
          </div>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">A design-partner request is not pilot acceptance, a hiring recommendation, or a promised outcome. No purchase is required to request early access.</p>
        </motion.div>
      </div>
    </section>
  );
}
