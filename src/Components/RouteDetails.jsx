import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const RouteDetails = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(); // Importa y usa correctamente useSearchParams
  const variant = searchParams.get("variant") || "default";

  const route = location.state?.route || {
    title: "Ruta no encontrada",
    description: "No se encontraron detalles para esta ruta.",
    categories: [], // Por defecto, sin categorías
  };
  // Estilos dinámicos según la variante
  const variantStyles = {
    default: {
      bgColor: "bg-gray-900",
      textColor: "text-white",
      buttonColor: "bg-blue-500 hover:bg-blue-700 text-white",
      titleFont: "font-sans text-3xl font-bold",
    },
    kids: {
      bgColor: "bg-yellow-200",
      textColor: "text-yellow-800",
      buttonColor: "bg-yellow-500 hover:bg-yellow-700 text-white",
      titleFont: "font-comics text-3xl font-bold",
    },
    young: {
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
      buttonColor: "bg-pink-500 hover:bg-pink-700 text-white",
      titleFont: "font-arcade text-3xl",
    },
    adult: {
      bgColor: "bg-gray-800",
      textColor: "text-white",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      titleFont: "font-bree text-3xl font-bold",
    },
  };

  const styles = variantStyles[variant] || variantStyles.default;

  return (
    <div className={`min-h-screen ${styles.bgColor} p-6`}>
      <div className="max-w-4xl mx-auto bg-white/80 shadow-lg rounded-lg p-6">
        <p className={`uppercase tracking-wider ${styles.textColor}`}>Ruta</p>
        <h1 className={`${styles.titleFont} mb-4`}>{route.title}</h1>
        <p className={`text-lg ${styles.textColor} mb-6`}>
          {route.description}
        </p>
        <button className={`px-6 py-3 rounded-lg ${styles.buttonColor}`}>
          Empieza ya
        </button>

        {/* Aquí puedes renderizar más detalles como cursos, categorías, etc. */}
        <div className="mt-8">
          <h2 className={`text-2xl ${styles.titleFont} mb-4`}>
            Cursos de la Ruta
          </h2>
          {route.categories && route.categories.length > 0 ? (
            route.categories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className={`text-xl font-bold ${styles.textColor} mb-2`}>
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.courses.map((course, courseIndex) => (
                    <li
                      key={courseIndex}
                      className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow"
                    >
                      <span className="font-semibold">{course.title}</span>
                      <span className="text-sm text-gray-500">
                        {course.contentHours}h contenido /{" "}
                        {course.practiceHours}h práctica
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className={`text-lg ${styles.textColor}`}>
              No hay categorías disponibles.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;
