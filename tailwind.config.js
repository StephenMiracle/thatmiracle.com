module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["'Lora', serif"],
        montserrat: ["'Montserrat', sans-serif"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'offwhite': '#D6E1EB',
        'darkgreen': '#39463b',
        'greyblue': '#2c2c30',
        'niceblue': '#334154',
        'lightblue': '#5a6c7a',
        'olivegreen': '#717457',
      },
    },
  },
  plugins: [],
};
