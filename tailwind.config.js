/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
                shine: {
                  '0%': { 'background-position': '100%' },
                  '100%': { 'background-position': '-100%' },
                },
                marquee: {
                  '0%': { transform: 'translateX(0%)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
              },
              animation: {
                shine: 'shine 5s linear infinite',
                marquee: 'marquee 25s linear infinite'
              },

    },
  },
  plugins: [],
}