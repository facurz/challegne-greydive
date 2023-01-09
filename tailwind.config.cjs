/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      colors: {
        gray: "#F5F5F5",

        slate: "#333",
        black: "#000",
        white: "#FFF",
      },
      container: {
        center: true,
        padding: "4rem",
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.png')",
      },
    },
  },
}