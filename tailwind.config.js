/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/component/**/*.{js,jsx,ts,tsx}",  // Укажите путь к вашим компонентам
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f', // Добавьте свои цветовые палитры
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Пользовательские шрифты
      },
    },
  },
}