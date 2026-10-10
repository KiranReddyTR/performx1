"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function TextReveal({ children, className, as: Tag = "h2", delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Split text into words and animate each
    const words = children.split(" ");
    el.innerHTML = words
      .map(
        (word, i) =>
          `<span style="display:inline-block;overflow:hidden;"><span style="display:inline-block;opacity:0;transform:translateY(100%);transition:opacity 0.5s ease ${delay + i * 60}ms, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${delay + i * 60}ms">${word}&nbsp;</span></span>`
      )
      .join("");

    const spans = el.querySelectorAll("span > span") as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          spans.forEach((s) => {
            s.style.opacity = "1";
            s.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [children, delay]);

  const TagComponent = Tag as any;
  return (
    <TagComponent ref={ref} className={cn(className)}>
      {children}
    </TagComponent>
  );
}
