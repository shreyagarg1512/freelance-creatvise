/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slateblue: "#5552b9",
        white: "#fff",
        darkslateblue: "#393771",
        gainsboro: "#e0e0e3",
        gray: {
          "100": "#939297",
          "200": "#252345",
          "300": "#252525",
        },
        plum: "#a7a4de",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "3xl": "22px",
      mini: "15px",
      lg: "18px",
      lgi: "19px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
