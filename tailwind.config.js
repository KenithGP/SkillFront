/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        arcade: ['Arcade Gamer', 'sans-serif'], //  fuente GAMER
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
  },
  plugins: [],
};
