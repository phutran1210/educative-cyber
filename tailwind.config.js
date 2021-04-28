module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        gradient_blue:
          "linear-gradient(189.16deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
