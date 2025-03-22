/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#1F2937', // exemplo
      },
      fontFamily: {
        sans: ['Raleway', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}