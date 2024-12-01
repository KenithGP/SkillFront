import React from 'react';
/* import Imagen from './Imagen/Css.png';
import Imagen2 from './Imagen/Javascript.png';
import Imagen3 from './Imagen/Html.png';
import Imagen4 from './Imagen/Php.png';
import Imagen5 from './Imagen/React.png'; */

export default function TarjetaCurso(){
    return (
        <div className="bg-gradient-to-b from-red-950 to-red-800 h-70 w-full flex flex-wrap justify-center gap-4 p-4">
          <div className="bg-gradient-to-b from-sky-800 to-blue-950 h-50 rounded-2xl shadow-lg w-64 p-4">
          <img src={Imagen} className="rounded-xl w-30 h-16 mx-auto mb = margin-bottom" class="hover:scale-150 duration-500 transition-transform"/>
            <h2 className="text-white text-3xl font-bold text-left mb-2">CSS</h2>
            <p className="text-gray-500 text-center">Lenguaje que define estilos y diseño visual en páginas web.</p>
          </div>
          <div className="bg-gradient-to-b from-yellow-500 to-yellow-950 h-50 rounded-2xl shadow-lg w-64 p-4">
          <img src={Imagen2} className="rounded-xl w-30 h-16 mx-auto mb = margin-bottom" class="hover:scale-150 duration-500 transition-transform"/>
            <h2 className="text-white text-3xl font-bold text-left mb-2">Javascript</h2>
            <p className="text-gray-500 text-center">Lenguaje de programación que añade interactividad a sitios web.</p>
          </div>
          <div className="bg-gradient-to-b from-orange-700 to-orange-950 h-50 rounded-2xl shadow-lg w-64 p-4">
          <img src={Imagen3} className="rounded-xl w-30 h-16 mx-auto mb = margin-bottom" class="hover:scale-150 duration-500 transition-transform"/>
            <h2 className="text-white text-3xl font-bold text-left mb-2">Html</h2>
            <p className="text-gray-500 text-center">Lenguaje base para estructurar el contenido de páginas web.</p>
          </div>
          <div className="bg-gradient-to-b from-purple-900 to-purple-950 h-50 rounded-2xl shadow-lg w-64 p-4">
          <img src={Imagen4} className="rounded-xl w-30 h-16 mx-auto mb = margin-bottom" class="hover:scale-150 duration-500 transition-transform"/>
            <h2 className="text-white text-3xl font-bold text-left mb-2">Php</h2>
            <p className="text-gray-500 text-center">Lenguaje del lado del servidor para desarrollo web dinámico.</p>
          </div>
          <div className="bg-gradient-to-b from-sky-800 to-sky-950 h-50 rounded-2xl shadow-lg w-64 p-4">
          <img src={Imagen5} className="rounded-xl w-30 h-16 mx-auto mb = margin-bottom" class="hover:scale-150 duration-500 transition-transform"/>
            <h2 className="text-white text-3xl font-bold text-left mb-2">React</h2>
            <p className="text-gray-500 text-center">Biblioteca de JavaScript para construir interfaces de usuario dinámicas.</p>
          </div>              
        </div>       
    )
}