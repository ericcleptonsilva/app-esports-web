/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx","./index.html"],
  theme: {
    extend: {
      backgroundImage:{
       backgroundGalaxy: "url('/background.svg')",
       'nlw-gradient':'linear-gradient(89.86deg, #9572FC 20.08%, #43E7AD 36.94%, #E1D55D 44.57%);'

      },
      fontFamily:{
        'inter':['inter', 'sans-serif']
      }
    },

  },
  plugins: [],
}
