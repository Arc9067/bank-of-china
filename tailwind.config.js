/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#a71930",
        secondary: "#231f20",
        china: "#FFFF00",
      },
      fontFamily: {
        Primary: ["Moyko", "sans-serif"],
        secondary: ["Midorima - Personal Use", "sans-serif"],
      },
    },
  },
  plugins: [],
};
