import React, { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

// Estilos para personalizar el fondo según el tipo de página
const cardStyles = {
  default: {
    bgColor: "bg-gray-900",
    
  },
  rutaTittle: {
    bgColor: "bg-blue-500",
  },
  // Agregar más estilos según sea necesario
};

const CourseCard = ({
  id,  // Recibir el id del curso como prop
  title,
  description,
  image,
  level,
  tags,
  price,
  rating,
  students,
  videoUrl,
  pageType = "default",
}) => {
  const [clicked, setClicked] = useState(false);

  // Manejar clic en el botón de añadir al carrito
  const handleButtonClick = () => {
    const courseData = {
      id,  // Usar el id único del curso
      title,
      description,
      image,
      level,
      tags,
      price,
      rating,
      students,
      videoUrl,
    };

    // Cargar el carrito desde localStorage
    const storedCourses = JSON.parse(localStorage.getItem("cart")) || [];

    // Comprobar si el curso ya está en el carrito por su id
    const courseExists = storedCourses.some((course) => course.id === id);

    if (!courseExists) {
      // Si no existe, agregar al carrito
      const updatedCart = [...storedCourses, courseData];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setClicked(true); // Cambiar el estado a "añadido al carrito"
    } else {
      // Si ya existe, mostrar un mensaje o simplemente no hacer nada
      alert("Este curso ya está en tu carrito.");
    }
  };

  return (
    <div
      className={`w-72 h-[28rem] mb-6 mx-auto bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden ${
        cardStyles[pageType]?.bgColor || cardStyles.default.bgColor
      }`}
    >
      <img className="w-full h-40 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mt-1">Nivel: {level} • {students} estudiantes</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span>{rating}</span>
          </div>
          <span className="text-lg font-bold">${price}</span>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:opacity-90 transition duration-300 w-full"
          onClick={handleButtonClick}
        >
          {clicked ? "Añadido al carrito" : "Añadir al carrito"}
        </button>
        <div className="mt-4 text-center">
          <Link to={`/resumen`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
              Ver carrito
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
