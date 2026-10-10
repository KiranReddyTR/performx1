import Link from "next/link";
import { ArrowRight, Target, Search, Video, Briefcase, Map, Sparkles, Film, Layout, BarChart, Settings, Mail, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { servicesByCategory } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  target: Target, search: Search, video: Video, briefcase: Briefcase, map: Map,
  sparkles: Sparkles, film: Film, layout: Layout, "bar-chart": BarChart,
  settings: Settings, mail: Mail, "message-circle": MessageCircle,
};
const catCfg: Record<string, { color: string; bg: string; border: string }> = {
  "Paid Media":  { color: "#7415FD", bg: "rgba(116,21,253,0.08)", border: "rgba(116,21,253,0.2)" },
  "Creative":    { color: "#A838FD", bg: "rgba(168,56,253,0.08)", border: "rgba(168,56,253,0.2)" },
  "Conversion":  { color: "#3D5BFD", bg: "rgba(61,91,253,0.08)",  border: "rgba(61,91,253,0.2)"  },
  "Data":        { color: "#0A94FD", bg: "rgba(10,148,253,0.08)", border: "rgba(10,148,253,0.2)" },
  "Automation":  { color: "#36C2FE", bg: "rgba(54,194,254,0.08)", border: "rgba(54,194,254,0.2)" },
};

export function ServicesGrid() {
  return (
    <section className="py-32" aria-labelledby="services-heading">
      <div className="section-container">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <p className="tag mb-6">What we do</p>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Every capability your acquisition{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">system needs.</span>
            </h2>
          </div>
          <Link href="/services" className="flex items-center gap-2 text-sm font-semibold text-white/35 hover:text-white transition-colors group whitespace-nowrap">
            All services <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <div className="space-y-14">
          {Object.entries(servicesByCategory).map(([cat, svcs]) => {
            const cfg = catCfg[cat] ?? catCfg["Paid Media"];
            return (
              <div key={cat}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}>{cat}</span>
                  <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} aria-hidden="true" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-stagger="50">
                  {svcs.map((service) => {
                    const Icon = iconMap[service.icon] ?? Target;
                    return (
                      <Link key={service.id} href={`/services/${service.slug}`}
                        className="group p-6 rounded-2xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 card-dark">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                          style={{ background: cfg.bg, border: `1.5px solid ${cfg.border}` }}>
                          <Icon size={20} style={{ color: cfg.color }} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-white mb-2">{service.shortTitle}</h3>
                          <p className="text-xs text-white/35 leading-relaxed line-clamp-2">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium text-white/25 group-hover:text-white/60 transition-colors mt-auto">
                          Learn more <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
