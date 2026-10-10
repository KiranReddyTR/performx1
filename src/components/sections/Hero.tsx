"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

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
  const rootRef   = useRef<HTMLElement>(null);
  const line1Ref  = useRef<HTMLSpanElement>(null);
  const line2Ref  = useRef<HTMLSpanElement>(null);
  const subRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef    = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);
  const nodesRef  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const pref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (pref) { if (rootRef.current) rootRef.current.style.opacity = "1"; return; }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Split line1 into words
      if (line1Ref.current) {
        const words = line1Ref.current.innerText.split(" ");
        line1Ref.current.innerHTML = words.map(w =>
          `<span style="display:inline-block;overflow:hidden;"><span style="display:inline-block;transform:translateY(110%)">${w}&nbsp;</span></span>`
        ).join("");
        tl.to(line1Ref.current.querySelectorAll("span > span"), {
          y: 0, duration: 1, stagger: 0.08,
        }, 0.1);
      }

      // Split line2 into words
      if (line2Ref.current) {
        const words = line2Ref.current.innerText.split(" ");
        line2Ref.current.innerHTML = words.map(w =>
          `<span style="display:inline-block;overflow:hidden;"><span style="display:inline-block;transform:translateY(110%)">${w}&nbsp;</span></span>`
        ).join("");
        tl.to(line2Ref.current.querySelectorAll("span > span"), {
          y: 0, duration: 1, stagger: 0.06,
        }, 0.25);
      }

      // Sub + CTA + stats fade up
      tl.from([subRef.current, ctaRef.current, statsRef.current], {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.15,
      }, 0.7);

      // System nodes stagger in
      tl.from(nodesRef.current.filter(Boolean), {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.07,
      }, 1.0);

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* ── Layered background ── */}
      <div className="absolute inset-0 bg-[#010002]" aria-hidden="true" />

      {/* Large violet radial top */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7415FD 0%, transparent 70%)" }} aria-hidden="true" />

      {/* Right side azure glow */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "#0A94FD" }} aria-hidden="true" />

      {/* Fine grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full opacity-10 pointer-events-none" aria-hidden="true"
        style={{ background: "linear-gradient(180deg,transparent,#7415FD 30%,#36C2FE 70%,transparent)" }} />

      <div className="section-container relative z-10 py-20 lg:py-28">
        <div className="max-w-[1100px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)" }} aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
              Performance Marketing & Customer Acquisition
            </span>
          </div>

          {/* Massive headline */}
          <h1 className="font-black text-white mb-10 tracking-[-0.05em] leading-[0.88]"
            style={{ fontSize: "clamp(4rem,11vw,10.5rem)" }}
            aria-label="Performance That Scales.">
            <span ref={line1Ref} className="block">Performance</span>
            <span ref={line2Ref} className="block"
              style={{
                background: "linear-gradient(90deg,#7415FD 0%,#A838FD 25%,#3D5BFD 55%,#0A94FD 80%,#36C2FE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              That Scales.
            </span>
          </h1>

          {/* Sub + CTA — asymmetric two-col */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16">
            <p ref={subRef} className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-2xl">
              We build customer acquisition systems that connect{" "}
              <em className="not-italic text-white/75 font-medium">creative, paid media, conversion, data,
              and automation</em>{" "}to measurable business growth.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link href="/free-growth-audit"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(116,21,253,0.5)] whitespace-nowrap"
                style={{ background: "linear-gradient(135deg,#7415FD,#A838FD 50%,#3D5BFD)" }}>
                Get Free Growth Audit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/case-studies"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white/60 font-semibold text-sm border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300 whitespace-nowrap">
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div ref={statsRef} className="flex flex-wrap gap-x-10 gap-y-3 mb-24 pb-10 border-b border-white/[0.06]">
            {[
              { n: "7.9X",   l: "Peak ROAS verified" },
              { n: "150+",   l: "Campaigns launched" },
              { n: "20+",    l: "Industries" },
              { n: "₹10Cr+", l: "Client revenue" },
              { n: "5+",     l: "Years" },
            ].map((s) => (
              <div key={s.l} className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-black" style={{
                  background: "linear-gradient(90deg,#7415FD,#36C2FE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>{s.n}</span>
                <span className="text-xs text-white/30 font-medium">{s.l}</span>
              </div>
            ))}
          </div>

          {/* Acquisition system */}
          <div ref={systemRef}>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8">
              The PerformX Acquisition System
            </p>

            {/* Desktop chain */}
            <div className="hidden lg:flex items-center" role="list" aria-label="Acquisition system stages">
              {nodes.map((node, i) => (
                <div key={node.label} className="flex items-center" role="listitem">
                  <div
                    ref={el => { nodesRef.current[i] = el; }}
                    className="flex flex-col items-center gap-3 group cursor-default"
                  >
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg"
                      style={{
                        background: `${node.color}15`,
                        border: `1.5px solid ${node.color}40`,
                      }}>
                      <div className="w-3 h-3 rounded-full group-hover:scale-125 transition-transform"
                        style={{ background: node.color, boxShadow: `0 0 16px ${node.color}` }} />
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-2xl animate-ping opacity-0 group-hover:opacity-30"
                        style={{ border: `1px solid ${node.color}`, animationDuration: "1.5s" }} aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/35 group-hover:text-white/70 transition-colors">{node.label}</span>
                  </div>

                  {i < nodes.length - 1 && (
                    <div className="flex items-center mx-2 mb-6" aria-hidden="true">
                      <div className="h-px w-8" style={{ background: `linear-gradient(90deg,${node.color}30,${nodes[i+1].color}20)` }} />
                      <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
                        <path d="M1 1l3 3-3 3" stroke={node.color} strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}

              {/* Revenue arrow */}
              <div className="flex items-center mb-6 ml-1" aria-hidden="true">
                <div className="h-px w-10" style={{ background: "linear-gradient(90deg,rgba(54,194,254,0.3),transparent)" }} />
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex flex-wrap gap-2">
              {nodes.map((node) => (
                <div key={node.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white/45"
                  style={{ background: `${node.color}10`, border: `1px solid ${node.color}25` }}>
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
