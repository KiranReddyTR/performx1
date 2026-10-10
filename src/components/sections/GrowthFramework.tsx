"use client";

import { useState } from "react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

const stages = [
  { number: "01", label: "Discovery", color: "#7415FD", description: "Deep-dive into your business model, unit economics, current customer acquisition channels, and growth goals. We identify what's working, what's broken, and where the biggest opportunities are.", deliverable: "Business & Growth Audit Report" },
  { number: "02", label: "Research", color: "#8A24FD", description: "Competitive analysis, audience research, and customer interviews. We build a detailed picture of your ideal customer, their pain points, buying triggers, and the competitive landscape.", deliverable: "Audience & Competitor Intelligence" },
  { number: "03", label: "Offer", color: "#A838FD", description: "Craft the acquisition offer — the specific value proposition, pricing structure, or lead magnet that makes your ideal customer take action. A strong offer is the foundation of every profitable campaign.", deliverable: "Offer Strategy & Messaging Framework" },
  { number: "04", label: "Creative", color: "#7049FD", description: "Develop performance creative briefs and produce the first creative batch — video, static, UGC — based on the offer and audience research. Creative is produced in variants for systematic testing.", deliverable: "Creative Batch + Testing Plan" },
  { number: "05", label: "Campaign Setup", color: "#3D5BFD", description: "Build the complete campaign infrastructure — ad accounts, pixel setup, campaign structure, audience architecture, landing pages, and tracking verification before any spend goes live.", deliverable: "Live Campaign Infrastructure" },
  { number: "06", label: "Testing", color: "#2478FD", description: "Controlled spend during the testing phase to identify winning creatives, audiences, and offers. We measure against CAC and ROAS targets, not impressions or clicks.", deliverable: "Creative & Audience Test Results" },
  { number: "07", label: "Optimisation", color: "#0A94FD", description: "Scale winners, kill losers. Continuous landing page CRO, bid strategy refinement, audience pruning, and creative refresh cycles to improve CAC and ROAS before scaling.", deliverable: "Optimisation Log & Performance Data" },
  { number: "08", label: "Scaling", color: "#1EABFE", description: "With a proven system, we scale budget intelligently — protecting CAC while increasing volume. This phase also introduces new channels, lookalike audiences, and retention campaigns.", deliverable: "Scaling Roadmap + Retention Layer" },
  { number: "09", label: "Reporting", color: "#36C2FE", description: "Transparent, business-level reporting covering CAC, ROAS, LTV, payback period, and channel attribution. Monthly strategy sessions to align on next-quarter priorities.", deliverable: "Monthly Business Growth Report" },
];

export function GrowthFramework() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-section bg-[#0A0A0C]" aria-labelledby="framework-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Our process</p>
          <h2 id="framework-heading" className="text-display-md font-bold text-white mb-6">
            Nine stages from zero to <GradientText>profitable scale.</GradientText>
          </h2>
          <p className="text-lg text-white/50">Every engagement follows the same proven framework. No guesswork, no shortcuts — just a systematic process that produces predictable outcomes.</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
          {/* Stage list */}
          <div className="space-y-1" role="list" aria-label="Growth framework stages">
            {stages.map((stage, i) => (
              <button key={stage.label} role="listitem"
                className={cn("w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group",
                  active === i ? "bg-white/8 border border-white/10" : "hover:bg-white/4 border border-transparent")}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-label={`Stage ${stage.number}: ${stage.label}`}
              >
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300", active === i ? "scale-110" : "opacity-50 group-hover:opacity-80")}
                  style={{ background: `${stage.color}20`, border: `1px solid ${stage.color}40`, color: stage.color }}>
                  {stage.number}
                </div>
                <span className={cn("text-sm font-medium transition-colors", active === i ? "text-white" : "text-white/50 group-hover:text-white/80")}>
                  {stage.label}
                </span>
                {active === i && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: stage.color }} />}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div key={active} className="card-dark p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold"
                  style={{ background: `${stages[active].color}20`, border: `1.5px solid ${stages[active].color}50`, color: stages[active].color }}>
                  {stages[active].number}
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-1">Stage {stages[active].number}</p>
                  <h3 className="text-2xl font-bold text-white">{stages[active].label}</h3>
                </div>
              </div>
              <p className="text-base text-white/60 leading-relaxed mb-8">{stages[active].description}</p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/4 border border-white/8">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: stages[active].color }} />
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-0.5">Deliverable</p>
                <p className="text-sm text-white/80 font-medium">{stages[active].deliverable}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
