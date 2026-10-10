import type { Metadata } from "next";
import { WhyPerformX } from "@/components/sections/WhyPerformX";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Why PerformX — Performance Marketing Agency",
  description: "Systems not campaigns. Data before opinion. Full-funnel ownership. Radical transparency. Creative that converts.",
  alternates: { canonical: "https://performx.agency/why-performx" },
};

export default function WhyPerformXPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(116,21,253,0.16) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="tag mb-8">Why PerformX</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Five things that make us{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                fundamentally different.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              There are thousands of digital marketing agencies. Here&apos;s why the distinction between a campaign shop and an acquisition systems firm matters — and why it produces better results.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <WhyPerformX />
      <FinalCTA />
    </div>
  );
}
