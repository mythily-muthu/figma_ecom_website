/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      padding: {
        "23px": "23px",
        "13px": "13px",
        "17px": "17px"
      },
      colors: {
        primary: "#426B1F"

      },
      fontSize: {
        "3.5xl": "32px",
        "6.5xl": "64px"
      },
      height: {
        "38px": "38px"
      },
      gap: {
        "15px": "15px"
      }
    },
  },
  plugins: [],
}

