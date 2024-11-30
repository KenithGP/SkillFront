import React, { useState } from "react";

const Slider = () => {
  // Array de slides en el mismo archivo
  const slides = [
    {
      image: "https://www.datacole.com/img/demo-content/images/system.svg",
      title: "Sistema Integral de Gestión Educativa",
      description:
        "DataCole es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
      background: "bg-gradient-to-r from-blue-400 to-indigo-600", // Fondo para este slide
    },
    {
      image: "https://www.datacole.com/img/demo-content/images/class.svg",
      title: "Aprende desde cualquier lugar",
      description:
        "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
      background: "bg-gradient-to-r from-green-400 to-teal-500", // Fondo para este slide
    },
    {
      image: "https://www.datacole.com/img/demo-content/images/campus.svg",
      title: "Gestión Administrativa Eficiente",
      description:
        "Optimiza los procesos administrativos con herramientas modernas que garantizan eficiencia y ahorro de tiempo.",
      background: "bg-gradient-to-r from-purple-500 to-pink-600", // Fondo para este slide
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Cambiar al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Cambiar a un slide específico (navegación desde los botones inferiores)
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${slides[currentSlide].background} h-[500px]`} // Aplica el fondo dinámico
    >
      {/* Contenedor de slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
             className="w-full flex-shrink-0 flex items-center justify-center h-2/3"
            style={{ width: "100%"}}
          >
            <div className="flex flex-col md:flex-row justify-center gap-8 p-4 w-11/12 md:w-3/5 h-auto items-center"> 
              {/* Asegúrate de que la imagen tenga un tamaño adecuado y se centre correctamente */}
              <img
                src={slide.image}
                alt="Slide"
                className="w-1/4 max-w-sm object-contain"
              />
              {/* Contenedor de texto y botones */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center h-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {slide.title}
                </h3>
                <p className="text-white mb-6">{slide.description}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Nuestro Facebook
                  </button>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                    Contáctenos
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        ❮
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        ❯
      </button>

      {/* Indicadores */}
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
