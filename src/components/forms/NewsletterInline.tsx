"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"done"|"error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch { setStatus("error"); }
  };

  if (status === "done") return (
    <p className="text-sm font-semibold" style={{ color:"#36C2FE" }}>You&apos;re on the list. We&apos;ll be in touch.</p>
  );

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter signup">
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input id="nl-email" type="email" placeholder="your@email.com" required value={email} onChange={e=>setEmail(e.target.value)}
        className="flex-1 px-5 py-3.5 rounded-2xl text-sm text-white placeholder:text-white/25 focus:outline-none transition-colors"
        style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}
        onFocus={(e)=>{ (e.currentTarget as HTMLElement).style.borderColor="rgba(116,21,253,0.4)"; }}
        onBlur={(e)=>{ (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"; }}
        aria-describedby={status==="error" ? "nl-err" : undefined}
      />
      <button type="submit" disabled={status==="loading"}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-bold text-sm whitespace-nowrap transition-all duration-200 hover:scale-[1.03] disabled:opacity-50"
        style={{ background:"linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}
        onMouseEnter={(e)=>{ (e.currentTarget as HTMLElement).style.boxShadow="0 6px 30px rgba(116,21,253,0.35)"; }}
        onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.boxShadow="none"; }}
      >
        {status==="loading" ? "..." : <>Subscribe <ArrowRight size={14} aria-hidden="true" /></>}
      </button>
      {status==="error" && <p id="nl-err" className="text-xs text-red-400 mt-1 sm:col-span-2" role="alert">Something went wrong. Try again.</p>}
    </form>
  );
}
