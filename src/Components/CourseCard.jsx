import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa"; // Iconos de carrito y estrellas

// Definir los estilos para cada tipo de página
const cardStyles = {
  kids: {
    bgColor: "bg-[#800080]/70",
    titleFont: "font-comics text-white text-3xl",
    paragraphFont: "text-blue-100",
    buttonColor: "bg-green-500",
    buttonText: "¡Explorar!",
  },
  young: {
    bgColor: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
    titleFont: "font-arcade text-yellow-300 text-4xl",
    paragraphFont: "text-pink-100",
    buttonColor: "bg-yellow-500",
    buttonText: "¡Aprender ahora!",
  },
  adult: {
    bgColor: "bg-gradient-to-r to-[#0b583b]/100 from-[black] max-screen",
    titleFont: "font-bree text-white text-4xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-purple-600",
    buttonText: "Inscribirse",
  },
  default: {
    bgColor: "bg-red-950/60",
    titleFont: "font-sans text-white text-3xl",
    paragraphFont: "text-white",
    buttonColor: "bg-yellow-500",
    buttonText: "Comprar",
  },
};

const CourseCard = ({
  title,
  description,
  image,
  level,
  tags,
  price,
  rating,
  students,
  videoUrl, // URL del video
  pageType = "default", // Tipo de página, por defecto 'default'
  buttonText,
  buttonColor,
  buttonIcon,
  titleFont,
  paragraphFont,
  bgColor,
  counterStart = 15, // Contador inicial, por defecto 15 segundos
  showAdAfterCounter = true, // Mostrar anuncio después del contador
  adMessage = "¡Parece que te está gustando este curso! Para continuar viendo el contenido completo, haz clic en el botón de abajo.",
  adButtonText = "Pagar Ahora",
  closeButtonText = "Cerrar",
  closeButtonColor = "bg-red-500",
}) => {
  const [clicked, setClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para mostrar el modal del video
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Estado para saber si el video está en reproducción
  const [counter, setCounter] = useState(counterStart); // Contador regresivo (inicia en 15 segundos o el valor pasado como prop)
  const [isAdVisible, setIsAdVisible] = useState(false); // Estado para mostrar el anuncio
  const videoRef = useRef(null); // Referencia al video para controlar la reproducción
  const intervalRef = useRef(null); // Referencia para el intervalo del contador

  const handleButtonClick = () => {
    setClicked(true);
  };

  const handleShowDetails = () => {
    setIsModalVisible(true); // Mostrar el modal con el video
    startCounter(); // Iniciar el contador cuando se muestra el modal
  };

  const handleClose = () => {
    setIsModalVisible(false); // Cerrar el modal
    clearInterval(intervalRef.current); // Limpiar el intervalo del contador
    setIsAdVisible(false); // Ocultar el anuncio cuando se cierre el modal
    setCounter(counterStart); // Resetear el contador cuando se cierra el modal
  };

  // Función para iniciar el contador
  const startCounter = () => {
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(intervalRef.current); // Detener el contador cuando llega a 0
          if (showAdAfterCounter) setIsAdVisible(true); // Mostrar el anuncio si la prop está activa
          return 0; // El contador se detiene en 0
        }
        return prevCounter - 1; // Disminuir el contador
      });
    }, 1000); // Actualizar cada segundo
  };

  const handlePlay = () => {
    setIsVideoPlaying(true); // El video empieza a reproducirse
  };

  const handlePause = () => {
    setIsVideoPlaying(false); // El video se pausa
    clearInterval(intervalRef.current); // Limpiar el temporizador si el video se pausa
  };

  // Obtener los estilos correspondientes según el tipo de página
  const styles = cardStyles[pageType] || cardStyles.default;

  return (
    <div className={`w-72 h-[28rem] mb-6 mx-auto bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden ${bgColor || styles.bgColor}`}>
      {/* Imagen */}
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt={title}
      />

      {/* Contenido */}
      <div className="p-4">
        <h2 className={`text-lg font-semibold ${titleFont || styles.titleFont}`}>{title}</h2>
        <p className={`text-sm ${paragraphFont || styles.paragraphFont} mt-1`}>
          Nivel: <span className="text-yellow-400">{level}</span> • {students} estudiantes
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-white text-black text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span>{rating}</span>
          </div>
          <span className="text-lg font-bold">${price}</span>
        </div>

        {/* Botón */}
        <div className="flex flex-col gap-2 mt-4">
          <button
            className={`${buttonColor || styles.buttonColor} text-white px-4 py-2 rounded hover:opacity-90 transition duration-300 w-full flex items-center justify-center gap-2`}
            onClick={handleButtonClick}
          >
            {buttonIcon || <FaShoppingCart />}
            {clicked ? "Añadido al carrito" : buttonText || styles.buttonText}
          </button>
          <button
            className="border border-none-500 text-white-500 px-4 py-2 rounded w-full hover:bg-yellow-400 hover:text-white transition duration-300"
            onClick={handleShowDetails}
          >
            Ver Detalles
          </button>
        </div>
      </div>

      {/* Modal para mostrar el video */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-4/5 max-w-3xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
              {/* Contador al lado del título */}
              <div className="text-white text-xl font-semibold">
                {counter}s
              </div>
            </div>

            {/* Reproductor de YouTube en iframe */}
            <div className="relative mb-4">
              <iframe
                ref={videoRef}
                width="100%"
                height="315"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onPlay={handlePlay} // Activar cuando el video empiece a reproducirse
                onPause={handlePause} // Desactivar cuando el video se pause
              ></iframe>
            </div>

            {/* Anuncio después de que el contador llegue a 0 */}
            {isAdVisible && (
              <div className="bg-yellow-500 text-black p-4 rounded-md mb-4">
                <p>{adMessage}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                  {adButtonText}
                </button>
              </div>
            )}

            {/* Botón de cerrar */}
            <button
              className={`${closeButtonColor} text-white px-4 py-2 rounded mt-4`}
              onClick={handleClose}
            >
              {closeButtonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
