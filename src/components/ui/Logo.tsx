import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white" | "icon-only";
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", className, href = "/", size = "md" }: LogoProps) {
  const iconSizes = { sm: 28, md: 34, lg: 42 };
  const textSizes = { sm: "text-lg", md: "text-xl", lg: "text-2xl" };
  const iconSize = iconSizes[size];

  const logoContent = (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* PX Geometric Icon */}
      <svg width={iconSize} height={iconSize} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="px-g" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7415FD" />
            <stop offset="40%" stopColor="#A838FD" />
            <stop offset="70%" stopColor="#3D5BFD" />
            <stop offset="100%" stopColor="#36C2FE" />
          </linearGradient>
        </defs>
        {/* P letterform */}
        <path d="M5 6h10c4.4 0 8 3.6 8 8s-3.6 8-8 8H5V6z" stroke="url(#px-g)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="5" y1="22" x2="5" y2="30" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
        {/* X letterform */}
        <line x1="20" y1="6" x2="31" y2="20" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="31" y1="6" x2="20" y2="20" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="18.5" y1="22" x2="24" y2="30" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="29.5" y1="22" x2="24" y2="30" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      {variant !== "icon-only" && (
        <span className={cn("font-bold tracking-tight leading-none", textSizes[size])}>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: variant === "white"
                ? "none"
                : "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.9) 60%, #A8B8FF 100%)",
              color: variant === "white" ? "#FFFFFF" : undefined,
            }}
          >
            Perform
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #7415FD 0%, #36C2FE 100%)" }}
          >
            X
          </span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet rounded-lg" aria-label="PerformX — Performance That Scales — Homepage">
        {logoContent}
      </Link>
    );
  }
  return logoContent;
}
