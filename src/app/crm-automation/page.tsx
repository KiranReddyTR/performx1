"use client";

import Link from "next/link";
import { ArrowRight, Settings, MessageCircle, Mail, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

const color = "#36C2FE";

const automations = [
  { icon: Settings,       color: "#7415FD", title: "CRM Setup & Configuration",    desc: "HubSpot, Pipedrive, GoHighLevel, or Zoho — configured around your sales process with custom pipelines and lead scoring." },
  { icon: Zap,            color: "#A838FD", title: "Lead Nurturing Workflows",      desc: "Automated follow-up sequences triggered by lead behaviour, ensuring no lead falls through the cracks regardless of volume." },
  { icon: MessageCircle,  color: "#3D5BFD", title: "WhatsApp Automation",           desc: "WhatsApp Business API setup with automated responses, broadcast campaigns, and CRM integration for India and UAE markets." },
  { icon: Mail,           color: "#0A94FD", title: "Email Sequences",               desc: "Welcome series, nurture flows, re-engagement campaigns, and post-purchase retention — designed to increase LTV." },
];

const leakStats = [
  { v: "50–80%", l: "Leads lost to slow follow-up" },
  { v: "5 min",  l: "Optimal response time for new leads" },
  { v: "10x",    l: "Drop in qualification rate after 24hrs" },
];

const tools = ["HubSpot","Pipedrive","GoHighLevel","Zoho CRM","Make (Integromat)","Zapier","Klaviyo","ActiveCampaign","Interakt","Wati","360dialog","WhatsApp Business API"];

export default function CRMAutomationPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(54,194,254,0.12) 0%, transparent 70%)` }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Automation</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Stop losing leads to{" "}
              <span style={{ background: `linear-gradient(90deg,#0A94FD,#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                slow follow-up.
              </span>
            </h1>
            <p className="text-xl text-white/40 leading-relaxed mb-10">Most businesses lose 50–80% of their leads to slow follow-up, inconsistent communication, and no structured nurturing process. We build the automation that fixes this at every scale.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-growth-audit" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm" style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
                Get Free Growth Audit <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services/crm-automation" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
                View Service Detail
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-8 text-center" data-stagger="80">
            {leakStats.map(s => (
              <div key={s.l}>
                <div className="text-4xl font-bold mb-2" style={{ background: "linear-gradient(90deg,#0A94FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.v}</div>
                <p className="text-sm text-white/35">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal><h2 className="text-2xl font-bold text-white mb-12 tracking-tight">What we build.</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5" data-stagger="70">
            {automations.map(a => (
              <div key={a.title} className="p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: `${a.color}12`, border: `1.5px solid ${a.color}28` }}>
                  <a.icon size={22} style={{ color: a.color }} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{a.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16" style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-container">
          <ScrollReveal><p className="text-xs font-bold uppercase tracking-[0.15em] text-white/25 mb-8">Tools we work with</p></ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {tools.map(t => (
              <span key={t} className="text-sm text-white/50 px-4 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
