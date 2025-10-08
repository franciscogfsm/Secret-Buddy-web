/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05030C",
        surface: "#0B0520",
        surfaceSecondary: "#140A35",
        textPrimary: "#F5F2FF",
        textSecondary: "#B9B1EA",
        accentPink: "#FF4FB7",
        accentPurple: "#9C6BFF",
        accentTeal: "#2EE6A9",
        accentYellow: "#FFD60A",
        danger: "#FF6B8A",
        error: "#FF4444",
        border: "rgba(255,255,255,0.1)",
        overlay: "rgba(5,3,12,0.78)",
      },
      backgroundImage: {
        "purple-pink": "linear-gradient(135deg, #6C3BFF 0%, #FF4FB7 100%)",
        "teal-blue": "linear-gradient(135deg, #1FC7B4 0%, #2360FF 100%)",
        sunset: "linear-gradient(135deg, #FF7750 0%, #FF2E92 100%)",
        midnight: "linear-gradient(135deg, #070319 0%, #1C0E3C 100%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        display: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        title: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        subtitle: ["1.125rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.5" }],
        caption: ["0.8125rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
