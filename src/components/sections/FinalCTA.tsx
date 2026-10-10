import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#7415FD 0%,#A838FD 30%,#3D5BFD 60%,#0A94FD 80%,#36C2FE 100%)" }} aria-hidden="true" />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#010002]/75" aria-hidden="true" />
      {/* Grain on top */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
      }} aria-hidden="true" />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />

      <div className="section-container relative z-10 py-40">
        <div className="max-w-5xl mx-auto">
          {/* Giant text */}
          <div data-gsap="fadeUp">
            <p className="tag mb-10">Ready to scale?</p>
            <h2 id="cta-heading" className="font-black text-white leading-[0.88] tracking-[-0.05em] mb-12"
              style={{ fontSize: "clamp(3.5rem,10vw,9rem)" }}>
              Start with a<br />free audit.
            </h2>
          </div>

          {/* Sub + CTA side by side */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end" data-gsap="fadeUp" data-delay="0.15">
            <p className="text-xl text-white/50 leading-relaxed max-w-xl">
              Tell us about your business and your current ad spend. We&apos;ll audit your acquisition system and show you exactly where you&apos;re leaving money on the table — free, no obligation, delivered in 48 hours.
            </p>
            <div className="flex flex-col gap-3 shrink-0">
              <Link href="/free-growth-audit"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-[#010002] font-black text-lg transition-all duration-300 hover:scale-[1.04] whitespace-nowrap"
                style={{ background: "#ffffff" }}>
                Get Free Growth Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/book-a-call"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-white/70 font-semibold text-base border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 whitespace-nowrap">
                Book a Discovery Call
              </Link>
            </div>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }} data-gsap="fade" data-delay="0.3">
            {["No commitment required", "Delivered within 48 hours", "Actionable, specific recommendations", "India · UAE · USA · UK"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
