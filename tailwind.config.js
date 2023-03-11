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
        'customBlue': '#2D2C9C',
        'customGreen': '#3C8E7C',
        'customPink': '#C34BBD',
        'customRed': '#E23A1D',
        'customYellow': '#F9BB35',

        'loginBlue': '#297ED1',
        'loginHover': '#287DD0'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
