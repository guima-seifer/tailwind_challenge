/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
    theme: {
    extend: {},
    fontFamily: {
      Rubik: ['Rubik', 'sans-serif']
    }, 
    colors: {
      primaryBlue: 'hsl(231, 69%, 60%)',
      primaryRed: 'hsl(0, 94%, 66%)',
      neutralGrayishBlue: 'hsl(229, 8%, 60%)',
      neutralVeryDarkBlue: 'hsl(229, 31%, 21%)',
    },
    container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1440px",
          lg: "1440px",
          xl: "1440px",
          md: "375px",
          sm: "375px",
        },
      
    },
  },
  plugins: [],
}
