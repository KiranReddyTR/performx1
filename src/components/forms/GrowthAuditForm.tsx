"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const spendOpts = ["Under ₹50K/month","₹50K–₹2L/month","₹2L–₹5L/month","₹5L–₹15L/month","₹15L+/month","Not currently running ads"];
const platforms = ["Meta Ads","Google Ads","TikTok Ads","LinkedIn Ads","Other"];
const goals = ["Scale revenue from e-commerce / D2C","Generate more qualified leads","Reduce cost per acquisition","Launch paid ads for the first time","Fix a broken campaign","Build a full acquisition system"];

interface F { name:string; email:string; phone:string; brand:string; website:string; adSpend:string; platforms:string[]; goal:string; challenge:string; consent:boolean; }

const input = "w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-violet/50 focus:ring-1 focus:ring-brand-violet/20 transition-colors";
const label = "block text-xs font-bold uppercase tracking-[0.12em] text-white/30 mb-2";

export function GrowthAuditForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [f, setF] = useState<F>({ name:"",email:"",phone:"",brand:"",website:"",adSpend:"",platforms:[],goal:"",challenge:"",consent:false });

  const set = (k: keyof F, v: string|boolean|string[]) => setF(p => ({ ...p, [k]: v }));
  const togglePlatform = (p: string) => set("platforms", f.platforms.includes(p) ? f.platforms.filter(x=>x!==p) : [...f.platforms, p]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    if (!f.consent) { setError("Please confirm your consent to proceed."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/growth-audit", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(f) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      router.push("/thank-you?type=audit");
    } catch(err: any) {
      setError(err.message || "Something went wrong. Please email rishigoswami2234@gmail.com directly.");
    } finally { setLoading(false); }
  };

  return (
    <form onSubmit={submit} className="rounded-2xl p-8 space-y-6" style={{ background:"#0C0C10", border:"1px solid rgba(255,255,255,0.07)" }} noValidate aria-label="Free Growth Audit request form">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Request your audit</h2>
        <p className="text-sm text-white/30">About 3 minutes. We&apos;ll respond within 48 hours.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="a-name" className={label}>Your name *</label><input id="a-name" type="text" className={input} placeholder="Rishi Goswami" required value={f.name} onChange={e=>set("name",e.target.value)} autoComplete="name" /></div>
        <div><label htmlFor="a-email" className={label}>Email *</label><input id="a-email" type="email" className={input} placeholder="you@brand.com" required value={f.email} onChange={e=>set("email",e.target.value)} autoComplete="email" /></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="a-brand" className={label}>Brand name *</label><input id="a-brand" type="text" className={input} placeholder="Your Brand" required value={f.brand} onChange={e=>set("brand",e.target.value)} /></div>
        <div><label htmlFor="a-website" className={label}>Website URL</label><input id="a-website" type="url" className={input} placeholder="https://yourbrand.com" value={f.website} onChange={e=>set("website",e.target.value)} /></div>
      </div>

      <div><label htmlFor="a-phone" className={label}>Phone / WhatsApp</label><input id="a-phone" type="tel" className={input} placeholder="+91 98765 43210" value={f.phone} onChange={e=>set("phone",e.target.value)} /></div>

      <fieldset>
        <legend className={label}>Monthly ad spend</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {spendOpts.map(o => (
            <button key={o} type="button" onClick={()=>set("adSpend",o)} aria-pressed={f.adSpend===o}
              className="px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all duration-150"
              style={{ background: f.adSpend===o ? "rgba(116,21,253,0.15)" : "rgba(255,255,255,0.03)", border: f.adSpend===o ? "1px solid rgba(116,21,253,0.4)" : "1px solid rgba(255,255,255,0.06)", color: f.adSpend===o ? "#fff" : "rgba(255,255,255,0.45)" }}>
              {o}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={label}>Active platforms</legend>
        <div className="flex flex-wrap gap-2">
          {platforms.map(p => (
            <button key={p} type="button" onClick={()=>togglePlatform(p)} aria-pressed={f.platforms.includes(p)}
              className="px-4 py-2 rounded-xl text-xs font-medium transition-all duration-150"
              style={{ background: f.platforms.includes(p) ? "rgba(10,148,253,0.15)" : "rgba(255,255,255,0.03)", border: f.platforms.includes(p) ? "1px solid rgba(10,148,253,0.4)" : "1px solid rgba(255,255,255,0.06)", color: f.platforms.includes(p) ? "#fff" : "rgba(255,255,255,0.45)" }}>
              {p}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="a-goal" className={label}>Primary growth goal *</label>
        <select id="a-goal" required value={f.goal} onChange={e=>set("goal",e.target.value)}
          className={`${input} appearance-none cursor-pointer`}
          style={{ background:"rgba(12,12,16,1)" }}>
          <option value="" disabled>Select your primary goal</option>
          {goals.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="a-challenge" className={label}>Biggest acquisition challenge</label>
        <textarea id="a-challenge" rows={3} className={`${input} resize-none`}
          placeholder="e.g. Our ROAS has been dropping over the last 3 months and we don't know why..."
          value={f.challenge} onChange={e=>set("challenge",e.target.value)} />
      </div>

      <div className="flex items-start gap-3">
        <input id="a-consent" type="checkbox" className="mt-1 w-4 h-4 rounded cursor-pointer accent-brand-violet" checked={f.consent} onChange={e=>set("consent",e.target.checked)} required />
        <label htmlFor="a-consent" className="text-xs text-white/30 leading-relaxed cursor-pointer">
          I agree for PerformX to contact me about my growth audit request. Your data will not be shared.
          See our <a href="/privacy-policy" className="underline hover:text-white/60 transition-colors">Privacy Policy</a>.
        </label>
      </div>

      {error && <p className="text-sm text-red-400 px-4 py-3 rounded-xl" style={{ background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)" }} role="alert">{error}</p>}

      <button type="submit" disabled={loading}
        className="w-full py-4 rounded-2xl text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}
        onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(116,21,253,0.35)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
      >
        {loading && <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
        {loading ? "Sending..." : "Request My Free Growth Audit"}
      </button>
      <p className="text-xs text-white/20 text-center">No spam. No sales pressure. Delivered within 48 hours.</p>
    </form>
  );
}
