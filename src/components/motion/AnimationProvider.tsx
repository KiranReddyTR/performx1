"use client";

import { useEffect } from "react";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Stagger children of elements with data-stagger attribute
    const staggerParents = document.querySelectorAll("[data-stagger]");
    staggerParents.forEach((parent) => {
      const children = Array.from(parent.children) as HTMLElement[];
      const delay = parseInt(parent.getAttribute("data-stagger") || "100");
      children.forEach((child, i) => {
        child.style.opacity = "0";
        child.style.transform = "translateY(20px)";
        child.style.transition = `opacity 0.5s ease ${i * delay}ms, transform 0.5s ease ${i * delay}ms`;
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            children.forEach((child) => {
              child.style.opacity = "1";
              child.style.transform = "none";
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(parent);
    });
  }, []);

  return <>{children}</>;
}
