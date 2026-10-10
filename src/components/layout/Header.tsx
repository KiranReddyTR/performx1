"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      { group: "Paid Media", items: [
        { label: "Meta Ads", href: "/services/meta-ads", desc: "Facebook & Instagram" },
        { label: "Google Ads", href: "/services/google-ads", desc: "Search & Shopping" },
        { label: "TikTok Ads", href: "/services/tiktok-ads", desc: "Native performance" },
        { label: "LinkedIn Ads", href: "/services/linkedin-ads", desc: "B2B & high-ticket" },
        { label: "Paid Media Strategy", href: "/services/paid-media-strategy", desc: "Cross-channel planning" },
      ]},
      { group: "Creative & Conversion", items: [
        { label: "Performance Creative", href: "/services/performance-creative", desc: "UGC & video" },
        { label: "AI Video Production", href: "/services/ai-video-creative", desc: "High-volume creative" },
        { label: "Landing Pages & CRO", href: "/services/landing-pages-cro", desc: "Convert traffic" },
        { label: "Tracking & Analytics", href: "/services/tracking-analytics", desc: "First-party data" },
      ]},
      { group: "Automation", items: [
        { label: "CRM & Automation", href: "/services/crm-automation", desc: "Lead nurturing" },
        { label: "Email Marketing", href: "/services/email-marketing", desc: "Retention & LTV" },
        { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing", desc: "India & UAE" },
      ]},
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { group: "Industries", items: [
        { label: "E-commerce & D2C", href: "/industries/ecommerce-d2c", desc: "Scale profitable brands" },
        { label: "Real Estate", href: "/industries/real-estate", desc: "Qualified lead gen" },
        { label: "Education", href: "/industries/education", desc: "Admissions & enrolment" },
        { label: "Healthcare & Wellness", href: "/industries/healthcare-wellness", desc: "Compliant patient acquisition" },
        { label: "Automobile", href: "/industries/automobile", desc: "Test drive & enquiries" },
        { label: "Travel & Events", href: "/industries/travel-events", desc: "Year-round pipeline" },
        { label: "Jewellery & Retail", href: "/industries/jewellery-furniture-retail", desc: "Premium retail" },
      ]},
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { group: "Company", items: [
        { label: "About PerformX", href: "/about", desc: "Our story & mission" },
        { label: "Why PerformX", href: "/why-performx", desc: "What makes us different" },
        { label: "Our Process", href: "/process", desc: "9-stage framework" },
        { label: "Who We Work With", href: "/who-we-work-with", desc: "Ideal client profile" },
        { label: "Pricing", href: "/pricing", desc: "Engagement models" },
        { label: "Careers", href: "/careers", desc: "Join the team" },
      ]},
    ],
  },
  { label: "Resources", href: "/resources" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setActiveDropdown(null); setMobileOpen(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [pathname]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-[#010002]/90 backdrop-blur-xl border-b border-white/[0.06] py-3" : "bg-transparent py-5")}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between gap-8">
            <Logo size="md" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isActive(item.href) ? "text-white bg-white/8" : "text-white/70 hover:text-white hover:bg-white/5",
                      activeDropdown === item.label && "text-white bg-white/5"
                    )}
                    aria-expanded={item.children ? activeDropdown === item.label : undefined}
                    aria-haspopup={item.children ? "true" : undefined}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={13} className={cn("transition-transform duration-200 opacity-60", activeDropdown === item.label && "rotate-180")} aria-hidden="true" />
                    )}
                    {/* Active dot */}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gradient" style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)" }} aria-hidden="true" />
                    )}
                  </Link>

                  {/* Mega dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#0A0A0C]/98 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 p-6 min-w-[520px]"
                      role="menu"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={cn("grid gap-6", (item.children as any[]).length > 2 ? "grid-cols-3" : "grid-cols-2")}>
                        {(item.children as Array<{ group: string; items: Array<{ label: string; href: string; desc?: string }> }>).map((group) => (
                          <div key={group.group}>
                            <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.15em] mb-3">{group.group}</p>
                            <ul className="space-y-0.5">
                              {group.items.map((child) => (
                                <li key={child.label}>
                                  <Link href={child.href}
                                    className={cn("block px-3 py-2.5 rounded-xl transition-all duration-150 group",
                                      pathname === child.href ? "bg-white/8 text-white" : "hover:bg-white/5")}
                                    role="menuitem"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span className={cn("block text-sm font-medium transition-colors", pathname === child.href ? "text-white" : "text-white/70 group-hover:text-white")}>{child.label}</span>
                                    {child.desc && <span className="block text-xs text-white/30 mt-0.5">{child.desc}</span>}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Dropdown footer CTA */}
                      <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="text-xs text-white/30">Not sure where to start?</span>
                        <Link href="/free-growth-audit" className="flex items-center gap-1.5 text-xs font-semibold text-brand-azure hover:text-brand-cyan transition-colors" onClick={() => setActiveDropdown(null)}>
                          Get Free Growth Audit <ArrowRight size={12} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="secondary" size="sm" href="/book-a-call">Book a Call</Button>
              <Button variant="primary" size="sm" href="/free-growth-audit">Get Free Audit</Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={cn("fixed inset-0 z-40 bg-[#010002] lg:hidden overflow-y-auto transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
        aria-hidden={!mobileOpen}
      >
        <div className="pt-24 pb-12 px-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/[0.06] pb-6">
              <Link href={item.href}
                className={cn("block text-xl font-bold mb-4", isActive(item.href) ? "text-transparent bg-brand-gradient bg-clip-text" : "text-white")}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-5">
                  {(item.children as Array<{ group: string; items: Array<{ label: string; href: string }> }>).map((group) => (
                    <div key={group.group}>
                      <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.15em] mb-2">{group.group}</p>
                      <ul className="space-y-1">
                        {group.items.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href}
                              className={cn("block py-2 text-sm transition-colors", pathname === child.href ? "text-brand-azure font-medium" : "text-white/55 hover:text-white")}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
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

          {/* Mobile CTAs */}
          <div className="pt-2 space-y-3">
            <Button variant="secondary" size="lg" href="/book-a-call" fullWidth onClick={() => setMobileOpen(false)}>
              Book a Discovery Call
            </Button>
            <Button variant="primary" size="lg" href="/free-growth-audit" fullWidth onClick={() => setMobileOpen(false)}>
              Get Free Growth Audit
            </Button>
          </div>

          {/* Contact quick links */}
          <div className="pt-4 flex items-center gap-6">
            <a href="mailto:rishigoswami2234@gmail.com" className="text-xs text-white/30 hover:text-white/60 transition-colors">rishigoswami2234@gmail.com</a>
            <a href="tel:+918839685579" className="text-xs text-white/30 hover:text-white/60 transition-colors">+91 88396 85579</a>
          </div>
        </div>
      </div>
    </>
  );
}
