module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'almost-white': 'hsl(0,0%,98%)',
        'medium-gray': 'hsl(0,0%,98%)',
        'almost-black': 'hsl(0,0%,8%)',
      },
      fontFamily: {
        epilogue: ('Epilogue', 'sans-serif'),
      },
    },
  },
  plugins: [],
};
