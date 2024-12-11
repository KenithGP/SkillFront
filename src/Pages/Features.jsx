import React from "react";
import { useLocation } from "react-router-dom";
import CoursesGrid from "../Components/CoursesGrid";
import Header from '../Components/Header'
import RoutePage from '../Components/RoutePage'
/* import CourseDetails from '../Components/CourseDetails' */

// Datos de los cursos
export const kidsCourses = [
  {
    id: 1, // ID único
    title: "Introducción a la programación",
    description: "Aprende los fundamentos de programación con juegos interactivos.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/002/871/498/small/concept-of-computer-technology-for-education-and-business-vector.jpg",
    level: "Principiante",
    tags: ["programación", "niños"],
    price: "9.99",
    rating: 4.5,
    students: 20,
    videoUrl: "https://www.youtube.com/embed/VZe9tjqa9xw",
  },
  // Otros cursos...
];
export const teensCourses = [
  {
    id: 1,
    title: "Teens Course 1",
    description: "This is a teens level course on topic 1.",
    image: "https://via.placeholder.com/300x140?text=Teens+Course+1",
    level: "Intermedio",
    tags: ["teens", "topic-1"],
    price: "28.81",
    rating: 3.6,
    students: 35,
    videoUrl: "https://www.youtube.com/embed/randomVideo1",
  },
  // Agrega los demás cursos...
];

export const adultsCourses = [
  {
    id: 1,
    title: "Adults Course 1",
    description: "This is a adults level course on topic 1.",
    image: "https://via.placeholder.com/300x140?text=Adults+Course+1",
    level: "Intermedio",
    tags: ["adults", "topic-1"],
    price: "12.89",
    rating: 4.9,
    students: 85,
    videoUrl: "https://www.youtube.com/embed/randomVideo1",
  },
  // Agrega los demás cursos...
];

export const defaultCourses = [
  {
    id: 1,
    title: "Default Course 1",
    description: "This is a default level course on topic 1.",
    image: "https://via.placeholder.com/300x140?text=Default+Course+1",
    level: "Avanzado",
    tags: ["default", "topic-1"],
    price: "14.06",
    rating: 4.5,
    students: 10,
    videoUrl: "https://www.youtube.com/embed/randomVideo1",
  },
  // Agrega los demás cursos...
];


// Configuración de estilos dinámicos
const pageStyles = {
  kids: {
    bgColor: "bg-gradient-to-b from-[#5de0e6] to-[#004aad]",
    titleFont: "font-bubblegum text-white text-3xl",
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
    bgColor: "bg-gradient-to-b from-[#000000]/100  to-[#EA6558]/100",
    titleFont: "font-sans text-white text-3xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-blue-500",
    buttonText: "Comprar",
  },
};

// Componente principal
export default function Features () {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  const courses =
    variant === "kids"
      ? kidsCourses
      : variant === "young"
      ? teensCourses
      : variant === "adult"
      ? adultsCourses
      : defaultCourses;

  return (
    <div className={`min-h-screen ${pageStyles[variant]?.bgColor || pageStyles.default.bgColor}`}>
      <Header variant={variant} />
      <RoutePage variant={variant}/>
      <CoursesGrid courses={courses} variant={variant} />
    </div>
  );
};
