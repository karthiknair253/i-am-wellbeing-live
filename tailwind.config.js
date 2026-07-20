/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        md: "900px",
        tab: "768px", //added for talets 900 for md too big nothings breaks ive added this for now
        xxxl: "1600px",
      },
      backgroundSize: {
        positionLarge: "220px", // Custom background size of 205px
        positionSmall: "13rem", // Custom background size of 205px
        positionSmaller: "170px", // Custom background size of 205px
        bgSize: "90rem", // Custom background size of 205px
      },
      colors: {
        customPeach: "#F9B185",
        customGreen: "#a8d940",
      },
      borderRadius: {
        "50px": "50px",
      },
    },
  },
  plugins: [],
};
