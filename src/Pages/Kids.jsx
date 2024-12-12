import { useLocation } from "react-router-dom";
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import TarjetPlanes from '../Components/TarjetPlanes'
import TarjetCurso from '../Components/TarjetaCurso'
import Preguntas from '../Components/Preguntas'
import Footer from '../Components/Footer'

export default function Kids() {
  const location = useLocation();

  // Determinar variante según la ruta
  const variant = location.pathname.includes("/kids")
    ? "kids"
    : location.pathname.includes("/Young")
    ? "young"
    : "default";

  return (
    <div className="bg-gradient-to-b from-purple-400 to-[#e1aec0]/50  m-0 p-0"> 
      {/* Video de fondo */}
      <video
        className="absolute w-full h-full object-cover"
        src="src/Videos/VIDEO-FONDO.mp4" // Verifica esta ruta
        autoPlay
        loop
        muted
      ></video>

      {/* Contenido principal */}
      <div className="relative z-10">
        <Header variant={variant} />
        <Slider variant={variant}  />
        <TarjetPlanes variant={variant} />
        <TarjetCurso variant={variant} />
        <Preguntas variant={variant} />
        <Footer variant={variant}/>
      </div>
    </div>
  );
}


