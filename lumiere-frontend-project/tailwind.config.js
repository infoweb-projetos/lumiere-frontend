/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        white: '0px 5px 15px -3px rgba(232, 233, 237, 0.05)', // shadow-white
        black: '0px 5px 15px -3px rgba(0, 0, 0, 0.05)', // shadow-black
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
        600: '#4B4E57', // gray -600
        400: '#9498A1', // gray-400
        200: '#E8E9ED', // gray-200
      },
      semantic: {
        red: '#C95336', // semantic-red
        green: '#4AA254', // semantic-green
        yellow: '#E4E458', // semantic-yellow
      },
    },
    fontFamily: {
      dm: ['DM Serif Display', 'serif'], // font-dm
      mont: ['Montserrat', 'sans-serif'], // font-mont
    },
  },
  plugins: [],
};
