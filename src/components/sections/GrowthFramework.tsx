"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

const stages = [
  { n: "01", label: "Discovery",      color: "#7415FD", desc: "Deep-dive into your business model, unit economics, current acquisition channels, and growth goals. We identify what's working, what's broken, and where the biggest opportunities are.", deliverable: "Business & Growth Audit Report" },
  { n: "02", label: "Research",       color: "#8A24FD", desc: "Competitive analysis, audience research, and customer interviews. We build a detailed picture of your ideal customer, their pain points, buying triggers, and the competitive landscape.", deliverable: "Audience & Competitor Intelligence" },
  { n: "03", label: "Offer",          color: "#A838FD", desc: "Craft the acquisition offer — the value proposition, pricing structure, or lead magnet that makes your ideal customer take action. A strong offer is the foundation of every profitable campaign.", deliverable: "Offer Strategy & Messaging Framework" },
  { n: "04", label: "Creative",       color: "#7049FD", desc: "Develop performance creative briefs and produce the first creative batch — video, static, UGC — based on the offer and audience research. Produced in variants for systematic testing.", deliverable: "Creative Batch + Testing Plan" },
  { n: "05", label: "Campaign Setup", color: "#3D5BFD", desc: "Build the complete campaign infrastructure — ad accounts, pixel/CAPI setup, campaign structure, audience architecture, landing pages, and tracking verification before any spend goes live.", deliverable: "Live Campaign Infrastructure" },
  { n: "06", label: "Testing",        color: "#2478FD", desc: "Controlled spend to identify winning creatives, audiences, and offers. We measure against CAC and ROAS targets — not impressions or clicks. Clear pass/fail criteria before scaling.", deliverable: "Creative & Audience Test Results" },
  { n: "07", label: "Optimisation",   color: "#0A94FD", desc: "Scale winners, kill losers. Continuous CRO, bid strategy refinement, audience pruning, and creative refresh cycles to improve CAC and ROAS systematically before scaling budget.", deliverable: "Optimisation Log & Performance Data" },
  { n: "08", label: "Scaling",        color: "#1EABFE", desc: "With a proven system, we scale budget intelligently — protecting CAC while increasing volume. Introduces new channels, lookalike audiences, and retention campaigns for LTV growth.", deliverable: "Scaling Roadmap + Retention Layer" },
  { n: "09", label: "Reporting",      color: "#36C2FE", desc: "Transparent, business-level reporting covering CAC, ROAS, LTV, payback period, and attribution. Monthly strategy sessions to align on next-quarter priorities and system improvements.", deliverable: "Monthly Business Growth Report" },
];

export function GrowthFramework() {
  const [active, setActive] = useState(0);
  const s = stages[active];

  return (
    <section className="py-32" aria-labelledby="framework-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-20">
          <p className="tag mb-6">Our process</p>
          <h2 id="framework-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Nine stages from zero to{" "}
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              profitable scale.
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">Every engagement follows the same proven framework. No guesswork, no shortcuts.</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[340px_1fr] gap-6">
          {/* Stage list */}
          <div className="space-y-1" role="list" aria-label="Growth framework stages">
            {stages.map((st, i) => (
              <button key={st.label} role="listitem"
                className={cn("w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200",
                  active === i ? "bg-white/6" : "hover:bg-white/3")}
                style={{ border: active === i ? `1px solid ${st.color}30` : "1px solid transparent" }}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-label={`Stage ${st.n}: ${st.label}`}
              >
                {/* Step number */}
                <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300", active === i ? "scale-110" : "opacity-35 group-hover:opacity-60")}
                  style={{ background: `${st.color}18`, border: `1px solid ${st.color}35`, color: st.color }}>
                  {st.n}
                </div>
                <span className={cn("text-sm font-semibold transition-colors", active === i ? "text-white" : "text-white/40")}>
                  {st.label}
                </span>
                {active === i && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: st.color }} aria-hidden="true" />
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div key={active} className="rounded-2xl p-10 flex flex-col justify-between min-h-[320px]"
            style={{
              background: `linear-gradient(135deg, ${s.color}07 0%, #0C0C10 60%)`,
              border: `1px solid ${s.color}20`,
            }}>
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
                  style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}40`, color: s.color }}>
                  {s.n}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-1">Stage {s.n}</p>
                  <h3 className="text-2xl font-bold text-white">{s.label}</h3>
                </div>
              </div>
              <p className="text-base text-white/50 leading-relaxed mb-8">{s.desc}</p>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-1">Deliverable</p>
                <p className="text-sm font-semibold text-white/80">{s.deliverable}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
