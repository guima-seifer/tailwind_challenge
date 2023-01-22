/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html,js}'],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        primaryBlue: 'hsl(231, 69%, 60%)',
        primaryRed: 'hsl(0, 94%, 66%)',
        neutralGrayishBlue: 'hsl(229, 8%, 60%)',
        neutralVeryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontSize: {
        paragraph: `18px;`
      },
    },
    fontFamily: {
      Rubik: ['Rubik', 'sans-serif'],
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        xs: '375px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
