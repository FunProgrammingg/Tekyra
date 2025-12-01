import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tekyra: {
          deep: "#0A2A43",
          cyan: "#00C6E6",
          black: "#0B0B0B",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
