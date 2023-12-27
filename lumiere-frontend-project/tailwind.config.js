/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        white: '0px 5px 15px -3px rgba(232, 233, 237, 0.05)', // shadow-white
        black: '0px 5px 15px -3px rgba(0, 0, 0, 0.02)', // shadow-black
      },
      width: {
        128: 'fit-content',
        '9/2': '48%',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    fontSize: {
      sm: '1rem', // font-sm (info)
      base: '1.125rem', // font-base (p)
      xl: '1.5rem', // font-xl (h3)
      '2xl': '1.75rem', // font-2xl (h2)
      '3xl': '2rem', // font-3xl (h1)
      '4xl': '2.75rem', // font-4xl (-)
      '5xl': '3.5rem', // font-5xl (tittle-dm-display)
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',

      primary: {
        800: '#0D1D37', // primary-500
        500: '#1D3F7E', // primary-800
      },
      secondary: {
        800: '#A88446', // secondary-800
        500: '#D1BC87', // secondary-500
      },
      gray: {
        800: '#252932', // gray-800
        600: '#4B4E57', // gray-600
        550: '#9498A1', //gray-550
        500: '#BDBDBD', // gray-500
        400: '#9498A1', // gray-400
        300: '#C0C0C0', // gray-300
        200: '#E8E9ED', // gray-200
        100: '#393E49',
        50: '#CBC4C4',
      },
      semantic: {
        red: '#C95336', // semantic-red
        green: '#4AA254', // semantic-green
        yellow: '#E4E458', // semantic-yellow
      },
      yellow: {
        500: '#C19851', //yellow-500
        800: '#A88446',
      },
      blue: {
        800: '#2F5CAF', //blue-500
        600: '#2B364F',
        300: '#0D1D37',
      },
    },
    fontFamily: {
      dm: ['DM Serif Display', 'serif'], // font-dm
      mont: ['Montserrat', 'sans-serif'], // font-mont
    },
  },
  plugins: [require('tailwindcss-animate')],
};
