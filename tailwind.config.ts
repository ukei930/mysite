import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        pink: {
          light: "#FFB6C1",
          DEFAULT: "#FF69B4",
          dark: "#FFC0CB",
        },
        purple: {
          light: "#E6E6FA",
        },
        yellow: {
          light: "#FFFACD",
        },
      },
      fontFamily: {
        "noto-jp": ["Noto Sans JP", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "noto-sc": ["Noto Sans SC", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
