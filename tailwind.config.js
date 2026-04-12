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
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'grey-800': '#3E446B',
        'grey-700': '#565B7E',
        'grey-600': '#6E7390',
        'grey-500': '#ABADBE',
        'grey-400': '#666B7D',
        'coral':    '#FF797E',
        'coral-light': '#FFAFB3',
        'teal':     '#03B6B5',
        'cyan-accent': '#05A2C6',
        'bg-warm':  '#F7F3F3',
        'bg-hero':  '#F8E9E6',
        'bg-green': '#EEFBDC',
      },
      boxShadow: {
        'grey-card':  '0px 3px 16px 0px rgba(24,74,234,0.09)',
        'card-dark':  '0px 10px 20px 0px rgba(65,64,66,0.1)',
        'glass-nav':  '0px 5px 71.8px 0px rgba(24,74,234,0.09)',
        'pink':       '0px 10px 20px 0px rgba(255,121,126,0.30)',
        'pink-sm':    '0px 10px 20px 0px rgba(255,121,126,0.10)',
        'footer':     '0px -10px 20px 0px rgba(255,121,126,0.10)',
      },
      borderRadius: {
        'pill': '39px',
        'btn':  '28px',
      },
    },
  },
  plugins: [],
}
