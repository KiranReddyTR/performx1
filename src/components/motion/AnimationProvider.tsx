"use client";

import { useEffect } from "react";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const initStagger = () => {
      const parents = document.querySelectorAll("[data-stagger]");
      parents.forEach((parent) => {
        const kids = Array.from(parent.children) as HTMLElement[];
        const delay = parseInt(parent.getAttribute("data-stagger") || "80");

        kids.forEach((child, i) => {
          child.style.opacity = "0";
          child.style.transform = "translateY(24px)";
          child.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * delay}ms`;
        });

        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              kids.forEach((child) => {
                child.style.opacity = "1";
                child.style.transform = "none";
              });
              obs.disconnect();
            }
          },
          { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
        );
        obs.observe(parent);
      });
    };

    // Run after first paint
    requestAnimationFrame(() => {
      requestAnimationFrame(initStagger);
    });
  }, []);

  return <>{children}</>;
}
