import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          black:  "#010002",
          white:  "#FFFFFF",
          violet: "#7415FD",
          purple: "#A838FD",
          blue:   "#3D5BFD",
          azure:  "#0A94FD",
          cyan:   "#36C2FE",
        },
        surface: {
          DEFAULT: "#010002",
          "01": "#08080C",
          "02": "#0C0C10",
          "03": "#111116",
          "04": "#18181E",
        },
      },
      backgroundImage: {
        "brand-gradient":     "linear-gradient(90deg,#7415FD 0%,#A838FD 28%,#3D5BFD 60%,#0A94FD 82%,#36C2FE 100%)",
        "brand-gradient-135": "linear-gradient(135deg,#7415FD 0%,#A838FD 28%,#3D5BFD 60%,#0A94FD 82%,#36C2FE 100%)",
        "brand-gradient-v":   "linear-gradient(180deg,#7415FD 0%,#36C2FE 100%)",
        "hero-radial":        "radial-gradient(ellipse 90% 55% at 50% -5%,rgba(116,21,253,0.22) 0%,transparent 70%)",
        "card-glow":          "radial-gradient(ellipse 200% 100% at 50% 100%,rgba(116,21,253,0.06) 0%,transparent 60%)",
      },
      fontFamily: {
        sans:    ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "7xl": ["clamp(3.5rem,9vw,8rem)",    { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "6xl": ["clamp(2.75rem,7vw,6rem)",   { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "5xl": ["clamp(2.25rem,5.5vw,4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "4xl": ["clamp(1.875rem,4.5vw,3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "3xl": ["clamp(1.5rem,3.5vw,2.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-2xl": ["clamp(3rem,8vw,7.5rem)",   { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-xl":  ["clamp(2.5rem,6vw,5.5rem)", { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
        "display-lg":  ["clamp(2rem,5vw,4rem)",     { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md":  ["clamp(1.75rem,4vw,3rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-sm":  ["clamp(1.5rem,3vw,2.25rem)",{ lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      animation: {
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":       "float 7s ease-in-out infinite",
        "shimmer":     "shimmer 2.5s linear infinite",
        "marquee":     "marquee 35s linear infinite",
        "spin-slow":   "spin 20s linear infinite",
      },
      keyframes: {
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-18px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4,0,0.2,1)",
        "spring": "cubic-bezier(0.34,1.56,0.64,1)",
        "expo":   "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
export default config;
