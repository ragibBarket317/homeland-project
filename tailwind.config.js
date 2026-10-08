/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#123d26",
          "green-dark": "#0d2d1c",
          red: "#b8402b",
          "red-dark": "#9a3322",
          gold: "#e9c98b",
          cream: "#faf7f2",
        },
      },
      fontFamily: {
        bangla: ['"Hind Siliguri"', "sans-serif"],
        display: ['"Noto Serif Bengali"', "serif"],
      },
    },
  },
  plugins: [],
};
