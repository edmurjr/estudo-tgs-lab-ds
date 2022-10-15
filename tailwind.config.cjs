/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
     xs: 14,
     sm: 16,
     md: 18,
     lg: 20,
     xl: 24,
     '2xl': 32, 
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      orange: "#FBA94C",
      brown: "#2E1B06",

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      green: {
        800: "#015F43",
        400: "#00B37E",
        200: "#04D361",
      },

      green_flat_3: "#006E2E",

      cyan: {
        500: '#81d8f7',
        300: '#9be1f8',
        200: '#a5ebff',
      },

      purple: {
        800: "#633BBC",
        400: "#8257E6",
        200: "#996DFF",
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
