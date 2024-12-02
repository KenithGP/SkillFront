import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import Header from "../Components/Header";

export default function Beca() {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  // Maneja el clic del botón
  const handleQuizClick = () => {
    navigate("/Quizz"); // Redirige a la ruta "/Quiz"
  };
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#EA6558] min-h-screen text-white">
      <Header />
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 py-16 lg:py-24">
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-yellow-500 mx-4">
            ¡Postula a una beca ahora mismo!
          </h2>
          <p className="text-lg lg:text-xl font-semibold text-gray-200 mx-4">
            Regístrate para optar por la beca y disfrutar nuestros cursos.
            ¡Estamos emocionados de acompañarte en esta aventura de aprendizaje!
          </p>
          <p className="text-lg lg:text-xl font-bold text-green-500 mx-4">
            ¡No pierdas esta oportunidad de alcanzar tus metas y disfrutar
            mientras aprendes!
          </p>
          <p className="text-lg lg:text-xl font-semibold text-gray-200 mx-4">
            Nuestros cursos inspiran a los jóvenes, dándoles herramientas para
            explorar su creatividad y desarrollar habilidades técnicas.
          </p>
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-400 text-white mx-4 font-bold py-3 px-6 rounded-lg transition duration-300"
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
