import Header from "../Components/Header";
import TarjetPlanes from "../Components/TarjetPlanes";
import { useLocation } from "react-router-dom";
import Sup from "../assets/Icons/Superior.svg"; // Importar la imagen SVG

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
      ? "bg-gradient-to-l from-[#042518]/95 to-[#0d6242]/100" // Adulto (Fondo Verde)
      : "bg-gradient-to-t from-[#223a76]/100 to-[#686ebf]/100"; // Predeterminado

  // Estilo de fondo adicional solo para el `variant` "default"
  const defaultStyle = variant === "default" ? {
    backgroundImage: `url(${Sup})`,
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen
    backgroundPosition: 'rigth' // Centra la imagen
  } : {};

  return (
    <div
      className={`${backgroundClass} min-h-screen`}
      style={defaultStyle}
    >
      {/* Pasar el `variant` como prop */}
      <Header variant={variant} />
      <TarjetPlanes variant={variant} />
    </div>
  );
}
