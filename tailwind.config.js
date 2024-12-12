/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      animation: {
        neonOrange: "neonOrangeBlink 1.5s ease-in-out infinite", // Nueva animación naranja
        neonFlicker: "neonFlicker 1.5s infinite alternate",
        fadeInDown: "fadeInDown 0.5s ease-out", // Nueva animación de entrada
        'fade-in-up': 'fade-in-up 0.5s ease-out', // Aparece en 0.5 segundos
        'fade-in': 'fade-in 1s ease-out', // Aparece en 1 segundo
      },
      textShadow: {
        neon: "0 0 5px #ff0068, 0 0 10px #ff0068, 0 0 20px #ff0068, 0 0 40px #ff00ff, 0 0 80px #ff00ff",
      
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
        "80%": { textShadow: "0 0 16px #FFA500, 0 0 24px #FFA500" },
      },
      fadeInDown: {
          "0%": {
            opacity: "0",
            transform: 'translateY(20px)', // Empuja el elemento hacia abajo
          },
          "100%": {
            opacity: "1",
            transform: 'translateY(0)', // Regresa a su posición original
          },
      },
      'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)', // Empuja el elemento hacia arriba
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)', // Regresa a su posición original
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
    },
  },
  plugins: [require("tailwindcss-textshadow"),],
};
