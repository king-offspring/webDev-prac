/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Roboto', 'sans-serif'],
      },
      color:{
        primaryColor:"#212428"

      }
    },
  },
  plugins: [],
}

