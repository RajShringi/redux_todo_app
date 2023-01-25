/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "desktop-dark": "url('/public/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('/public/images/bg-desktop-light.jpg')",
        "mobile-dark": "url('/public/images/bg-mobile-dark.jpg')",
        "mobile-light": "url('/public/images/bg-mobile-light.jpg')",
      },
      colors: {
        "lt-very-light-gray": "hsl(0, 0%, 98%)",
        "lt-very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "lt-light-grayish-blue": "hsl(233, 11%, 84%)",
        "lt-dark-grayish-blue": "hsl(236, 9%, 61%)",
        "lt-very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        "dt-very-dark-blue": "hsl(235, 21%, 11%)",
        "dt-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "dt-light-grayish-blue": "hsl(234, 39%, 85%)",
        "dt-light-grayish-blue": "hsl(236, 33%, 92%)",
        "dt-dark-grayish-blue": "hsl(234, 11%, 52%)",
        "dt-very-dark-grayish-blue-one": "hsl(233, 14%, 35%)",
        "dt-very-dark-grayish-blue-two": "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        josefin_sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      });
    }),
  ],
};
