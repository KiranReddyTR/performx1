import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  separator?: string;
}

export function Marquee({ items, className, speed = "normal", separator = "·" }: MarqueeProps) {
  const durations = { slow: "50s", normal: "35s", fast: "20s" };
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={cn("overflow-hidden whitespace-nowrap select-none", className)} aria-hidden="true">
      <div
        className="inline-flex gap-8"
        style={{
          animation: `marquee ${durations[speed]} linear infinite`,
          willChange: "transform",
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 text-sm font-medium text-white/25 uppercase tracking-widest">
            {item}
            <span className="text-brand-violet opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
