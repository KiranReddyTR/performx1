import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = caseStudies.find(c => c.slug === params.slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.client} — ${cs.metrics[0]?.value ?? "Case Study"} | PerformX`,
    description: cs.results,
    alternates: { canonical: `https://performx.agency/case-studies/${cs.slug}` },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find(c => c.slug === params.slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex(c => c.slug === params.slug);
  const prev = caseStudies[idx - 1];
  const next = caseStudies[idx + 1];

  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-2 text-xs text-white/25">
            <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/case-studies" className="hover:text-white/60 transition-colors">Case Studies</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white/45 truncate max-w-[180px]">{cs.client}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1fr_320px] gap-16">
          {/* Main */}
          <div>
            {/* Header */}
            <ScrollReveal className="mb-12">
              <span className="inline-flex text-xs font-bold px-3 py-1.5 rounded-full mb-6"
                style={{ background:`${cs.imageColor}15`, color:cs.imageColor, border:`1px solid ${cs.imageColor}25` }}>
                {cs.industry}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-3">{cs.client}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">{cs.challenge.split(".")[0]}.</h1>

              {/* Metrics banner */}
              <div className="flex flex-wrap gap-8 p-7 rounded-2xl mb-3"
                style={{ background:`${cs.imageColor}08`, border:`1px solid ${cs.imageColor}18` }}>
                {cs.metrics.filter(m=>m.verified).map(m=>(
                  <div key={m.label}>
                    <div className="text-4xl font-bold leading-none mb-2"
                      style={{ background:`linear-gradient(90deg,${cs.imageColor},#36C2FE)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                      {m.value}
                    </div>
                    <p className="text-sm text-white/45">{m.label}</p>
                    {m.description && <p className="text-xs text-white/20 mt-0.5">{m.description}</p>}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-white/20 mb-8">
                <CheckCircle2 size={12} className="text-green-400" aria-hidden="true" />
                All metrics verified from live campaign data
              </div>
            </ScrollReveal>

            {/* Sections */}
            {[
              { n:"01", title:"The Challenge", body: cs.challenge },
              { n:"02", title:"Our Strategy",  body: cs.strategy  },
            ].map(s=>(
              <ScrollReveal key={s.title} className="mb-10">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background:`${cs.imageColor}18`, color:cs.imageColor }}>{s.n}</span>
                  {s.title}
                </h2>
                <p className="text-base text-white/50 leading-relaxed">{s.body}</p>
              </ScrollReveal>
            ))}

            {/* Results */}
            <ScrollReveal className="mb-10">
              <div className="p-8 rounded-2xl" style={{ background:`${cs.imageColor}06`, border:`1px solid ${cs.imageColor}18` }}>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background:`${cs.imageColor}18`, color:cs.imageColor }}>03</span>
                  Results
                </h2>
                <p className="text-base text-white/50 leading-relaxed">{cs.results}</p>
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-4">Services delivered</p>
              <div className="flex flex-wrap gap-2">
                {cs.services.map(s=>(
                  <span key={s} className="text-sm text-white/55 px-3 py-1.5 rounded-xl" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>{s}</span>
                ))}
              </div>
            </ScrollReveal>

            {/* Prev/Next */}
            <div className="flex items-center justify-between mt-16 pt-8" style={{ borderTop:"1px solid rgba(255,255,255,0.06)" }}>
              {prev ? (
                <Link href={`/case-studies/${prev.slug}`} className="flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors group">
                  <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  {prev.client}
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/case-studies/${next.slug}`} className="flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors group">
                  {next.client}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-32 self-start">
            <div className="p-6 rounded-2xl" style={{ background:"rgba(116,21,253,0.06)", border:"1px solid rgba(116,21,253,0.15)" }}>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/30 mb-4">Get similar results</p>
              <p className="text-sm text-white/45 mb-6 leading-relaxed">See what a PerformX acquisition system could do for your business.</p>
              <div className="space-y-3">
                <Link href="/free-growth-audit" className="flex items-center justify-center w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
                  style={{ background:"linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
                  Get Free Growth Audit
                </Link>
                <Link href="/book-a-call" className="flex items-center justify-center w-full py-3.5 rounded-xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
                  Book a Discovery Call
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background:"#0C0C10", border:"1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/25 mb-4">More case studies</p>
              <div className="space-y-2">
                {caseStudies.filter(c=>c.id!==cs.id && c.featured).slice(0,3).map(c=>(
                  <Link key={c.id} href={`/case-studies/${c.slug}`}
                    className="flex items-center justify-between py-2.5 text-sm text-white/40 hover:text-white transition-colors group border-b border-white/5 last:border-0">
                    <span>{c.client}</span>
                    <span className="flex items-center gap-1 font-bold text-xs" style={{ color:c.imageColor }}>
                      {c.metrics[0]?.value}
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
