"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  brand: string;
  website: string;
  adSpend: string;
  platforms: string[];
  goal: string;
  challenge: string;
  consent: boolean;
}

const adSpendOptions = [
  "Under ₹50K/month",
  "₹50K – ₹2L/month",
  "₹2L – ₹5L/month",
  "₹5L – ₹15L/month",
  "₹15L+/month",
  "Not currently running ads",
];

const platformOptions = ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Other"];

const goalOptions = [
  "Scale revenue from e-commerce / D2C",
  "Generate more qualified leads",
  "Reduce cost per acquisition",
  "Launch paid ads for the first time",
  "Fix a broken campaign that isn't working",
  "Build a full acquisition system",
];

export function GrowthAuditForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<FormData>({
    name: "", email: "", phone: "", brand: "", website: "",
    adSpend: "", platforms: [], goal: "", challenge: "", consent: false,
  });

  const set = (field: keyof FormData, value: string | boolean | string[]) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const togglePlatform = (p: string) =>
    set("platforms", data.platforms.includes(p) ? data.platforms.filter((x) => x !== p) : [...data.platforms, p]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!data.consent) { setError("Please confirm your consent to proceed."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/growth-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      router.push("/thank-you?type=audit");
    } catch {
      setError("Something went wrong. Please try again or email us directly at rishigoswami2234@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-colors";
  const labelClass = "block text-sm font-medium text-white/70 mb-2";

  return (
    <form onSubmit={handleSubmit} className="card-dark p-8 space-y-6" noValidate aria-label="Free Growth Audit request form">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Request your audit</h2>
        <p className="text-sm text-white/40">Takes about 3 minutes. We'll be in touch within 48 hours.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="audit-name" className={labelClass}>Your name <span className="text-red-400" aria-hidden="true">*</span></label>
          <input id="audit-name" type="text" className={inputClass} placeholder="Rishi Goswami" required value={data.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="audit-email" className={labelClass}>Email address <span className="text-red-400" aria-hidden="true">*</span></label>
          <input id="audit-email" type="email" className={inputClass} placeholder="you@brand.com" required value={data.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="audit-brand" className={labelClass}>Brand / Company name <span className="text-red-400" aria-hidden="true">*</span></label>
          <input id="audit-brand" type="text" className={inputClass} placeholder="Your Brand" required value={data.brand} onChange={(e) => set("brand", e.target.value)} />
        </div>
        <div>
          <label htmlFor="audit-website" className={labelClass}>Website URL</label>
          <input id="audit-website" type="url" className={inputClass} placeholder="https://yourbrand.com" value={data.website} onChange={(e) => set("website", e.target.value)} autoComplete="url" />
        </div>
      </div>

      <div>
        <label htmlFor="audit-phone" className={labelClass}>Phone / WhatsApp</label>
        <input id="audit-phone" type="tel" className={inputClass} placeholder="+91 98765 43210" value={data.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
      </div>

      <div>
        <fieldset>
          <legend className={labelClass}>Current monthly ad spend</legend>
          <div className="grid grid-cols-2 gap-2">
            {adSpendOptions.map((opt) => (
              <button
                key={opt} type="button"
                className={`px-4 py-2.5 rounded-xl text-sm border text-left transition-all duration-150 ${data.adSpend === opt ? "border-brand-violet/60 bg-brand-violet/10 text-white" : "border-white/10 bg-white/3 text-white/50 hover:border-white/20"}`}
                onClick={() => set("adSpend", opt)}
                aria-pressed={data.adSpend === opt}
              >
                {opt}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <fieldset>
          <legend className={labelClass}>Platforms currently active (select all that apply)</legend>
          <div className="flex flex-wrap gap-2">
            {platformOptions.map((p) => (
              <button
                key={p} type="button"
                className={`px-4 py-2 rounded-xl text-sm border transition-all duration-150 ${data.platforms.includes(p) ? "border-brand-azure/60 bg-brand-azure/10 text-white" : "border-white/10 bg-white/3 text-white/50 hover:border-white/20"}`}
                onClick={() => togglePlatform(p)}
                aria-pressed={data.platforms.includes(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <label htmlFor="audit-goal" className={labelClass}>Primary growth goal <span className="text-red-400" aria-hidden="true">*</span></label>
        <select
          id="audit-goal"
          className={`${inputClass} appearance-none cursor-pointer`}
          required value={data.goal}
          onChange={(e) => set("goal", e.target.value)}
        >
          <option value="" disabled>Select your primary goal</option>
          {goalOptions.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="audit-challenge" className={labelClass}>Describe your biggest acquisition challenge</label>
        <textarea
          id="audit-challenge"
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="e.g. Our ROAS has been dropping over the last 3 months and we don't know why..."
          value={data.challenge}
          onChange={(e) => set("challenge", e.target.value)}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="audit-consent"
          type="checkbox"
          className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-brand-violet cursor-pointer"
          checked={data.consent}
          onChange={(e) => set("consent", e.target.checked)}
          required
        />
        <label htmlFor="audit-consent" className="text-xs text-white/40 leading-relaxed cursor-pointer">
          I agree for PerformX to contact me about my growth audit request. Your data will not be shared with third parties.
          See our <a href="/privacy-policy" className="underline hover:text-white/70 transition-colors">Privacy Policy</a>.
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
        {loading ? "Sending your request..." : "Request My Free Growth Audit"}
      </Button>

      <p className="text-xs text-white/25 text-center">
        No spam. No sales pressure. Just an honest, useful audit.
      </p>
    </form>
  );
}
