import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { NewsletterInline } from "@/components/forms/NewsletterInline";

export const metadata: Metadata = {
  title: "Resources & Insights — PerformX",
  description: "Performance marketing insights, guides and case studies from the PerformX team.",
};

const topics = ["Paid Media Strategy","Performance Creative","CRO & Landing Pages","Attribution & Tracking","CRM & Automation","D2C Growth","Real Estate Lead Gen","Email & WhatsApp Marketing"];

const coming = [
  { title: "The Complete Guide to Performance Creative in 2025", tag: "Creative" },
  { title: "Why Your Meta ROAS Is Dropping — And How to Fix It", tag: "Meta Ads" },
  { title: "First-Party Data Setup: GA4 + Meta CAPI + Server-Side Tagging", tag: "Tracking" },
  { title: "Building a D2C Acquisition System From Scratch", tag: "D2C Growth" },
  { title: "WhatsApp Marketing Automation: India & UAE Playbook", tag: "Automation" },
  { title: "Real Estate Lead Gen: From Broad Awareness to Qualified Enquiry", tag: "Real Estate" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="section-container">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="tag mb-8">Resources</p>
          <h1 className="font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            Performance marketing{" "}
            <span style={{ background: "linear-gradient(90deg,#7415FD,#A838FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              insights.
            </span>
          </h1>
          <p className="text-lg text-white/40 leading-relaxed">Practical guides, frameworks, and commentary on paid media, conversion optimisation, attribution, and customer acquisition — from the team that builds acquisition systems daily.</p>
        </ScrollReveal>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-16">
          {topics.map(t => (
            <span key={t} className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide text-white/40" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>{t}</span>
          ))}
        </div>

        {/* Coming soon articles */}
        <div className="mb-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/20 mb-8">Coming soon</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coming.map((a) => (
              <div key={a.title} className="p-7 rounded-2xl" style={{ background: "#0C0C10", border: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/25 mb-4 block">{a.tag}</span>
                <h3 className="text-sm font-bold text-white/60 leading-snug">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="p-10 rounded-2xl text-center" style={{ background: "rgba(116,21,253,0.05)", border: "1px solid rgba(116,21,253,0.15)" }}>
          <h2 className="text-2xl font-bold text-white mb-3">Get notified when we publish.</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto text-sm">Performance marketing tactics, not generic content. No spam. Unsubscribe anytime.</p>
          <div className="max-w-md mx-auto">
            <NewsletterInline />
          </div>
        </div>
      </div>
    </div>
  );
}
