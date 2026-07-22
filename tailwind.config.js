/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          wine: '#92003A',
          magenta: '#F62477',
          blush: '#FFADEE',
          amber: '#FFE185',
        },
      },
    },
  },
  plugins: [],
}
