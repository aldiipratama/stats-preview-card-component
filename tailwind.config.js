/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        "lexend-deca": ['"Lexend Deca"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
