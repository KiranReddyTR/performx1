import { AlertTriangle, TrendingDown, Eye, Layers } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const problems = [
  {
    icon: TrendingDown,
    title: "Rising CAC with no system to fix it",
    description:
      "Ad costs increase every year. Brands running isolated campaigns without a full-funnel system see cost-per-acquisition climb until campaigns become unprofitable — and have no data to know why.",
  },
  {
    icon: Eye,
    title: "Tracking gaps destroying your data",
    description:
      "iOS 14+, cookie deprecation, and cross-channel journeys have broken most advertising measurement. If your attribution is wrong, every decision you make is wrong.",
  },
  {
    icon: Layers,
    title: "Creative fatigue killing ROAS",
    description:
      "Running the same creative for 4–6 weeks destroys performance. Most brands don't have a systematic creative testing process, so they're perpetually surprised when ROAS drops.",
  },
  {
    icon: AlertTriangle,
    title: "Weak funnels wasting your media spend",
    description:
      "Sending paid traffic to your homepage converts at 0.5–2%. A conversion-optimised landing page converts at 4–12%. The difference is entirely your landing page, not your ads.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-section" aria-labelledby="problem-heading">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
          <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">
            Why campaigns fail
          </p>
          <h2 id="problem-heading" className="text-display-md font-bold text-white mb-6">
            Isolated ad campaigns don't produce{" "}
            <GradientText>sustainable growth.</GradientText>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Running Meta Ads or Google Ads in isolation — without conversion infrastructure, accurate
            tracking, and a retention system — is the most common reason brands plateau or go
            unprofitable. You're not buying growth, you're buying traffic.
          </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-stagger="80">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="card-dark p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-500/15 transition-colors">
                <problem.icon size={22} className="text-red-400" aria-hidden="true" />
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
