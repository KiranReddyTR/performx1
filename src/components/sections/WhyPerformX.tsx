import { BarChart3, Database, Layers3, Eye, Zap } from "lucide-react";

const pillars = [
  { icon: Layers3,  color: "#7415FD", n: "01", title: "Systems, Not Campaigns",   description: "We build acquisition systems where every component compounds results over time — not isolated campaigns that plateau." },
  { icon: Database, color: "#A838FD", n: "02", title: "Data Before Opinion",       description: "Every decision is backed by data. We test, measure, and let numbers guide the next move." },
  { icon: Eye,      color: "#3D5BFD", n: "03", title: "Full-Funnel Ownership",     description: "We own the entire journey from ad creative to closed sale. One team, full accountability." },
  { icon: BarChart3,color: "#0A94FD", n: "04", title: "Radical Transparency",      description: "You see everything — spend, CAC, ROAS, what's working and what isn't. No black boxes." },
  { icon: Zap,      color: "#36C2FE", n: "05", title: "Creative That Converts",    description: "Our performance creative is built from audience insight and data — not aesthetic preference." },
];

export function WhyPerformX() {
  return (
    <section className="py-32 overflow-hidden" style={{ background: "#08080C" }} aria-labelledby="why-heading">
      <div className="section-container">

        {/* Header — full width dramatic */}
        <div className="mb-20" data-gsap="fadeUp">
          <p className="tag mb-6">Why PerformX</p>
          <h2 id="why-heading" className="font-black text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}>
            Not an agency.<br />
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#3D5BFD,#0A94FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              A system builder.
            </span>
          </h2>
        </div>

        {/* Asymmetric grid — feature 2 large + 3 small */}
        <div className="space-y-4" data-gsap-stagger="0.07">

          {/* Row 1 — 2 big cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {pillars.slice(0, 2).map((p) => (
              <div key={p.title} className="relative p-10 rounded-3xl group overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                {/* Decorative number */}
                <span className="absolute top-6 right-8 font-black leading-none select-none pointer-events-none text-[7rem]"
                  style={{ color: p.color, opacity: 0.04, lineHeight: 1 }} aria-hidden="true">{p.n}</span>
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,transparent,${p.color},transparent)` }} aria-hidden="true" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${p.color}12`, border: `1.5px solid ${p.color}30` }}>
                  <p.icon size={26} style={{ color: p.color }} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 cards, middle offset up */}
          <div className="grid md:grid-cols-3 gap-4">
            {pillars.slice(2).map((p, i) => (
              <div key={p.title}
                className={`relative p-8 rounded-3xl group overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${i === 1 ? "md:-mt-8" : ""}`}
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="absolute top-4 right-6 font-black leading-none select-none pointer-events-none text-[5.5rem]"
                  style={{ color: p.color, opacity: 0.04, lineHeight: 1 }} aria-hidden="true">{p.n}</span>
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,transparent,${p.color},transparent)` }} aria-hidden="true" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
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
