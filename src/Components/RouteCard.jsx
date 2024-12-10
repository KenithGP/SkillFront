import React from "react";

const RouteCard = ({
  title,
  description,
  icon,
  courses,
  hours,
  bgColor,
  textColor,
  buttonColor,
  onClick, // Función para manejar la navegación
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor}`}>
      {/* Icono */}
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      {/* Título */}
      <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
      {/* Descripción */}
      <p className={`text-sm mb-4 ${textColor}`}>{description}</p>
      {/* Información de cursos y horas */}
      <div className={`flex justify-between items-center text-sm ${textColor}`}>
        <span>{courses} cursos</span>
        <span>{hours} horas</span>
      </div>
      {/* Botón */}
      <button
        className={`w-full mt-4 py-2 rounded-lg transition ${buttonColor}`}
        onClick={onClick} // Llamada a la función para manejar la navegación
      >
        Conocer Ruta
      </button>
    </div>
  );
};

export default RouteCard;
