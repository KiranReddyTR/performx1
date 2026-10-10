"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What makes PerformX different from other digital marketing agencies?",
    answer: "Most agencies run campaigns in isolation — they manage your ads, but leave conversion, tracking, and retention to you. PerformX builds a complete customer acquisition system where every component is connected. We own the full funnel from creative to CRM, which means we're accountable to business outcomes like CAC and revenue, not just ad metrics like CTR or impressions.",
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with established businesses that are ready to invest seriously in customer acquisition — primarily e-commerce and D2C brands, real estate developers, education institutions, healthcare brands, and high-ticket service businesses. We're best suited for founders and marketing leaders who understand performance marketing and want a strategic partner, not just an execution vendor.",
  },
  {
    question: "Do you guarantee a specific ROAS or number of leads?",
    answer: "No — and you should be wary of any agency that does. Advertising performance depends on your product, pricing, market competition, and offer. What we guarantee is a transparent, systematic process. Our verified case studies show results ranging from 7.9X ROAS to 90% CPL reduction — achieved through systems, not luck. We share exactly what we're testing, what the data shows, and what we're doing next.",
  },
  {
    question: "Which advertising platforms do you manage?",
    answer: "We manage Meta Ads (Facebook and Instagram), Google Ads (Search, Shopping, Performance Max, Display, YouTube), TikTok Ads, and LinkedIn Ads. We recommend platforms based on where your customers actually are and what your unit economics support — not based on which platforms our team prefers or where margins are highest for us.",
  },
  {
    question: "How long before we see results?",
    answer: "The testing and validation phase typically takes 4–8 weeks before we have reliable data to optimise from. Significant ROAS improvement and CAC reduction usually follows in months 2–4 as we scale what's working. Building a full acquisition system — with retention, tracking, and automation — is a 3–6 month process. We're transparent about this timeline from day one.",
  },
  {
    question: "Do you work with international clients outside India?",
    answer: "Yes. While our core market is India, we work with clients in the UAE, USA, and UK. International campaigns require specific platform compliance, creative localisation, and market knowledge — all of which we have.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-section bg-[#0A0A0C]" aria-labelledby="faq-heading">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Common questions</p>
          <h2 id="faq-heading" className="text-display-md font-bold text-white">
            Questions we get <GradientText>asked often.</GradientText>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className={cn("border rounded-2xl overflow-hidden transition-all duration-300",
                open === i ? "border-white/15 bg-white/[0.03]" : "border-white/[0.06] hover:border-white/10"
              )}>
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
                id={`faq-btn-${i}`}
              >
                <span className={cn("text-sm font-semibold transition-colors leading-relaxed", open === i ? "text-white" : "text-white/70")}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border border-white/10">
                  {open === i
                    ? <Minus size={13} className="text-brand-azure" aria-hidden="true" />
                    : <Plus size={13} className="text-white/30" aria-hidden="true" />}
                </span>
              </button>
              <div
                id={`faq-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={cn("overflow-hidden transition-all duration-300", open === i ? "max-h-96 pb-6 px-6" : "max-h-0")}
              >
                <p className="text-sm text-white/50 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
