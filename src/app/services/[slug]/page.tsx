import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = services.find(sv => sv.slug === params.slug);
  if (!s) return { title: "Not Found" };
  return {
    title: `${s.title} — PerformX`,
    description: s.description,
    alternates: { canonical: `https://performx.agency/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) notFound();

  const catColor: Record<string, string> = {
    "Paid Media": "#7415FD", "Creative": "#A838FD", "Conversion": "#3D5BFD",
    "Data": "#0A94FD", "Automation": "#36C2FE",
  };
  const color = catColor[service.category] ?? "#7415FD";

  const related = caseStudies.filter(cs =>
    cs.services.some(s => s.toLowerCase().includes(service.shortTitle.toLowerCase().split(" ")[0]))
  ).slice(0, 3);

  const others = services.filter(s => s.category === service.category && s.id !== service.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${color}18 0%, transparent 70%)` }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/25">
                <li><Link href="/" className="hover:text-white/50 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-white/50 transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/45">{service.title}</li>
              </ol>
            </nav>
            <span className="inline-flex text-xs font-bold px-3 py-1.5 rounded-full mb-6"
              style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>{service.category}</span>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.25rem,5vw,4rem)" }}>
              <span style={{ background: `linear-gradient(90deg,${color},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {service.title}
              </span>
            </h1>
            <p className="text-xl text-white/45 leading-relaxed">{service.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-container pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-16">
          <div>
            {/* Problem */}
            <ScrollReveal className="mb-10">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: `${color}18`, color }}>01</span>
                The Problem
              </h2>
              <div className="p-6 rounded-2xl" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}>
                <p className="text-base text-white/55 leading-relaxed">{service.problem}</p>
              </div>
            </ScrollReveal>

            {/* Solution */}
            <ScrollReveal className="mb-10">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: `${color}18`, color }}>02</span>
                How We Solve It
              </h2>
              <p className="text-base text-white/55 leading-relaxed">{service.solution}</p>
            </ScrollReveal>

            {/* Tools */}
            <ScrollReveal className="mb-12">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <Wrench size={16} className="text-white/30" aria-hidden="true" />
                Tools & Platforms
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.tools.map(t => (
                  <span key={t} className="text-sm text-white/50 px-4 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
                ))}
              </div>
            </ScrollReveal>

            {/* Case studies */}
            {related.length > 0 && (
              <ScrollReveal>
                <h2 className="text-lg font-bold text-white mb-6">Related case studies</h2>
                <div className="space-y-4">
                  {related.map(cs => (
                    <Link key={cs.id} href={`/case-studies/${cs.slug}`}
                      className="flex items-center gap-6 p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-0.5 card-dark">
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-wide text-white/25 mb-1">{cs.industry}</p>
                        <p className="text-sm font-semibold text-white line-clamp-1">{cs.client}</p>
                        <p className="text-xs text-white/35 mt-1 line-clamp-1">{cs.results.split(".")[0]}.</p>
                      </div>
                      {cs.metrics.filter(m => m.verified && m.label !== "Channel")[0] && (
                        <div className="text-xl font-bold flex-shrink-0"
                          style={{ background: `linear-gradient(90deg,${cs.imageColor},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                          {cs.metrics.filter(m => m.verified && m.label !== "Channel")[0].value}
                        </div>
                      )}
                      <ArrowRight size={15} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all flex-shrink-0" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-32 self-start">
            <div className="p-6 rounded-2xl" style={{ background: `${color}06`, border: `1px solid ${color}18` }}>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/30 mb-4">Ready to get started?</p>
              <p className="text-sm text-white/40 mb-6 leading-relaxed">Get a free audit to see how {service.shortTitle} can improve your acquisition.</p>
              <div className="space-y-3">
                <Link href="/free-growth-audit" className="flex items-center justify-center w-full py-3.5 rounded-xl text-white font-bold text-sm"
                  style={{ background: `linear-gradient(135deg,${color},#A838FD,#3D5BFD)` }}>Get Free Growth Audit</Link>
                <Link href="/book-a-call" className="flex items-center justify-center w-full py-3.5 rounded-xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">Book a Discovery Call</Link>
              </div>
            </div>
            {others.length > 0 && (
              <div className="p-6 rounded-2xl card-dark">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/25 mb-4">Related services</p>
                <div className="space-y-1">
                  {others.map(s => (
                    <Link key={s.id} href={`/services/${s.slug}`}
                      className="flex items-center gap-2 py-2.5 text-sm text-white/40 hover:text-white transition-colors group">
                      <CheckCircle2 size={13} style={{ color }} aria-hidden="true" />
                      {s.shortTitle}
                      <ArrowRight size={11} className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}
