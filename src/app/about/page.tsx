"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";


const stats = [
  { v: "5+",     l: "Years in performance marketing" },
  { v: "150+",   l: "Campaigns launched" },
  { v: "20+",    l: "Industries served" },
  { v: "₹10Cr+", l: "Revenue generated for clients" },
];

const isNot = ["A social media management agency", "A conventional creative or branding agency", "A guaranteed-ROAS provider", "A cheap, quick-turnaround ads vendor", "A team that runs campaigns in isolation"];
const is    = ["A performance marketing & customer acquisition agency", "A full-funnel acquisition systems builder", "Data-first in every strategic decision", "Accountable to CAC, ROAS, and revenue outcomes", "A long-term growth partner"];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.18) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-4xl">
            <p className="tag mb-8">About PerformX</p>
            <h1 className="font-bold text-white mb-8 leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              We build acquisition systems,{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                not ad campaigns.
              </span>
            </h1>
            <p className="text-xl text-white/40 leading-relaxed max-w-3xl">
              PerformX is a performance marketing and customer acquisition agency.
              Our positioning — &ldquo;We don&apos;t run ads. We build profitable customer acquisition systems&rdquo; — is a commitment to thinking beyond the campaign, to building the full infrastructure that makes advertising consistently profitable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }} aria-label="Agency stats">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.v}</div>
                <p className="text-sm text-white/35">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is / Is Not */}
      <section className="py-32" aria-labelledby="positioning-heading">
        <div className="section-container">
          <ScrollReveal className="mb-16">
            <h2 id="positioning-heading" className="text-3xl md:text-4xl font-bold text-white tracking-tight">What PerformX is — and isn&apos;t.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-8 rounded-2xl" style={{ background: "rgba(10,148,253,0.05)", border: "1px solid rgba(10,148,253,0.15)" }}>
              <h3 className="text-lg font-bold text-white mb-6">PerformX IS</h3>
              <ul className="space-y-3">
                {is.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-0.5 text-brand-cyan flex-shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <h3 className="text-lg font-bold text-white mb-6">PerformX IS NOT</h3>
              <ul className="space-y-3">
                {isNot.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-0.5 text-red-400 flex-shrink-0">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic coverage */}
      <section className="py-20" style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.05)" }} aria-labelledby="geo-heading">
        <div className="section-container">
          <ScrollReveal className="max-w-2xl">
            <h2 id="geo-heading" className="text-2xl font-bold text-white mb-4">Where we work.</h2>
            <p className="text-white/40 leading-relaxed mb-6">PerformX is headquartered in India with active client engagements and growth ambitions in the UAE, USA, and UK.</p>
            <div className="flex flex-wrap gap-3">
              {["India (Primary)", "UAE", "USA", "UK"].map((g) => (
                <span key={g} className="px-4 py-2 rounded-xl text-sm font-medium text-white/60" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{g}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

