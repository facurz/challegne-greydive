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
        "w-screen": { raw: "(min-aspect-ratio: 3/2)" },
        "t-screen": { raw: "(min-aspect-ratio: 1/2)" },
      },
      colors: {
        orange: "#FCDB8A",
        red: "#E30058",
        lightRed: "#FFE9EB",
        blue: "#4B84F1",
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
        hero: "url('./src/assets/hero.jpg')",
      },
    },
  },
}