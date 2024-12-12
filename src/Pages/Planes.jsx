import Header from "../Components/Header";
import TarjetPlanes from "../Components/TarjetPlanes";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Anuncio3D from "../assets/Images/anuncio.svg";
import Cohete3D from "../assets/Images/cohete.svg";
import Cubo3D from "../assets/Images/cubo.svg";
import Libro3D from "../assets/Images/libro.svg";

export default function Planes() {
  const location = useLocation();

  // Obtener el parámetro "variant" de la URL
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default"; // Por defecto, usa "default"

  // Determinar el fondo dinámico según la variante
  const backgroundClass =
    variant === "young"
      ? "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100 min-h-screen" // Adolescente
      : variant === "kids"
      ? "bg-gradient-to-b from-purple-800 to-purple-400 " // Niños
      : variant === "adult"
      ? "bg-gradient-to-l from-[#042518]/95 to-[#0d6242]/100" // Adulto
      : "bg-gradient-to-b from-[#000000]/100 to-[#EA6558]/100"; // Predeterminado

  return (
    <div className={`${backgroundClass} min-h-screen relative`}>
      {/* Pasar el `variant` como prop */}
      <Header variant={variant} />
      <TarjetPlanes variant={variant} />
      {/* Agregar los SVGs al fondo solo si la variante es 'kids' con animaciones sorprendentes */}
      {variant === "kids" && (
        <>
          <motion.img
            src={Anuncio3D}
            alt="Anuncio"
            className="absolute top-24 left-52 w-48 h-40 opacity-90"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Cohete3D}
            alt="Cohete"
            className="absolute top-1/4 right-8  w-50 h-40 opacity-90"
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Cubo3D}
            alt="Cubo"
            className="absolute top-24 right-52 w-48 h-40 opacity-90"
            animate={{
              x: [0, 15, -15, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Libro3D}
            alt="Libro"
            className="absolute top-1/4 left-26 w-50 h-40 opacity-90"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -15, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
}
