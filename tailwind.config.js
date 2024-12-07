/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        neon: "neonBlink 1.5s ease-in-out infinite", // Animación personalizada
      },
      fontFamily: {
        arcade: ['Arcade Gamer', 'sans-serif'], //  fuente GAMER
        bree: ['Bree Serif', 'sans-serif'], // Añade tu fuente personalizada
        abel: ['Abel Regular', 'sans-serif'], 
        ibm: ['IBM Plex Sans','sans-serif'],
        comics: ['"Comic Sans MS"', 'cursive'], // Fuente Comic Sans
      },
      fontSize: {
        'xxs': '0.1rem', // Tamaño aún más pequeño
      },
      colors: {
        blanco: "#FFFFFF",
        grisClaro: "#F2F2F2",
        naranjaClaro: "#FFA500",
        azulClaro: "#ADD8E6",
        celeste: "#00BFFF",
        negroOscuro: "#000000",
        dorado: "#e1c261",
      
      },
      
    },
    keyframes: {
      neonBlink: {
        "0%, 100%": { textShadow: "0 0 8px #ff0070, 0 0 12px #ff0070" },
        "50%": { textShadow: "0 0 16px #ff0070, 0 0 24px #ff0070" },
      },
    },
  },
  plugins: [],
};
