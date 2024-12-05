import { useNavigate, useLocation } from "react-router-dom"; // Importa el hook useNavigate
import Header from "../Components/Header";

// Configuración de estilos para cada variante
const pageStyles = {
  default: {
    bgClass: "bg-gradient-to-b from-[#000000] to-[#EA6558]",
    titleColor: "text-yellow-500",
    buttonClass: "bg-green-700 hover:bg-green-400 font-bold text-lg",
    inputBg: "bg-white text-gray-600",
    titleSize:"text-xl lg:text-4xl font-bold ",
    DescriptionSize:"text-xl lg:text-2xl",
    fontClass:"font-sans",
  },
  young: {
    bgClass: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100 ",
    titleColor: "text-[#ff0070]/80",
    buttonClass: "bg-pink-600 hover:bg-pink-400 font-normal text-xs",
    inputBg: "bg-gray-800 text-yellow-200",
    titleSize:"text-xl lg:text-xl font-bold ",
    DescriptionSize:"text-md lg:text-md",
    fontClass:"font-arcade",
  },
  kids: {
    bgClass: "bg-gradient-to-b from-[#f0fff4] to-[#b3e5fc]",
    titleColor: "text-blue-900",
    buttonClass: "bg-blue-500 hover:bg-blue-300",
    inputBg: "bg-gray-200 text-blue-800",
    fontClass:"font-sans",
  },
  adult: {
    bgClass: "bg-gradient-to-b from-[#2c2c2c] to-[#6e6e6e]",
    titleColor: "text-gray-300",
    buttonClass: "bg-gray-700 hover:bg-gray-500",
    inputBg: "bg-gray-800 text-gray-300",
    fontClass:"font-sans",
  },
};

export default function Beca() {
  const navigate = useNavigate(); // Inicializa el hook de navegación
  const location = useLocation(); // Para detectar la ruta actual

  // Detectar la variante según la ruta
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default"; // Variante por defecto

  // Obtener estilos dinámicos según la variante
  const { bgClass, titleColor, fontClass ,titleSize,DescriptionSize,buttonClass, inputBg } = pageStyles[variant];

  // Maneja el clic del botón
  const handleQuizClick = () => {
    navigate("/Quizz"); // Redirige a la ruta "/Quiz"
  };
  return (
    <div className={`${bgClass} ${fontClass} min-h-screen text-white`}>
      <Header />
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 py-16 lg:py-24">
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6 mx-10">
          <h2 className={`${titleSize} ${titleColor} `}>
            ¡Postula a una beca ahora mismo!
          </h2>
          <p className={`${DescriptionSize} font-semibold text-gray-200 `}>
            Regístrate para optar por la beca y disfrutar nuestros cursos.
            ¡Estamos emocionados de acompañarte en esta aventura de aprendizaje!
          </p>
          <p className={`${titleSize} font-bold text-green-500`}>
            ¡No pierdas esta oportunidad de alcanzar tus metas y disfrutar
            mientras aprendes!
          </p>
          <p className={`${DescriptionSize} font-semibold text-gray-200 `}>
            Nuestros cursos inspiran a los jóvenes, dándoles herramientas para
            explorar su creatividad y desarrollar habilidades técnicas.
          </p>
          <button
            type="submit"
            className={`${buttonClass} mx-4 py-3 px-6 rounded-lg transition duration-300`}
            onClick={handleQuizClick}
          >
            Completa este quizz
          </button>
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2 mt-12 mx-10 lg:mt-0 bg-red-800/20 p-8 rounded-lg shadow-2xl">
          <form className="space-y-6">
            <h2 className="text-2xl font-bold text-yellow-400">
              Solicitud de Beca
            </h2>
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-gray-200">
                Registra tus datos para tu solicitud
              </label>
              <textarea
                placeholder="Nombres"
                className="w-full p-3 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Apellidos"
                 className="w-full p-3 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Correo electrónico"
                 className="w-full p-3 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Número de télefono a contactar"
                 className="w-full p-3 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="request-area"
                className="block text-lg font-semibold text-gray-200"
              >
                Área de solicitud
              </label>
              <select
                id="request-area"
                className="w-full p-3 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="" disabled selected>
                  Seleccione un área
                </option>
                <option value="Soporte Técnico">Soporte Técnico</option>
                <option value="Ventas">Ventas</option>
                <option value="Facturación">Facturación</option>
              </select>
            </div>
            <div className="space-y-2">
              <input
                type="file"
                placeholder=""
                className="w-full p-3 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
