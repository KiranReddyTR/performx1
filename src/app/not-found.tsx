import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Page Not Found — PerformX",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container text-center">
        <div className="relative mb-8">
          <span className="text-[180px] font-black text-white/[0.03] leading-none select-none block" aria-hidden="true">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-display-lg font-bold text-white">
              Page <GradientText>not found.</GradientText>
            </h1>
          </div>
        </div>
        <p className="text-lg text-white/50 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/">Back to Homepage</Button>
          <Button variant="secondary" size="lg" href="/contact">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
