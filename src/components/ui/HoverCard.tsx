"use client";

import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  glowColor?: string;
  as?: "div" | "li";
  onClick?: () => void;
}

export function HoverCard({ children, className, borderColor, glowColor, as: Tag = "div", onClick }: HoverCardProps) {
  return (
    <Tag
      className={cn("transition-all duration-300 hover:-translate-y-1 cursor-default", className)}
      style={{
        background: "#0C0C10",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (borderColor) el.style.borderColor = borderColor;
        if (glowColor) el.style.boxShadow = `0 8px 40px ${glowColor}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.boxShadow = "none";
      }}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}
