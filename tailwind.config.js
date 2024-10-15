/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f',
        customGray: '#272A31',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        kantumruy: ['Kantumruy', 'sans-serif'],
      },
    },
  },
}
   
