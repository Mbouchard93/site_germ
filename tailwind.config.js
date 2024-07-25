/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors : {
      'blue' : '#00263d',
      'yellow' : '#fcb900',
      'withe' : '#fff'
    },
    fontFamily : {
      'sans' : ['Playfair Display', 'sans-serif'],
      'parisienne' : ['Parisienne', 'cursive']

    },
    extend: {},
  },
  plugins: [],
}

