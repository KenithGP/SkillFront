
import Header from '../Components/Header'
import TarjetaCurso from '../Components/TarjetaCurso'
import TarjetPlanes from '../Components/TarjetPlanes'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div  className="bg-gradient-to-b from-[#000000]/100  to-[#EA6558]/100 max-screen">
       <Header/> 
       <TarjetaCurso/>
       <TarjetPlanes/>
       <Footer/>
    </div>
  )
}
