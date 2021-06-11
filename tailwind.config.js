const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': ['Teko', 'ui-monospace', 'SFMono-Regular'],
      'sub': ['Heebo', 'ui-monospace', 'SFMono-Regular'],
      'body': ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': {
        DEFAULT: '#111111',
        '50': '#848484',
        '100': '#777777',
        '200': '#5E5E5E',
        '300': '#444444',
        '400': '#2B2B2B',
        '500': '#111111',
        '600': '#000000',
        '700': '#000000',
        '800': '#000000',
        '900': '#000000'
      },
      'white': {
        DEFAULT: '#F9F9F9',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FFFFFF',
        '500': '#F9F9F9',
        '600': '#E0E0E0',
        '700': '#C6C6C6',
        '800': '#ACACAC',
        '900': '#939393'
      },
      gray: colors.coolGray,
      'primary': {
        DEFAULT: '#FF4655',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFDFE2',
        '300': '#FFACB3',
        '400': '#FF7984',
        '500': '#FF4655',
        '600': '#FF1326',
        '700': '#DF0012',
        '800': '#AC000E',
        '900': '#79000A'
      },
      'secondary': {
        DEFAULT: '#ECE8E1',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FFFFFF',
        '500': '#ECE8E1',
        '600': '#D8D0C2',
        '700': '#C4B8A3',
        '800': '#B1A083',
        '900': '#9D8864'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
