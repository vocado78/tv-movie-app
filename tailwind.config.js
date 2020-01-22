module.exports = {
  theme: {
    extend: {
      width: {
        76: '19.2rem',
        240: '60rem',
        296: '74rem'
      },
      height: {
        128: '32rem',
        168: '42rem',
        stick: 'calc(100vh - 12rem)'
      },
      minWidth: {
        32: '8rem'
      },
      fontFamily: {
        rubik: 'Rubik, sans-serif'
      },
      colors: {
        'lb-green': '#00C030',
        'lb-green-dark': '#00b020',
        'lb-form-black': 'rgba(29,35,40,.4)'
      },
      boxShadow: {
        'input-inner-white': 'inset 0 -1px 0 #fff',
        'input-inner-gray': 'inset 0 -1px 0 #456'
      },
      letterSpacing: {
        'more-wider': '.075em'
      }
    },
    inset: {
      '1/2': 'calc(50% - 1rem)'
    },
  },
  variants: {
    borderRadius: ['hover', 'responsive', 'active'],
    borderWidth: ['hover', 'responsive', 'last', 'active']
  },
  plugins: []
};
