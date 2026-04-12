/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
      colors: {
        'grey-800': '#3E446B',
        'grey-700': '#565B7E',
        'grey-600': '#6E7390',
        'coral':    '#FF797E',
        'teal':     '#03B6B5',
        'cyan-accent': '#05A2C6',
      },
      boxShadow: {
        'grey-card':  '0px 3px 16px 0px rgba(24,74,234,0.09)',
        'card-dark':  '0px 10px 20px 0px rgba(65,64,66,0.1)',
        'glass-nav':  '0px 15px 39.7px 0px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'pill': '39px',
      },
    },
  },
  plugins: [],
}
