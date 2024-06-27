/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b-custom': 'linear-gradient(to bottom, #00042D, #080B2B, #101228, #0A002F)',
      },
      colors: {
        pink: '#AA336A', // Add your custom pink color here
      },
  
    },
  },
  plugins: [],
}

