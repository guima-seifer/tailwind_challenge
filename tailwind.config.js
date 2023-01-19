/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
    theme: {
    extend: {
      colors: {
        primaryBlue: 'hsl(231, 69%, 60%)',
        primaryRed: 'hsl(0, 94%, 66%)',
        neutralGrayishBlue: 'hsl(229, 8%, 60%)',
        neutralVeryDarkBlue: 'hsl(229, 31%, 21%)',
      },
    },
    fontFamily: {
      Rubik: ['Rubik', 'sans-serif']
    }, 
    
    container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
    },
  },
  plugins: [],
}
