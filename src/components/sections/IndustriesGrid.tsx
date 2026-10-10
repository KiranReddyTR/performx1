import Link from "next/link";
import { ArrowRight, ShoppingBag, Building2, GraduationCap, HeartPulse, Car, MapPin, Gem } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  "shopping-bag": ShoppingBag, "building-2": Building2, "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse, car: Car, "map-pin": MapPin, gem: Gem,
};
const colors = ["#7415FD","#A838FD","#3D5BFD","#0A94FD","#36C2FE","#7415FD","#A838FD"];

export function IndustriesGrid() {
  return (
    <section className="py-32" style={{ background: "#08080C" }} aria-labelledby="industries-heading">
      <div className="section-container">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="tag mb-6">Industries</p>
            <h2 id="industries-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Deep expertise across{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">20+ industries.</span>
            </h2>
          </div>
          <Link href="/industries" className="flex items-center gap-2 text-sm font-semibold text-white/35 hover:text-white transition-colors group whitespace-nowrap">
            Explore all <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-stagger="50">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? ShoppingBag;
            const c = colors[i % colors.length];
            return (
              <Link key={ind.id} href={`/industries/${ind.slug}`}
                className="group p-7 rounded-2xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg card-dark">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${c}12`, border: `1.5px solid ${c}28` }}>
                  <Icon size={22} style={{ color: c }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-xs text-white/35 leading-relaxed line-clamp-2">{ind.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-white/25 group-hover:text-white/60 transition-colors">
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
