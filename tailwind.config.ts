import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#134FD2",
          light: "#497DEE"
        },
        secondary: {
          DEFAULT: "#111827",
          dark: "#090D15",
          light: "#172135"
        },
        white: {
          DEFAULT: "#F7F3F3",
          dark: "#E3E8ED",
          light: "#FFFFFF"
        },
        black: {
          DEFAULT: "#060504",
          dark: "#000000",
          light: "#120F0C"
        }
      },
      fontSize: {
        lead: "1.5rem"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
};
export default config;
