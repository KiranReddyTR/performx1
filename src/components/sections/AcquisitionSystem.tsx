"use client";

import { useState } from "react";

const nodes = [
  { id: "creative", label: "Creative",     color: "#7415FD", icon: "✦", title: "Performance Creative",    description: "Every campaign starts with creative engineered to convert — performance briefs, UGC, video, all tested systematically to find winning angles before scaling spend.", outputs: ["UGC & Video Creative","Static Ads","A/B Testing Framework","Creative Intelligence"] },
  { id: "paid",     label: "Paid Traffic", color: "#A838FD", icon: "◆", title: "Paid Media Execution",    description: "Multi-platform media buying on Meta, Google, TikTok, and LinkedIn — structured around customer acquisition cost targets, not vanity metrics.", outputs: ["Meta Ads","Google Ads","TikTok Ads","LinkedIn Ads","Budget Allocation"] },
  { id: "landing",  label: "Landing Page", color: "#3D5BFD", icon: "▲", title: "Conversion Infrastructure", description: "Purpose-built landing pages for every campaign — matched to the ad creative and audience, not your homepage.", outputs: ["Dedicated Landing Pages","Offer Pages","Lead Capture","Mobile Optimisation"] },
  { id: "conv",     label: "Conversion",   color: "#2C78FD", icon: "●", title: "CRO & Optimisation",      description: "Continuous improvement through heatmap analysis, A/B testing, copy optimisation. Every % improvement multiplies ROAS.", outputs: ["A/B Testing","Heatmap Analysis","Copy Optimisation","Funnel Audits"] },
  { id: "track",    label: "Tracking",     color: "#0A94FD", icon: "◉", title: "Attribution & Analytics", description: "First-party tracking so you know exactly what's working — server-side tagging, GA4, Meta CAPI, custom dashboards.", outputs: ["Server-Side Tracking","GA4 Setup","Meta CAPI","Custom Dashboards"] },
  { id: "crm",      label: "CRM",          color: "#1EABFE", icon: "⬡", title: "CRM & Automation",        description: "Automated follow-up sequences and lead nurturing so no lead falls through the cracks — at any scale.", outputs: ["CRM Configuration","Lead Nurturing","WhatsApp Automation","Email Sequences"] },
  { id: "rev",      label: "Revenue",      color: "#36C2FE", icon: "★", title: "Measurable Revenue",      description: "Every component connects to revenue outcomes. We report on CAC, ROAS, LTV, and payback period — not clicks.", outputs: ["ROAS & CAC Reporting","LTV Analysis","Payback Period","Monthly Reviews"] },
];

export function AcquisitionSystem() {
  const [active, setActive] = useState(0);
  const node = nodes[active];

  return (
    <section className="py-32 overflow-hidden" style={{ background: "#08080C" }} aria-labelledby="system-heading">
      <div className="section-container">

        <div className="mb-16" data-gsap="fadeUp">
          <p className="tag mb-6">The PerformX system</p>
          <h2 id="system-heading" className="font-black text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.75rem,7vw,6.5rem)" }}>
            A system,<br />
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              not a campaign.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Left — node chain */}
          <div>
            {/* Desktop horizontal */}
            <div className="hidden md:flex items-start mb-4" role="list" aria-label="Acquisition system stages">
              {nodes.map((n, i) => (
                <div key={n.id} className="flex items-center flex-1" role="listitem">
                  <button
                    className="flex flex-col items-center gap-2.5 w-full transition-all duration-300 focus-visible:outline-none group"
                    style={{ opacity: active === i ? 1 : 0.28 }}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    aria-label={n.label}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                      style={{
                        background: active === i ? `${n.color}20` : `${n.color}0A`,
                        border: `1.5px solid ${active === i ? n.color + "60" : n.color + "20"}`,
                        boxShadow: active === i ? `0 0 30px ${n.color}30` : "none",
                      }}>
                      <span style={{ color: n.color, fontSize: 18 }} aria-hidden="true">{n.icon}</span>
                    </div>
                    <span className="text-[11px] font-bold text-center" style={{ color: active === i ? "#fff" : "rgba(255,255,255,0.35)" }}>{n.label}</span>
                  </button>
                  {i < nodes.length - 1 && (
                    <div className="flex items-center mb-7 mx-0.5 flex-shrink-0" aria-hidden="true">
                      <div className="h-px w-5" style={{ background: `linear-gradient(90deg,${n.color}25,${nodes[i+1].color}15)` }} />
                      <svg width="4" height="6" viewBox="0 0 4 6" fill="none">
                        <path d="M1 1l2 2-2 2" stroke={n.color} strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="hidden md:block h-0.5 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${((active + 1) / nodes.length) * 100}%`, background: "linear-gradient(90deg,#7415FD,#36C2FE)" }} />
            </div>
            <p className="hidden md:block text-center text-[10px] text-white/15 mb-10">{active + 1} / {nodes.length} — click to explore</p>

            {/* Mobile list */}
            <div className="md:hidden space-y-2 mb-6">
              {nodes.map((n, i) => (
                <button key={n.id}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200"
                  style={{ background: active === i ? "rgba(255,255,255,0.05)" : "transparent", border: active === i ? "1px solid rgba(255,255,255,0.12)" : "1px solid transparent" }}
                  onClick={() => setActive(i)} aria-pressed={active === i}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${n.color}15`, border: `1.5px solid ${n.color}35` }}>
                    <span style={{ color: n.color }} aria-hidden="true">{n.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{n.label}</p>
                    <p className="text-xs text-white/35">{n.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right — detail */}
          <div key={active} className="rounded-3xl p-8 lg:sticky lg:top-32"
            style={{ background: `linear-gradient(135deg,${node.color}08 0%,#0C0C10 70%)`, border: `1px solid ${node.color}20` }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
              style={{ background: `${node.color}18`, border: `1.5px solid ${node.color}45` }}>
              <span style={{ color: node.color }} aria-hidden="true">{node.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{node.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-7">{node.description}</p>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-4">What we deliver</p>
              <ul className="space-y-2.5">
                {node.outputs.map(o => (
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
