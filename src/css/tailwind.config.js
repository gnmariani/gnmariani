/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr minmax(8rem, auto)",
      },
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
