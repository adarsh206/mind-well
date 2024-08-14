/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Poppins", "sans-serif"],
        'secondary': ["Syne", "sans-serif"]
      },
      colors: {
        'heoBg' : "#0e1122",
        'para' : 'rgb(0 0 0 / 80%)',
        'primary' : '#f007e8'
      }
    },
  },
  plugins: [],
}