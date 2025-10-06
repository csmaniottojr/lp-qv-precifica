/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef9ed',
          100: '#fdf2d1',
          200: '#fbe4a3',
          300: '#f8d064',
          400: '#f4ba34',
          500: '#eda116',
          600: '#d1800f',
          700: '#ad610e',
          800: '#9d670c', // Cor primária principal
          900: '#7e4e0d',
          950: '#4a2805',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        }
      }
    },
  },
  plugins: [],
};
