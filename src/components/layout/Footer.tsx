import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NewsletterInline } from "@/components/forms/NewsletterInline";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Meta Ads",               href: "/services/meta-ads" },
      { label: "Google Ads",             href: "/services/google-ads" },
      { label: "Performance Creative",   href: "/services/performance-creative" },
      { label: "Landing Pages & CRO",    href: "/services/landing-pages-cro" },
      { label: "CRM & Automation",       href: "/services/crm-automation" },
      { label: "Tracking & Analytics",   href: "/services/tracking-analytics" },
      { label: "WhatsApp Marketing",     href: "/services/whatsapp-marketing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About PerformX",   href: "/about" },
      { label: "Why PerformX",     href: "/why-performx" },
      { label: "Our Process",      href: "/process" },
      { label: "Case Studies",     href: "/case-studies" },
      { label: "Industries",       href: "/industries" },
      { label: "Pricing",          href: "/pricing" },
      { label: "Careers",          href: "/careers" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "E-commerce & D2C",  href: "/industries/ecommerce-d2c" },
      { label: "Real Estate",       href: "/industries/real-estate" },
      { label: "Education",         href: "/industries/education" },
      { label: "Healthcare",        href: "/industries/healthcare-wellness" },
      { label: "Automobile",        href: "/industries/automobile" },
      { label: "Travel & Events",   href: "/industries/travel-events" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#010002", borderTop: "1px solid rgba(255,255,255,0.05)" }} role="contentinfo">
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(116,21,253,0.4),rgba(54,194,254,0.4),transparent)" }} aria-hidden="true" />

      {/* Newsletter band */}
      <div className="section-container py-20" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="tag mb-4">Stay ahead</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight leading-tight">
              Growth insights,<br />
              <span style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                direct to your inbox.
              </span>
            </h2>
            <p className="text-sm text-white/35">Performance marketing tactics, not generic content. Unsubscribe anytime.</p>
          </div>
          <div>
            <NewsletterInline />
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Brand col */}
          <div className="lg:col-span-2 space-y-7">
            <Logo size="md" />
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              We build profitable customer acquisition systems — connecting creative, paid media,
              conversion, data and automation to measurable business growth.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Performance That Scales
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href="mailto:rishigoswami2234@gmail.com" className="flex items-center gap-3 text-sm text-white/35 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(116,21,253,0.12)", border: "1px solid rgba(116,21,253,0.25)" }}>
                  <Mail size={14} className="text-brand-violet" aria-hidden="true" />
                </span>
                rishigoswami2234@gmail.com
              </a>
              <a href="tel:+918839685579" className="flex items-center gap-3 text-sm text-white/35 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(10,148,253,0.12)", border: "1px solid rgba(10,148,253,0.25)" }}>
                  <Phone size={14} className="text-brand-azure" aria-hidden="true" />
                </span>
                +91 88396 85579
              </a>
              <a href="https://instagram.com/performex.agency" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/35 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,56,253,0.12)", border: "1px solid rgba(168,56,253,0.25)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </span>
                @performex.agency
              </a>
            </div>

            {/* Geographic */}
            <p className="text-xs text-white/20">India · UAE · USA · UK</p>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-6">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© {new Date().getFullYear()} PerformX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/20 hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-white/20 hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg,transparent,rgba(116,21,253,0.3),rgba(54,194,254,0.3),transparent)" }} aria-hidden="true" />
    </footer>
  );
}
