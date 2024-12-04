import logo from "../assets/Icons/Logo-White-mobil.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Detectar si la ruta actual es para adolescentes (Young)
  const isYoung = location.pathname.includes("/Young");

  // Clases dinámicas para los botones
  const buttonClass = isYoung
    ? "bg-[#ff0068] text-white hover:bg-blue-700"
    : "bg-[#E53935] text-white hover:bg-red-400";

  const hoverTextClass = isYoung
    ? "hover:text-[#ff0068]"
    : "hover:text-green-500";

  // Clases dinámicas para el contenedor del header
  const fontClass = isYoung ? "font-arcade text-xs" : "font-semibold text-xl";

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
          Home
        </Link>
        <Link
          to="/features"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Cursos
        </Link>
        <Link
          to="/beca"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Becas
        </Link>
        <Link
          to={planesLink} // Ruta dinámica para "Planes"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Planes
        </Link>
      </nav>

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
          className={`px-4 py-2 rounded-full transition-transform duration-500 text-white ${hoverTextClass}`}
        >
          <Link
          to="/login"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
           Iniciar Sesión
        </Link>
        </button>
        <button
          className={`px-4 py-2 rounded-full transition-transform duration-500 ${buttonClass}`}
        >
            <Link
          to="/register"
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Registrarse
        </Link>
        </button>
      </div>
    </header>
  );
}
