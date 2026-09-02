import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      colors: {
        engine: {
          green: "#78ff6b",
          dark: "#070908",
          card: "#0d110e",
          border: "#202820"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(120,255,107,0.12)"
      }
    }
  },
  plugins: []
};

export default config;