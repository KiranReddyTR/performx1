import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { featuredCaseStudies } from "@/data/case-studies";

export function CaseStudiesPreview() {
  const [hero, ...rest] = featuredCaseStudies;

  return (
    <section className="py-32 overflow-hidden" aria-labelledby="case-studies-heading">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16" data-gsap="fadeUp">
          <div className="max-w-2xl">
            <p className="tag mb-6">Verified results</p>
            <h2 id="case-studies-heading" className="font-black text-white leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)" }}>
              Results we can<br />
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                actually prove.
              </span>
            </h2>
          </div>
          <Link href="/case-studies" className="flex items-center gap-2 text-sm font-semibold text-white/35 hover:text-white transition-colors group whitespace-nowrap self-end">
            All 12 case studies <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Bento grid — hero card large + smaller cards */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4 mb-4" data-gsap-stagger="0.1">
          {/* Hero card */}
          {hero && (
            <Link href={`/case-studies/${hero.slug}`}
              className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)", minHeight: 420 }}
            >
              {/* Top accent */}
              <div className="h-1" style={{ background: `linear-gradient(90deg,${hero.imageColor},#36C2FE)` }} aria-hidden="true" />

              {/* Large decorative metric */}
              <div className="absolute bottom-0 right-0 font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(8rem,18vw,15rem)",
                  color: `${hero.imageColor}08`,
                  WebkitTextStroke: `2px ${hero.imageColor}12`,
                  lineHeight: 0.85,
                }}
                aria-hidden="true">
                {hero.metrics.filter(m => m.verified && m.label !== "Channel")[0]?.value}
              </div>

              <div className="relative p-10 flex flex-col flex-1 z-10">
                <span className="inline-flex w-fit text-xs font-bold px-3 py-1.5 rounded-full mb-8"
                  style={{ background: `${hero.imageColor}15`, color: hero.imageColor, border: `1px solid ${hero.imageColor}25` }}>
                  {hero.industry}
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-3">{hero.client}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug flex-1 max-w-sm">
                  {hero.challenge.split(".")[0]}.
                </h3>
                <div className="flex flex-wrap gap-6 mb-6">
                  {hero.metrics.filter(m => m.verified && m.label !== "Channel").map(m => (
                    <div key={m.label}>
                      <div className="text-4xl font-black leading-none mb-1"
                        style={{ background: `linear-gradient(90deg,${hero.imageColor},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {m.value}
                      </div>
                      <p className="text-xs text-white/35">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-white/25">
                    <CheckCircle2 size={12} className="text-green-400" aria-hidden="true" />
                    Verified
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </div>
              </div>
            </Link>
          )}

          {/* Smaller cards stacked */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 3).map((cs) => (
              <Link key={cs.id} href={`/case-studies/${cs.slug}`}
                className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl flex-1"
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="h-0.5" style={{ background: `linear-gradient(90deg,${cs.imageColor},#36C2FE)` }} aria-hidden="true" />
                <div className="p-7 flex items-center gap-6 flex-1">
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex text-xs font-bold px-2 py-1 rounded-full mb-3"
                      style={{ background: `${cs.imageColor}12`, color: cs.imageColor, border: `1px solid ${cs.imageColor}20` }}>
                      {cs.industry}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wide text-white/25 mb-1">{cs.client}</p>
                    <p className="text-sm font-bold text-white leading-snug">{cs.challenge.split(".")[0]}.</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    {cs.metrics.filter(m => m.verified && m.label !== "Channel")[0] && (
                      <div className="text-2xl font-black"
                        style={{ background: `linear-gradient(90deg,${cs.imageColor},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {cs.metrics.filter(m => m.verified && m.label !== "Channel")[0].value}
                      </div>
                    )}
                    <ArrowRight size={14} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all mt-2 ml-auto" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom proof bar */}
        <div className="flex items-center gap-4 pt-6" data-gsap="fadeUp" data-delay="0.2">
          <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" aria-hidden="true" />
          <p className="text-xs text-white/25">All metrics independently verified from live campaign data. No projections, no averages.</p>
        </div>
      </div>
    </section>
  );
}
