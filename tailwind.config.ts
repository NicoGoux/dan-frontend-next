import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "var(--background)",
        "primary-font": "var(--primary-font)",
        "secondary-font": "var(--secondary-font)",
        button: "var(--button)",
        "button-text": "var(--button-text)",
        border: "var(--border)",
      },
      screens: {
        xsm: "500px",

        sm: "750px",
        // => @media (min-width: 640px) { ... }

        md: "875px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },

  plugins: [],
};
export default config;
