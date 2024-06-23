/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      clashDisplay: ["Clash-Display", "sans-serif"],
    },
    extend: {
      fontFamily: {
        customFont: ["Clash-Display", "sans-serif"],
        // Add more custom font families as needed
      },
      backgroundImage: {
        headerBg: "url('./blobGridBG.svg')",
        bannerBG: "url('./Holo.jpg')",
        techstackBG: "url('./TechstackBlobBG.svg')",
        gridBG: "url('./gridBG.svg')",
        depthPlaceHolder: "url('./depthPlaceholder.jpg')",
      },
    },
  },
  plugins: [],
};
