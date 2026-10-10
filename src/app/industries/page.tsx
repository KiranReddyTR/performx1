import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Building2, GraduationCap, HeartPulse, Car, MapPin, Gem } from "lucide-react";
import { industries } from "@/data/industries";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Industries — PerformX",
  description: "Performance marketing expertise across e-commerce, real estate, education, healthcare, automobile, travel, jewellery and retail.",
  alternates: { canonical: "https://performx.agency/industries" },
};

const iconMap: Record<string, React.ElementType> = {
  "shopping-bag": ShoppingBag, "building-2": Building2, "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse, car: Car, "map-pin": MapPin, gem: Gem,
};
const colors = ["#7415FD","#A838FD","#3D5BFD","#0A94FD","#36C2FE","#7415FD","#A838FD"];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.16) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Industries</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Deep expertise across{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">20+ industries.</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">Industry context matters in performance marketing. Knowing your sector&apos;s compliance, buying cycles, and audience psychology produces better results than generic campaigns.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-container pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16" data-stagger="60">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? ShoppingBag;
            const c = colors[i % colors.length];
            return (
              <Link key={ind.id} href={`/industries/${ind.slug}`}
                className="group p-8 rounded-2xl flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1.5 card-dark">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${c}12`, border: `1.5px solid ${c}28` }}>
                  <Icon size={26} style={{ color: c }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white mb-3">{ind.title}</h2>
                  <p className="text-sm text-white/40 leading-relaxed">{ind.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-white/25 group-hover:text-white/60 transition-colors">
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-10 rounded-2xl text-center" style={{ background: "rgba(116,21,253,0.04)", border: "1px solid rgba(116,21,253,0.14)" }}>
          <h2 className="text-xl font-bold text-white mb-3">Don&apos;t see your industry?</h2>
          <p className="text-white/40 mb-6 max-w-md mx-auto text-sm">We&apos;ve worked across 20+ industries. Acquisition principles translate across most B2C and high-ticket B2B verticals.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>Get in Touch</Link>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}
