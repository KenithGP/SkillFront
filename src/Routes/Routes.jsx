import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
//Importacion de paginas 
import Home from '../Pages/Home'
import Quizz from '../Components/Quizz'
import Beca from '../Pages/Beca'
import Adulto from '../Pages/Adulto'

// Importar las rutas para los links del header
import Planes from "../Pages/Planes";
/* import Cursos from "../pages/Cursos";
import Becas from "../pages/Becas"; */
/* import NotFound from "../pages/NotFound"; */ // Página para manejar rutas inexistentes


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/Beca" element={<Beca/>} />
        <Route path="/Quizz" element={<Quizz />} />
        <Route path="/Adulto" element={<Adulto />} />
        
        

{/*         <Route path="/cursos" element={<Cursos />} />
        <Route path="/becas" element={<Becas />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */} {/* Ruta para páginas no encontradas */}
      </Routes>
    </Router>
  );
}