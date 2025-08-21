/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      fontWeight: {
        'spartan-light': '200',
        'spartan-thin': '300',
        'spartan-normal': '400',
      },
    },
  },
  plugins: [],
}

