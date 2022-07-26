module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'lab-blue-1': '#000639',
        'lab-blue-2': '#181B48',
        'lab-blue-6': '#777BAA',
        'lab-black-2': '#292929',
        'lab-black-5': '#7E7E7E',
        'lab-black-7': '#C7C7C7',
        'lab-gray-1': '#F5F5F5',
        'lab-gray-2': '#E5E5E5',
        'lab-yellow': '#FFDA00',
        'lab-yellow-dark': '#ECCB04',
        'lab-red-1': '#F91919'
      },
      screens: {
        xs: { max: '374px' },
        mb: '480px'
      },
      spacing: {
        15: '3.75rem',
        4.5: '1.063rem',
        7.5: '1.875rem',
        8.5: '2.125rem'
      },
      width: {
        18: '4.3755rem',
        27: '6.875rem',
        46: '11.375rem'
      },
      minWidth: {
        27: '6.875rem',
        46: '11.375rem'
      },
      fontSize: {
        'desktop-h3-medium': ['1.5rem', '1.75rem'],
        'desktop-h4': ['1.5rem', '2rem'],
        'desktop-h4-medium': ['2rem', '2.375rem'],
        'desktop-h5': ['1.75rem', '2rem'],
        'big-4xl': '2.56rem'
      }
    }
  },
  plugins: []
};
