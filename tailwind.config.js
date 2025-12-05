/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#1e3a8a',
        'blue-800': '#1e40af',
        'blue-700': '#1d4ed8',
      }
    },
  },
  plugins: [],
}
