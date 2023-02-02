/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkColor: "#6F1AB6",
        lightColor: "#56218c",
      },
      screens: {
        mobile: { max: "639px" },
        tablet: { min: "640px", max: "767px" },
        lgTablet: { min: "768px", max: "900px" },
        notPC: { max: "901px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
