"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What makes PerformX different from other digital marketing agencies?", a: "Most agencies run campaigns in isolation. PerformX builds complete customer acquisition systems — we own creative, paid media, conversion, tracking, and CRM together. We're accountable to business outcomes like CAC and revenue, not just ad metrics like CTR." },
  { q: "What types of businesses do you work with?", a: "Established businesses investing seriously in customer acquisition — primarily e-commerce and D2C brands, real estate developers, education institutions, healthcare brands, and high-ticket service businesses. Typically ₹50K+ per month in advertising, or ready to." },
  { q: "Do you guarantee a specific ROAS or number of leads?", a: "No — and you should be wary of any agency that does. What we guarantee is a transparent, systematic process. Our verified case studies show 7.9X ROAS to 90% CPL reduction — achieved through systems, not luck." },
  { q: "Which advertising platforms do you manage?", a: "Meta Ads (Facebook & Instagram), Google Ads (Search, Shopping, Performance Max, YouTube), TikTok Ads, and LinkedIn Ads. We recommend platforms based on where your customers are and what your unit economics support." },
  { q: "How long before we see results?", a: "Testing phase is 4–8 weeks. Significant ROAS and CAC improvement usually follows in months 2–4. Building a full acquisition system with retention and automation is a 3–6 month process. We're transparent about this from day one." },
  { q: "Do you work with international clients?", a: "Yes. Core market is India, but we actively work with clients in the UAE, USA, and UK. International campaigns require specific compliance, creative localisation, and market knowledge — all of which we have." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 overflow-hidden" style={{ background: "#08080C" }} aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-[400px_1fr] gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-32 self-start" data-gsap="fadeUp">
            <p className="tag mb-6">Common questions</p>
            <h2 id="faq-heading" className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
              Questions<br />
              <span style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                answered.
              </span>
            </h2>
            <p className="text-base text-white/35 leading-relaxed">Honest answers to the questions that actually matter when choosing a performance marketing partner.</p>
          </div>

          {/* Right */}
          <div className="space-y-2" data-gsap-stagger="0.06">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: open === i ? "rgba(255,255,255,0.03)" : "transparent",
                  border: open === i ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(255,255,255,0.05)",
                }}>
                <button
                  className="w-full flex items-center justify-between gap-6 p-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-${i}`}
                >
                  <span className="text-sm font-bold leading-snug transition-colors" style={{ color: open === i ? "#fff" : "rgba(255,255,255,0.6)" }}>
                    {faq.q}
                  </span>
                  <span className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: open === i ? "rgba(116,21,253,0.15)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${open === i ? "rgba(116,21,253,0.3)" : "rgba(255,255,255,0.06)"}`,
                    }}>
                    {open === i
                      ? <Minus size={13} style={{ color: "#7415FD" }} aria-hidden="true" />
                      : <Plus size={13} className="text-white/30" aria-hidden="true" />}
                  </span>
                </button>
                <div id={`faq-${i}`} role="region"
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? "400px" : "0" }}>
                  <div className="px-6 pb-6">
                    <p className="text-sm text-white/45 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
