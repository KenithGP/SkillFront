import logo from "../assets/Icons/Logo-White-mobil.svg";
import { Link } from "react-router-dom";
import React from "react";
import LogoBlack from "../assets/Icons/Logo.svg";

export default function Header({ variant }) {
  console.log(`Variant in Header: ${variant}`); // Verificar qué variant recibe

  // Obtener el parámetro variant desde la URL
/*   const params = new URLSearchParams(location.search);
  const variant = params.get("variant");
 */
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
      fontClass: "font-comics text-xl ", 
      buttonClass: "bg-[#F8D642] hover:bg-[#D1A64E]", 
      hoverTextClass: "text-black hover:text-[#F8D642]  ",
      colortext:"text-black",
      icon: LogoBlack,
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
      buttonClass: "bg-yellow-600 text-white hover:bg-yellow-500 hover:scale-110 duration-500 transition-transform focus:ring-indigo-300 rounded-lg px-6 py-2",
      hoverTextClass: "hover:text-[white]",
      colortext: "text-white",
      icon: logo,
    },
  };
 

  // Detectar la variante actual, dando prioridad al parámetro `variant`
 /*  const currentVariant =
    variant || // Si `variant` está presente en la URL, úsalo
    (location.pathname.includes("/Young") && "young") ||
    (location.pathname.includes("/kids") && "kids") ||
    (location.pathname.includes("/adult") && "adult") ||
    "default"; // Ruta por defecto */

    const currentDesign = designs[variant] || designs.default;
  // Obtener los estilos dinámicos según la variante
  const { fontClass, buttonClass, hoverTextClass, colortext, icon } =
  currentDesign;

  // Generar las rutas dinámicas para enlaces
  const dynamicPath = (path) =>
    `${path}${variant ? `?variant=${variant}` : ""}`;

  console.log("Variant in Header:", variant);


  return (
    <header
      className={`flex items-center justify-between px-10 py-5 mb-1 ${fontClass}`}
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
          to={dynamicPath("/")} // Home con propagación del parámetro
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Home
        </Link>
        <Link
          to={dynamicPath("/cursos")} // Cursos con propagación del parámetro
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Cursos
        </Link>
        <Link
          to={dynamicPath("/beca")} // Becas con propagación del parámetro
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Becas
        </Link>
        <Link to={`/planes${variant ? `?variant=${variant}` : ""}`}>Planes</Link>

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
      </div>
    </header>
  );
}
