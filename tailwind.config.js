/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#38adb5",
        "secondary" : "#a0a6a8",
        "gradient1" : "#ddf6f8",
        "footer" : "#f7f5f5",
        "footer2": "#e6e4e4",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

