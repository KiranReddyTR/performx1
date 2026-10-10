import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { featuredCaseStudies } from "@/data/case-studies";

export function CaseStudiesPreview() {
  return (
    <section className="py-section" aria-labelledby="case-studies-heading">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <ScrollReveal className="max-w-2xl">
            <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">Verified results</p>
            <h2 id="case-studies-heading" className="text-display-md font-bold text-white">
              Results we can <GradientText>actually prove.</GradientText>
            </h2>
            <p className="text-white/50 mt-4 text-lg">Every metric below is verified from real client campaigns. No averages, no projections.</p>
          </ScrollReveal>
          <Link href="/case-studies" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group whitespace-nowrap">
            View all 12 case studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6" data-stagger="80">
          {featuredCaseStudies.map((cs) => (
            <Link key={cs.id} href={`/case-studies/${cs.slug}`}
              className="card-dark p-0 overflow-hidden group hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }} aria-hidden="true" />
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="subtle">{cs.industry}</Badge>
                  <Badge variant="subtle">{cs.category}</Badge>
                </div>
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-2">{cs.client}</p>
                <h3 className="text-base font-semibold text-white mb-4 leading-snug line-clamp-2">{cs.challenge.split(".")[0]}.</h3>
                <div className="flex flex-wrap gap-5 mb-5 mt-auto">
                  {cs.metrics.filter((m) => m.verified && m.label !== "Channel").map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }}>
                        {metric.value}
                      </div>
                      <p className="text-xs text-white/40">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-5">{cs.results}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cs.services.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs text-white/30 px-2 py-1 bg-white/4 rounded-md border border-white/6">{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-brand-azure transition-colors mt-auto">
                  <CheckCircle2 size={14} className="text-green-400" aria-hidden="true" />
                  <span>Verified campaign data</span>
                  <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
