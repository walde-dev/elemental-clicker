module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-background-blue' : '#111827',
        'secondary-blue' : '#1D2334',
        'accent-blue' : '#005B9A',
        'accent-green' : '#2A8373',
        'accent-green-secondary' : '#EFFCF9',
        'hover-grey' : '#202637',
        'selected-grey' : '#252F4A',
        'gold-yellow': '#F9C50D',
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
      transitionProperty: {
        'width' : 'width',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};