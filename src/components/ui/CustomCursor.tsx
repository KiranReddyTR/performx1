"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide on mobile
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => ring.classList.add("cursor-hover");
    const onLeaveLink = () => ring.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role=button]").forEach(el => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#7415FD,#36C2FE)",
          willChange: "transform",
        }}
      />
      {/* Ring — lerp follow */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9998] pointer-events-none transition-[width,height,background] duration-300"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: "50%",
          border: "1.5px solid rgba(116,21,253,0.5)",
          willChange: "transform",
        }}
      />
      <style>{`
        .cursor-hover { width: 56px !important; height: 56px !important; margin-left: -28px !important; margin-top: -28px !important; border-color: rgba(116,21,253,0.8) !important; background: rgba(116,21,253,0.06) !important; }
      `}</style>
    </>
  );
}
