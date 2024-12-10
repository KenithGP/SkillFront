
import Header from '../Components/Header'
import TarjetaCurso from '../Components/TarjetaCurso'
import TarjetPlanes from '../Components/TarjetPlanes'
import Preguntas from '../Components/Preguntas'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import { UserInfoService } from '../services/user.info.service'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const userInfoService = new UserInfoService();
  const [age, setAge] = useState(0);
  const [variante, setVariant] = useState('default'); 
  const navigate = useNavigate();

  const loadUserInfo = async () => {
    try {
      const response = await userInfoService.getHeaders();
      setAge(response.age);
      localStorage.setItem('age', response.age);
    } catch (error) {
      console.error('Error al cargar la información del usuario:', error);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  useEffect(() => {
    if (age > 0) {
      const newVariant = age < 18 ? 'kids' : 'young';
      setVariant(newVariant);
      navigate(age < 18 ? '/kids' : '/young');
    }
  }, [age, navigate]);
  
  
  return (
    <div className="bg-gradient-to-b from-[#000000]/100  to-[#EA6558]/100 max-screen">
      <Header variant={variante} />
      <Slider vraiant={variante}/>
       <TarjetPlanes variant={variante} />      
       <TarjetaCurso variant={variante}/>
       <Preguntas variant={variante}/>
       <Footer variant={variante} />
    </div>
  )
}
