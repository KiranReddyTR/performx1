import type { Metadata } from "next";
import { GrowthFramework } from "@/components/sections/GrowthFramework";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Process — PerformX",
  description: "PerformX 9-stage growth framework: Discovery, Research, Offer, Creative, Campaign Setup, Testing, Optimisation, Scaling, Reporting.",
  alternates: { canonical: "https://performx.agency/process" },
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.16) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">How we work</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Nine stages from zero to{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                profitable scale.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Every PerformX engagement follows the same proven framework — whether you&apos;re launching from scratch or rebuilding a broken acquisition system.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <GrowthFramework />
      <FinalCTA />
    </div>
  );
}
