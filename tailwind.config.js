/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: " #212ea0",
        darkGray: "#000f38",
        grey: "#676982",
        lightBlue: "rgba(0,15,152,0.3)",
      },
    },
  },
  plugins: [],
};
