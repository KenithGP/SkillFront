import Header from "../Components/Header";
import TarjetPlanes from "../Components/TarjetPlanes";
import { useLocation } from "react-router-dom";

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
      ? "bg-gradient-to-b from-purple-400 to-blue-500/60" // Niños
      : variant === "adult"
      ? "bg-gradient-to-l from-[#042518]/95 to-[#0d6242]/100" // Adulto (Fondo Morado)
      : "bg-gradient-to-b from-[#000000]/100 to-[#EA6558]/100"; // Predeterminado

  return (
    <div className={`${backgroundClass} min-h-screen`}>
      {/* Pasar el `variant` como prop */}
      <Header variant={variant} />
      <TarjetPlanes variant={variant} />
    </div>
  );
}
