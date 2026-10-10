import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Film, Zap, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Performance Creative & UGC — PerformX",
  description: "Ad creative engineered to convert. Performance briefs, UGC production, video, and systematic A/B testing integrated with your paid media.",
  alternates: { canonical: "https://performx.agency/performance-creative" },
};

const offerings = [
  { icon: Sparkles, color: "#A838FD", title: "Performance Creative Strategy", desc: "Creative briefs built from audience research, competitive analysis, and channel algorithm knowledge — not aesthetic preference." },
  { icon: Film,     color: "#7415FD", title: "UGC & Video Production",        desc: "User-generated content and video creative produced at scale. Native-feeling ads that work on Meta, TikTok, and YouTube." },
  { icon: Zap,      color: "#3D5BFD", title: "AI-Powered Production",          desc: "AI tools for high-volume creative production — faster iteration, lower cost, higher testing velocity." },
  { icon: CheckCircle2, color: "#0A94FD", title: "Systematic A/B Testing",   desc: "Structured testing frameworks that identify winning angles, hooks, and formats — then scale them systematically." },
];

export default function PerformanceCreativePage() {
  const related = caseStudies.filter(cs => cs.services.some(s => s.toLowerCase().includes("creative"))).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(168,56,253,0.18) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Creative</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Creative that{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">converts.</span>
            </h1>
            <p className="text-xl text-white/40 leading-relaxed mb-10">
              Performance creative is the biggest lever in paid media. We build creative systems — not one-off assets — engineered to convert and systematically tested to find what works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-growth-audit" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm" style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
                Get Free Growth Audit <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services/performance-creative" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
                View Service Detail
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-8 text-center" data-stagger="80">
            {[
              { v: "70%",  l: "of ROAS improvement comes from creative" },
              { v: "4–6w", l: "before creative fatigue sets in" },
              { v: "3–5x", l: "better results when creative + media are integrated" },
            ].map(s => (
              <div key={s.l}>
                <div className="text-4xl font-bold mb-2 bg-brand-gradient bg-clip-text text-transparent">{s.v}</div>
                <p className="text-sm text-white/35">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal><h2 className="text-2xl font-bold text-white mb-12 tracking-tight">What we deliver.</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5" data-stagger="80">
            {offerings.map(o => (
              <div key={o.title} className="p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1 card-dark">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: `${o.color}12`, border: `1.5px solid ${o.color}28` }}>
                  <o.icon size={22} style={{ color: o.color }} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{o.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="py-16" style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="section-container">
            <ScrollReveal><h2 className="text-2xl font-bold text-white mb-10 tracking-tight">Results from creative-led campaigns.</h2></ScrollReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map(cs => (
                <Link key={cs.id} href={`/case-studies/${cs.slug}`}
                  className="p-7 rounded-2xl group transition-all duration-300 hover:-translate-y-1 card-dark">
                  <div className="h-0.5 w-full mb-6 rounded-full" style={{ background: `linear-gradient(90deg,${cs.imageColor},#36C2FE)` }} aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-wide text-white/25 mb-2">{cs.client}</p>
                  <p className="text-sm font-bold text-white mb-4">{cs.industry}</p>
                  {cs.metrics.filter(m => m.verified && m.label !== "Channel")[0] && (
                    <div className="text-2xl font-bold"
                      style={{ background: `linear-gradient(90deg,${cs.imageColor},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {cs.metrics.filter(m => m.verified && m.label !== "Channel")[0].value}
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-xs text-white/25 group-hover:text-white/60 transition-colors mt-4">
                    View case study <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <FinalCTA />
    </div>
  );
}
