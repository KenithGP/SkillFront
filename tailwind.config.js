/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      animation: {
        neonOrange: "neonOrangeBlink 1.5s ease-in-out infinite", // Nueva animación naranja
      },
      fontFamily: {
        arcade: ['Arcade Gamer', 'sans-serif'],
        bree: ['Bree Serif', 'sans-serif'],
        abel: ['Abel Regular', 'sans-serif'], 
        ibm: ['IBM Plex Sans','sans-serif'],
        fredoka: ['"Fredoka"', 'sans-serif'],
        bubblegum: ['"Bubblegum Sans"', 'sans-serif'],
      },
      colors: {
        blanco: "#FFFFFF",
        grisClaro: "#F2F2F2",
        amarilloClaro: "#FFD700", // Color del título
        naranjaBrillante: "#FFA500", // Color del neón
        azulClaro: "#ADD8E6",
        celeste: "#00BFFF",
        negroOscuro: "#000000",
      },
    },
    keyframes: {
      neonOrangeBlink: { // Nueva animación naranja brillante
        "0%, 100%": { textShadow: "0 0 8px #FFA500, 0 0 12px #FFA500" },
        "50%": { textShadow: "0 0 16px #FFA500, 0 0 24px #FFA500" },
      },
    },
  },
  plugins: [],
};
