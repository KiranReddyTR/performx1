"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "What makes PerformX different from other digital marketing agencies?", a: "Most agencies run campaigns in isolation — they manage your ads but leave conversion, tracking, and retention to you. PerformX builds a complete customer acquisition system where every component is connected. We own the full funnel from creative to CRM, which means we're accountable to business outcomes like CAC and revenue — not just ad metrics like CTR or impressions." },
  { q: "What types of businesses do you work with?", a: "We work with established businesses ready to invest seriously in customer acquisition — primarily e-commerce and D2C brands, real estate developers, education institutions, healthcare brands, and high-ticket service businesses. We're best suited for founders and marketing leaders who want a strategic partner, not just an execution vendor. Businesses spending ₹50K+ per month on advertising, or ready to." },
  { q: "Do you guarantee a specific ROAS or number of leads?", a: "No — and you should be wary of any agency that does. Advertising performance depends on your product, pricing, market competition, and offer. What we guarantee is a transparent, systematic process. Our verified case studies show results ranging from 7.9X ROAS to 90% CPL reduction — achieved through systems, not luck." },
  { q: "Which advertising platforms do you manage?", a: "We manage Meta Ads (Facebook and Instagram), Google Ads (Search, Shopping, Performance Max, Display, YouTube), TikTok Ads, and LinkedIn Ads. We recommend platforms based on where your customers actually are and what your unit economics support — not based on our preferences or margins." },
  { q: "How long before we see results?", a: "The testing and validation phase typically takes 4–8 weeks before we have reliable data to optimise from. Significant ROAS improvement and CAC reduction usually follows in months 2–4 as we scale what's working. Building a full acquisition system with retention, tracking, and automation is a 3–6 month process." },
  { q: "Do you work with international clients outside India?", a: "Yes. While our core market is India, we actively work with clients in the UAE, USA, and UK. International campaigns require specific platform compliance, creative localisation, and market knowledge — all of which we have experience with." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32" aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-[380px_1fr] gap-20">
          {/* Left sticky header */}
          <ScrollReveal className="lg:sticky lg:top-32 self-start">
            <p className="tag mb-6">Common questions</p>
            <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Questions we get{" "}
              <span style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                asked often.
              </span>
            </h2>
            <p className="text-base text-white/35 leading-relaxed">Honest answers to the questions that actually matter when choosing a performance marketing partner.</p>
          </ScrollReveal>

          {/* Right accordions */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: open === i ? "rgba(255,255,255,0.03)" : "transparent",
                  border: open === i ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(255,255,255,0.05)",
                }}>
                <button
                  className="w-full flex items-center justify-between gap-6 p-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-a-${i}`}
                  id={`faq-q-${i}`}
                >
                  <span className={cn("text-sm font-semibold leading-snug transition-colors", open === i ? "text-white" : "text-white/60")}>
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center transition-colors"
                    style={{ background: open === i ? "rgba(116,21,253,0.15)" : "rgba(255,255,255,0.04)", border: `1px solid ${open === i ? "rgba(116,21,253,0.3)" : "rgba(255,255,255,0.06)"}` }}>
                    {open === i
                      ? <Minus size={13} style={{ color: "#7415FD" }} aria-hidden="true" />
                      : <Plus size={13} className="text-white/30" aria-hidden="true" />}
                  </span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={cn("overflow-hidden transition-all duration-300", open === i ? "max-h-96 pb-6 px-6" : "max-h-0")}
                >
                  <p className="text-sm text-white/45 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
