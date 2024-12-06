import logo from "../assets/Icons/Logo-White-mobil.svg";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LogoBlack from "../assets/Icons/Logo.svg";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simula la autenticación
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controla la visibilidad del menú desplegable
  const [timeSpent, setTimeSpent] = useState(0); // Tiempo transcurrido en segundos

  // Simula un usuario autenticado
  const user = {
    name: "Anthony Atiro",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocLu3jTS_hDcNq-NbcI6MOq2SCZ9cy36TY10zFaRot33i2NDBkmL=s324-c-no", // Foto de usuario simulada
    message: "¡Sigue aprendiendo y creciendo!",
  };

  // Obtener el parámetro variant desde la URL
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant");

  // Configuración de diseños para cada variante
  const designs = {
    home: {
      fontClass: "font-semibold text-xl",
      buttonClass: "bg-[#E53935] text-white hover:bg-red-400",
      hoverTextClass: "hover:text-green-500",
      colortext: "text-white",
      icon: logo,
    },
    kids: {
      fontClass: "font-comics text-xl ",
      buttonClass: "bg-[#F8D642] hover:bg-[#D1A64E]",
      hoverTextClass: "text-black hover:text-[#F8D642]  ",
      colortext: "text-black",
      icon: LogoBlack,
    },
    young: {
      fontClass: "font-arcade text-xs text-pink-600",
      buttonClass: "bg-[#ff0068] text-white hover:bg-blue-700",
      hoverTextClass: "hover:text-[#ff0068]",
      icon: logo,
    },
    adult: {
      fontClass: "font-bree text-xl",
      buttonClass:
        "bg-[#58349b] text-white hover:bg-indigo-700 hover:scale-110 duration-500 transition-transform focus:ring-indigo-300 rounded-lg px-6 py-2",
      hoverTextClass: "hover:text-[yellow]",
      colortext: "text-white",
      icon: logo,
    },
  };

  // Detectar la variante actual: prioridad al parámetro variant
  const currentVariant =
    variant ||
    (location.pathname === "/" && "home") ||
    (location.pathname.includes("/Young") && "young") ||
    (location.pathname.includes("/kids") && "kids") ||
    (location.pathname.includes("/adult") && "adult") ||
    "home"; // Predeterminado a Home si no coincide nada más

  // Obtener los estilos dinámicos según la variante
  const { fontClass, buttonClass, hoverTextClass, colortext, icon } =
    designs[currentVariant];

  // Determinar la ruta dinámica para el enlace "Planes"
  const planesLink =
    location.pathname.includes("/Young")
      ? "/planes?variant=young"
      : location.pathname.includes("/kids")
      ? "/planes?variant=kids"
      : location.pathname.includes("/adult")
      ? "/planes?variant=adult"
      : "/planes";

  // Incrementar el tiempo en segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1); // Incrementa el tiempo transcurrido cada segundo
    }, 1000); // 1000ms = 1 segundo

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  // Determinar el ícono de la racha y el mensaje de logro
  const getRacha = () => {
    if (timeSpent < 10) return { icon: "fas fa-star", message: "¡Buen inicio!" };
    if (timeSpent < 30) return { icon: "fas fa-trophy", message: "¡Sigues avanzando!" };
    if (timeSpent < 60) return { icon: "fas fa-medal", message: "¡Estás casi allí!" };
    return { icon: "fas fa-crown", message: "¡Logro alcanzado!" };
  };

  // Obtener el estado de la racha
  const { icon: rachaIcon, message: rachaMessage } = getRacha();

  return (
    <header className={`flex items-center justify-between px-10 py-5 mb-1 ${fontClass}`}>
      {/* Logo y Nombre */}
      <div className="flex items-center space-x-4 ml-6 hover:scale-110 duration-500 transition-transform">
        <Link to="/">
          <img src={icon} alt="Logo" className="h-10 w-10" />
        </Link>
        <Link className={`font-bold text-base ${colortext}`} to="/">
          SkillConnect
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={`hidden md:flex space-x-6 text-white`}>
        <Link to="/" className={`transition-transform duration-500 ${hoverTextClass}`}>
          Home
        </Link>
        <Link to="/cursos" className={`transition-transform duration-500 ${hoverTextClass}`}>
          Cursos
        </Link>
        <Link to="/beca" className={`transition-transform duration-500 ${hoverTextClass}`}>
          Becas
        </Link>
        <Link to={planesLink} className={`transition-transform duration-500 ${hoverTextClass}`}>
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

        {/* Mostrar botones si no está autenticado */}
        {!isAuthenticated ? (
          <>
            <button className={`px-4 py-2 rounded-full transition-transform duration-500 text-white ${hoverTextClass}`}>
              <Link to="/Login" className={`transition-transform duration-500 ${hoverTextClass}`}>
                Iniciar Sesión
              </Link>
            </button>
            <button className={`px-4 py-2 rounded-full transition-transform duration-500 ${buttonClass}`}>
              <Link to="/Register" className={`transition-transform duration-500 ${hoverTextClass}`}>
                Registrarse
              </Link>
            </button>
          </>
        ) : (
          /* Mostrar nombre de usuario y carrito si está autenticado */
          <div className="flex items-center space-x-4">
            {/* Ícono del carrito */}
            <Link to="/carrito">
              <i className="fas fa-shopping-cart text-white text-2xl"></i>
            </Link>

            {/* Mostrar ícono de racha y mensaje */}
            <div className="flex items-center space-x-2">
              <i className={`${rachaIcon} text-yellow-400 text-2xl`} />
              <span className="text-white">{rachaMessage}</span>
            </div>

            {/* Menú desplegable del usuario */}
            <div className="relative">
              <button className="text-white font-bold" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {user.name}
              </button>

              {/* Menú desplegable del usuario */}
              {isDropdownOpen && (
                <div className="absolute top-10 right-0 bg-white p-4 rounded-lg shadow-lg w-48">
                  <div className="flex justify-center mb-2">
                    <img
                      src={user.photo}
                      alt="User"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <p className="text-center font-semibold">{user.name}</p>
                  <p className="text-center text-gray-500">{user.message}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
