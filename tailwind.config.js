/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    screens: {
      s: '375PX',
      sm: '480px',
      md: '768px',
      lg: '1088px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        white : '#FFFFFF',
        black : '#000000',
        gray : "#616476",
        blackRussian:"#0B0D17",
        quartz : "#D0D6F9",
        lightGray : "rgba(255, 255, 255, 0.04)"
      },
      backgroundImage: {
        'home-d': "url('/src/assets/home/background-home-desktop.jpg')",
        'home-t' : "url('/src/assets/home/background-home-tablet.jpg')",
        'home-m' : "url('/src/assets/home/background-home-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
