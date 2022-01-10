module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-background-blue' : '#0A0F22',
        'secondary-blue' : '#1D2334',
        'accent-blue' : '#005B9A',
        'hover-grey' : '#2F364A',
        'selected-grey' : '#252F4A',
        'grey' : '#BAC7CC',
        'white' : '#F0F4F8',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '700px',
        'md': '769px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};