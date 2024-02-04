/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'img': "url('./dist/img/main-bg.png')",
      },
      fontFamily: {
        'main': 'Coolvetica, sans-serif',
      },
      backgroundColor: {
        'primary': '#FFBF00',
      }
    },
  },
  plugins: [],
}

