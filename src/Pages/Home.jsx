
import Header from '../Components/Header'
import TarjetaCurso from '../Components/TarjetaCurso'
import TarjetPlanes from '../Components/TarjetPlanes'
import Preguntas from '../Components/Preguntas'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#070513]/100  to-[#1B1B33]/100 max-screen">
       <Header/>
       <Slider variant='default'/>
       <TarjetPlanes/>      
       <TarjetaCurso/>
       <Preguntas/>
       <Footer/>
    </div>
  )
}
