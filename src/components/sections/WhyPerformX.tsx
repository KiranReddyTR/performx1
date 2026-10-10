import { BarChart3, Database, Layers3, Eye, Zap } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const pillars = [
  { icon: Layers3, color: "#7415FD", title: "Systems, Not Campaigns", description: "We don't run one-off campaigns. We build acquisition systems where every component — creative, media, conversion, tracking, and CRM — works together to compound results over time." },
  { icon: Database, color: "#A838FD", title: "Data Before Opinion", description: "Every strategic decision is backed by data. We don't have hunches about what will work — we test, measure, and let the numbers guide the next move. Your budget is never wasted on gut feel." },
  { icon: Eye, color: "#3D5BFD", title: "Full-Funnel Ownership", description: "We own the entire customer acquisition journey from ad creative to closed sale. No finger-pointing between 'the ads team' and 'the website team' — one team, full accountability." },
  { icon: BarChart3, color: "#0A94FD", title: "Radical Transparency", description: "You see everything — spend, creative performance, CAC, ROAS, what's working, what isn't, and exactly what we're doing about it. No black boxes, no agency smoke and mirrors." },
  { icon: Zap, color: "#36C2FE", title: "Creative That Converts", description: "We don't separate creative and media. Our performance creative is built from audience insight, channel knowledge, and conversion data — not from a creative director's aesthetic preference." },
];

export function WhyPerformX() {
  return (
    <section className="py-section bg-[#0A0A0C]" aria-labelledby="why-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-azure uppercase tracking-widest mb-4">Why PerformX</p>
          <h2 id="why-heading" className="text-display-md font-bold text-white mb-6">
            Five things that make us <GradientText>fundamentally different.</GradientText>
          </h2>
          <p className="text-lg text-white/50">We're not a social media agency, not a creative studio, and not a media buying shop. We're a customer acquisition systems firm — and that distinction matters.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger="80">
          {pillars.map((pillar, i) => (
            <div key={pillar.title}
              className={`card-dark p-8 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${pillar.color}15`, borderColor: `${pillar.color}40` }}>
                  <pillar.icon size={22} style={{ color: pillar.color }} aria-hidden="true" />
                </div>
                <span className="text-5xl font-black opacity-[0.05]" style={{ color: pillar.color }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
