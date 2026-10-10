"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const nav = [
  {
    label: "Services", href: "/services",
    mega: [
      { group: "Paid Media", items: [
        { label: "Meta Ads",            href: "/services/meta-ads" },
        { label: "Google Ads",          href: "/services/google-ads" },
        { label: "TikTok Ads",          href: "/services/tiktok-ads" },
        { label: "LinkedIn Ads",        href: "/services/linkedin-ads" },
        { label: "Paid Media Strategy", href: "/services/paid-media-strategy" },
      ]},
      { group: "Creative", items: [
        { label: "Performance Creative & UGC", href: "/services/performance-creative" },
        { label: "AI Video Production",        href: "/services/ai-video-creative" },
      ]},
      { group: "Conversion & Data", items: [
        { label: "Landing Pages & CRO", href: "/services/landing-pages-cro" },
        { label: "Tracking & Analytics", href: "/services/tracking-analytics" },
      ]},
      { group: "Automation", items: [
        { label: "CRM & Automation",     href: "/services/crm-automation" },
        { label: "Email Marketing",      href: "/services/email-marketing" },
        { label: "WhatsApp Marketing",   href: "/services/whatsapp-marketing" },
      ]},
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Industries", href: "/industries",
    mega: [
      { group: "Industries we serve", items: [
        { label: "E-commerce & D2C",           href: "/industries/ecommerce-d2c" },
        { label: "Real Estate",                href: "/industries/real-estate" },
        { label: "Education",                  href: "/industries/education" },
        { label: "Healthcare & Wellness",      href: "/industries/healthcare-wellness" },
        { label: "Automobile & Dealerships",   href: "/industries/automobile" },
        { label: "Travel, Events & Hospitality", href: "/industries/travel-events" },
        { label: "Jewellery, Furniture & Retail", href: "/industries/jewellery-furniture-retail" },
      ]},
    ],
  },
  {
    label: "Company", href: "/about",
    mega: [
      { group: "About", items: [
        { label: "About PerformX",    href: "/about" },
        { label: "Why PerformX",      href: "/why-performx" },
        { label: "Our Process",       href: "/process" },
        { label: "Who We Work With",  href: "/who-we-work-with" },
        { label: "Pricing",           href: "/pricing" },
        { label: "Careers",           href: "/careers" },
      ]},
    ],
  },
  { label: "Resources", href: "/resources" },
];

export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled]         = useState(false);
  const [open, setOpen]                 = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobileOpen(false); } };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);
  useEffect(() => { setMobileOpen(false); setOpen(null); }, [path]);

  const enter = (l: string) => { clearTimeout(timer.current); setOpen(l); };
  const leave = () => { timer.current = setTimeout(() => setOpen(null), 120); };
  const isAct  = (h: string) => path === h || path.startsWith(h + "/");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
        style={{
          background: scrolled ? "rgba(1,0,2,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between gap-8">
            <Logo size="md" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center" role="navigation" aria-label="Main navigation">
              {nav.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.mega && enter(item.label)}
                  onMouseLeave={leave}
                >
                  <Link href={item.href}
                    className={cn(
                      "relative flex items-center gap-1 px-4 py-2.5 text-[13px] font-medium rounded-xl transition-all duration-200",
                      isAct(item.href)
                        ? "text-white"
                        : "text-white/55 hover:text-white/90"
                    )}
                    aria-expanded={item.mega ? open === item.label : undefined}
                    aria-haspopup={item.mega ? "true" : undefined}
                  >
                    {item.label}
                    {item.mega && (
                      <ChevronDown size={12} className={cn("transition-transform duration-200 opacity-50", open === item.label && "rotate-180 opacity-100")} aria-hidden="true" />
                    )}
                    {/* Active underline */}
                    {isAct(item.href) && (
                      <span className="absolute bottom-0.5 left-4 right-4 h-px rounded-full"
                        style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)" }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.mega && open === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl p-6 shadow-2xl"
                      style={{
                        background: "rgba(8,8,12,0.97)",
                        backdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        minWidth: item.mega.length > 2 ? 560 : 280,
                        boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                      }}
                      role="menu"
                      onMouseEnter={() => enter(item.label)}
                      onMouseLeave={leave}
                    >
                      <div className={cn("grid gap-6", item.mega.length >= 3 ? "grid-cols-2" : "grid-cols-1", item.mega.length === 4 && "grid-cols-2")}>
                        {item.mega.map((group) => (
                          <div key={group.group}>
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/20 mb-3">{group.group}</p>
                            <ul className="space-y-px">
                              {group.items.map((child) => (
                                <li key={child.label}>
                                  <Link href={child.href}
                                    className={cn(
                                      "block px-3 py-2.5 rounded-xl text-sm transition-all duration-150 group",
                                      path === child.href
                                        ? "text-white bg-white/6"
                                        : "text-white/55 hover:text-white hover:bg-white/5"
                                    )}
                                    role="menuitem"
                                    onClick={() => setOpen(null)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Footer */}
                      <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                        <Link href="/free-growth-audit"
                          className="flex items-center justify-between text-xs font-semibold text-white/35 hover:text-white/70 transition-colors"
                          onClick={() => setOpen(null)}
                        >
                          <span>Not sure where to start? Get a free Growth Audit</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/book-a-call"
                className="px-5 py-2.5 text-[13px] font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 hover:bg-white/4">
                Book a Call
              </Link>
              <Link href="/free-growth-audit"
                className="px-5 py-2.5 text-[13px] font-semibold text-white rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#7415FD 0%,#A838FD 50%,#3D5BFD 100%)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px rgba(116,21,253,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                Free Growth Audit
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2.5 text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div id="mobile-menu"
        className={cn("fixed inset-0 z-40 lg:hidden overflow-y-auto transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
        style={{ background: "#010002" }}
        aria-hidden={!mobileOpen}
      >
        <div className="pt-24 pb-16 px-6 space-y-8">
          {nav.map((item) => (
            <div key={item.label}>
              <Link href={item.href}
                className={cn("block text-2xl font-bold mb-4", isAct(item.href) ? "text-gradient" : "text-white")}
                style={isAct(item.href) ? {
                  background: "linear-gradient(90deg,#7415FD,#36C2FE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } : {}}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.mega && (
                <div className="space-y-5 pl-4 border-l border-white/5">
                  {item.mega.map((g) => (
                    <div key={g.group}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/20 mb-2">{g.group}</p>
                      <ul className="space-y-1">
                        {g.items.map((c) => (
                          <li key={c.label}>
                            <Link href={c.href}
                              className={cn("block py-1.5 text-sm", path === c.href ? "text-brand-azure font-medium" : "text-white/45 hover:text-white")}
                              onClick={() => setMobileOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 space-y-3 border-t border-white/5">
            <Link href="/book-a-call"
              className="flex items-center justify-center w-full py-4 rounded-2xl text-base font-semibold text-white border border-white/10 hover:border-white/20 transition-colors"
              onClick={() => setMobileOpen(false)}>
              Book a Discovery Call
            </Link>
            <Link href="/free-growth-audit"
              className="flex items-center justify-center w-full py-4 rounded-2xl text-base font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#7415FD,#A838FD 50%,#3D5BFD)" }}
              onClick={() => setMobileOpen(false)}>
              Get Free Growth Audit
            </Link>
          </div>

          <div className="flex gap-6 pt-2">
            <a href="mailto:rishigoswami2234@gmail.com" className="text-xs text-white/25 hover:text-white/50 transition-colors">Email us</a>
            <a href="https://wa.me/918839685579" className="text-xs text-white/25 hover:text-white/50 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}
