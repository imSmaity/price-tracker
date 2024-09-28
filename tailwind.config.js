/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B40EE",
        secondary: "#BDBEBF",
        tab: "#6F7177",
        profit: "#67BF6B",
      },
      fontFamily: {
        circular: ["CircularStd"], // Register the custom font
      },
      fontSize: {
        base: "18px",
        lg: "24px",
        xl: "70px",
      },
      fontWeight: {
        normal: "450",
        medium: "500",
        bold: "600",
      },
      lineHeight: {
        4: "35px",
        5: "70px",
      },
    },
  },
  plugins: [],
};
