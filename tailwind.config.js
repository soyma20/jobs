/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      base: ['16px', '25p'],
      xl: ['20px', '25px'],
    },
    extend: {
      boxShadow: {
        'md': ' 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
    }
  },
  plugins: [],
}
