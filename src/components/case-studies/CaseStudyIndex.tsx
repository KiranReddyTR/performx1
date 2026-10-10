"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies, caseStudyIndustries } from "@/data/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudyIndex() {
  const [ind, setInd] = useState("All");
  const filters = ["All", ...caseStudyIndustries];

  const filtered = ind === "All" ? caseStudies : caseStudies.filter(cs => cs.industry === ind);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filter by industry">
        {filters.map((f) => (
          <button key={f} onClick={() => setInd(f)} aria-pressed={ind === f}
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-150"
            style={{
              background: ind === f ? "rgba(116,21,253,0.15)" : "rgba(255,255,255,0.03)",
              border: ind === f ? "1px solid rgba(116,21,253,0.4)" : "1px solid rgba(255,255,255,0.06)",
              color: ind === f ? "#fff" : "rgba(255,255,255,0.4)",
            }}>
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((cs) => (
          <Link key={cs.id} href={`/case-studies/${cs.slug}`}
            className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            style={{ background:"#0C0C10", border:"1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={(e)=>{ (e.currentTarget as HTMLElement).style.borderColor=`${cs.imageColor}30`; (e.currentTarget as HTMLElement).style.boxShadow=`0 8px 40px ${cs.imageColor}10`; }}
            onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.boxShadow="none"; }}
          >
            <div className="h-0.5" style={{ background:`linear-gradient(90deg,${cs.imageColor},#36C2FE)` }} aria-hidden="true" />
            <div className="p-7 flex flex-col flex-1">
              {/* Industry badge */}
              <span className="inline-flex w-fit text-xs font-bold px-2.5 py-1 rounded-full mb-5"
                style={{ background:`${cs.imageColor}15`, color:cs.imageColor, border:`1px solid ${cs.imageColor}25` }}>
                {cs.industry}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-2">{cs.client}</p>
              <h2 className="text-sm font-bold text-white mb-5 line-clamp-2 leading-snug flex-1">{cs.challenge.split(".")[0]}.</h2>

              {/* Metrics */}
              <div className="flex flex-wrap gap-5 mb-5">
                {cs.metrics.filter(m=>m.verified && m.label!=="Channel").slice(0,2).map(m=>(
                  <div key={m.label}>
                    <div className="text-2xl font-bold leading-none mb-1"
                      style={{ background:`linear-gradient(90deg,${cs.imageColor},#36C2FE)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                      {m.value}
                    </div>
                    <p className="text-xs text-white/30">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cs.services.slice(0,3).map(s=>(
                  <span key={s} className="text-xs text-white/25 px-2 py-1 rounded-lg" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.05)" }}>{s}</span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-white/25">
                  <CheckCircle2 size={12} className="text-green-400" aria-hidden="true" />
                  Verified
                </div>
                <ArrowRight size={15} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20"><p className="text-white/30">No case studies match this filter.</p></div>
      )}
    </div>
  );
}
