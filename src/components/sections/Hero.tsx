"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";

const systemNodes = [
  { label: "Creative", color: "#7415FD", icon: "✦" },
  { label: "Paid Traffic", color: "#A838FD", icon: "◆" },
  { label: "Landing Page", color: "#3D5BFD", icon: "▲" },
  { label: "Conversion", color: "#3D5BFD", icon: "●" },
  { label: "Tracking", color: "#0A94FD", icon: "◉" },
  { label: "CRM", color: "#0A94FD", icon: "⬡" },
  { label: "Revenue", color: "#36C2FE", icon: "★" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;

    const elements = containerRef.current.querySelectorAll("[data-hero-animate]") as NodeListOf<HTMLElement>;
    elements.forEach((el) => {
      const delay = parseInt(el.getAttribute("data-delay") || "0");
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "none";
      }, 50);
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero"
      ref={containerRef}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[140px] bg-brand-violet pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/6 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[120px] bg-brand-azure pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} aria-hidden="true" />

      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div data-hero-animate data-delay="0" className="flex justify-center mb-8">
            <Badge variant="outline" className="text-sm gap-2 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-brand-gradient inline-block animate-pulse" aria-hidden="true" />
              Performance Marketing & Customer Acquisition
            </Badge>
          </div>

          {/* H1 */}
          <h1 data-hero-animate data-delay="120" className="text-display-2xl font-bold text-white mb-6 tracking-tight">
            Performance{" "}
            <GradientText>That Scales.</GradientText>
          </h1>

          {/* Subheadline */}
          <p data-hero-animate data-delay="240" className="text-lg md:text-xl text-white/55 leading-relaxed max-w-3xl mx-auto mb-4">
            We build customer acquisition systems that connect{" "}
            <span className="text-white/90 font-medium">creative, paid media, conversion, data, and automation</span>{" "}
            to measurable business growth.
          </p>
          <p data-hero-animate data-delay="300" className="text-sm text-white/35 mb-12 max-w-xl mx-auto">
            Not isolated campaigns — a complete system engineered for profitable, predictable scale.
          </p>

          {/* CTAs */}
          <div data-hero-animate data-delay="400" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" href="/free-growth-audit">
              Get Free Growth Audit
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" href="/case-studies">
              View Case Studies
            </Button>
          </div>

          {/* Stats row */}
          <div data-hero-animate data-delay="500" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-20">
            {[
              { value: "5+", label: "Years" },
              { value: "150+", label: "Campaigns" },
              { value: "20+", label: "Industries" },
              { value: "₹10Cr+", label: "Revenue generated" },
              { value: "7.9X", label: "Peak ROAS" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 text-sm">
                <span className="font-bold text-lg bg-brand-gradient bg-clip-text text-transparent">{s.value}</span>
                <span className="text-white/35">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Acquisition System flow */}
        <div data-hero-animate data-delay="600">
          <p className="text-center text-xs font-semibold text-white/25 uppercase tracking-widest mb-8">
            The PerformX Acquisition System
          </p>
          <div
            className="hidden md:flex items-center justify-center gap-0"
            role="list"
            aria-label="Acquisition system: Creative through to Revenue"
          >
            {systemNodes.map((node, i) => (
              <div key={node.label} className="flex items-center" role="listitem">
                <div className="flex flex-col items-center gap-3 group cursor-default">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 hover:scale-110"
                    style={{
                      background: `${node.color}18`,
                      borderColor: `${node.color}50`,
                      boxShadow: `0 0 20px ${node.color}20`,
                    }}
                  >
                    <span style={{ color: node.color }} className="text-lg" aria-hidden="true">{node.icon}</span>
                  </div>
                  <span className="text-xs text-white/45 font-medium">{node.label}</span>
                </div>
                {i < systemNodes.length - 1 && (
                  <div className="flex items-center mx-3 mb-5" aria-hidden="true">
                    <div className="w-10 h-px bg-gradient-to-r from-white/15 to-white/5" />
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                      <path d="M1 1l4 3-4 3" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="md:hidden flex flex-wrap justify-center gap-2" role="list" aria-label="Acquisition system stages">
            {systemNodes.map((node) => (
              <div key={node.label} role="listitem"
                className="flex items-center gap-2 px-3 py-2 rounded-xl border"
                style={{ background: `${node.color}10`, borderColor: `${node.color}30` }}>
                <span style={{ color: node.color }} className="text-xs" aria-hidden="true">{node.icon}</span>
                <span className="text-xs text-white/60 font-medium">{node.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
