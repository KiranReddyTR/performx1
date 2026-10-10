import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models — PerformX",
  description: "Flexible engagement models for performance marketing. No fixed price lists — every acquisition system is scoped to your business.",
};

const models = [
  {
    title: "Free Growth Audit",
    price: "Free",
    desc: "A comprehensive review of your acquisition setup — paid media, landing pages, tracking, and CRM. Delivered within 48 hours.",
    features: ["Paid media account review","Conversion funnel assessment","Tracking gap analysis","Top 3 growth recommendations","No commitment required"],
    cta: "Get Free Audit",
    href: "/free-growth-audit",
    highlight: false,
    color: "#7415FD",
  },
  {
    title: "Full Acquisition System",
    price: "Custom",
    desc: "A complete customer acquisition system built for your business — creative strategy, paid media, landing pages, tracking, CRM, and automation.",
    features: ["Paid media management (Meta, Google, or both)","Performance creative production","Landing page build and CRO","Tracking and attribution setup","CRM and automation build","Monthly reporting and strategy"],
    cta: "Book a Discovery Call",
    href: "/book-a-call",
    highlight: true,
    color: "#A838FD",
  },
  {
    title: "Paid Media Management",
    price: "Custom",
    desc: "Ongoing management of your paid media campaigns with performance creative and conversion optimisation included.",
    features: ["Campaign strategy and setup","Performance creative testing","Audience and bid management","Weekly performance reports","Monthly strategy sessions"],
    cta: "Get in Touch",
    href: "/contact",
    highlight: false,
    color: "#0A94FD",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.16) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Engagement models</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize:"clamp(2.5rem,6vw,5rem)" }}>
              Flexible engagements,{" "}
              <span style={{ background:"linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                built around your goals.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">We don&apos;t publish fixed pricing because every acquisition system is scoped to your business. What we can tell you: we work with businesses investing seriously in growth — typically ₹50K+ per month in advertising, or ready to.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-5">
            {models.map((m) => (
              <div key={m.title} className="rounded-2xl p-8 flex flex-col"
                style={{
                  background: m.highlight ? `${m.color}08` : "#0C0C10",
                  border: m.highlight ? `1px solid ${m.color}30` : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: m.highlight ? `0 0 60px ${m.color}10` : "none",
                }}>
                {m.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: m.color }}>Most popular</span>
                )}
                <h2 className="text-xl font-bold text-white mb-2">{m.title}</h2>
                <div className="text-4xl font-bold mb-4" style={{ background:`linear-gradient(90deg,${m.color},#36C2FE)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{m.price}</div>
                <p className="text-sm text-white/40 leading-relaxed mb-8">{m.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {m.features.map(f=>(
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                      <CheckCircle2 size={14} style={{ color:m.color }} className="mt-0.5 flex-shrink-0" aria-hidden="true" />{f}
                    </li>
                  ))}
                </ul>
                <Link href={m.href}
                  className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: m.highlight ? `linear-gradient(135deg,${m.color},#A838FD,#3D5BFD)` : "rgba(255,255,255,0.06)", border: m.highlight ? "none" : "1px solid rgba(255,255,255,0.10)" }}>
                  {m.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
