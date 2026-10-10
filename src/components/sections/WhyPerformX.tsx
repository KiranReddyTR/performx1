import { BarChart3, Database, Layers3, Eye, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const pillars = [
  { icon: Layers3, color: "#7415FD", n: "01", title: "Systems, Not Campaigns", description: "We don't run one-off campaigns. We build acquisition systems where every component compounds results over time." },
  { icon: Database, color: "#A838FD", n: "02", title: "Data Before Opinion",   description: "Every decision is backed by data. We test, measure, and let numbers guide the next move — never gut feel." },
  { icon: Eye,      color: "#3D5BFD", n: "03", title: "Full-Funnel Ownership", description: "We own the entire journey from ad creative to closed sale. One team, full accountability — no finger-pointing." },
  { icon: BarChart3,color: "#0A94FD", n: "04", title: "Radical Transparency",  description: "You see everything — spend, performance, CAC, ROAS, what's working and what isn't. No black boxes." },
  { icon: Zap,      color: "#36C2FE", n: "05", title: "Creative That Converts", description: "Our performance creative is built from audience insight and channel data — not a creative director's preference." },
];

export function WhyPerformX() {
  return (
    <section className="py-32" style={{ background: "#08080C" }} aria-labelledby="why-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-20">
          <p className="tag mb-6">Why PerformX</p>
          <h2 id="why-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Five things that make us{" "}
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              fundamentally different.
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed">
            We&apos;re not a social media agency, not a creative studio, not a media buying shop.
            We&apos;re a customer acquisition systems firm.
          </p>
        </ScrollReveal>

        {/* Big feature layout: 2 + 3 grid */}
        <div className="space-y-5">
          {/* Top row — 2 large cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {pillars.slice(0, 2).map((p) => (
              <div key={p.title} className="relative p-10 rounded-2xl group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${p.color}25`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                {/* Background number */}
                <div className="absolute top-6 right-8 text-8xl font-black leading-none select-none pointer-events-none" style={{ color: p.color, opacity: 0.04 }} aria-hidden="true">{p.n}</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.color}12`, border: `1.5px solid ${p.color}30` }}>
                  <p.icon size={26} style={{ color: p.color }} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          {/* Bottom row — 3 smaller cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.slice(2).map((p) => (
              <div key={p.title} className="relative p-8 rounded-2xl group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${p.color}25`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <div className="absolute top-4 right-6 text-7xl font-black leading-none select-none pointer-events-none" style={{ color: p.color, opacity: 0.04 }} aria-hidden="true">{p.n}</div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.color}12`, border: `1.5px solid ${p.color}30` }}>
                  <p.icon size={22} style={{ color: p.color }} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
