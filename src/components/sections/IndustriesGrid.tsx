import Link from "next/link";
import { ArrowRight, ShoppingBag, Building2, GraduationCap, HeartPulse, Car, MapPin, Gem } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  "shopping-bag": ShoppingBag, "building-2": Building2, "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse, car: Car, "map-pin": MapPin, gem: Gem,
};

const gradients = [
  "from-[#7415FD]/20 to-[#A838FD]/10", "from-[#A838FD]/20 to-[#3D5BFD]/10",
  "from-[#3D5BFD]/20 to-[#0A94FD]/10", "from-[#0A94FD]/20 to-[#36C2FE]/10",
  "from-[#7415FD]/15 to-[#0A94FD]/10", "from-[#A838FD]/15 to-[#36C2FE]/10",
  "from-[#3D5BFD]/15 to-[#7415FD]/10",
];

export function IndustriesGrid() {
  return (
    <section className="py-section" aria-labelledby="industries-heading">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <ScrollReveal className="max-w-2xl">
            <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">Industries</p>
            <h2 id="industries-heading" className="text-display-md font-bold text-white">
              Deep expertise across <GradientText>20+ industries.</GradientText>
            </h2>
          </ScrollReveal>
          <Link href="/industries" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group whitespace-nowrap">
            Explore all industries <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-stagger="60">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] ?? ShoppingBag;
            return (
              <Link key={industry.id} href={`/industries/${industry.slug}`}
                className="card-dark p-6 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white/80" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white mb-2">{industry.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{industry.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/30 group-hover:text-brand-azure transition-colors mt-auto">
                  Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
