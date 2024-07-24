/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,njk,webc}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr minmax(8rem, auto)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      green: colors.emerald,
      orange: colors.orange,
      red: colors.red,
      purple: colors.violet,
      "bright-white": "#F8F2F1",
      "abaddon-black": "#211E22",
      "jade-powder": "#2BAA6D",
      "fall-shill": "#E2DDDC",
    },
    fontFamily: {
      sans: ["DM Sans", "Helvetica", "Arial", "sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
