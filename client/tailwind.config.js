/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Rubik"],
        body: ['"Open Sans"'],
      },
      fontWeight: {
        normal: "400",
        bold: "500",
        extrabold: "700",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
