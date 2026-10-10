"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface F { name:string; email:string; phone:string; company:string; message:string; consent:boolean; }

const inp = "w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-violet/50 focus:ring-1 focus:ring-brand-violet/20 transition-colors";
const lbl = "block text-xs font-bold uppercase tracking-[0.12em] text-white/30 mb-2";

export function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [f, setF] = useState<F>({ name:"",email:"",phone:"",company:"",message:"",consent:false });
  const set = (k: keyof F, v: string|boolean) => setF(p => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    if (!f.consent) { setError("Please confirm your consent to continue."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(f) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      router.push("/thank-you?type=contact");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please email rishigoswami2234@gmail.com directly.");
    } finally { setLoading(false); }
  };

  return (
    <form onSubmit={submit} className="rounded-2xl p-8 space-y-5" style={{ background:"#0C0C10", border:"1px solid rgba(255,255,255,0.07)" }} noValidate aria-label="Contact form">
      <h2 className="text-xl font-bold text-white mb-2">Send a message</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="c-name" className={lbl}>Name *</label><input id="c-name" type="text" className={inp} placeholder="Your name" required value={f.name} onChange={e=>set("name",e.target.value)} autoComplete="name" /></div>
        <div><label htmlFor="c-email" className={lbl}>Email *</label><input id="c-email" type="email" className={inp} placeholder="you@company.com" required value={f.email} onChange={e=>set("email",e.target.value)} autoComplete="email" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="c-phone" className={lbl}>Phone / WhatsApp</label><input id="c-phone" type="tel" className={inp} placeholder="+91 98765 43210" value={f.phone} onChange={e=>set("phone",e.target.value)} autoComplete="tel" /></div>
        <div><label htmlFor="c-company" className={lbl}>Company / Brand</label><input id="c-company" type="text" className={inp} placeholder="Your brand" value={f.company} onChange={e=>set("company",e.target.value)} /></div>
      </div>
      <div>
        <label htmlFor="c-msg" className={lbl}>Message *</label>
        <textarea id="c-msg" rows={4} className={`${inp} resize-none`} placeholder="Tell us what you're working on..." required value={f.message} onChange={e=>set("message",e.target.value)} />
      </div>
      <div className="flex items-start gap-3">
        <input id="c-consent" type="checkbox" className="mt-1 w-4 h-4 rounded cursor-pointer accent-brand-violet" checked={f.consent} onChange={e=>set("consent",e.target.checked)} required />
        <label htmlFor="c-consent" className="text-xs text-white/30 leading-relaxed cursor-pointer">
          I consent to PerformX contacting me regarding my enquiry. See our <a href="/privacy-policy" className="underline hover:text-white/60 transition-colors">Privacy Policy</a>.
        </label>
      </div>
      {error && <p className="text-sm text-red-400 px-4 py-3 rounded-xl" style={{ background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)" }} role="alert">{error}</p>}
      <button type="submit" disabled={loading}
        className="w-full py-4 rounded-2xl text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
        style={{ background:"linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}
        onMouseEnter={(e)=>{ if(!loading)(e.currentTarget as HTMLElement).style.boxShadow="0 8px 40px rgba(116,21,253,0.35)"; }}
        onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.boxShadow="none"; }}
      >
        {loading && <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
