import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '375': '375px',  // Custom breakpoint for 375px
        '425': '425px',  // Custom breakpoint for 425px
      },
    },
  },
  plugins: [],
};
export default config;
