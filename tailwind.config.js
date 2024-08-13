const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        poppins: ["Poppins", "sans-serif"],
        homenaje: ["Homenaje", "sans-serif"],
      },
      colors: {
        primary: "#CCFF00",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
