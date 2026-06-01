/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        secondary: '#161616',
        accentGold: '#D4AF37',
        accentBlue: '#4F8CFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or any premium font
      }
    },
  },
  plugins: [],
}
