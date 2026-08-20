/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          bg: '#FAF7F2',
          card: '#FFFFFF',
          cardAlt: '#F4EFE6',
          border: '#E8DFD1',
          primary: '#C84B31', // Warm Terracotta / Red matching CST logo
          primaryHover: '#B33C24',
          dark: '#2C1810', // Deep Coffee Brown for text
          muted: '#6E5C55',
          gold: '#D97706',
          cream: '#FFFDF9',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
