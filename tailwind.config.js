/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#363853',
        primary: '#0012FF',
        green: '#67D4CA',
        red: '#F28080',
        'dark-light': '#f8fafb'
      }
    },
  },
  plugins: [],
}

