module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        caramel: '#E1885A',
        chocolate: '#9B4317',
        mocca: '#9F5136',
        rose: '#F8D9C5',
      },
      transitionProperty: {
        color: 'color',
        background: 'background',
      },
    },
  },
  plugins: [],
}
