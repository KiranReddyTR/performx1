import type { Metadata } from "next";
import { CheckCircle2, Clock, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Book a Discovery Call — PerformX",
  description: "Schedule a 30-minute discovery call with the PerformX team.",
};

const points = [
  "30 minutes — no fluff, no pitch deck",
  "We'll audit what you share on the call in real time",
  "Video or phone — your preference",
  "No obligation, no hard sell",
];

export default function BookACallPage() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <ScrollReveal className="lg:sticky lg:top-32">
            <p className="tag mb-8">Discovery call</p>
            <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.25rem,5vw,4rem)" }}>
              Let&apos;s talk about{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                your growth.
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed mb-10">
              A 30-minute call to understand your business, your current acquisition challenges, and whether PerformX is the right partner to help you scale.
            </p>
            <div className="space-y-4 mb-10">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: "#36C2FE" }} className="flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white/60">{p}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="p-6 rounded-2xl" style={{ background: "rgba(116,21,253,0.06)", border: "1px solid rgba(116,21,253,0.18)" }}>
              <p className="text-sm font-bold text-white mb-4">Can&apos;t wait? Reach us directly.</p>
              <div className="space-y-3">
                <a href="mailto:rishigoswami2234@gmail.com" className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(116,21,253,0.15)", border: "1px solid rgba(116,21,253,0.3)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7415FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  rishigoswami2234@gmail.com
                </a>
                <a href="https://wa.me/918839685579" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </span>
                  +91 88396 85579 (WhatsApp)
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Calendar embed placeholder */}
          <div className="rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[500px]"
            style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(116,21,253,0.12)", border: "1.5px solid rgba(116,21,253,0.28)" }}>
              <Phone size={28} style={{ color: "#7415FD" }} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Booking Calendar</h2>
            <p className="text-sm text-white/35 mb-8 max-w-xs leading-relaxed">
              Calendar booking integration is being configured. In the meantime, book directly via email or WhatsApp.
            </p>
            <div className="space-y-3 w-full max-w-xs">
              <a href="mailto:rishigoswami2234@gmail.com?subject=Discovery%20Call%20Request"
                className="flex items-center justify-center w-full py-4 rounded-2xl text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
                Email to Book a Call
              </a>
              <a href="https://wa.me/918839685579?text=Hi%20PerformX%2C%20I%27d%20like%20to%20book%20a%20discovery%20call."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 rounded-2xl text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "#25D366" }}>
                WhatsApp to Schedule
              </a>
            </div>
            <p className="text-xs text-white/15 mt-6 italic">
              [INTEGRATION PENDING: Replace with Calendly/Cal.com embed]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
