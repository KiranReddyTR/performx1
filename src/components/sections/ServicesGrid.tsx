import Link from "next/link";
import { ArrowRight, Target, Search, Video, Briefcase, Map, Sparkles, Film, Layout, BarChart, Settings, Mail, MessageCircle } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { servicesByCategory } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  target: Target, search: Search, video: Video, briefcase: Briefcase, map: Map,
  sparkles: Sparkles, film: Film, layout: Layout, "bar-chart": BarChart,
  settings: Settings, mail: Mail, "message-circle": MessageCircle,
};

const categoryColors: Record<string, { bg: string; border: string; text: string; hex: string }> = {
  "Paid Media":  { bg: "bg-brand-violet/10",  border: "border-brand-violet/30",  text: "text-brand-violet",  hex: "#7415FD" },
  "Creative":    { bg: "bg-brand-purple/10",  border: "border-brand-purple/30",  text: "text-brand-purple",  hex: "#A838FD" },
  "Conversion":  { bg: "bg-brand-blue/10",    border: "border-brand-blue/30",    text: "text-brand-blue",    hex: "#3D5BFD" },
  "Data":        { bg: "bg-brand-azure/10",   border: "border-brand-azure/30",   text: "text-brand-azure",   hex: "#0A94FD" },
  "Automation":  { bg: "bg-brand-cyan/10",    border: "border-brand-cyan/30",    text: "text-brand-cyan",    hex: "#36C2FE" },
};

export function ServicesGrid() {
  const categories = Object.keys(servicesByCategory);

  return (
    <section className="py-section" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <ScrollReveal className="max-w-2xl">
            <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">What we do</p>
            <h2 id="services-heading" className="text-display-md font-bold text-white">
              Every capability your acquisition <GradientText>system needs.</GradientText>
            </h2>
          </ScrollReveal>
          <Link href="/services" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group">
            View all services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const colors = categoryColors[category] ?? categoryColors["Paid Media"];
            const svcs = servicesByCategory[category];
            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={cn("text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border", colors.bg, colors.border, colors.text)}>
                    {category}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-stagger="60">
                  {svcs.map((service) => {
                    const Icon = iconMap[service.icon] ?? Target;
                    return (
                      <Link key={service.id} href={`/services/${service.slug}`}
                        className="card-dark p-6 group flex flex-col gap-4 hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110", colors.bg, colors.border)}>
                          <Icon size={20} className={colors.text} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-brand-gradient group-hover:bg-clip-text transition-all duration-300">{service.shortTitle}</h3>
                          <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-white/30 group-hover:text-brand-azure transition-colors mt-auto">
                          Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
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
