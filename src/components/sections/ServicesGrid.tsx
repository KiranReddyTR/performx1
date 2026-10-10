import Link from "next/link";
import { ArrowRight, Target, Search, Video, Briefcase, Map, Sparkles, Film, Layout, BarChart, Settings, Mail, MessageCircle } from "lucide-react";
import { servicesByCategory } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  target: Target, search: Search, video: Video, briefcase: Briefcase, map: Map,
  sparkles: Sparkles, film: Film, layout: Layout, "bar-chart": BarChart,
  settings: Settings, mail: Mail, "message-circle": MessageCircle,
};
const catCfg: Record<string, { color: string }> = {
  "Paid Media":  { color: "#7415FD" },
  "Creative":    { color: "#A838FD" },
  "Conversion":  { color: "#3D5BFD" },
  "Data":        { color: "#0A94FD" },
  "Automation":  { color: "#36C2FE" },
};

export function ServicesGrid() {
  return (
    <section className="py-32 overflow-hidden" aria-labelledby="services-heading">
      <div className="section-container">

        {/* Header asymmetric */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-20" data-gsap="fadeUp">
          <div>
            <p className="tag mb-6">What we do</p>
            <h2 id="services-heading" className="font-black text-white leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.75rem,7vw,6.5rem)" }}>
              12 services.<br />
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                One system.
              </span>
            </h2>
          </div>
          <Link href="/services" className="flex items-center gap-2 text-sm font-bold text-white/35 hover:text-white transition-colors group whitespace-nowrap self-end pb-2">
            View all <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-16">
          {Object.entries(servicesByCategory).map(([cat, svcs]) => {
            const color = catCfg[cat]?.color ?? "#7415FD";
            return (
              <div key={cat}>
                <div className="flex items-center gap-5 mb-7">
                  <span className="text-xs font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}>{cat}</span>
                  <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,${color}20,transparent)` }} aria-hidden="true" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3" data-gsap-stagger="0.05">
                  {svcs.map((service) => {
                    const Icon = iconMap[service.icon] ?? Target;
                    return (
                      <Link key={service.id} href={`/services/${service.slug}`}
                        className="group p-6 rounded-2xl flex flex-col gap-4 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg"
                        style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                        {/* Top accent on hover */}
                        <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} aria-hidden="true" />
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-400 group-hover:scale-110"
                          style={{ background: `${color}10`, border: `1.5px solid ${color}25` }}>
                          <Icon size={20} style={{ color }} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-white mb-1.5">{service.shortTitle}</h3>
                          <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-white/20 group-hover:text-white/60 transition-colors">
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
