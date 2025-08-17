/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: "#10B981",
        charcoal: "#1F2937",
        yellow: "#FACC15",
        grey: "#6B7280",
        lightBlue: "rgba(0,15,152,0.3)",
      },
    },
  },
  plugins: [],
};
