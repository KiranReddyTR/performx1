"use client";

import Link from "next/link";
import { ArrowRight, Target, Search, Video, Briefcase, Map, Sparkles, Film, Layout, BarChart, Settings, Mail, MessageCircle } from "lucide-react";
import { services, servicesByCategory } from "@/data/services";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";


const iconMap: Record<string, React.ElementType> = {
  target: Target, search: Search, video: Video, briefcase: Briefcase, map: Map,
  sparkles: Sparkles, film: Film, layout: Layout, "bar-chart": BarChart,
  settings: Settings, mail: Mail, "message-circle": MessageCircle,
};
const catColor: Record<string, string> = {
  "Paid Media": "#7415FD", "Creative": "#A838FD", "Conversion": "#3D5BFD",
  "Data": "#0A94FD", "Automation": "#36C2FE",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.16) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">What we do</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Every capability your acquisition{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                system needs.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              12 integrated services across paid media, creative, conversion, data, and automation — each designed to work as part of a complete system.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-container pb-32">
        {Object.entries(servicesByCategory).map(([cat, svcs]) => {
          const color = catColor[cat] ?? "#7415FD";
          return (
            <div key={cat} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-white">{cat}</h2>
                <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} aria-hidden="true" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {svcs.map((s) => {
                  const Icon = iconMap[s.icon] ?? Target;
                  return (
                    <Link key={s.id} href={`/services/${s.slug}`}
                      className="group p-8 rounded-2xl flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1.5"
                      style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}25`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${color}10`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${color}12`, border: `1.5px solid ${color}28` }}>
                        <Icon size={22} style={{ color }} aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                        <p className="text-sm text-white/40 leading-relaxed">{s.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-white/25 group-hover:text-white/60 transition-colors">
                        View service <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Bottom CTA */}
        <div className="p-12 rounded-2xl text-center" style={{ background: "rgba(116,21,253,0.05)", border: "1px solid rgba(116,21,253,0.15)" }}>
          <h2 className="text-2xl font-bold text-white mb-4">Not sure which services you need?</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">Start with a free Growth Audit. We&apos;ll assess your current setup and recommend exactly what your acquisition system needs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-growth-audit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm transition-all duration-300 hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
              Get Free Growth Audit
            </Link>
            <Link href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

