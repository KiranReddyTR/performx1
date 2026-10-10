"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (pref) return;

    // Animate all [data-gsap] elements on scroll
    const elements = document.querySelectorAll("[data-gsap]") as NodeListOf<HTMLElement>;
    elements.forEach((el) => {
      const type    = el.dataset.gsap || "fadeUp";
      const delay   = parseFloat(el.dataset.delay  || "0");
      const dur     = parseFloat(el.dataset.dur    || "0.9");

      const fromMap: Record<string, gsap.TweenVars> = {
        fadeUp:    { y: 50,   opacity: 0 },
        fadeLeft:  { x: -40,  opacity: 0 },
        fadeRight: { x: 40,   opacity: 0 },
        fade:      { opacity: 0 },
        scale:     { scale: 0.92, opacity: 0 },
      };

      gsap.from(el, {
        ...fromMap[type] ?? fromMap.fadeUp,
        duration: dur,
        delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });

    // Stagger children of [data-gsap-stagger]
    const staggerParents = document.querySelectorAll("[data-gsap-stagger]") as NodeListOf<HTMLElement>;
    staggerParents.forEach((parent) => {
      const staggerDelay = parseFloat(parent.dataset.gsapStagger || "0.08");
      gsap.from(parent.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: parent,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <>{children}</>;
}
