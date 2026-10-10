import type { Metadata } from "next";
import { CaseStudyIndex } from "@/components/case-studies/CaseStudyIndex";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies — PerformX",
  description: "Verified performance marketing results: up to 7.9X ROAS, 90% CPL reduction, 5,900+ enquiries. 12 case studies across 7 industries.",
  alternates: { canonical: "https://performx.agency/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Verified results</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Results we can{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                actually prove.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Every metric is verified from live client campaigns. No averages, no projections, no fabricated dashboards.
              12 case studies across 7 industries.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="section-container pb-32">
        <CaseStudyIndex />
      </div>
    </div>
  );
}
