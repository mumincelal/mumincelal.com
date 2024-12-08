import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          // biome-ignore lint/style/useNamingConvention: It is tailwindcss convention
          DEFAULT: "var(--color-white)"
        },
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)"
        },
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)"
        }
      }
    }
  },
  plugins: [
    // biome-ignore lint/nursery/noCommonJs: It is a way to import plugins
    require("tailwindcss-animate"),
    // biome-ignore lint/nursery/noCommonJs: It is a way to import plugins
    require("@tailwindcss/typography"),
    plugin(({ addComponents }) => {
      addComponents({
        ".text-display": {
          "@apply font-semibold text-7xl": {}
        },
        ".text-body-thin-400": {
          "@apply font-normal text-xs": {}
        },
        ".text-body-thin-500": {
          "@apply font-medium text-xs": {}
        },
        ".text-body-thin-600": {
          "@apply font-semibold text-xs": {}
        },
        ".text-body-small-400": {
          "@apply font-normal text-sm": {}
        },
        ".text-body-small-500": {
          "@apply font-medium text-sm": {}
        },
        ".text-body-small-600": {
          "@apply font-semibold text-sm": {}
        },
        ".text-body-regular-400": {
          "@apply font-normal text-base": {}
        },
        ".text-body-regular-500": {
          "@apply font-medium text-base": {}
        },
        ".text-body-regular-600": {
          "@apply font-semibold text-base": {}
        },
        ".text-body-large-400": {
          "@apply font-normal text-lg": {}
        },
        ".text-body-large-500": {
          "@apply font-medium text-lg": {}
        },
        ".text-body-large-600": {
          "@apply font-semibold text-lg": {}
        },
        ".text-heading-1": {
          "@apply font-semibold text-5xl": {}
        },
        ".text-heading-2": {
          "@apply font-semibold text-4xl": {}
        },
        ".text-heading-3": {
          "@apply font-semibold text-3xl": {}
        },
        ".text-heading-4": {
          "@apply font-semibold text-2xl": {}
        },
        ".text-heading-5": {
          "@apply font-semibold text-xl": {}
        }
      });
    })
  ]
};

// biome-ignore lint/style/noDefaultExport: It is a tailwindcss convention
export default config;
