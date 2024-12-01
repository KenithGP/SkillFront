import Imagen from "../assets/Images/Css.svg";
import Imagen2 from "../assets/Images/Html.svg";
import Imagen3 from "../assets/Images/Javascript.svg";
import Imagen4 from "../assets/Images/Php.svg";
import Imagen5 from "../assets/Images/react.svg";

export default function TarjetaCurso() {
  return (
    <div className="bg-black/90 h-110 w-full flex flex-wrap justify-center gap-4 p-4">
      <div className=" h-70 w-full flex flex-wrap justify-center gap-8 p-4 mt-20 mb-36 ">
        <div className="bg-gradient-to-b from-sky-900 to-blue-1000 h-50 rounded-2xl shadow-lg w-64 p-4 hover:scale-125 duration-500 transition-transform">
          <img
            src={Imagen}
           className="rounded-xl w-30 h-30 mx-auto mb-2 hover:scale-150 duration-500 transition-transform"
          />
          <h2 className="text-white text-3xl font-bold text-left mb-2">CSS</h2>
          <p className="text-gray-300 text-center">
            Lenguaje que define estilos y diseño visual en páginas web.
          </p>
        </div>
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-1000 h-50 rounded-2xl shadow-lg w-64 p-4 hover:scale-125 duration-500 transition-transform">
          <img
            src={Imagen2}
           className="rounded-xl w-30 h-30 mx-auto mb-2 hover:scale-150 duration-500 transition-transform"
          />
          <h2 className="text-white text-3xl font-bold text-left mb-2">
            Javascript
          </h2>
          <p className="text-gray-300 text-center">
            Lenguaje de programación que añade interactividad a sitios web.
          </p>
        </div>
        <div className="bg-gradient-to-b from-orange-700 to-orange-1000 h-50 rounded-2xl shadow-lg w-64 p-4 hover:scale-125 duration-500 transition-transform">
          <img
            src={Imagen3}
           className="rounded-xl w-30 h-30 mx-auto mb-2 hover:scale-150 duration-500 transition-transform"
          />
          <h2 className="text-white text-3xl font-bold text-left mb-2">Html</h2>
          <p className="text-gray-300 text-center">
            Lenguaje base para estructurar el contenido de páginas web.
          </p>
        </div>
        <div className="bg-gradient-to-b from-purple-900 to-purple-1000 h-50 rounded-2xl shadow-lg w-64 p-4 hover:scale-125 duration-500 transition-transform">
          <img
            src={Imagen4}
           className="rounded-xl w-30 h-30 mx-auto mb-2 hover:scale-150 duration-500 transition-transform"
          />
          <h2 className="text-white text-3xl font-bold text-left mb-2">Php</h2>
          <p className="text-gray-300 text-center">
            Lenguaje del lado del servidor para desarrollo web dinámico.
          </p>
        </div>
        <div className="bg-gradient-to-b from-sky-800 to-sky-1000 h-50 rounded-2xl shadow-lg w-64 p-4 hover:scale-125 duration-500 transition-transform">
          <img
            src={Imagen5}
          className="rounded-xl w-30 h-30 mx-auto mb-2 hover:scale-150 duration-500 transition-transform"
          />
          <h2 className="text-white text-3xl font-bold text-left mb-2">
            React
          </h2>
          <p className="text-gray-300 text-center">
            Biblioteca de JavaScript para construir interfaces de usuario
            dinámicas.
          </p>
        </div>
      </div>
    </div>
  );
}
