/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      fontSize: {
        title: `2.6rem;`,
        paragraph: `1.2rem;`,
      },
      colors: {
        primary: {
          50: "#FEF8EB",
          100: "#FEF2D7",
          200: "#FDE4B0",
          300: "#FBD788",
          400: "#FAC85C",
          500: "#F9BB35",
          600: "#E9A107",
          700: "#B27C05",
          800: "#775204",
          900: "#3B2902",
        },
        customBlue: "#287ED0",
        customBlueFresh: "#384FC7",
        customBlueNight: "#2D2C9C",
        customDaisy: "#5E2980",
        customGreen: "#3C8E7B",
        customGreenLight: "#6DE153",
        customGreenVan: "#5ECD8A",
        customOrange: "#F3882A",
        customPink: "#C34BBD",
        customPurple: "#973FB5",
        customRed: "#E23A1D",
        customYellow: "#F9BB35",
        // Overall grayish shadow
        customShadow: "#00000044",
        // Forms
        customForm: "#7B7B7B",
        // Layout
        customGray: "#4B4B4D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    {
      pattern:
        /(bg|text|border|from|via|ring|stroke|border-r-)-custom(Blue|BlueFresh|BlueNigh|Daisy|Green|GreenLight|GreenVan|Orange|Pink|Purple|Red|Yellow)/,
    },
    "hover:text-customBlue",
    "hover:text-customBlueFresh",
    "hover:text-customBlueNight",
    "hover:text-customDaisy",
    "hover:text-customGreen",
    "hover:text-customGreenLight",
    "hover:text-customGreenVan",
    "hover:text-customOrange",
    "hover:text-customPink",
    "hover:text-customPurple",
    "hover:text-customRed",
    "hover:text-customYellow",

    "hover:bg-customBlue",
    "hover:bg-customBlueFresh",
    "hover:bg-customBlueNight",
    "hover:bg-customDaisy",
    "hover:bg-customGreen",
    "hover:bg-customGreenLight",
    "hover:bg-customGreenVan",
    "hover:bg-customOrange",
    "hover:bg-customPink",
    "hover:bg-customPurple",
    "hover:bg-customRed",
    "hover:bg-customYellow",

    "focus:ring-customBlue",
    "focus:ring-customBlueFresh",
    "focus:ring-customBlueNight",
    "focus:ring-customDaisy",
    "focus:ring-customGreen",
    "focus:ring-customGreenLight",
    "focus:ring-customGreenVan",
    "focus:ring-customOrange",
    "focus:ring-customPink",
    "focus:ring-customPurple",
    "focus:ring-customRed",
    "focus:ring-customYellow",

    "focus-within:ring-customBlue",
    "focus-within:ring-customBlueFresh",
    "focus-within:ring-customBlueNight",
    "focus-within:ring-customDaisy",
    "focus-within:ring-customGreen",
    "focus-within:ring-customGreenLight",
    "focus-within:ring-customGreenVan",
    "focus-within:ring-customOrange",
    "focus-within:ring-customPink",
    "focus-within:ring-customPurple",
    "focus-within:ring-customRed",
    "focus-within:ring-customYellow",

    "focus-within:border-customBlue",
    "focus-within:border-customBlueFresh",  
    "focus-within:border-customBlueNight",
    "focus-within:border-customDaisy",
    "focus-within:border-customGreen",
    "focus-within:border-customGreenLight",
    "focus-within:border-customGreenVan",
    "focus-within:border-customOrange",
    "focus-within:border-customPink",
    "focus-within:border-customPurple",
    "focus-within:border-customRed",
    "focus-within:border-customYellow",

    "hover:border-customBlue",
    "hover:border-customBlueFresh",
    "hover:border-customBlueNight",
    "hover:border-customDaisy",
    "hover:border-customGreen",
    "hover:border-customGreenLight",
    "hover:border-customGreenVan",
    "hover:border-customOrange",
    "hover:border-customPink",
    "hover:border-customPurple",
    "hover:border-customRed",
    "hover:border-customYellow",
  ],
};
