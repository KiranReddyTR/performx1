"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 7.9,  suffix: "X",   label: "Peak ROAS",             sub: "Fashion D2C — Meta Ads",          decimals: 1 },
  { value: 90,   suffix: "%",   label: "CPL Reduction",          sub: "Commercial Real Estate",           decimals: 0 },
  { value: 5900, suffix: "+",   label: "Enquiries",              sub: "Travel & Tours · ₹12.67 CPE",     decimals: 0 },
  { value: 500,  suffix: "+",   label: "Qualified Leads",        sub: "Automobile Dealership",            decimals: 0 },
];

function AnimatedNumber({ target, suffix, decimals, trigger }: { target: number; suffix: string; decimals: number; trigger: boolean }) {
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!trigger || done.current) return;
    done.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(target); return; }
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => setVal(parseFloat(obj.v.toFixed(decimals))),
      onComplete: () => setVal(target),
    });
  }, [trigger, target, decimals]);

  return <>{decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}{suffix}</>;
}

export function ProofBar() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ref.current) return;
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      once: true,
      onEnter: () => setTriggered(true),
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-label="Verified performance results">
      <div className="absolute inset-0" style={{ background: "#08080C" }} aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(116,21,253,0.3),rgba(54,194,254,0.3),transparent)" }} aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(116,21,253,0.2),rgba(54,194,254,0.2),transparent)" }} aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-14">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg,#7415FD,#36C2FE)" }} aria-hidden="true" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">Verified results — live campaign data</p>
        </div>

        {/* Giant stat numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="group">
              <div className="font-black leading-none mb-3 tabular-nums"
                style={{
                  fontSize: "clamp(3.5rem,8vw,6rem)",
                  background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD,#0A94FD,#36C2FE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                <AnimatedNumber target={s.value} suffix={s.suffix} decimals={s.decimals} trigger={triggered} />
              </div>
              <p className="text-sm font-bold text-white/70 mb-1">{s.label}</p>
              <p className="text-xs text-white/25">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
