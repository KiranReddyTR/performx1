"use client";

import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const contacts = [
  { icon: Mail,  color: "#7415FD", label: "Email",             val: "rishigoswami2234@gmail.com",  href: "mailto:rishigoswami2234@gmail.com" },
  { icon: Phone, color: "#0A94FD", label: "Phone / WhatsApp",  val: "+91 88396 85579",             href: "tel:+918839685579" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="section-container">
        <ScrollReveal className="max-w-2xl mb-20">
          <p className="tag mb-8">Get in touch</p>
          <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            Let&apos;s talk{" "}
            <span style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              growth.
            </span>
          </h1>
          <p className="text-lg text-white/40 leading-relaxed">Whether you&apos;re ready to start or just exploring, we&apos;re happy to have an honest conversation about your growth goals.</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact details */}
          <div className="space-y-5">
            {contacts.map((c) => (
              <a key={c.label} href={c.href}
                className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}25`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}12`, border: `1.5px solid ${c.color}28` }}>
                  <c.icon size={20} style={{ color: c.color }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-1">{c.label}</p>
                  <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{c.val}</p>
                </div>
              </a>
            ))}

            {/* Instagram */}
            <a href="https://instagram.com/performex.agency" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,56,253,0.25)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,56,253,0.12)", border: "1.5px solid rgba(168,56,253,0.28)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A838FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-1">Instagram</p>
                <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">@performex.agency</p>
              </div>
            </a>

            <div className="p-6 rounded-2xl" style={{ background: "rgba(116,21,253,0.05)", border: "1px solid rgba(116,21,253,0.15)" }}>
              <p className="text-sm font-bold text-white mb-1">WhatsApp us directly</p>
              <a href="https://wa.me/918839685579" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-azure hover:underline">+91 88396 85579</a>
              <p className="text-xs text-white/25 mt-2">India · UAE · USA · UK</p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

