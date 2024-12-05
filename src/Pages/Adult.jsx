import Header from '../Components/Header'
import TarjetaCurso from '../Components/TarjetaCurso'
import TarjetPlanes from '../Components/TarjetPlanes'
import Preguntas from '../Components/Preguntas'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import { useLocation } from "react-router-dom";



export default function Adult() {
    const location = useLocation();
  
    // Determinar variante según la ruta
  const variant = location.pathname.includes("/kids")
  ? "kids"
  : location.pathname.includes("/Adult")
  ? "adult"
  : "default";

  return (
    <div  className="bg-gradient-to-b from-[#162682]/95 to-[#5625b2]/100 max-screen">
       <Header  variant={variant}/>
       <Slider variant={variant} />        
       <TarjetPlanes variant={variant}/> 
       <TarjetaCurso variant={variant}/>        
       <Preguntas variant={variant}/> 
       <Footer variant={variant}/>   
    </div>
  )
}
