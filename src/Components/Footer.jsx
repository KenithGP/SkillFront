import logo from '../assets/Icons/Logo-White.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; 


export default function Footer() {
  return (
<footer className="bg-black/90 text-white py-12">
  <div className="container mx-auto px-2">
    {/* Logo Section */}
    <div className="flex justify-center mb-8">
      <img
        src={logo}
        alt="skillconnect-logo"
        className="h-30 w-40"
      />
    </div>

      {/* Redes Sociales */}
      <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        {/* Sección de columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left w-full">
          {/* Columna 1: Contáctanos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-gray-300">Centro de ayuda</a></li>
              <li><a href="#!" className="hover:text-gray-300">Reportar problema</a></li>
            </ul>
          </div>

          {/* Columna 2: Términos y Condiciones */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Términos y Condiciones</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-gray-300">Descripción del servicio</a></li>
              <li><a href="#!" className="hover:text-gray-300">Información legal</a></li>
              <li><a href="#!" className="hover:text-gray-300">Limitación del servicio</a></li>
            </ul>
          </div>

          {/* Columna 3: Acerca de Nosotros */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Acerca de Nosotros</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-gray-300">¿Qué es SkillConnect?</a></li>
              <li><a href="#!" className="hover:text-gray-300">El equipo</a></li>
              <li><a href="#!" className="hover:text-gray-300">Cultura</a></li>
            </ul>
          </div>
          {/* columna 4: Información */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <a href="#!" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-300">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-300">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-300">
                  Carreras
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>

        
        {/* Newsletter */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-center">¡Suscríbete a nuestro newsletter!</h3>
          <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="px-4 py-2 text-gray-800 rounded-lg focus:outline-none w-full md:w-auto"
            />
            <button
              type="submit"
              className="ml-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Suscribirme
            </button>
          </form>
        </div>

        {/* Derechos Reservados */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 SkillConnect. Todos los derechos reservados.
        </div>
</footer>
  )
}
