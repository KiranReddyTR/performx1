"use client";

import Link from "next/link";
import { ArrowRight, Layout, TrendingUp, BarChart3, MousePointerClick } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

const color = "#3D5BFD";

const stats = [
  { v: "0.5–2%",  l: "Homepage conversion rate (typical)" },
  { v: "4–12%",  l: "Dedicated landing page CVR" },
  { v: "6x",     l: "Average improvement with proper CRO" },
];

const process = [
  { n: "01", title: "Audit",       desc: "Heatmaps, session recordings, and funnel analysis to find where visitors drop off and why.", icon: BarChart3 },
  { n: "02", title: "Hypothesis",  desc: "Data-driven hypotheses for every test — grounded in user behaviour, not guesswork.", icon: TrendingUp },
  { n: "03", title: "Build",       desc: "Dedicated landing pages built for your specific campaign, offer, and audience segment.", icon: Layout },
  { n: "04", title: "Test",        desc: "A/B and multivariate testing with statistical significance before declaring winners.", icon: MousePointerClick },
  { n: "05", title: "Iterate",     desc: "Continuous improvement — every winner becomes the new baseline to beat.", icon: ArrowRight },
];

export default function CROPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${color}18 0%, transparent 70%)` }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Conversion</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Turn traffic into{" "}
              <span style={{ background: `linear-gradient(90deg,${color},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                revenue.
              </span>
            </h1>
            <p className="text-xl text-white/40 leading-relaxed mb-10">Your landing page is the most leveraged asset in your acquisition system. Sending paid traffic to your homepage is the single biggest conversion killer — we fix that, systematically.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-growth-audit" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm" style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
                Get Free Growth Audit <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services/landing-pages-cro" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
                View Service Detail
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The gap */}
      <section className="py-20" style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-8 text-center" data-stagger="80">
            {stats.map(s => (
              <div key={s.l}>
                <div className="text-4xl font-bold mb-2" style={{ background: `linear-gradient(90deg,${color},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.v}</div>
                <p className="text-sm text-white/35">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRO Process */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal><h2 className="text-2xl font-bold text-white mb-12 tracking-tight">Our CRO process.</h2></ScrollReveal>
          <div className="relative">
            <div className="absolute left-8 top-4 bottom-4 w-px hidden md:block" style={{ background: "rgba(61,91,253,0.15)" }} aria-hidden="true" />
            <div className="space-y-5">
              {process.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 60}>
                  <div className="flex items-start gap-6 md:pl-20 relative">
                    <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-2xl items-center justify-center text-sm font-bold top-1/2 -translate-y-1/2"
                      style={{ background: `${color}15`, border: `1.5px solid ${color}35`, color }}>
                      {p.n}
                    </div>
                    <div className="p-7 rounded-2xl flex-1 group transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="md:hidden text-xs font-bold" style={{ color }}>{p.n}</span>
                        <h3 className="text-base font-bold text-white">{p.title}</h3>
                      </div>
                      <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
