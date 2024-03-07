import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "onyx-300": "rgb(175 173 190)",
        "onyx-400": "rgb(148 144 167)",
        // "onyx-500": "rgb(28 27 34)",
        // "onyx-600": "rgb(28 27 34)",
        "onyx-700": "rgb(75 72 91)",
        "onyx-800": "rgb(52 50 63)",
        "onyx-900": "rgb(31 30 38)",
        "onyx-950": "rgb(28 27 34)",
      },
      // ...
    },
  },
  plugins: [],
};
export default config;
