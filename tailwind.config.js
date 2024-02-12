/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-1': '#2B2D42',
        'theme-2': '#8D99AE',
        'theme-3': '#EDF2F4',
        'theme-4': '#EF233C',
      },
      fontFamily: {
        'theme-1': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
