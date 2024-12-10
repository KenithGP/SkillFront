import React from "react";
import { useLocation } from "react-router-dom";
import CourseCard from "./CourseCard";

// Configuración de estilos para cada variante
const pageStyles = {
  default: {
    bgColor: "bg-gray-900",
    titleFont: "font-sans text-3xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-blue-500",
    buttonText: "Comprar",
  },
  young: {
    bgColor: "bg-pink-900",
    titleFont: "font-arcade text-yellow-300 text-4xl",
    paragraphFont: "text-pink-100",
    buttonColor: "bg-yellow-500",
    buttonText: "¡Aprender ahora!",
  },
  kids: {
    bgColor: "bg-blue-500",
    titleFont: "font-comics text-white text-3xl",
    paragraphFont: "text-blue-100",
    buttonColor: "bg-green-500",
    buttonText: "¡Explorar!",
  },
  adult: {
    bgColor: "bg-green-900",
    titleFont: "font-bree text-white text-4xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-purple-600",
    buttonText: "Inscribirse",
  },
};

const CoursesGrid = ({ courses }) => {
  const location = useLocation();

  // Detectar el parámetro variant o usar una variante predeterminada
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  // Obtener estilos dinámicos según la variante
  const { bgColor, titleFont, paragraphFont, buttonColor, buttonText } =
    pageStyles[variant];

  return (
    <div className={`w-full ${bgColor} px-4 py-8`}>
      <h2 className={`text-2xl ${titleFont} mb-6 text-center`}>
        Cursos Disponibles
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            level={course.level}
            tags={course.tags}
            price={course.price}
            rating={course.rating}
            students={course.students}
            buttonColor={buttonColor}
            buttonText={buttonText}
            videoUrl={course.video}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
