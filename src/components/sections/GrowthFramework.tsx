"use client";

import { useState } from "react";

const stages = [
  { n: "01", label: "Discovery",      color: "#7415FD", desc: "Deep-dive into your business model, unit economics, and current acquisition setup. We identify exactly what's working, what's broken, and where the biggest opportunities are.", deliverable: "Business & Growth Audit Report" },
  { n: "02", label: "Research",       color: "#8A24FD", desc: "Competitive analysis, audience research, customer interviews. We build a detailed picture of your ideal customer — their pain points, buying triggers, and competitive alternatives.", deliverable: "Audience & Competitor Intelligence" },
  { n: "03", label: "Offer",          color: "#A838FD", desc: "Craft the acquisition offer — the value proposition, pricing, or lead magnet that makes your ideal customer act. A strong offer is the foundation of every profitable campaign.", deliverable: "Offer Strategy & Messaging Framework" },
  { n: "04", label: "Creative",       color: "#7049FD", desc: "Develop performance creative briefs and produce the first batch — video, static, UGC — in variants for systematic testing. Creative is treated as a product, not an afterthought.", deliverable: "Creative Batch + Testing Plan" },
  { n: "05", label: "Campaign Setup", color: "#3D5BFD", desc: "Build the complete campaign infrastructure — ad accounts, tracking, campaign structure, landing pages — all verified before a single rupee of spend goes live.", deliverable: "Live Campaign Infrastructure" },
  { n: "06", label: "Testing",        color: "#2478FD", desc: "Controlled spend to identify winners. We measure against CAC and ROAS targets — not impressions. Clear pass/fail criteria before scaling anything.", deliverable: "Creative & Audience Test Results" },
  { n: "07", label: "Optimisation",   color: "#0A94FD", desc: "Scale winners, cut losers. Continuous CRO, bid strategy refinement, audience pruning, creative refresh. We improve the system before we scale the budget.", deliverable: "Optimisation Log & Performance Data" },
  { n: "08", label: "Scaling",        color: "#1EABFE", desc: "With a proven system, we scale budget intelligently — protecting CAC while increasing volume. New channels, lookalike audiences, and retention campaigns come in here.", deliverable: "Scaling Roadmap + Retention Layer" },
  { n: "09", label: "Reporting",      color: "#36C2FE", desc: "Transparent business-level reporting: CAC, ROAS, LTV, payback period, attribution. Monthly strategy sessions to align on next-quarter priorities.", deliverable: "Monthly Business Growth Report" },
];

export function GrowthFramework() {
  const [active, setActive] = useState(0);
  const s = stages[active];

  return (
    <section className="py-32 overflow-hidden" aria-labelledby="framework-heading">
      <div className="section-container">
        <div className="mb-16" data-gsap="fadeUp">
          <p className="tag mb-6">Our process</p>
          <h2 id="framework-heading" className="font-black text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.75rem,7vw,6.5rem)" }}>
            9 stages.<br />
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Zero guesswork.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-5">
          {/* Stage list */}
          <div className="space-y-1" role="list">
            {stages.map((st, i) => (
              <button key={st.label} role="listitem"
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200"
                style={{
                  background: active === i ? "rgba(255,255,255,0.05)" : "transparent",
                  border: active === i ? `1px solid ${st.color}25` : "1px solid transparent",
                }}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 transition-all duration-300"
                  style={{
                    background: active === i ? `${st.color}20` : `${st.color}08`,
                    border: `1px solid ${active === i ? st.color + "40" : st.color + "15"}`,
                    color: st.color,
                    transform: active === i ? "scale(1.1)" : "scale(1)",
                  }}>
                  {st.n}
                </div>
                <span className="text-sm font-bold transition-colors" style={{ color: active === i ? "#fff" : "rgba(255,255,255,0.35)" }}>
                  {st.label}
                </span>
                {active === i && <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: st.color }} aria-hidden="true" />}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div key={active} className="rounded-3xl p-10 flex flex-col justify-between min-h-[320px]"
            style={{ background: `linear-gradient(135deg,${s.color}07 0%,#0C0C10 60%)`, border: `1px solid ${s.color}18` }}>
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
                  style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}40`, color: s.color }}>
                  {s.n}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/20 mb-1">Stage {s.n}</p>
                  <h3 className="text-2xl font-black text-white">{s.label}</h3>
                </div>
              </div>
              <p className="text-base text-white/50 leading-relaxed mb-8">{s.desc}</p>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-1">Deliverable</p>
                <p className="text-sm font-bold text-white/80">{s.deliverable}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
