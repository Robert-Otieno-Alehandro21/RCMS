/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#013220',
          DEFAULT: '#006400',
          light: '#90ee90',
          accent: '#00a859',
          alt: '#014d26',
          alt2: '#015230',
          alt3: '#008f4c',
          alt4: '#005f3c',
          alt5: '#228B22',
        },
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
