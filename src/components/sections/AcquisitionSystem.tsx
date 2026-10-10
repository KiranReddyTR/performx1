"use client";

import { useState } from "react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

const systemNodes = [
  {
    id: "creative", label: "Creative", color: "#7415FD", icon: "✦",
    title: "Performance Creative",
    description: "Every campaign starts with creative engineered to convert. We develop performance briefs, UGC content, static ads, and video creative — all tested systematically to find winning angles.",
    outputs: ["UGC & Video Creative", "Static Performance Ads", "A/B Testing Framework", "Creative Intelligence Reports"],
  },
  {
    id: "paid-traffic", label: "Paid Traffic", color: "#A838FD", icon: "◆",
    title: "Paid Media Execution",
    description: "Multi-platform media buying on Meta, Google, TikTok, and LinkedIn. Every campaign is structured around customer acquisition cost targets, not vanity metrics like impressions or CTR.",
    outputs: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Cross-platform Budget Allocation"],
  },
  {
    id: "landing-page", label: "Landing Page", color: "#3D5BFD", icon: "▲",
    title: "Conversion Infrastructure",
    description: "Dedicated conversion pages for every campaign. Not your homepage — purpose-built landing pages with clear messaging, social proof, and a single call to action that matches your ad.",
    outputs: ["Dedicated Landing Pages", "Offer & Lead Gen Pages", "Mobile-optimised Layouts", "Page Speed Optimisation"],
  },
  {
    id: "conversion", label: "Conversion", color: "#2D6AFD", icon: "●",
    title: "CRO & Optimisation",
    description: "We continuously improve conversion rates through heatmap analysis, A/B testing, copy optimisation, and UX refinement. Every percentage point of improvement multiplies ROAS.",
    outputs: ["A/B & Multivariate Tests", "Heatmap & Session Analysis", "Copy & CTA Optimisation", "Funnel Drop-off Audits"],
  },
  {
    id: "tracking", label: "Tracking", color: "#0A94FD", icon: "◉",
    title: "Attribution & Analytics",
    description: "Accurate, first-party tracking so you know exactly what's working. Server-side tracking, GA4, Meta CAPI, and custom dashboards that give you the full picture across every channel.",
    outputs: ["Server-Side Tracking", "GA4 Configuration", "Meta Conversion API", "Custom Looker Studio Dashboards"],
  },
  {
    id: "crm", label: "CRM", color: "#1EABFE", icon: "⬡",
    title: "CRM & Automation",
    description: "Leads don't convert themselves. We build automated follow-up sequences, lead scoring, and nurturing workflows — email, WhatsApp, and in-platform — that work while you sleep.",
    outputs: ["CRM Setup & Configuration", "Lead Nurturing Flows", "WhatsApp Automation", "Email Sequences"],
  },
  {
    id: "revenue", label: "Revenue", color: "#36C2FE", icon: "★",
    title: "Measurable Revenue",
    description: "Every component connects to revenue outcomes. We report on CAC, ROAS, LTV, and payback period — not impressions or clicks. Monthly strategy sessions keep us aligned on growth.",
    outputs: ["Revenue & ROAS Reporting", "LTV & Cohort Analysis", "CAC Tracking", "Monthly Strategy Reviews"],
  },
];

export function AcquisitionSystem() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-section bg-[#0A0A0C]" aria-labelledby="system-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-azure uppercase tracking-widest mb-4">The PerformX system</p>
          <h2 id="system-heading" className="text-display-md font-bold text-white mb-6">
            A complete acquisition system, <GradientText>not isolated campaigns.</GradientText>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Every component is connected. Each stage feeds the next. The result is a compounding
            system where improvements to any stage improve overall performance.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          {/* Left: node selector */}
          <div>
            {/* Desktop horizontal flow */}
            <div className="hidden md:flex items-start gap-0 mb-8" role="list" aria-label="Acquisition system stages">
              {systemNodes.map((node, i) => (
                <div key={node.id} className="flex items-center flex-1" role="listitem">
                  <button
                    className={cn("flex flex-col items-center gap-3 w-full group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet rounded-xl p-1 transition-all duration-300",
                      active === i ? "opacity-100" : "opacity-40 hover:opacity-70")}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    aria-label={`${node.label} — click to explore`}
                  >
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-lg transition-all duration-300",
                      active === i ? "scale-110" : "hover:scale-105")}
                      style={{
                        background: `${node.color}18`,
                        border: `1.5px solid ${node.color}${active === i ? "80" : "40"}`,
                        boxShadow: active === i ? `0 0 28px ${node.color}35` : "none",
                      }}
                    >
                      <span style={{ color: node.color }} aria-hidden="true">{node.icon}</span>
                    </div>
                    <span className={cn("text-xs font-medium text-center leading-tight transition-colors",
                      active === i ? "text-white" : "text-white/50")}>{node.label}</span>
                  </button>

                  {i < systemNodes.length - 1 && (
                    <div className="flex items-center flex-shrink-0 mb-6" aria-hidden="true">
                      <div className="w-8 h-px" style={{ background: `linear-gradient(90deg, ${node.color}30, ${systemNodes[i+1].color}20)` }} />
                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                        <path d="M1 1l4 3-4 3" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="hidden md:block relative h-0.5 rounded-full bg-white/[0.04] overflow-hidden mb-3">
              <div className="absolute left-0 top-0 h-full rounded-full bg-brand-gradient transition-all duration-500"
                style={{ width: `${((active + 1) / systemNodes.length) * 100}%` }} />
            </div>
            <p className="hidden md:block text-xs text-white/20 text-center mb-8">
              Click each stage to explore — {active + 1} of {systemNodes.length}
            </p>

            {/* Mobile: vertical list */}
            <div className="md:hidden space-y-2 mb-6">
              {systemNodes.map((node, i) => (
                <button key={node.id}
                  className={cn("w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200",
                    active === i ? "border-white/20 bg-white/5" : "border-white/5 hover:border-white/10")}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${node.color}18`, border: `1.5px solid ${node.color}40` }}>
                    <span style={{ color: node.color }} className="text-base" aria-hidden="true">{node.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{node.label}</p>
                    <p className="text-xs text-white/40">{node.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: detail card */}
          <div key={active} className="card-dark p-8 lg:sticky lg:top-32 border-gradient">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
              style={{ background: `${systemNodes[active].color}18`, border: `1.5px solid ${systemNodes[active].color}50` }}>
              <span style={{ color: systemNodes[active].color }} aria-hidden="true">{systemNodes[active].icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{systemNodes[active].title}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">{systemNodes[active].description}</p>
            <div>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">What we deliver</p>
              <ul className="space-y-2.5">
                {systemNodes[active].outputs.map((output) => (
                  <li key={output} className="flex items-center gap-2.5 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: systemNodes[active].color }} />
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
