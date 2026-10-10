import { TrendingDown, Eye, Layers, AlertTriangle } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const problems = [
  {
    icon: TrendingDown,
    color: "#EF4444",
    title: "Rising CAC with no system to fix it",
    description: "Ad costs increase every year. Brands running isolated campaigns without a full-funnel system see cost-per-acquisition climb until campaigns become unprofitable — and have no data to know why.",
  },
  {
    icon: Eye,
    color: "#F97316",
    title: "Tracking gaps destroying your data",
    description: "iOS 14+, cookie deprecation, and cross-channel journeys have broken most advertising measurement. If your attribution is wrong, every decision you make based on it is wrong.",
  },
  {
    icon: Layers,
    color: "#EF4444",
    title: "Creative fatigue killing ROAS",
    description: "Running the same creative for 4–6 weeks destroys performance. Most brands don't have a systematic creative testing process — so they're perpetually surprised when ROAS drops.",
  },
  {
    icon: AlertTriangle,
    color: "#F97316",
    title: "Weak funnels wasting your media spend",
    description: "Sending paid traffic to your homepage converts at 0.5–2%. A conversion-optimised landing page converts at 4–12%. The difference is entirely your landing page — not your ads.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-section" aria-labelledby="problem-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">Why campaigns fail</p>
          <h2 id="problem-heading" className="text-display-md font-bold text-white mb-6">
            Isolated ad campaigns don&apos;t produce{" "}
            <GradientText>sustainable growth.</GradientText>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Running Meta Ads or Google Ads in isolation — without conversion infrastructure,
            accurate tracking, and a retention system — is the most common reason brands plateau
            or go unprofitable. You&apos;re not buying growth, you&apos;re buying traffic.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6" data-stagger="80">
          {problems.map((problem) => (
            <div key={problem.title} className="card-dark p-8 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${problem.color}12`, border: `1px solid ${problem.color}30` }}>
                <problem.icon size={22} style={{ color: problem.color }} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
