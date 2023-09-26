/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        thin: ['Lato_100Thin'],
        light: ['Lato_300Light'],
        normal: ['Lato_300Light'],
        medium: ['Lato_400Regular'],
        bold: ['Lato_700Bold'],
        black: ['Lato_900Black'],
      },
    },
  },
  plugins: [],
}
