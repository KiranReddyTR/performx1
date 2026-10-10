import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers — PerformX",
  description: "Join the PerformX team. We're building a performance marketing agency for the systems era.",
};

const values = ["Results over relationships", "Data before opinion", "Radical transparency", "Systems thinking"];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-20">
          <p className="tag mb-8">Careers</p>
          <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            Build the future of{" "}
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              performance marketing.
            </span>
          </h1>
          <p className="text-lg text-white/40 leading-relaxed">We&apos;re a small, focused team doing serious work. If you&apos;re obsessed with performance marketing, data, and building systems that produce real business outcomes — we&apos;d like to hear from you.</p>
        </ScrollReveal>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {values.map((v, i) => {
            const colors = ["#7415FD","#A838FD","#3D5BFD","#0A94FD"];
            return (
              <div key={v} className="p-6 rounded-2xl" style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-5xl font-black mb-4 leading-none" style={{ color: colors[i], opacity: 0.08 }} aria-hidden="true">
                  {String(i+1).padStart(2,"0")}
                </div>
                <p className="text-sm font-bold text-white/70">{v}</p>
              </div>
            );
          })}
        </div>

        {/* No open roles */}
        <div className="p-12 rounded-2xl text-center" style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl"
            style={{ background: "rgba(116,21,253,0.10)", border: "1.5px solid rgba(116,21,253,0.25)" }}>
            🚀
          </div>
          <h2 className="text-xl font-bold text-white mb-4">No open roles right now</h2>
          <p className="text-white/40 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
            We don&apos;t always have open positions, but we&apos;re always interested in hearing from exceptional people — performance media buyers, creative strategists, CRO specialists, data analysts.
          </p>
          <Link href="mailto:rishigoswami2234@gmail.com?subject=Careers%20at%20PerformX"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
            Send us a note
          </Link>
        </div>
      </div>
    </div>
  );
}
