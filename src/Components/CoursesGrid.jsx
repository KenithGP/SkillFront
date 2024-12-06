import React from "react";
import CourseCard from "./CourseCard"; // Asegúrate de tener este componente

// Componente que muestra los cursos en una cuadrícula
const CoursesGrid = ({ courses, bgColor, titleFont, paragraphFont, buttonColor, buttonText }) => {
  return (
    <div className={`w-full ${bgColor} px-4 py-8`}>
      <h2 className={`text-2xl ${titleFont} text-white mb-6 text-center`}>
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
            videoUrl={course.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
