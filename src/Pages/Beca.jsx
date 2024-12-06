import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Components/Header";

// Configuración de estilos para cada variante
const pageStyles = {
  default: {
    bgClass: "bg-gradient-to-b from-[#000000] to-[#EA6558]",
    titleColor: "text-yellow-500",
    buttonClass: "bg-green-700 hover:bg-green-400 font-bold text-lg",
    inputBg: "bg-white text-gray-600",
    titleSize: "text-xl lg:text-4xl font-bold",
    DescriptionSize: "text-xl lg:text-2xl",
    subTitleSize: "text-lg",
    fontClass: "font-sans",
    bgForm: "bg-red-800/20",
    fileTextClass: "text-yellow-400", // Clase de color para adolescentes
  },
  young: {
    bgClass: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
    titleColor: "text-[#ff0070]/80",
    buttonClass: "bg-pink-600 hover:bg-pink-400 font-normal text-xs",
    inputBg: "bg-gray-800 text-yellow-200",
    titleSize: "text-xl lg:text-xl font-bold",
    DescriptionSize: "text-sm lg:text-sm",
    subTitleSize: "text-sm",
    fontClass: "font-arcade",
    bgForm: "bg-black/50",
    fileTextClass: "text-green-500", // Clase de color predeterminada para el texto del archivo
  },
  kids: {
    bgClass: "bg-gradient-to-b from-[#f0fff4] to-[#b3e5fc]",
    titleColor: "text-blue-900",
    buttonClass: "bg-blue-500 hover:bg-blue-300",
    inputBg: "bg-gray-200 text-blue-800",
    fontClass: "font-sans",
  },
  adult: {
    bgClass: "bg-gradient-to-b from-[#2c2c2c] to-[#6e6e6e]",
    titleColor: "text-gray-300",
    buttonClass: "bg-gray-700 hover:bg-gray-500",
    inputBg: "bg-gray-800 text-gray-300",
    fontClass: "font-sans",
  },
};

export default function Beca() {
  const navigate = useNavigate();
  const location = useLocation();

  // Detectar la variante según la ruta
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  // Obtener estilos dinámicos según la variante
  const {
    bgClass,
    titleColor,
    fontClass,
    titleSize,
    DescriptionSize,
    buttonClass,
    bgForm,
    subTitleSize,
    inputBg,
    fileTextClass,
  } = pageStyles[variant];

  const [fileName, setFileName] = useState(""); // Estado para almacenar el nombre del archivo

  // Maneja el clic del botón
  const handleQuizClick = () => {
    navigate(`/Quizz?variant=${variant}`); // Redirige a la ruta "/Quizz" con la variante
  };

  // Manejar el cambio del archivo seleccionado
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Actualizar el estado con el nombre del archivo
    } else {
      setFileName(""); // Si no hay archivo, limpiar el estado
    }
  };

  return (
    <div className={`${bgClass} ${fontClass} min-h-screen text-white`}>
      <Header variant={variant} />
      <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-16 lg:py-24">
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6 mx-10 px-20 py-20">
          <h2 className={`${titleSize} ${titleColor}`}>
            ¡Postula a una beca ahora mismo!
          </h2>
          <p className={`${DescriptionSize} font-semibold text-gray-200`}>
            Regístrate para optar por la beca y disfrutar nuestros cursos.
            ¡Estamos emocionados de acompañarte en esta aventura de aprendizaje!
          </p>
          <p className={`${titleSize} font-bold text-green-500`}>
            ¡No pierdas esta oportunidad de alcanzar tus metas y disfrutar
            mientras aprendes!
          </p>
          <p className={`${DescriptionSize} font-semibold text-gray-200`}>
            Nuestros cursos inspiran a los jóvenes, dándoles herramientas para
            explorar su creatividad y desarrollar habilidades técnicas.
          </p>
          <button
            type="button"
            className={`${buttonClass} py-3 px-6 rounded-lg transition duration-300`}
            onClick={handleQuizClick}
          >
            Completa este quizz
          </button>
        </div>

        {/* Right Form Section */}
        <div
          className={`lg:w-2/5 mt-12 mx-10 lg:mt-0 ${bgForm} p-8 rounded-lg shadow-2xl`}
        >
          <form className="space-y-6">
            <h2 className={`${titleSize} font-bold text-yellow-400`}>
              Solicitud de Beca
            </h2>
            <div className="space-y-2">
              <label
                className={`block ${subTitleSize} font-semibold text-gray-200`}
              >
                Registra tus datos para tu solicitud
              </label>
              <textarea
                placeholder="Nombres"
                className={`w-full p-3 rounded-lg text-xs ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              ></textarea>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Apellidos"
                className={`w-full p-3 rounded-lg text-xs ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Correo electrónico"
                className={`w-full p-3 rounded-lg text-xs ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Número de teléfono a contactar"
                className={`w-full p-3 rounded-lg text-xs ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="request-area"
                className={`block ${subTitleSize} font-semibold text-gray-200`}
              >
                Área de solicitud
              </label>
              <select
                id="request-area"
                defaultValue=""
                className={`w-full p-3 rounded-lg text-xs ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              >
                <option value="" disabled>
                  Seleccione un área
                </option>
                <option value="Soporte Técnico">Soporte Técnico</option>
                <option value="Ventas">Ventas</option>
                <option value="Facturación">Facturación</option>
              </select>
            </div>
            <div className="space-y-2">
              {/* Input File Oculto */}
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              {/* Botón Personalizado */}
              <label
                htmlFor="file-upload"
                className={`${subTitleSize} cursor-pointer inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition`}
              >
                Seleccionar Archivo
              </label>
              {/* Mostrar Nombre del Archivo Seleccionado */}
              <div
                className={`${
                  fileName ? fileTextClass : "text-gray-200"
                } ${subTitleSize} font-semibold mt-2`}
              >
                {fileName
                  ? `Archivo seleccionado: ${fileName}`
                  : "No se ha seleccionado ningún archivo"}
              </div>
            </div>
            <button
              type="submit"
              className={`${buttonClass} w-full py-3 px-6 rounded-lg transition duration-300`}
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
