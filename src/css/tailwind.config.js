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
      "mango-margarita": "#F5B84E",
      "abaddon-black": "#02080B",
      "nato-blue": "#0D2B3F",
      "am-in-shibuya": "#1F5375",
      "stretch-limo": "#2C2F34",
    },
    fontFamily: {
      sans: ["DM Sans", "Helvetica", "Arial", "sans-serif", "system-ui"],
      serif: ["Quattrocento", "ui-serif", "Georgia"],
      mono: ["Courier Prime", "ui-monospace", "SFMono-Regular"],
    },
  },
  plugins: [],
};
