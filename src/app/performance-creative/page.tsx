import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Film, Sparkles } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Performance Creative & UGC — PerformX",
  description: "Ad creative engineered to convert. Performance briefs, UGC production, video creative, and systematic A/B testing — integrated with your paid media strategy.",
  alternates: { canonical: "https://performx.agency/performance-creative" },
};

const offerings = [
  { icon: Sparkles, title: "Performance Creative Strategy", description: "Creative briefs built from audience research, competitive analysis, and channel algorithm knowledge — not aesthetic preference." },
  { icon: Film, title: "UGC & Video Production", description: "User-generated content and video creative produced at scale. Native-feeling ads that work on Meta, TikTok, and YouTube." },
  { icon: Zap, title: "AI-Powered Creative Production", description: "AI tools for high-volume creative production — faster iteration, lower cost, higher testing velocity." },
  { icon: CheckCircle2, title: "Systematic A/B Testing", description: "Structured creative testing frameworks that identify winning angles, hooks, and formats — then scale them." },
];

const whyMatters = [
  "Creative is the single biggest lever in paid media performance",
  "Up to 70% of ROAS improvement comes from better creative, not better targeting",
  "Most brands lose ROAS to creative fatigue within 4–6 weeks",
  "Integrating creative with media strategy produces 2–3x better results than siloed teams",
];

export default function PerformanceCreativePage() {
  const relatedCS = caseStudies.filter((cs) =>
    cs.services.some((s) => s.toLowerCase().includes("creative"))
  ).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-10 blur-[120px] bg-brand-purple pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">Creative</Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Creative that <GradientText>converts.</GradientText>
            </h1>
            <p className="text-xl text-white/55 leading-relaxed max-w-3xl mb-10">
              Performance creative is the biggest lever in paid media. We build creative systems — not one-off assets — that are engineered to convert, systematically tested, and continuously refreshed to prevent fatigue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/free-growth-audit">Get Free Growth Audit <ArrowRight size={18} aria-hidden="true" /></Button>
              <Button variant="secondary" size="lg" href="/services/performance-creative">View Service Detail</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why creative matters */}
      <section className="py-section bg-[#0A0A0C]" aria-labelledby="why-creative-heading">
        <div className="section-container">
          <ScrollReveal>
            <h2 id="why-creative-heading" className="text-display-sm font-bold text-white mb-10">
              Why creative is <GradientText>your biggest lever.</GradientText>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4" data-stagger="80">
            {whyMatters.map((item, i) => (
              <div key={i} className="card-dark p-6 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center flex-shrink-0 text-xs font-bold text-brand-purple">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-section" aria-labelledby="offerings-heading">
        <div className="section-container">
          <ScrollReveal>
            <h2 id="offerings-heading" className="text-display-sm font-bold text-white mb-12">What we deliver.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6" data-stagger="100">
            {offerings.map((o) => (
              <div key={o.title} className="card-dark p-8 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/15 border border-brand-purple/35 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <o.icon size={22} className="text-brand-purple" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{o.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {relatedCS.length > 0 && (
        <section className="py-section bg-[#0A0A0C]" aria-labelledby="creative-cs-heading">
          <div className="section-container">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-10">
                <h2 id="creative-cs-heading" className="text-display-sm font-bold text-white">Results from creative-led campaigns.</h2>
                <Link href="/case-studies" className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group whitespace-nowrap">
                  All case studies <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCS.map((cs) => (
                <Link key={cs.id} href={`/case-studies/${cs.slug}`}
                  className="card-dark p-7 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="h-1 w-full mb-6 rounded-full" style={{ background: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }} aria-hidden="true" />
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-2">{cs.client}</p>
                  <p className="text-sm font-semibold text-white mb-4 flex-1">{cs.industry}</p>
                  {cs.metrics.filter((m) => m.verified && m.label !== "Channel")[0] && (
                    <div className="text-2xl font-bold bg-clip-text text-transparent mb-1"
                      style={{ backgroundImage: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }}>
                      {cs.metrics.filter((m) => m.verified && m.label !== "Channel")[0].value}
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-xs text-white/30 group-hover:text-brand-azure transition-colors mt-4">
                    View case study <ArrowRight size={12} aria-hidden="true" />
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
