import React from 'react';
import Header from '../Components/Header';
import TarjetaCurso from '../Components/TarjetaCurso';
import TarjetPlanes from '../Components/TarjetPlanes';
import Preguntas from '../Components/Preguntas';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

export default function Kids() {
  return (
    <div className="relative w-full h-screen">
      {/* Video de fondo */}
      <video
        className="absolute w-full h-full object-cover"
        src="src/Videos/VIDEOFONDO.mp4"  // Ruta correcta al video en la carpeta public
        autoPlay
        loop
        muted
      ></video>

      {/* Contenido encima del video */}
      <div className="relative z-10">
        <Header />
        <Slider variant="default" />
        <TarjetPlanes />
      </div>

      <Footer />
    </div>
  );
}

