import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white" | "icon-only";
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", className, href = "/", size = "md" }: LogoProps) {
  const dims: Record<string, { h: number; w: number }> = {
    sm: { h: 26, w: 110 },
    md: { h: 32, w: 135 },
    lg: { h: 40, w: 170 },
  };
  const { h, w } = dims[size];

  const content = (
    <span className={cn("inline-flex items-center select-none", className)}>
      <Image
        src="/images/performx-logo.png"
        alt="PerformX"
        width={w}
        height={h}
        priority
        quality={95}
        className={cn("object-contain", variant === "white" && "brightness-0 invert")}
        style={{ height: h, width: "auto", maxWidth: w }}
      />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7415FD] rounded-md" aria-label="PerformX — Performance That Scales">
        {content}
      </Link>
    );
  }
  return content;
}

/** SVG icon mark — used standalone where the wordmark isn't needed */
export function PXIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="px-g" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7415FD" />
          <stop offset="40%"  stopColor="#A838FD" />
          <stop offset="70%"  stopColor="#3D5BFD" />
          <stop offset="100%" stopColor="#36C2FE" />
        </linearGradient>
      </defs>
      <path d="M5 6h10c4.4 0 8 3.6 8 8s-3.6 8-8 8H5V6z" stroke="url(#px-g)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="5" y1="22" x2="5" y2="30" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="20" y1="6"  x2="31" y2="20" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="31" y1="6"  x2="20" y2="20" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="18.5" y1="22" x2="24" y2="30" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="29.5" y1="22" x2="24" y2="30" stroke="url(#px-g)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
