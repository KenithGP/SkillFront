import logo from "../assets/Icons/Logo-White-mobil.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Detectar si la ruta actual es para adolescentes (Young)
  const isYoung = location.pathname.includes("/Young");
  const isAdulto = location.pathname.includes("/Adulto");

  // Clases dinámicas para los botones
  const buttonClass = isYoung
    ? "bg-[#ff0068] text-white hover:bg-blue-700"
    : isAdulto
    ? "bg-[#5625b2] text-white hover:bg-blue-800"
    : "bg-[#E53935] text-white hover:bg-red-400";

  const hoverTextClass = isYoung
    ? "hover:text-[#ff0068]"
    : "hover:text-green-500";

    

  // Clases dinámicas para el contenedor del header
  const fontClass = isYoung ? "font-arcade text-xs"
                    : isAdulto ? "font-abel text-xl" : "font-semibold text-xl";
  const adu = isAdulto ? "font-abel text-2xl" : "font-bold text-base";
  return (
    <header
      className={`flex items-center justify-between px-6 py-5 mb-1 ${fontClass}`}
      
    >
      {/* Logo y Nombre */}
      <div className="flex items-center space-x-4 ml-6 hover:scale-110 duration-500 transition-transform">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>
        <Link className={`text-white ${adu}`} to="/">
          SkillConnect
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={`hidden md:flex space-x-6 text-white`}>
        <Link
          to="/"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Explorar
        </Link>
        <Link
          to="/features"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Cursos
        </Link>
        <Link
          to="/Beca"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Becas
        </Link>
        <Link
          to="/planes"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Planes
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          id="mobile-menu-button"
          className="text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Search Bar and Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Barra de búsqueda */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar...."
            className="rounded-full w-[15rem] border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Botones dinámicos */}
        <button
          className={`px-4 py-2 rounded-full  transition-transform duration-500 text-white ${hoverTextClass}`}
        >
          Iniciar Sesión
        </button>
        <button
          className={`px-4 py-2 rounded-full transition-transform duration-500 ${buttonClass}`}
        >
          Registrarse
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="absolute top-16 left-0 z-10 hidden w-full bg-black/90 text-white"
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#product" className={`${hoverTextClass}`}>
            Explorar
          </a>
          <a href="#features" className={`${hoverTextClass}`}>
            Cursos
          </a>
          <a href="#marketplace" className={`${hoverTextClass}`}>
            Becas
          </a>
          <a href="#company" className={`${hoverTextClass}`}>
            Planes
          </a>
          {/* Botones dinámicos */}
          <button
            className={`px-4 py-2 rounded-full font-medium transition-transform duration-500 ${hoverTextClass}`}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-transform duration-500 ${buttonClass}`}
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}
