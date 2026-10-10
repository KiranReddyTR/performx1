"use client";

import Link from "next/link";
import { ArrowRight, Settings, MessageCircle, Mail, Zap } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";


const automations = [
  { icon: Settings, title: "CRM Setup & Configuration", desc: "HubSpot, Pipedrive, GoHighLevel, or Zoho — configured around your sales process with custom pipelines and lead scoring.", color: "#7415FD" },
  { icon: Zap, title: "Lead Nurturing Workflows", desc: "Automated follow-up sequences triggered by lead behaviour, ensuring no lead falls through the cracks regardless of volume.", color: "#A838FD" },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "WhatsApp Business API setup with automated responses, broadcast campaigns, and CRM integration for the Indian and Middle East market.", color: "#3D5BFD" },
  { icon: Mail, title: "Email Sequences", desc: "Welcome series, nurture flows, re-engagement campaigns, and post-purchase retention — designed to increase LTV.", color: "#0A94FD" },
];

const leakStats = [
  { value: "50–80%", label: "Leads lost to slow follow-up" },
  { value: "5 min", label: "Optimal response time for new leads" },
  { value: "10x", label: "Drop in qualification rate after 24hrs" },
];

export default function CRMAutomationPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">Automation</Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Stop losing leads to <GradientText>slow follow-up.</GradientText>
            </h1>
            <p className="text-xl text-white/55 leading-relaxed max-w-3xl mb-10">
              Most businesses lose 50–80% of their leads to slow follow-up, inconsistent communication, and the absence of a structured nurturing process. We fix that with CRM setup and automation that works while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/free-growth-audit">Get Free Growth Audit <ArrowRight size={18} aria-hidden="true" /></Button>
              <Button variant="secondary" size="lg" href="/services/crm-automation">View Service Detail</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lead leak stats */}
      <section className="py-section bg-[#0A0A0C]" aria-labelledby="leak-heading">
        <div className="section-container">
          <ScrollReveal>
            <h2 id="leak-heading" className="text-display-sm font-bold text-white mb-10">
              Your leads are <GradientText>leaking.</GradientText>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6 mb-10" data-stagger="80">
            {leakStats.map((s) => (
              <div key={s.label} className="card-dark p-8 text-center">
                <div className="text-4xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-3">{s.value}</div>
                <p className="text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we automate */}
      <section className="py-section" aria-labelledby="automations-heading">
        <div className="section-container">
          <ScrollReveal>
            <h2 id="automations-heading" className="text-display-sm font-bold text-white mb-12">What we build.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6" data-stagger="80">
            {automations.map((a) => (
              <div key={a.title} className="card-dark p-8 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: `${a.color}15`, borderColor: `${a.color}40` }}>
                  <a.icon size={22} style={{ color: a.color }} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{a.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-section bg-[#0A0A0C]" aria-labelledby="crm-tools-heading">
        <div className="section-container">
          <ScrollReveal>
            <h2 id="crm-tools-heading" className="text-lg font-semibold text-white/40 uppercase tracking-widest mb-8">Tools we work with</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {["HubSpot", "Pipedrive", "GoHighLevel", "Zoho CRM", "Make (Integromat)", "Zapier", "Klaviyo", "ActiveCampaign", "Interakt", "Wati", "360dialog", "WhatsApp Business API"].map((t) => (
              <span key={t} className="text-sm text-white/60 px-4 py-2 bg-white/5 rounded-xl border border-white/10">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
