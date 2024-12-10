import logo from "../assets/Icons/Logo-White-mobil.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LogoBlack from "../assets/Icons/Logo.svg";
import "font-awesome/css/font-awesome.min.css"; // Asegúrate de importar Font Awesome

export default function Header({ variant }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulando autenticación
  const [racha, setRacha] = useState("¡Sigue así!"); // Racha inicial
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Simulación de cambio de racha cada cierto tiempo (3 segundos)
    const rachaMessages = [
      "¡Sigue así!",
      "¡Impresionante!",
      "¡Vas muy bien!",
      "¡Continúa así!",
    ];

    const interval = setInterval(() => {
      const randomMessage = rachaMessages[Math.floor(Math.random() * rachaMessages.length)];
      setRacha(randomMessage);
    }, 3000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  console.log(`Variant in Header: ${variant}`); // Verificar qué variant recibe

  // Configuración de diseños para cada variante
  const designs = {
    default: {
      fontClass: "font-semibold text-xl",
      buttonClass: "bg-[#E53935] text-white hover:bg-red-400",
      hoverTextClass: "hover:text-green-500",
      colortext: "text-white",
      icon: logo,
    },
    kids: {
      fontClass: "font-bubblegum text-2xl font-bold tracking-wider", 
      buttonClass: "bg-[#F8D642] hover:bg-[#ffe471]", 
      hoverTextClass: "text-white hover:text-pink-400  ",
      colortext:"text-white hover:text-pink-400",
      icon:logo,
      fondoHeader: "bg-blue-600/80 shadow-md",
      },
    young: {
      fontClass: "font-arcade text-xs text-pink-600",
      buttonClass: "bg-[#ff0068] text-white hover:bg-blue-700",
      hoverTextClass: "hover:text-[#ff0068]",
      colortext: "text-yellow-500 text-shadow-neon animate-neon",
      icon: logo,
    },
    adult: {
      fontClass: "font-bree text-xl",
      buttonClass:
        "bg-yellow-600 text-white hover:bg-yellow-500 hover:scale-110 duration-500 transition-transform focus:ring-indigo-300 rounded-lg px-6 py-2",
      hoverTextClass: "hover:text-[white]",
      colortext: "text-white",
      icon: logo,
    },
  };

  // Obtener los estilos dinámicos según la variante
  const currentDesign = designs[variant] || designs.default;
  const { fontClass, buttonClass, hoverTextClass, colortext, icon, fondoHeader } = currentDesign;

  // Generar las rutas dinámicas para enlaces
  const dynamicPath = (path) =>
    `${path}${variant ? `?variant=${variant}` : ""}`;

  return (
    <header
      className={`flex items-center justify-between px-10 py-5 mb-1 ${fontClass} ${fondoHeader}`}
    >
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
        <Link
          to={dynamicPath("/")}
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Home
        </Link>
        <Link
          to={dynamicPath("/cursos")}
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Cursos
        </Link>
        <Link
          to={dynamicPath("/beca")}
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Becas
        </Link>
        <Link
          to={dynamicPath("/planes")}
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

        {/* Mostrar botones si no está autenticado */}
        {!isAuthenticated ? (
          <>
            <button
              className={`px-4 py-2 rounded-full transition-transform duration-500 text-white ${hoverTextClass}`}
            >
              <Link
                to={dynamicPath("/Login")}
                className={`transition-transform duration-500 ${hoverTextClass}`}
              >
                Iniciar Sesión
              </Link>
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-transform duration-500 ${buttonClass}`}
            >
              <Link
                to={dynamicPath("/Register")}
                className={`transition-transform duration-500 ${hoverTextClass}`}
              >
                Registrarse
              </Link>
            </button>
          </>
        ) : (
          // Mostrar el carrito, racha y perfil si está autenticado
          <>
            <div className="flex items-center space-x-4">
              {/* Carrito */}
              <Link to={dynamicPath("/carrito")}>
                <span className="text-white text-xl">
                  <i className="fa fa-shopping-cart"></i>
                </span>
              </Link>

              {/* Racha */}
              <div className="text-white text-lg flex items-center space-x-2">
                <i className="fa fa-trophy text-yellow-500 p-2"></i>
                <span className="text-yellow-500 font-bold">{racha}</span>
              </div>

              {/* Perfil desplegable */}
              <div className="relative">
                <button
                  className="text-white hover:text-yellow-500"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <i className="fa fa-user"></i> Anthony Atiro
                </button>
                {showProfile && (
                  <div className="absolute top-8 right-0 bg-white text-black p-4 shadow-lg rounded-lg w-48">
                    <div className="flex flex-col items-center">
                      <img
                        src="https://lh3.googleusercontent.com/a/ACg8ocLu3jTS_hDcNq-NbcI6MOq2SCZ9cy36TY10zFaRot33i2NDBkmL=s324-c-no"
                        alt="Usuario"
                        className="rounded-full mb-2 w-20 h-20 object-cover"
                      />
                      <div className="text-center">
                        <div className="font-semibold">Anthony Atiro</div>
                        <div className="text-sm text-gray-500">
                          "¡Sigamos adelante!"
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
