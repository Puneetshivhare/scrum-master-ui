import type { Config } from "tailwindcss";

// Design language inspired by getdesign.md's Linear analysis:
// near-black canvas, light-gray text, single lavender-blue accent,
// dense technical/documentation feel.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#010102",
        surface1: "#0f1011",
        surface2: "#141516",
        ink: "#f7f8f8",
        mute: "#8a8f98",
        muteStrong: "#d0d6e0",
        line: "#23252a",
        lineStrong: "#34343a",
        primary: "#5e6ad2",
        primaryHover: "#828fff",
        success: "#27a644",
        // kept for shared component compat
        amber: "#5e6ad2",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
