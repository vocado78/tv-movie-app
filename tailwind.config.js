module.exports = {
  theme: {
    extend: {
      width: {
        76: '19.2rem',
        240: '60rem'
      },
      height: {
        168: '42rem',
        stick: 'calc(100vh - 12rem)'
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
