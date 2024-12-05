import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Icono de carrito

// Componente Card
const CourseCard = ({
  title,
  description,
  image,
  buttonColor,
  titleFont,
  paragraphFont,
  buttonText,
  onButtonClick,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    onButtonClick && onButtonClick(title);
  };

  return (
    <div className="flex-shrink-0 w-80 h-96 mb-6 mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
        {/* Imagen con tamaño fijo */}
        <img
          className="w-full h-40 object-cover"
          src={image}
          alt={title}
          style={{ maxWidth: '100%', maxHeight: '160px' }} // Límite de tamaño
        />
        
        {/* Contenido */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Título con altura mínima y máxima */}
          <h2
            className={`${titleFont} text-lg font-semibold text-gray-800 min-h-[48px] max-h-[64px] overflow-hidden`}
          >
            {title}
          </h2>
          
          {/* Descripción con altura fija */}
          <p
            className={`${paragraphFont} text-gray-600 text-sm mt-2 flex-grow min-h-[60px] max-h-[80px] overflow-hidden`}
          >
            {description}
          </p>
          
          {/* Botón */}
          <div className="mt-2">
            <button
              className={`${
                clicked
                  ? "bg-transparent border-0 text-gray-600 flex items-center gap-2"
                  : `${buttonColor} text-white`
              } px-4 py-2 rounded hover:opacity-90 transition duration-300 w-full`}
              onClick={handleButtonClick}
            >
              {clicked ? (
                <>
                  <FaShoppingCart />
                  {buttonText || "Añadido al carrito"}
                </>
              ) : (
                buttonText || "Obtener curso"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal que muestra una categoría de cursos
const CoursesGrid = ({
  category,
  bgColor,
  titleColor,
  buttonColor,
  titleFont,
  paragraphFont,
  buttonText,
}) => {
  // Arrays de cursos para aprender programación
  const kidsCourses = [
    {
      title: "Introducción a la programación",
      description:
        "Aprende los fundamentos de programación con juegos interactivos.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/002/871/498/small/concept-of-computer-technology-for-education-and-business-vector.jpg",
    },
    {
      title: "Scratch básico",
      description: "Crea tus primeros proyectos con este lenguaje visual.",
      image: "https://cdn.worldvectorlogo.com/logos/scratch-logo.svg",
    },
    {
      title: "Lógica computacional",
      description: "Desarrolla habilidades de resolución de problemas.",
      image: "https://via.placeholder.com/300x140?text=Logic+for+Kids",
    },
    {
      title: "Robótica para niños",
      description: "Aprende a programar robots con kits básicos.",
      image: "https://via.placeholder.com/300x140?text=Robotics+for+Kids",
    },
  ];

  const teensCourses = [
    {
      title: "Python para principiantes",
      description: "Aprende a programar con Python desde cero.",
      image: "https://via.placeholder.com/300x140?text=Python+for+Teens",
    },
    {
      title: "JavaScript interactivo",
      description: "Crea páginas web dinámicas con JavaScript.",
      image: "https://via.placeholder.com/300x140?text=JavaScript+for+Teens",
    },
    {
      title: "Desarrollo de videojuegos",
      description: "Diseña y programa tu propio videojuego.",
      image: "https://via.placeholder.com/300x140?text=Game+Dev+for+Teens",
    },
    {
      title: "HTML y CSS avanzado",
      description: "Construye páginas web modernas y estilizadas.",
      image: "https://via.placeholder.com/300x140?text=HTML+CSS+for+Teens",
    },
  ];

  const adultCourses = [
    {
      title: "Fundamentos de desarrollo web",
      description:
        "Aprende HTML, CSS y JavaScript para construir páginas web.",
      image: "https://via.placeholder.com/300x140?text=Web+Dev+for+Adults",
    },
    {
      title: "Introducción a React.js",
      description: "Construye aplicaciones modernas con React.",
      image: "https://via.placeholder.com/300x140?text=React+for+Adults",
    },
    {
      title: "Bases de datos con SQL",
      description: "Administra datos con SQL desde cero.",
      image: "https://via.placeholder.com/300x140?text=SQL+for+Adults",
    },
    {
      title: "Backend con Node.js",
      description: "Construye APIs y servidores con Node.js.",
      image: "https://via.placeholder.com/300x140?text=Node+for+Adults",
    },
  ];

  // Selección de categoría
  const categories = {
    kids: kidsCourses,
    teens: teensCourses,
    adults: adultCourses,
  };

  const selectedCourses = categories[category] || [];

  return (
    <div className={`w-full ${bgColor} px-4 py-8`}>
      <h2
        className={`${titleFont} ${titleColor} text-2xl font-bold mb-6 text-center`}
      >
        {category === "kids" && "Cursos de Programación para Niños"}
        {category === "teens" && "Cursos de Programación para Jóvenes"}
        {category === "adults" && "Cursos de Programación para Adultos"}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {selectedCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            buttonColor={buttonColor}
            titleFont={titleFont}
            paragraphFont={paragraphFont}
            buttonText={buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
