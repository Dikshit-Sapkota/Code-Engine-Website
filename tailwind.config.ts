import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0F1A",
        "ink-soft": "#111A2B",
        "ink-line": "rgba(237,239,243,0.09)",
        paper: "#EEF0EC",
        "paper-line": "rgba(10,15,26,0.10)",
        "paper-soft": "#E4E7E0",
        ash: "#7C8AA0",
        signal: {
          blue: "#5B8DEF",
          teal: "#3FB88F",
          amber: "#E8A548",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      maxWidth: {
        studio: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
