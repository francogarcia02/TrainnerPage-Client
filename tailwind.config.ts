import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        title: "#F2CB05",
        sub: "#D9B504",
        on: "#F2CB05", 
        hover: "#D9B504",
        gris: "#4F5963"
      },
    },
  },
  plugins: [],
} satisfies Config;
