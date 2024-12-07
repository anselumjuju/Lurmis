/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aboreto': ['Aboreto', 'cursive'],
        'figtree': ['Figtree', 'sans-serif']
      },
      colors: {
        'gray': '#141414',
        'light-gray': '#dfdfdf',
      }
    },
  },
  plugins: [],
}