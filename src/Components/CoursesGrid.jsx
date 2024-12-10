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
    titleFont: "font-arcade text-yellow-300 text-4xl",
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
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const total = selectedCourses.reduce(
    (sum, course) => sum + parseFloat(course.price),
    0
  );

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
            videoUrl={course.video}
            buttonColor={buttonColor}
            buttonText={selectedCourses.includes(course) ? "Seleccionado" : buttonText}
            onButtonClick={() => handleCourseSelection(course)}
          />
        ))}
      </div>
      </div>
  );
};

export default CoursesGrid;
