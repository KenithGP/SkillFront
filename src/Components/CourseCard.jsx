import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

// Definir los estilos para cada tipo de página
const cardStyles = {
  kids: {
    bgColor: "bg-[#800080]/70",
    titleFont: "font-bubblegum text-yellow-500 text-xl",
    paragraphFont: "text-blue-100 font-bubblegum",
    buttonColor: "bg-purple-400 hover:bg-purple-500 text-black  font-bubblegum",
    buttonCarrito:"bg-yellow-500 hover:bg-yellow-400 text-black font-bubblegum",
    buttonText: "¡Explorar!",
  },
  young: {
    bgColor: "bg-pink-800",
    titleFont: "font-arcade text-yellow-300 text-4xl",
    paragraphFont: "text-white font-arcade text-xs mb-3",
    buttonColor: "bg-yellow-500 font-arcade text-xs",
    buttonCarrito:"bg-blue-600 hover:bg-blue-500 text-white font-arcade text-xs",
    buttonText: "¡Aprender ahora!",
  },
  adult: {
    bgColor: "bg-black/40",
    titleFont: "font-bree text-yello-500 text-4xl",
    paragraphFont: "text-gray-300 font-bree mb-2",
    buttonColor: "bg-yellow-500 hover:bg-yellow-400 font-bree text-black ",
    buttonCarrito:"bg-green-700 hover:bg-green-500 text-white font-bree",
    font:"font-bree",
    buttonText: "Inscribirse",
  },
  default: {
    bgColor: "bg-red-950/60",
    titleFont: "font-sans text-white text-3xl",
    paragraphFont: "text-white",
    buttonColor: "bg-yellow-500",
    buttonText: "Comprar",
  },
};

export default function CourseCard ({
  id,
  title,
  description,
  image,
  level,
  students,
  price,
  rating,
  tags,
  variant = "default",
  buttonColor,
}) {
  const navigate = useNavigate();
  const styles = cardStyles[variant] || cardStyles.default;

  const [addedToCart, setAddedToCart] = useState(false);

  const handleShowDetails = () => {
    navigate(`/course/${id}?variant=${variant}`);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    // Aquí puedes agregar lógica para actualizar el carrito global o local
    alert(`${title} añadido al carrito!`);
  };

  return (
    <div
      className={`w-82 h-[30rem] mb-6 mx-auto text-white shadow-lg rounded-lg overflow-hidden ${styles.bgColor}`}
    >
      {/* Imagen */}
      <img className="w-full h-40 object-cover" src={image} alt={title} />

      {/* Contenido */}
      <div className="p-4">
        <h2 className={`text-lg font-semibold ${styles.titleFont}`}>{title}</h2>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>Nivel: {level}</p>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>
          Estudiantes: {students}
        </p>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>Precio: ${price}</p>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>
          Calificación: {rating} ⭐
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            className={`${buttonColor || styles.buttonColor} px-4 py-2 rounded hover:opacity-90 transition duration-300`}
            onClick={handleShowDetails}
          >
            Ver Detalles
          </button>
          <button
            className={`${styles.buttonCarrito} px-4 py-2 rounded flex items-center justify-center gap-2`}
            onClick={handleAddToCart}
          >
            <FaShoppingCart />
            {addedToCart ? "Añadido" : "Añadir al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
}
