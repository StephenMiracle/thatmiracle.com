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
        'primary': 'rgb(31, 33, 58)',
        'secondary': '#FFC107',
        'accent': '#FFC107',
        'light': '#F5F5F5',
        'dark': '#2D2D2D',
      },
    },
  },
  plugins: [],
};
