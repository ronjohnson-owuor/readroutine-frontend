import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#F2F2F2",
        lightFg: "#FFFFFF",
        mainColor:"#1ec775",
        secondaryGreen:"#33cc66",
        darkBg:"#242932",
        darkFg:"#29303C"
      },
      textColor:{
        lightText:"#1F2937",
        darkText:"#A5ACBA"
      }
    },
  },
  plugins: [],
};
export default config;
