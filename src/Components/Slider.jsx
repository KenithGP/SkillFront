import { useState } from "react";
import { useLocation } from "react-router-dom";
import Espada from '../assets/Icons/Espada-gamer.svg'
import Almohadilla from '../assets/Icons/Almohadilla.svg'
import ConsolaJuegos from '../assets/Icons/Consola-Juegos.svg'
import PalancaMando from '../assets/Icons/Palanca-Mando.svg'
// Configuración centralizada para estilos dinámicos
const pageStyles = {
  default: {
    fontClass: "font-sans text-lg", //fuente
    buttonClass: "bg-[#E53935] text-white hover:bg-red-400", // para los botones
    slideBackground: "bg-transparent from-blue-400 to-indigo-600", // color de fondo para el slides
    colortext: "text-white",
  },
  young: {
    fontClass: "font-arcade text-sm",
    buttonClass: "bg-[#ff0068] text-white hover:bg-blue-700",
    slideBackground: "bg-transparent",
    colortext: "text-white",
  },
  kids: {
    fontClass: "font-comics text-lg ",
    buttonClass: "bg-[#F8D642] text-[#000000] hover:bg-[#D1A64E]",
    slideBackground: "bg-white/50",
    colortext: "text-black",
  },
  Adult: {
    fontClass: "font-bree text-lg",
    buttonClass: "bg-yellow-600 text-[#e4ebbc] hover:bg-yellow-500",
    slideBackground: "bg-transparent",
    colortext: "text-[#e4ebbc]",
  },
};

const Slider = ({ variant = "default" }) => {
  const location = useLocation();

  // Determinar la variante de la página actual
  const getPageVariant = () => {
    if (location.pathname.includes("/adult")) return "Adult";
    if (location.pathname.includes("/Young")) return "young";
    if (location.pathname.includes("/kids")) return "kids";
    return "default";
  };

  const currentVariant = getPageVariant();
  const { fontClass, buttonClass, slideBackground, colortext } = pageStyles[currentVariant];

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
    young: [
      {
        image: ConsolaJuegos,
        title: "Sistema Integral de Gestión Educativa",
        description:
          "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
      },
      {
        image: PalancaMando,
        title: "Aprende desde cualquier lugar",
        description:
          "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
      },
      
      {
        image: Espada,
        title: "Plataforma para Jóvenes",
        description:
          "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
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
                <h3 className={`text-4xl font-bold mb-4 ${ colortext}`}>
                  {slide.title}
                </h3>
                <p className={ `mb-6 ${ colortext}`}>{slide.description}</p>
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
