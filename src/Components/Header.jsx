import logo from "../assets/Icons/Logo-White-mobil.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Obtener el parámetro `variant` desde la URL
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant");

  // Configuración de diseños para cada variante
  const designs = {
    home: {
      fontClass: "font-semibold text-xl",
      buttonClass: "bg-[#E53935] text-white hover:bg-red-400",
      hoverTextClass: "hover:text-green-500",
    },
    kids: {
      fontClass: "font-cursive text-sm text-yellow-600",
      buttonClass: "bg-[#FFD700] text-black hover:bg-yellow-500",
      hoverTextClass: "hover:text-[#FFD700]",
    },
    young: {
      fontClass: "font-arcade text-xs text-pink-600",
      buttonClass: "bg-[#ff0068] text-white hover:bg-blue-700",
      hoverTextClass: "hover:text-[#ff0068]",
    },
    adult: {
      fontClass: "font-serif text-base text-gray-800",
      buttonClass: "bg-[#4CAF50] text-white hover:bg-green-700",
      hoverTextClass: "hover:text-[#4CAF50]",
    },
  };

  // Detectar la variante actual: prioridad al parámetro `variant`
  const currentVariant =
    variant || // Si hay un parámetro `variant`, úsalo
    (location.pathname === "/" && "home") || // Ruta raíz
    (location.pathname.includes("/Young") && "young") || // Ruta de adolescentes
    (location.pathname.includes("/kids") && "kids") || // Ruta de niños
    (location.pathname.includes("/adult") && "adult") || // Ruta de adultos
    "home"; // Predeterminado a Home si no coincide nada más

  // Obtener los estilos dinámicos según la variante
  const { fontClass, buttonClass, hoverTextClass } = designs[currentVariant];

  // Determinar la ruta dinámica para el enlace "Planes"
  const planesLink =
    location.pathname.includes("/Young")
      ? "/planes?variant=young"
      : location.pathname.includes("/kids")
      ? "/planes?variant=kids"
      : "/planes";

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 mb-10 ${fontClass}`}
    >
      {/* Logo y Nombre */}
      <div className="flex items-center space-x-4 ml-6 hover:scale-110 duration-500 transition-transform">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>
        <Link className="text-white font-bold text-base" to="/">
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
            className="rounded-full w-[15rem] border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
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
