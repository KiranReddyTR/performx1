import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Who We Work With — PerformX",
  description: "PerformX works with established e-commerce brands, D2C businesses, real estate developers, and growth-focused businesses ready to invest seriously in customer acquisition.",
};

const audiences = [
  { role: "Founders & Business Owners", color: "#7415FD", desc: "You want predictable customer acquisition that doesn't require your daily attention — a system that scales without you managing every campaign." },
  { role: "E-commerce & D2C Brands",    color: "#A838FD", desc: "You're running ads but ROAS is inconsistent. You know there's more to unlock but aren't sure where your acquisition system is breaking." },
  { role: "Marketing Heads & CMOs",     color: "#3D5BFD", desc: "You need a specialist partner for paid media that integrates with your broader strategy and reports at a business level — not a vanity metrics level." },
  { role: "Growth Leads",               color: "#0A94FD", desc: "You're responsible for CAC and LTV targets. You need a team that thinks in unit economics and builds systems, not one that just runs campaigns." },
];
const goodFit = ["Established businesses with a proven product or service","E-commerce and D2C brands ready to scale paid media","Founders who understand performance data and want a strategic partner","Businesses investing ₹50K+ per month (or ready to)","Teams open to testing, iteration, and data-driven decisions","Companies targeting India, UAE, USA, or UK markets"];
const notFit  = ["Businesses looking for the cheapest possible option","Brands that want guaranteed ROAS promises","Startups without product-market fit seeking ads to fix fundamentals","Companies unwilling to share performance data","Brands expecting overnight results from a standing start","Businesses that want social media management only"];

export default function WhoWeWorkWithPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.16) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Ideal clients</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Who we do our{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">best work with.</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">We&apos;re selective about who we work with — not because we&apos;re precious, but because the right fit produces dramatically better results for everyone.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16" style={{ background: "#08080C" }}>
        <div className="section-container">
          <ScrollReveal><h2 className="text-2xl font-bold text-white mb-10 tracking-tight">Who comes to us.</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5" data-stagger="70">
            {audiences.map((a) => (
              <div key={a.role} className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 card-dark">
                <h3 className="text-lg font-bold text-white mb-3">{a.role}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <ScrollReveal><h2 className="text-2xl font-bold text-white mb-10 tracking-tight">Are we the right fit?</h2></ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-8 rounded-2xl" style={{ background: "rgba(10,148,253,0.04)", border: "1px solid rgba(10,148,253,0.14)" }}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 size={18} style={{ color: "#36C2FE" }} aria-hidden="true" /> Good fit
              </h3>
              <ul className="space-y-3">
                {goodFit.map(i => <li key={i} className="flex items-start gap-3 text-sm text-white/60"><CheckCircle2 size={14} style={{ color: "#36C2FE" }} className="mt-0.5 flex-shrink-0" aria-hidden="true" />{i}</li>)}
              </ul>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.14)" }}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <XCircle size={18} className="text-red-400" aria-hidden="true" /> Not the right fit
              </h3>
              <ul className="space-y-3">
                {notFit.map(i => <li key={i} className="flex items-start gap-3 text-sm text-white/60"><XCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true" />{i}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
