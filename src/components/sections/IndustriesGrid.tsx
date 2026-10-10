import Link from "next/link";
import { ArrowRight, ShoppingBag, Building2, GraduationCap, HeartPulse, Car, MapPin, Gem } from "lucide-react";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  "shopping-bag": ShoppingBag, "building-2": Building2, "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse, car: Car, "map-pin": MapPin, gem: Gem,
};
const colors = ["#7415FD","#A838FD","#3D5BFD","#0A94FD","#36C2FE","#7415FD","#A838FD"];

export function IndustriesGrid() {
  return (
    <section className="py-32 overflow-hidden" aria-labelledby="industries-heading">
      <div className="section-container">

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16" data-gsap="fadeUp">
          <div>
            <p className="tag mb-6">Industries</p>
            <h2 id="industries-heading" className="font-black text-white leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.75rem,7vw,6.5rem)" }}>
              20+ industries.<br />
              <span style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                One framework.
              </span>
            </h2>
          </div>
          <Link href="/industries" className="flex items-center gap-2 text-sm font-bold text-white/35 hover:text-white transition-colors group whitespace-nowrap self-end pb-2">
            Explore all <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Horizontal scrollable row on mobile, 4-col grid on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" data-gsap-stagger="0.05">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? ShoppingBag;
            const c = colors[i % colors.length];
            return (
              <Link key={ind.id} href={`/industries/${ind.slug}`}
                className="group p-6 rounded-2xl flex flex-col gap-4 transition-all duration-400 hover:-translate-y-1.5"
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-400 group-hover:scale-110"
                  style={{ background: `${c}12`, border: `1.5px solid ${c}25` }}>
                  <Icon size={22} style={{ color: c }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-1.5">{ind.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{ind.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-white/20 group-hover:text-white/60 transition-colors">
                  Explore <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
