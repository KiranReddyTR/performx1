import { TrendingDown, Eye, Layers, AlertTriangle } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const problems = [
  {
    icon: TrendingDown,
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.18)",
    title: "Rising CAC with no system to fix it",
    description: "Ad costs increase every year. Brands running isolated campaigns without a full-funnel system see cost-per-acquisition climb until campaigns become unprofitable — with no data to diagnose why.",
  },
  {
    icon: Eye,
    color: "#F97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.18)",
    title: "Tracking gaps destroying your data",
    description: "iOS 14+, cookie deprecation, and cross-channel journeys have broken most advertising measurement. If your attribution is wrong, every decision made from it is wrong.",
  },
  {
    icon: Layers,
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.18)",
    title: "Creative fatigue killing ROAS",
    description: "The same creative running for 4–6 weeks destroys performance. Most brands don't have a systematic creative testing process — so they're perpetually surprised when ROAS drops.",
  },
  {
    icon: AlertTriangle,
    color: "#F97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.18)",
    title: "Weak funnels wasting your media spend",
    description: "Sending paid traffic to your homepage converts at 0.5–2%. A dedicated, conversion-optimised landing page converts at 4–12%. That gap is entirely your landing page — not your ads.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-32" aria-labelledby="problem-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left copy */}
          <ScrollReveal>
            <p className="tag mb-6">Why campaigns fail</p>
            <h2 id="problem-heading" className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Isolated ad campaigns don&apos;t produce{" "}
              <span style={{
                background: "linear-gradient(90deg,#7415FD,#A838FD,#3D5BFD,#0A94FD,#36C2FE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                sustainable growth.
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-10">
              Running Meta Ads or Google Ads without conversion infrastructure, accurate tracking,
              and a retention system is the most common reason brands plateau or go unprofitable.
              You&apos;re not buying growth — you&apos;re buying traffic.
            </p>
            {/* Divider stat */}
            <div className="flex items-center gap-6 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <div className="text-4xl font-bold mb-1" style={{
                  background: "linear-gradient(90deg,#7415FD,#36C2FE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>89%</div>
                <p className="text-xs text-white/30 font-medium uppercase tracking-wider">of brands</p>
              </div>
              <div className="w-px h-12 bg-white/10" aria-hidden="true" />
              <p className="text-sm text-white/40 leading-relaxed">have at least one critical gap in their acquisition system — usually tracking, landing page conversion, or creative refresh cadence.</p>
            </div>
          </ScrollReveal>

          {/* Right problems grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-stagger="70">
            {problems.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
                style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                  <p.icon size={18} style={{ color: p.color }} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
