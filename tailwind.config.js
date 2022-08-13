/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      'karla': ['Karla', 'sans-serif'],
      'anton': ['Anton', 'sans-serif']
    },
    screens: {
      'xs': '640px',
      'sm': '768px',
      'md': '860px',
      'lg': '1024px',
      'xl': '1240px',
      '2xl': '1536px'
    },
    extend: {},
  },
  plugins: [],
}
