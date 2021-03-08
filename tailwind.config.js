module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#C7C9FF',
          DEFAULT: '#7479DC',
          dark: '#3D3E66',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
