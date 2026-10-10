import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = industries.find(i => i.slug === params.slug);
  if (!ind) return { title: "Not Found" };
  return {
    title: `${ind.title} Performance Marketing — PerformX`,
    description: ind.description,
    alternates: { canonical: `https://performx.agency/industries/${ind.slug}` },
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find(i => i.slug === params.slug);
  if (!industry) notFound();

  const colorMap: Record<string, string> = {
    "E-commerce & D2C": "#7415FD", "Real Estate": "#A838FD", "Education": "#3D5BFD",
    "Healthcare & Wellness": "#0A94FD", "Automobile & Dealerships": "#36C2FE",
    "Travel, Events & Hospitality": "#7415FD", "Jewellery, Furniture & Retail": "#A838FD",
  };
  const color = colorMap[industry.title] ?? "#7415FD";

  const related = caseStudies.filter(cs =>
    cs.industry.toLowerCase().includes(industry.title.toLowerCase().split(" ")[0]) ||
    industry.title.toLowerCase().includes(cs.industry.toLowerCase().split(" ")[0])
  ).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${color}20 0%, transparent 70%)` }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/25">
                <li><Link href="/" className="hover:text-white/50 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/industries" className="hover:text-white/50 transition-colors">Industries</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/45">{industry.title}</li>
              </ol>
            </nav>
            <span className="inline-flex text-xs font-bold px-3 py-1.5 rounded-full mb-6"
              style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>Industry</span>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.25rem,5vw,4rem)" }}>
              Performance marketing for{" "}
              <span style={{ background: `linear-gradient(90deg,${color},#36C2FE)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {industry.title}.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">{industry.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-container pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-16">
          <div>
            {/* Challenges */}
            <ScrollReveal className="mb-12">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle size={18} className="text-red-400" aria-hidden="true" />
                Common challenges in {industry.title}
              </h2>
              <div className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl"
                    style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}>
                    <span className="text-xs font-bold text-red-400/60 mt-0.5 flex-shrink-0">{String(i+1).padStart(2,"0")}</span>
                    <p className="text-sm text-white/55 leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Solutions */}
            <ScrollReveal className="mb-12">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 size={18} style={{ color: "#36C2FE" }} aria-hidden="true" />
                How PerformX solves these
              </h2>
              <div className="space-y-3">
                {industry.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl"
                    style={{ background: `${color}06`, border: `1px solid ${color}18` }}>
                    <CheckCircle2 size={15} style={{ color }} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-white/65 leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Related case studies */}
            {related.length > 0 && (
              <ScrollReveal>
                <h2 className="text-xl font-bold text-white mb-6">{industry.title} case studies</h2>
                <div className="space-y-4">
                  {related.map(cs => (
                    <Link key={cs.id} href={`/case-studies/${cs.slug}`}
                      className="flex items-center gap-6 p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-0.5 card-dark">
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-wide text-white/25 mb-1">{cs.client}</p>
                        <p className="text-sm font-semibold text-white">{cs.results.split(".")[0]}.</p>
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
              <p className="text-sm font-bold text-white mb-2">Ready to scale?</p>
              <p className="text-xs text-white/35 mb-6 leading-relaxed">Get a free audit and see what a full acquisition system could do for your business.</p>
              <div className="space-y-3">
                <Link href="/free-growth-audit" className="flex items-center justify-center w-full py-3.5 rounded-xl text-white font-bold text-sm"
                  style={{ background: `linear-gradient(135deg,${color},#A838FD,#3D5BFD)` }}>Get Free Growth Audit</Link>
                <Link href="/book-a-call" className="flex items-center justify-center w-full py-3.5 rounded-xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">Book a Discovery Call</Link>
              </div>
            </div>
            <div className="p-6 rounded-2xl card-dark">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/25 mb-4">Other industries</p>
              <div className="space-y-1">
                {industries.filter(i => i.id !== industry.id).slice(0, 5).map(i => (
                  <Link key={i.id} href={`/industries/${i.slug}`}
                    className="flex items-center gap-2 py-2.5 text-sm text-white/40 hover:text-white transition-colors group">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-brand-violet transition-colors flex-shrink-0" aria-hidden="true" />
                    {i.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}
