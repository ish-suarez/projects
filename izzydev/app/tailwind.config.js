/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aton': [ 'Raleway', 'sans-serif' ],
        'front-end': ['Passions Conflict', 'cursive'],
        'software': ['Abril Fatface', 'cursive'],
        'backend': ['Cutive Mono', 'monospace'],
        'fullstack': ['Righteous', 'cursive'],
        'name': ['Alfa Slab One', 'cursive']

      }
    },
  },
  plugins: [],
}
