module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(185, 75%, 39%)',
        darkBlue: 'hsl(229, 23%, 23%)',
        grayBlue: 'hsl(227, 10%, 46%)',
        darkGray: 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        kumbh: 'Kumbh Sans, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
