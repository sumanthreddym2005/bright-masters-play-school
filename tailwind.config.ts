import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB703",
        secondary: "#219EBC",
        accent: "#FB8500",
        soft: "#F1FAEE"
      }
    }
  },
  plugins: []
};

export default config;