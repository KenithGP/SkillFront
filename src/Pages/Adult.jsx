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
    : location.pathname.includes("/adult")
    ? "adult"
    : "default";
  
    return (
      <div  className="bg-gradient-to-l from-[#042518]/95 to-[#0d6242]/100 max-screen">
         <Header  variant={variant}/>
         <Slider variant={variant} />        
         <TarjetPlanes variant={variant}/> 
         <TarjetaCurso variant={variant}/>        
         <Preguntas variant={variant}/> 
         <Footer variant={variant}/>   
      </div>
    )
}
