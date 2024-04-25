/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#04594D",
        primary_hover: "#009C86",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      keyframes: {
        moveIn: {
          "0%": { opacity: "0", transform: "translateY(-50%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        "slide-in": {
          "0%": { transform: "translateX(7%)" },
          "25%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(2%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-5%)" },
        },
      },
      animation: {
        moveIn: "moveIn 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
