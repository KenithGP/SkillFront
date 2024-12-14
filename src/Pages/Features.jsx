import React from "react";
import { useLocation } from "react-router-dom";
import CoursesGrid from "../Components/CoursesGrid";
import Header from '../Components/Header'
import Hamburguesa from '../Components/menu-hamburguesa/Hamburguesa'
// Datos de los cursos
const kidsCourses = [
  {
    title: "Introducción a la programación",
    description: "Aprende los fundamentos de programación con juegos interactivos.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/002/871/498/small/concept-of-computer-technology-for-education-and-business-vector.jpg",
    level: "Principiante",
    tags: ["programación", "niños"],
    price: "9.99",
    rating: 4.5,
    students: 20,
    videoUrl: "https://www.youtube.com/embed/VZe9tjqa9xw", // Video relacionado (YouTube)
  },
  {
    title: "Scratch básico",
    description: "Crea tus primeros proyectos con este lenguaje visual.",
    image: "https://cdn.worldvectorlogo.com/logos/scratch-logo.svg",
    level: "Principiante",
    tags: ["Scratch", "niños"],
    price: "8.99",
    rating: 4.7,
    students: 15,
    videoUrl: "https://www.youtube.com/embed/ykjMlW5LfM4", // Video de Scratch
  },
  {
    title: "Lógica computacional",
    description: "Desarrolla habilidades de resolución de problemas.",
    image: "https://via.placeholder.com/300x140?text=Logic+for+Kids",
    level: "Intermedio",
    tags: ["lógica", "pensamiento crítico"],
    price: "10.99",
    rating: 4.6,
    students: 18,
    videoUrl: "https://www.youtube.com/embed/dgdg64cQmm8", // Video de Lógica computacional
  },
  {
    title: "Robótica para niños",
    description: "Aprende a programar robots sencillos para desarrollar tus habilidades lógicas.",
    image: "https://via.placeholder.com/300x140?text=Robotics+for+Kids",
    level: "Principiante",
    tags: ["Robótica", "programación"],
    price: "12.99",
    rating: 4.8,
    students: 10,
    videoUrl: "https://www.youtube.com/embed/kD8RhGi2e6k", // Video sobre robótica para niños
  },
  {
    title: "Juego con Python para niños",
    description: "Crea tus propios juegos sencillos utilizando Python.",
    image: "https://via.placeholder.com/300x140?text=Python+Games+for+Kids",
    level: "Principiante",
    tags: ["Python", "niños", "juegos"],
    price: "14.99",
    rating: 4.7,
    students: 30,
    videoUrl: "https://www.youtube.com/embed/TwK9vH0wRP4", // Video sobre juegos con Python para niños
  }
];

const teensCourses = [
  {
    title: "Python para principiantes",
    description: "Aprende a programar con Python desde cero.",
    image: "https://via.placeholder.com/300x140?text=Python+for+Teens",
    level: "Principiante",
    tags: ["Python", "teens"],
    price: "14.99",
    rating: 4.8,
    students: 25,
    videoUrl: "https://www.youtube.com/embed/8Mpc9bWm5F0", // Video sobre Python
  },
  {
    title: "JavaScript interactivo",
    description: "Crea páginas web dinámicas con JavaScript.",
    image: "https://via.placeholder.com/300x140?text=JavaScript+for+Teens",
    level: "Intermedio",
    tags: ["JavaScript", "web"],
    price: "19.99",
    rating: 4.7,
    students: 18,
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk", // Video sobre JavaScript
  },
  {
    title: "Desarrollo de videojuegos",
    description: "Diseña y programa tu propio videojuego.",
    image: "https://via.placeholder.com/300x140?text=Game+Dev+for+Teens",
    level: "Avanzado",
    tags: ["videojuegos", "programación"],
    price: "24.99",
    rating: 4.9,
    students: 12,
    videoUrl: "https://www.youtube.com/embed/W8I9aDcdJ40", // Video sobre Desarrollo de videojuegos
  },
  {
    title: "Introducción a C++",
    description: "Aprende a programar en C++ desde cero.",
    image: "https://via.placeholder.com/300x140?text=C%2B%2B+for+Teens",
    level: "Principiante",
    tags: ["C++", "teens"],
    price: "16.99",
    rating: 4.6,
    students: 20,
    videoUrl: "https://www.youtube.com/embed/Rb9w8UpOxl8", // Video de C++ para adolescentes
  },
  {
    title: "Diseño de aplicaciones móviles",
    description: "Desarrolla tus propias aplicaciones para Android e iOS.",
    image: "https://via.placeholder.com/300x140?text=App+Development+for+Teens",
    level: "Intermedio",
    tags: ["Aplicaciones móviles", "Android", "iOS"],
    price: "29.99",
    rating: 4.7,
    students: 15,
    videoUrl: "https://www.youtube.com/embed/gZgYmwVk_F4", // Video sobre desarrollo de aplicaciones móviles
  }
];

const adultsCourses = [
  {
    title: "Fundamentos de desarrollo web",
    description: "Aprende HTML, CSS y JavaScript para construir páginas web.",
    image: "https://via.placeholder.com/300x140?text=Web+Dev+for+Adults",
    level: "Principiante",
    tags: ["HTML", "CSS", "JavaScript"],
    price: "19.99",
    rating: 4.5,
    students: 30,
    videoUrl: "https://www.youtube.com/embed/pQN-pnP7d4U", // Video de desarrollo web
  },
  {
    title: "Introducción a React.js",
    description: "Construye aplicaciones modernas con React.",
    image: "https://via.placeholder.com/300x140?text=React+for+Adults",
    level: "Intermedio",
    tags: ["React", "frontend"],
    price: "24.99",
    rating: 4.6,
    students: 22,
    videoUrl: "https://www.youtube.com/embed/JY3RAIbsXjQ", // Video de React.js
  },
  {
    title: "Bases de datos con SQL",
    description: "Administra datos con SQL desde cero.",
    image: "https://via.placeholder.com/300x140?text=SQL+for+Adults",
    level: "Intermedio",
    tags: ["SQL", "databases"],
    price: "21.99",
    rating: 4.7,
    students: 20,
    videoUrl: "https://www.youtube.com/embed/9Pzj7Aj25lw", // Video sobre SQL
  },
  {
    title: "Desarrollo de aplicaciones con Node.js",
    description: "Aprende a desarrollar aplicaciones backend con Node.js.",
    image: "https://via.placeholder.com/300x140?text=Node.js+for+Adults",
    level: "Intermedio",
    tags: ["Node.js", "Backend", "JavaScript"],
    price: "34.99",
    rating: 4.8,
    students: 18,
    videoUrl: "https://www.youtube.com/embed/fBNz5xF6FYI", // Video sobre Node.js
  },
  {
    title: "Java para aplicaciones empresariales",
    description: "Desarrolla aplicaciones empresariales utilizando Java.",
    image: "https://via.placeholder.com/300x140?text=Java+for+Adults",
    level: "Avanzado",
    tags: ["Java", "Enterprise applications"],
    price: "39.99",
    rating: 4.7,
    students: 15,
    videoUrl: "https://www.youtube.com/embed/UmnCZGRN5Hk", // Video sobre Java para aplicaciones empresariales
  }
];

// Configuración de estilos dinámicos
const pageStyles = {
  kids: {
    bgColor: "bg-blue-500",
    titleFont: "font-comics text-white text-3xl",
    paragraphFont: "text-blue-100",
    buttonColor: "bg-green-500",
    buttonText: "¡Explorar!",
  },
  young: {
    bgColor: "bg-pink-900",
    titleFont: "font-arcade text-yellow-300 text-4xl",
    paragraphFont: "text-pink-100",
    buttonColor: "bg-yellow-500",
    buttonText: "¡Aprender ahora!",
  },
  adult: {
    bgColor: "bg-gray-800",
    titleFont: "font-bree text-white text-4xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-purple-600",
    buttonText: "Inscribirse",
  },
  default: {
    bgColor: "bg-gray-900",
    titleFont: "font-sans text-3xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-blue-500",
    buttonText: "Comprar",
  },
};

// Componente principal
export default function Features() {
  const location = useLocation();

  // Detectar la variante desde la URL
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  // Obtener estilos dinámicos según la variante
  const { bgColor, titleFont, paragraphFont, buttonColor, buttonText } =
    pageStyles[variant];

  // Determinar qué cursos mostrar según la variante
  let courses = [];
  if (variant === "kids") courses = kidsCourses;
  else if (variant === "young") courses = teensCourses;
  else if (variant === "adult") courses = adultsCourses;

  return (
    <div className={`min-h-screen ${bgColor}`}>
      {/* Header dinámico */}
      <Header variant={variant} />
      <Hamburguesa/>
      {/* Grid de cursos */}
      <CoursesGrid
        courses={courses}
        bgColor={bgColor}
        titleFont={titleFont}
        paragraphFont={paragraphFont}
        buttonColor={buttonColor}
        buttonText={buttonText}
      />
    </div>
  );
}