import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function FinalCTA() {
  return (
    <section className="py-section relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-azure/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[160px] bg-brand-violet pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-6">Ready to scale?</p>
          <h2 id="cta-heading" className="text-display-lg font-bold text-white mb-6">
            Start with a free{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Growth Audit.</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us about your business, your current advertising spend, and your growth goals.
            We'll audit your acquisition system and tell you exactly where you're leaving money
            on the table — free, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="primary" size="lg" href="/free-growth-audit">
              Get Free Growth Audit
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" href="/book-a-call">
              <Phone size={16} aria-hidden="true" />
              Book a Discovery Call
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30">
            {["No commitment required", "Delivered within 48 hours", "Actionable recommendations"].map((t) => (
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
