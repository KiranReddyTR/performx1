"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({ name: "", email: "", phone: "", company: "", message: "", consent: false });

  const set = (field: string, value: string | boolean) => setData((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!data.consent) { setError("Please confirm your consent to continue."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      router.push("/thank-you?type=contact");
    } catch {
      setError("Something went wrong. Please email us directly at rishigoswami2234@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-colors";
  const labelClass = "block text-sm font-medium text-white/70 mb-2";

  return (
    <form onSubmit={handleSubmit} className="card-dark p-8 space-y-5" noValidate aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={labelClass}>Name <span className="text-red-400" aria-hidden="true">*</span></label>
          <input id="contact-name" type="text" className={inputClass} placeholder="Your name" required value={data.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>Email <span className="text-red-400" aria-hidden="true">*</span></label>
          <input id="contact-email" type="email" className={inputClass} placeholder="you@company.com" required value={data.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>Phone / WhatsApp</label>
          <input id="contact-phone" type="tel" className={inputClass} placeholder="+91 98765 43210" value={data.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClass}>Company / Brand</label>
          <input id="contact-company" type="text" className={inputClass} placeholder="Your brand name" value={data.company} onChange={(e) => set("company", e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>Message <span className="text-red-400" aria-hidden="true">*</span></label>
        <textarea id="contact-message" rows={4} className={`${inputClass} resize-none`} placeholder="Tell us what you're working on..." required value={data.message} onChange={(e) => set("message", e.target.value)} />
      </div>
      <div className="flex items-start gap-3">
        <input id="contact-consent" type="checkbox" className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-brand-violet cursor-pointer" checked={data.consent} onChange={(e) => set("consent", e.target.checked)} required />
        <label htmlFor="contact-consent" className="text-xs text-white/40 leading-relaxed cursor-pointer">
          I consent to PerformX contacting me regarding my enquiry. See our{" "}
          <a href="/privacy-policy" className="underline hover:text-white/70 transition-colors">Privacy Policy</a>.
        </label>
      </div>
      {error && <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3" role="alert">{error}</p>}
      <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
