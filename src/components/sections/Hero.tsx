"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const nodes = [
  { label: "Creative",     color: "#7415FD" },
  { label: "Paid Traffic", color: "#A838FD" },
  { label: "Landing Page", color: "#3D5BFD" },
  { label: "Conversion",   color: "#2C78FD" },
  { label: "Tracking",     color: "#0A94FD" },
  { label: "CRM",          color: "#1EABFE" },
  { label: "Revenue",      color: "#36C2FE" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const items = el.querySelectorAll("[data-a]") as NodeListOf<HTMLElement>;
    items.forEach((item) => {
      const d = parseInt(item.dataset.a || "0");
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      item.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${d}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${d}ms`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "none";
        }, 80);
      });
    });
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Hero section">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#010002]" aria-hidden="true">
        {/* Radial violet glow top-center */}
        <div className="absolute inset-x-0 top-0 h-[70vh]"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(116,21,253,0.18) 0%, transparent 70%)" }} />
        {/* Secondary glow right */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
          style={{ background: "radial-gradient(circle, #0A94FD, transparent)" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
        {/* Vignette */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, #010002 100%)" }} />
      </div>

      <div className="section-container relative z-10 py-28 lg:py-36">
        <div className="max-w-6xl mx-auto">

          {/* ── Eyebrow ── */}
          <div data-a="0" className="flex items-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gradient animate-pulse" style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)" }} aria-hidden="true" />
              <span className="text-xs font-semibold text-white/60 tracking-wide">Performance Marketing & Customer Acquisition</span>
            </div>
          </div>

          {/* ── Headline ── */}
          <h1 data-a="100" className="font-bold text-white mb-8 leading-[0.95] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.2rem,8.5vw,8rem)" }}>
            Performance
            <br />
            <span style={{
              background: "linear-gradient(90deg,#7415FD 0%,#A838FD 25%,#3D5BFD 55%,#0A94FD 80%,#36C2FE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              That Scales.
            </span>
          </h1>

          {/* ── Subheadline ── */}
          <p data-a="200" className="text-lg md:text-xl lg:text-2xl text-white/45 leading-relaxed mb-4 max-w-2xl font-light">
            We build customer acquisition systems that connect{" "}
            <em className="not-italic text-white/75 font-medium">creative, paid media, conversion,
            data, and automation</em>{" "}
            to measurable business growth.
          </p>
          <p data-a="240" className="text-sm text-white/25 mb-14 max-w-lg">
            Not isolated campaigns — a complete system engineered for profitable, predictable scale.
          </p>

          {/* ── CTAs ── */}
          <div data-a="320" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20">
            <Link href="/free-growth-audit"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#7415FD 0%,#A838FD 40%,#3D5BFD 80%)",
                boxShadow: "0 0 0 0 rgba(116,21,253,0)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 50px rgba(116,21,253,0.45)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(116,21,253,0)"; }}
            >
              Get Free Growth Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link href="/case-studies"
              className="group inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-white/70 font-medium text-base border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300">
              View Case Studies
              <ChevronRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
            </Link>
          </div>

          {/* ── Stats row ── */}
          <div data-a="400" className="flex flex-wrap gap-x-10 gap-y-4 mb-24">
            {[
              { n: "7.9X",   l: "Peak ROAS" },
              { n: "150+",   l: "Campaigns" },
              { n: "20+",    l: "Industries" },
              { n: "₹10Cr+", l: "Revenue generated" },
              { n: "5+",     l: "Years" },
            ].map((s) => (
              <div key={s.l} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold" style={{
                  background: "linear-gradient(90deg,#7415FD,#36C2FE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>{s.n}</span>
                <span className="text-sm text-white/30">{s.l}</span>
              </div>
            ))}
          </div>

          {/* ── Acquisition system visualization ── */}
          <div data-a="500">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6">
              The PerformX Acquisition System
            </p>

            {/* Desktop chain */}
            <div className="hidden lg:flex items-center gap-0" role="list" aria-label="Acquisition system stages">
              {nodes.map((node, i) => (
                <div key={node.label} className="flex items-center" role="listitem">
                  <div className="flex flex-col items-center gap-2.5 group cursor-default">
                    {/* Node circle */}
                    <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ background: `${node.color}14`, border: `1.5px solid ${node.color}45` }}>
                      {/* Inner dot */}
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: node.color, boxShadow: `0 0 12px ${node.color}` }} />
                    </div>
                    <span className="text-[11px] font-medium text-white/35 whitespace-nowrap">{node.label}</span>
                  </div>
                  {i < nodes.length - 1 && (
                    <div className="flex items-center mb-6 mx-1" aria-hidden="true">
                      <div className="w-10 h-px" style={{ background: `linear-gradient(90deg, ${node.color}30, ${nodes[i+1].color}20)` }} />
                      <div className="w-1.5 h-1.5 rounded-full border border-white/10" style={{ background: `${nodes[i+1].color}20` }} />
                    </div>
                  )}
                </div>
              ))}
              {/* Revenue arrow */}
              <div className="flex items-center mb-6 ml-2" aria-hidden="true">
                <div className="w-8 h-px bg-gradient-to-r from-[#36C2FE]/30 to-transparent" />
              </div>
            </div>

            {/* Mobile pills */}
            <div className="lg:hidden flex flex-wrap gap-2" role="list">
              {nodes.map((node) => (
                <div key={node.label} role="listitem"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white/50 border"
                  style={{ background: `${node.color}10`, borderColor: `${node.color}30` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: node.color }} aria-hidden="true" />
                  {node.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
