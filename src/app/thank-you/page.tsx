import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — PerformX",
  description: "Your submission has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="section-container text-center max-w-xl mx-auto">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background:"rgba(74,222,128,0.08)", border:"1px solid rgba(74,222,128,0.2)" }}>
          <CheckCircle2 size={36} className="text-green-400" aria-hidden="true" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          We&apos;ve got your{" "}
          <span style={{ background:"linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            request.
          </span>
        </h1>
        <p className="text-lg text-white/40 mb-4 leading-relaxed">
          Your submission has been received. A member of the PerformX team will be in touch within{" "}
          <strong className="text-white/70">48 hours</strong>.
        </p>
        <p className="text-sm text-white/25 mb-12">
          In the meantime, reach us at{" "}
          <a href="mailto:rishigoswami2234@gmail.com" className="text-brand-azure hover:underline">
            rishigoswami2234@gmail.com
          </a>
          {" "}or WhatsApp{" "}
          <a href="https://wa.me/918839685579" className="text-brand-azure hover:underline">+91 88396 85579</a>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm"
            style={{ background:"linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
            Explore Case Studies
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
