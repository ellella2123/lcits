/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FF9F",
        bgPrimary: "#0D0F12",
        bgSecondary: "#12151A"
      },
      borderRadius: {
        xl: "12px"
      }
    },
  },
  plugins: [],
}