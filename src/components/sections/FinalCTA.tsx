import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function FinalCTA() {
  return (
    <section className="py-36 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Layered background */}
      <div className="absolute inset-0" style={{ background: "#010002" }} aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(116,21,253,0.12) 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
      {/* Top + bottom gradient lines */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(116,21,253,0.4),rgba(54,194,254,0.4),transparent)" }} aria-hidden="true" />

      <div className="section-container relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p className="tag justify-center mb-8">Ready to scale?</p>
          <h2 id="cta-heading" className="font-bold text-white mb-8 leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            Start with a free{" "}
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#3D5BFD,#0A94FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Growth Audit.
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed mb-14 max-w-2xl mx-auto">
            Tell us about your business, your current ad spend, and your growth goals.
            We&apos;ll audit your acquisition system and tell you exactly where you&apos;re
            leaving money on the table — free, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/free-growth-audit"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#7415FD 0%,#A838FD 40%,#3D5BFD 80%)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 60px rgba(116,21,253,0.45)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              Get Free Growth Audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link href="/book-a-call"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-white/70 font-semibold text-base border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300">
              <Phone size={17} aria-hidden="true" />
              Book a Discovery Call
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/25">
            {["No commitment required", "Delivered within 48 hours", "Actionable, specific recommendations"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
