/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- isso é essencial
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: '#0d2438',
        secondary: '#f5f5f5', 
        'secondary-dark': '#1a2a3b', 
      },
    },
  },
  plugins: [],
}
