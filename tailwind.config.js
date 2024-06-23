/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "690px",
      //tablet: "640px",
      desktop: "1920px",
      ultrawide: "2400px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      clashDisplay: ["Clash-Display", "sans-serif"],
      inter: ["Inter", "sand-serif"],
      jetbrainsmono: ["JetBrainsMono", "monospace"],
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
        free2gamePreview: "url('./Free2GamePreview.png')",
        weatherIO: "url('./WeatherApp.png')",
      },
    },
  },
  plugins: [],
};
