/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        title: `2.6rem;`,
        paragraph: `1.2rem;`
      },
      colors: {
        'customBlue': '#287ED0',
        'customBlueFresh': '#384FC7',
        'customBlueNight': '#2D2C9C',
        'customDaisy': '#5E2980',
        'customGreen': "#3C8E7B",
        'customGreenLight': "#6DE153",
        'customGreenVan': "#5ECD8A",
        'customOrange': "#F3882A",
        'customPink': '#C34BBD',
        'customPurple': '#973FB5',
        'customRed': '#E23A1D',
        'customYellow': '#F9BB35',
        // Overall grayish shadow
        'customShadow': '#00000044',
        // Forms
        'customForm': '#7B7B7B',
        // Layout
        'customGray': '#4B4B4D'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  safelist: [
    {
      pattern: /(bg|text|border|from|via|ring|stroke)-custom(Blue|BlueFresh|BlueNigh|Daisy|Green|GreenLight|GreenVan|Orange|Pink|Purple|Red|Yellow)/,
    },
    'hover:text-customBlue',
    'hover:text-customBlueFresh',
    'hover:text-customBlueNight',
    'hover:text-customDaisy',
    'hover:text-customGreen',
    'hover:text-customGreenLight',
    'hover:text-customGreenVan',
    'hover:text-customOrange',
    'hover:text-customPink',
    'hover:text-customPurple',
    'hover:text-customRed',
    'hover:text-customYellow',

    'hover:bg-customBlue',
    'hover:bg-customBlueFresh',
    'hover:bg-customBlueNight',
    'hover:bg-customDaisy',
    'hover:bg-customGreen',
    'hover:bg-customGreenLight',
    'hover:bg-customGreenVan',
    'hover:bg-customOrange',
    'hover:bg-customPink',
    'hover:bg-customPurple',
    'hover:bg-customRed',
    'hover:bg-customYellow',
    
    'focus:ring-customBlue',
    'focus:ring-customBlueFresh',
    'focus:ring-customBlueNight',
    'focus:ring-customDaisy',
    'focus:ring-customGreen',
    'focus:ring-customGreenLight',
    'focus:ring-customGreenVan',
    'focus:ring-customOrange',
    'focus:ring-customPink',
    'focus:ring-customPurple',
    'focus:ring-customRed',
    'focus:ring-customYellow',
  ]
}