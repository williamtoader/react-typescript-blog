module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
      ui: ['Work Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}