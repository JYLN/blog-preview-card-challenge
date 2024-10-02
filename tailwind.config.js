/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      gray: {
        500: "#6B6B6B",
        950: "#111111",
      },
      yellow: "#F4D04E",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        figtree: ["Figtree Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
