import { TrendingDown, Eye, Layers, AlertTriangle } from "lucide-react";

const problems = [
  { icon: TrendingDown, color: "#EF4444", title: "Rising CAC with no system to fix it",      description: "Ad costs increase every year. Without a full-funnel system, brands see CAC climb until campaigns become unprofitable — with no data to explain why." },
  { icon: Eye,          color: "#F97316", title: "Tracking gaps destroying your data",       description: "iOS 14+, cookie deprecation, and cross-channel journeys have broken most attribution. Wrong data produces wrong decisions every time." },
  { icon: Layers,       color: "#EF4444", title: "Creative fatigue killing ROAS",            description: "The same creative for 4–6 weeks destroys performance. Without a testing system, brands are perpetually surprised when ROAS drops." },
  { icon: AlertTriangle,color: "#F97316", title: "Weak funnels wasting your media spend",   description: "Homepage conversion rate: 0.5–2%. Dedicated landing page: 4–12%. That gap costs you on every single click your campaigns generate." },
];

export function ProblemSection() {
  return (
    <section className="py-32 overflow-hidden" aria-labelledby="problem-heading">
      <div className="section-container">
        {/* Asymmetric layout — text left, big number right */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start mb-20">
          <div data-gsap="fadeUp">
            <p className="tag mb-6">Why campaigns fail</p>
            <h2 id="problem-heading" className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(3rem,7vw,6.5rem)" }}>
              Isolated ads<br />
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                don&apos;t scale.
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed max-w-lg">
              Running paid ads without conversion infrastructure, accurate tracking, and a retention system is the most common reason brands plateau or go unprofitable.
            </p>
          </div>

          {/* Big decorative stat */}
          <div data-gsap="fadeLeft" data-delay="0.2" className="hidden lg:flex flex-col items-end justify-start pt-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-3 text-right">of brands have at least one critical acquisition gap</div>
            <div className="font-black leading-none text-right" style={{
              fontSize: "clamp(6rem,14vw,12rem)",
              background: "linear-gradient(135deg,rgba(116,21,253,0.15),rgba(54,194,254,0.15))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "1px rgba(116,21,253,0.2)",
            }}>
              89%
            </div>
          </div>
        </div>

        {/* Problem cards — 2x2 grid with slight offset */}
        <div className="grid sm:grid-cols-2 gap-4" data-gsap-stagger="0.08">
          {problems.map((p, i) => (
            <div key={p.title}
              className={`p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1 ${i % 2 === 1 ? "sm:mt-8" : ""}`}
              style={{ background: `${p.color}07`, border: `1px solid ${p.color}18` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                <p.icon size={20} style={{ color: p.color }} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-white mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
