import React, { useState, Link } from "react";

const Slider = ({ variant = "default" }) => {
  // Arrays de slides para diferentes páginas
  const slidesVariants = {
    default: [
      {
        image: "https://www.datacole.com/img/demo-content/images/system.svg",
        title: "Sistema Integral de Gestión Educativa",
        description:
          "DataCole es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
        background: "bg-gradient-to-r from-blue-400 to-indigo-600",
      },
      {
        image: "https://www.datacole.com/img/demo-content/images/class.svg",
        title: "Aprende desde cualquier lugar",
        description:
          "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
        background: "bg-gradient-to-r from-green-400 to-teal-500",
      },
    ],
    admin: [
      {
        image: "https://www.datacole.com/img/demo-content/images/campus.svg",
        title: "Gestión Administrativa Eficiente",
        description:
          "Optimiza los procesos administrativos con herramientas modernas que garantizan eficiencia y ahorro de tiempo.",
        background: "bg-gradient-to-r from-purple-500 to-pink-600",
      },
      {
        image: "https://www.datacole.com/img/demo-content/images/system.svg",
        title: "Automatización de Tareas",
        description:
          "Ahorra tiempo con nuestra plataforma diseñada para simplificar las tareas administrativas.",
        background: "bg-gradient-to-r from-yellow-400 to-orange-500",
      },
    ],
    students: [
      {
        image: "https://www.datacole.com/img/demo-content/images/class.svg",
        title: "Plataforma Estudiantil",
        description:
          "Accede a contenido interactivo, participa en clases virtuales y mejora tus resultados académicos.",
        background: "bg-gradient-to-r from-cyan-400 to-blue-600",
      },
      {
        image: "https://www.datacole.com/img/demo-content/images/campus.svg",
        title: "Conéctate con tu Comunidad",
        description:
          "Interactúa con otros estudiantes y participa en actividades educativas dinámicas.",
        background: "bg-gradient-to-r from-red-500 to-purple-700",
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
      className={`relative w-full overflow-hidden ${slides[currentSlide].background} h-[500px]`}
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 w-11/12 md:w-3/5 h-auto items-center">
              <img
                src={slide.image}
                alt={slide.title || "Slide"}
                className="w-1/3 max-w-sm object-contain"
              />
              <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center h-full">
                <h3 className="text-4xl font-bold text-white mb-4">
                  {slide.title}
                </h3>
                <p className="text-white mb-6">{slide.description}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-3xl hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-300">
                    Nuestro Facebook
                  </button>
                  <button className="bg-gray-800 text-white px-3 py-2 rounded-3xl hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-300">
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
