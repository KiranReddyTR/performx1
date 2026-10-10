"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return <p className="text-brand-cyan text-sm font-medium py-3">You&apos;re on the list. We&apos;ll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-colors"
        aria-describedby={status === "error" ? "newsletter-error" : undefined}
      />
      <Button type="submit" variant="primary" size="md" loading={status === "loading"}>
        Subscribe
      </Button>
      {status === "error" && (
        <p id="newsletter-error" className="text-xs text-red-400 mt-1 sm:col-span-2" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
