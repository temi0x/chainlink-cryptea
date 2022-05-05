module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      backgroundImage : {
          'donation' : "url('./assets/img/donation.png')",
          'hooge' : "url('./assets/img/hooge.svg')"
      }
    },
  },
  plugins: [],
};
