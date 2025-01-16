import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "serif"],
        Lobster: ["Lobster", "serif"]
      },
      colors: {
        primaryColor: "#FFFFFF",
        secondaryColor: "#4CAF50",
        textColor: "#4CAF50",
        textColorTwo: "#121212",
      },
    },
  },
  plugins: [],
} satisfies Config;
