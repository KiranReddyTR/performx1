"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

const nodes = [
  {
    id: "creative", label: "Creative", color: "#7415FD", icon: "✦",
    title: "Performance Creative",
    description: "Every campaign starts with creative engineered to convert. We develop performance briefs, produce UGC and video content, and test systematically to find winning angles before scaling spend.",
    outputs: ["UGC & Video Creative", "Static Performance Ads", "A/B Creative Testing", "Creative Intelligence"],
  },
  {
    id: "paid", label: "Paid Traffic", color: "#A838FD", icon: "◆",
    title: "Paid Media Execution",
    description: "Multi-platform media buying on Meta, Google, TikTok, and LinkedIn — structured around customer acquisition cost targets, not vanity metrics like impressions or CTR.",
    outputs: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Budget Allocation"],
  },
  {
    id: "landing", label: "Landing Page", color: "#3D5BFD", icon: "▲",
    title: "Conversion Infrastructure",
    description: "Purpose-built landing pages for every campaign — not your homepage. Clear messaging, social proof, and a single call to action matched to the ad creative and audience.",
    outputs: ["Dedicated Landing Pages", "Offer Pages", "Lead Capture Forms", "Mobile Optimisation"],
  },
  {
    id: "conv", label: "Conversion", color: "#2C78FD", icon: "●",
    title: "CRO & Optimisation",
    description: "Continuous improvement through heatmap analysis, A/B testing, copy optimisation, and UX refinement. Every percentage point of improvement multiplies ROAS.",
    outputs: ["A/B Testing", "Heatmap Analysis", "Copy Optimisation", "Funnel Audits"],
  },
  {
    id: "track", label: "Tracking", color: "#0A94FD", icon: "◉",
    title: "Attribution & Analytics",
    description: "First-party tracking so you know exactly what's working. Server-side tagging, GA4, Meta CAPI, and custom dashboards that give you the full picture — not a partial one.",
    outputs: ["Server-Side Tracking", "GA4 Setup", "Meta Conversion API", "Custom Dashboards"],
  },
  {
    id: "crm", label: "CRM", color: "#1EABFE", icon: "⬡",
    title: "CRM & Automation",
    description: "Automated follow-up sequences, lead scoring, and nurturing workflows so no lead falls through the cracks — email, WhatsApp, and in-platform retargeting.",
    outputs: ["CRM Configuration", "Lead Nurturing Flows", "WhatsApp Automation", "Email Sequences"],
  },
  {
    id: "rev", label: "Revenue", color: "#36C2FE", icon: "★",
    title: "Measurable Revenue",
    description: "Every component connects to revenue outcomes. We report on CAC, ROAS, LTV, and payback period — not clicks. Monthly strategy sessions keep the system aligned with your growth goals.",
    outputs: ["ROAS & CAC Reporting", "LTV & Cohort Analysis", "Payback Period", "Monthly Strategy Reviews"],
  },
];

export function AcquisitionSystem() {
  const [active, setActive] = useState(0);
  const node = nodes[active];

  return (
    <section className="py-32" style={{ background: "#08080C" }} aria-labelledby="system-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-20">
          <p className="tag mb-6">The PerformX system</p>
          <h2 id="system-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            A complete acquisition system,{" "}
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              not isolated campaigns.
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            Every component connects. Each stage feeds the next. Improvements to any single stage improve overall system performance.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* Node selector */}
          <div>
            {/* Desktop horizontal */}
            <div className="hidden md:flex items-start justify-between mb-3" role="list" aria-label="Acquisition system stages">
              {nodes.map((n, i) => (
                <div key={n.id} className="flex items-center flex-1" role="listitem">
                  <button
                    className={cn("flex flex-col items-center gap-3 w-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet rounded-xl p-1",
                      active === i ? "opacity-100" : "opacity-30 hover:opacity-60")}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    aria-label={`${n.label} stage`}
                  >
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400",
                      active === i && "scale-110")}
                      style={{
                        background: active === i ? `${n.color}20` : `${n.color}0D`,
                        border: `1.5px solid ${active === i ? n.color + "60" : n.color + "25"}`,
                        boxShadow: active === i ? `0 0 32px ${n.color}30` : "none",
                      }}>
                      <span style={{ color: n.color, fontSize: 18 }} aria-hidden="true">{n.icon}</span>
                    </div>
                    <span className={cn("text-[11px] font-semibold text-center leading-tight",
                      active === i ? "text-white" : "text-white/40")}>{n.label}</span>
                  </button>
                  {i < nodes.length - 1 && (
                    <div className="flex items-center mb-7 flex-shrink-0" aria-hidden="true">
                      <div className="w-6 h-px" style={{ background: `linear-gradient(90deg,${n.color}25,${nodes[i+1].color}20)` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="hidden md:block h-px rounded-full mb-3" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${((active + 1) / nodes.length) * 100}%`, background: "linear-gradient(90deg,#7415FD,#36C2FE)" }} />
            </div>
            <p className="hidden md:block text-center text-[11px] text-white/20 mb-10">
              {active + 1} / {nodes.length} — click each stage to explore
            </p>

            {/* Mobile list */}
            <div className="md:hidden space-y-2 mb-8">
              {nodes.map((n, i) => (
                <button key={n.id}
                  className={cn("w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200",
                    active === i ? "border-white/15 bg-white/5" : "border-white/5 hover:border-white/10")}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${n.color}15`, border: `1.5px solid ${n.color}35` }}>
                    <span style={{ color: n.color }} aria-hidden="true">{n.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{n.label}</p>
                    <p className="text-xs text-white/35">{n.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail card */}
          <div key={active} className="rounded-2xl p-8 lg:sticky lg:top-32"
            style={{
              background: `linear-gradient(135deg, ${node.color}08 0%, rgba(8,8,12,0.8) 60%)`,
              border: `1px solid ${node.color}25`,
              backdropFilter: "blur(12px)",
            }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
              style={{ background: `${node.color}18`, border: `1.5px solid ${node.color}45` }}>
              <span style={{ color: node.color }} aria-hidden="true">{node.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{node.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-7">{node.description}</p>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-4">What we deliver</p>
              <ul className="space-y-2.5">
                {node.outputs.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: node.color }} />
                    {o}
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
