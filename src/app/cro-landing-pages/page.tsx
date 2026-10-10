import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layout, TrendingUp, MousePointerClick, BarChart3 } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "CRO & Landing Pages — PerformX",
  description: "Conversion-optimised landing pages and systematic CRO. Turn your ad traffic into revenue — not bounce rates.",
  alternates: { canonical: "https://performx.agency/cro-landing-pages" },
};

const stats = [
  { value: "0.5–2%", label: "Homepage conversion rate (typical)" },
  { value: "4–12%", label: "Dedicated landing page conversion rate" },
  { value: "6x", label: "Average improvement with proper CRO" },
];

const process = [
  { step: "01", title: "Audit", desc: "Heatmaps, session recordings, and funnel analysis to identify where visitors drop off and why." },
  { step: "02", title: "Hypothesis", desc: "Data-driven hypotheses for every test — grounded in user behaviour, not guesswork." },
  { step: "03", title: "Build", desc: "Dedicated landing pages built for your specific campaign, offer, and audience." },
  { step: "04", title: "Test", desc: "A/B and multivariate testing with statistical significance before declaring winners." },
  { step: "05", title: "Iterate", desc: "Continuous improvement cycles — every winner becomes the new baseline to beat." },
];

export default function CROPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">Conversion</Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Turn traffic into <GradientText>revenue.</GradientText>
            </h1>
            <p className="text-xl text-white/55 leading-relaxed max-w-3xl mb-10">
              Your landing page is the most leveraged asset in your acquisition system. Sending paid traffic to your homepage is the single biggest conversion killer. We fix that — systematically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/free-growth-audit">Get Free Growth Audit <ArrowRight size={18} aria-hidden="true" /></Button>
              <Button variant="secondary" size="lg" href="/services/landing-pages-cro">View Service Detail</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The gap */}
      <section className="py-section bg-[#0A0A0C]" aria-labelledby="gap-heading">
        <div className="section-container">
          <ScrollReveal>
            <h2 id="gap-heading" className="text-display-sm font-bold text-white mb-10">
              The conversion gap is <GradientText>costing you.</GradientText>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6 mb-10" data-stagger="100">
            {stats.map((s) => (
              <div key={s.label} className="card-dark p-8 text-center">
                <div className="text-4xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-3">{s.value}</div>
                <p className="text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-lg text-white/50 max-w-3xl">
              The difference between a 1% and a 6% conversion rate on the same media spend is 6x more revenue — without spending a single extra rupee on ads. That&apos;s the CRO opportunity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CRO Process */}
      <section className="py-section" aria-labelledby="cro-process-heading">
        <div className="section-container">
          <ScrollReveal>
            <h2 id="cro-process-heading" className="text-display-sm font-bold text-white mb-12">Our CRO process.</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" aria-hidden="true" />
            <div className="space-y-6">
              {process.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 80}>
                  <div className="flex items-start gap-6 md:pl-20 relative">
                    <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl items-center justify-center text-sm font-bold bg-brand-blue/15 border border-brand-blue/40 text-brand-blue flex-shrink-0">
                      {p.step}
                    </div>
                    <div className="card-dark p-7 flex-1 group hover:border-white/15 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="md:hidden text-xs font-bold text-brand-blue">{p.step}</span>
                        <h3 className="text-lg font-bold text-white">{p.title}</h3>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
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
