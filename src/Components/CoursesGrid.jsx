import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard from "./CourseCard";

const pageStyles = {
  kids: {
    bgColor: "bg-none",
    titleFont: "font-comics text-white text-3xl",
    paragraphFont: "text-blue-100",
    buttonText: "¡Explorar!",
  },
  young: {
    bgColor: "bg-none",
    titleFont: "font-arcade text-yellow-300 text-shadow-neon animate-neonFlicker text-4xl",
    paragraphFont: "text-pink-100",
    buttonText: "¡Aprender ahora!",
  },
  adult: {
    bgColor: "bg-none",
    titleFont: "font-bree text-white text-4xl",
    paragraphFont: "text-gray-300",
    buttonText: "Inscribirse",
  },
  default: {
    bgColor: "bg-none",
    titleFont: "font-sans text-white text-3xl",
    paragraphFont: "text-gray-300",
    buttonText: "Comprar",
  },
};

const CoursesGrid = ({ courses }) => {
  const [searchParams] = useSearchParams();
  const [selectedCourses, setSelectedCourses] = useState([]);

  const variant = searchParams.get("variant") || "default";

  const { bgColor, titleFont, paragraphFont, buttonColor, buttonText } =
    pageStyles[variant] || pageStyles.default;

  const handleCourseSelection = (course) => {
    console.log(`Toggling selection for: ${course.title}`);
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const total = selectedCourses.reduce((sum, course) => {
    const coursePrice = parseFloat(course.price || 0); // Verificar que el precio sea válido
    console.log(`Adding price for ${course.title}: ${coursePrice}`);
    return sum + coursePrice;
  }, 0);

  console.log("Total price:", total);

  return (
    <div className={`w-full ${bgColor} px-4 py-8`}>
      <h2 className={`text-2xl ${titleFont} mb-6 text-center`}>
        Cursos Disponibles
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {courses.map((course) => (
          <CourseCard
            id={course.id}    // Usa el ID único del curso
            title={course.title}
            description={course.description}
            image={course.image}
            level={course.level}
            tags={course.tags}
            price={course.price}
            rating={course.rating}
            students={course.students}
            videoUrl={course.videoUrl}
            buttonColor={buttonColor}
            buttonText={
              selectedCourses.includes(course) ? "Seleccionado" : buttonText
            }
            onButtonClick={() => handleCourseSelection(course)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
