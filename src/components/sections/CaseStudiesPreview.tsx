import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { featuredCaseStudies } from "@/data/case-studies";

export function CaseStudiesPreview() {
  return (
    <section className="py-32" aria-labelledby="case-studies-heading">
      <div className="section-container">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="tag mb-6">Verified results</p>
            <h2 id="case-studies-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Results we can{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">actually prove.</span>
            </h2>
            <p className="text-white/40 mt-4 text-lg">Every metric is verified from live campaigns. No averages. No projections.</p>
          </div>
          <Link href="/case-studies" className="flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-white transition-colors group whitespace-nowrap">
            All 12 case studies <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5" data-stagger="80">
          {featuredCaseStudies.map((cs) => (
            <Link key={cs.id} href={`/case-studies/${cs.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg,${cs.imageColor},#36C2FE)` }} aria-hidden="true" />
              <div className="p-8 flex flex-col flex-1">
                <span className="inline-flex w-fit text-xs font-bold px-2.5 py-1 rounded-full mb-5"
                  style={{ background: `${cs.imageColor}15`, color: cs.imageColor, border: `1px solid ${cs.imageColor}25` }}>
                  {cs.industry}
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-2">{cs.client}</p>
                <h3 className="text-base font-bold text-white mb-5 line-clamp-2 leading-snug">{cs.challenge.split(".")[0]}.</h3>
                <div className="flex flex-wrap gap-5 mb-5 mt-auto">
                  {cs.metrics.filter((m) => m.verified && m.label !== "Channel").map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold leading-none mb-1"
                        style={{ background: `linear-gradient(90deg,${cs.imageColor},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {metric.value}
                      </div>
                      <p className="text-xs text-white/30">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cs.services.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs text-white/25 px-2 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>{s}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-white/25">
                    <CheckCircle2 size={12} className="text-green-400" aria-hidden="true" />
                    Verified campaign data
                  </div>
                  <ArrowRight size={15} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
