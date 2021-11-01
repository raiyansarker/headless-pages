module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        background: '#F7F9FD',
        header: '#8C8C9C',
        primary: '#8C949C',
        button: '#5675EA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
