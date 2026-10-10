"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: 7.9, suffix: "X", label: "Peak ROAS", note: "Fashion D2C — verified", decimals: 1 },
  { value: 90, suffix: "%", label: "CPL Reduction", note: "Commercial Real Estate — verified", decimals: 0 },
  { value: 5900, suffix: "+", label: "Enquiries at ₹12.67", note: "Travel & Tours — verified", decimals: 0 },
  { value: 500, suffix: "+", label: "Qualified Leads", note: "Automobile — verified", decimals: 0 },
  { value: 150, suffix: "+", label: "Campaigns Launched", note: "Across 20+ industries", decimals: 0 },
];

function CountUp({ target, suffix, decimals, active }: { target: number; suffix: string; decimals: number; active: boolean }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setVal(target); return; }

    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((target * eased).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, decimals]);

  return (
    <span className="tabular-nums">
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}{suffix}
    </span>
  );
}

export function ProofBar() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); observer.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-white/[0.06] bg-[#0A0A0C]" aria-label="Verified performance results">
      <div className="section-container py-16">
        <div className="flex items-center justify-center gap-2 mb-12">
          <CheckCircle2 size={14} className="text-green-400" aria-hidden="true" />
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">
            Verified results from active client campaigns
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-brand-gradient bg-clip-text text-transparent">
                <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals} active={active} />
              </div>
              <p className="text-sm font-semibold text-white/80 mb-1">{s.label}</p>
              <p className="text-xs text-white/30 leading-tight">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
