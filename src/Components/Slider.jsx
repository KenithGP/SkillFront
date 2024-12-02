import { useState } from "react";
import { useLocation } from "react-router-dom";

// Configuración centralizada para estilos dinámicos
const pageStyles = {
  default: {
    fontClass: "font-sans text-lg", //fuente
    buttonClass: "bg-[#E53935] text-white hover:bg-red-400", // para los botones
    slideBackground: "bg-gradient-to-r from-blue-400 to-indigo-600", // color de fondo para el slides
  },
  young: {
    fontClass: "font-arcade text-sm",
    buttonClass: "bg-[#ff0068] text-white hover:bg-blue-700",
    slideBackground: "bg-transparent",
  },
  kids: {
    fontClass: "font-cursive text-lg",
    buttonClass: "bg-[#ffcc00] text-white hover:bg-[#ff9900]",
    slideBackground: "bg-gradient-to-r from-pink-400 to-yellow-500",
  },
};

const Slider = ({ variant = "default" }) => {
  const location = useLocation();

  // Determinar la variante de la página actual
  const getPageVariant = () => {
    if (location.pathname.includes("/Young")) return "young";
    if (location.pathname.includes("/Kids")) return "kids";
    return "default";
  };

  const currentVariant = getPageVariant();
  const { fontClass, buttonClass, slideBackground } = pageStyles[currentVariant];

  // Slides para diferentes variantes
  const slidesVariants = {
    default: [
      {
        image: "https://www.datacole.com/img/demo-content/images/system.svg",
        title: "Sistema Integral de Gestión Educativa",
        description:
          "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
      },
      {
        image: "https://www.datacole.com/img/demo-content/images/class.svg",
        title: "Aprende desde cualquier lugar",
        description:
          "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
      },
      
      {
        image: "https://www.datacole.com/img/demo-content/images/class.svg",
        title: "Plataforma para Jóvenes",
        description:
          "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
      },
    ],
    kids: [
      {
        image: "https://www.datacole.com/img/demo-content/images/campus.svg",
        title: "Diversión y Aprendizaje",
        description:
          "Plataforma interactiva diseñada para que los niños aprendan jugando.",
      },
    ],
  };

  const slides = slidesVariants[variant] || slidesVariants.default;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${slideBackground} h-[500px]`}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out items-center h-[400px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center"
          >
            <div className="flex flex-col md:flex-row justify-center gap-8 p-4 w-11/12 md:w-3/5 h-auto items-center">
              <img
                src={slide.image}
                alt={slide.title || "Slide"}
                className="w-1/3 max-w-sm object-contain"
              />
              <div
                className={`text-center md:text-left flex flex-col items-center md:items-start justify-center h-full ${fontClass}`}
              >
                <h3 className="text-4xl font-bold text-white mb-4">
                  {slide.title}
                </h3>
                <p className="text-white mb-6">{slide.description}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button
                    className={`px-3 py-2 rounded-3xl transition-all ease-in-out duration-300 ${buttonClass}`}
                  >
                    Nuestro Facebook
                  </button>
                  <button
                    className={`px-3 py-2 rounded-3xl transition-all ease-in-out duration-300 ${buttonClass}`}
                  >
                    Contáctenos
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
