/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "juaan-red": "#fc2715",
        "juaan-cream": "#fedbbd",
        "juaan-black": "#151112",

        "ava-gray": "#80848F",
        "ava-green": "#4A7337",
      },

      fontFamily: {
        peyda: "Peyda",
        tanha: "tanha",
        yekanX: "IRANYekanX",
        iransans: "iransans",
        bjn: "Bahij Nazanin",
      },

      borderRadius: {
        juaan7: "7px",
      },
    },
  },
  plugins: [],
};
