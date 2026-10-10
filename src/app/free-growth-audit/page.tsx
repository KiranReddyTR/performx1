import type { Metadata } from "next";
import { CheckCircle2, Clock, Zap } from "lucide-react";
import { GrowthAuditForm } from "@/components/forms/GrowthAuditForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Free Growth Audit — PerformX",
  description: "Get a free customer acquisition audit. We review your paid media, conversion funnel, and tracking — then tell you exactly where you're leaving growth on the table.",
};

const included = [
  "Paid media account review (Meta, Google, or both)",
  "Landing page and conversion funnel assessment",
  "Tracking and attribution gap analysis",
  "Top 3 growth opportunities with specific recommendations",
  "Estimated impact on CAC and ROAS",
];

export default function FreeGrowthAuditPage() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="tag mb-8">Free, no obligation</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.25rem,5vw,4rem)" }}>
              Get your free{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Growth Audit.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed mb-10">
              Tell us about your business and current advertising setup. We&apos;ll audit your acquisition system and deliver specific, actionable recommendations — at no cost.
            </p>

            {/* Included */}
            <div className="space-y-3 mb-10">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} style={{ color: "#36C2FE" }} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl" style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Clock size={18} style={{ color: "#7415FD" }} className="mb-3" aria-hidden="true" />
                <div className="text-2xl font-bold text-white mb-1">48 hrs</div>
                <p className="text-xs text-white/35">Delivered within</p>
              </div>
              <div className="p-5 rounded-2xl" style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Zap size={18} style={{ color: "#36C2FE" }} className="mb-3" aria-hidden="true" />
                <div className="text-2xl font-bold text-white mb-1">Free</div>
                <p className="text-xs text-white/35">No commitment</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <GrowthAuditForm />
        </div>
      </div>
    </div>
  );
}
