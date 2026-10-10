"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 7.9,  suffix: "X",   label: "Peak ROAS",             sub: "Fashion D2C — verified",          decimals: 1 },
  { value: 90,   suffix: "%",   label: "CPL Reduction",          sub: "Commercial Real Estate",           decimals: 0 },
  { value: 5900, suffix: "+",   label: "Enquiries Generated",    sub: "₹12.67 CPE — Travel & Tours",     decimals: 0 },
  { value: 500,  suffix: "+",   label: "Qualified Leads",        sub: "Automobile Dealership",            decimals: 0 },
  { value: 150,  suffix: "+",   label: "Campaigns Launched",     sub: "Across 20+ industries",            decimals: 0 },
];

function Counter({ target, suffix, decimals, run }: { target: number; suffix: string; decimals: number; run: boolean }) {
  const [v, setV] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!run || done.current) return;
    done.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    const dur = 1600;
    const s = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - s) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(parseFloat((target * e).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick); else setV(target);
    };
    requestAnimationFrame(tick);
  }, [run, target, decimals]);
  return <>{decimals > 0 ? v.toFixed(decimals) : Math.floor(v)}{suffix}</>;
}

export function ProofBar() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); o.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden" aria-label="Verified performance metrics">
      {/* Separator lines */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} aria-hidden="true" />
      <div className="absolute inset-0 bg-surface-01" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15))" }} aria-hidden="true" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">Verified results from active client campaigns</p>
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg,rgba(255,255,255,0.15),transparent)" }} aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold mb-2 tabular-nums"
                style={{
                  background: "linear-gradient(90deg,#7415FD 0%,#A838FD 25%,#3D5BFD 60%,#0A94FD 82%,#36C2FE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                <Counter target={s.value} suffix={s.suffix} decimals={s.decimals} run={run} />
              </div>
              <p className="text-sm font-semibold text-white/70 mb-1">{s.label}</p>
              <p className="text-xs text-white/25 leading-snug">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
