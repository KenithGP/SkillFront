import React from "react";
import { useLocation } from "react-router-dom";

const RouteDetails = () => {
  const location = useLocation();
  const route = location.state?.route; // Información pasada al navegar

  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>No se encontró información sobre esta ruta.</p>
      </div>
    );
  }
  console.log("Datos recibidos en RouteDetails:", route);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="max-w-4xl mx-auto bg-gray-100 text-black shadow-lg rounded-lg p-8">
        {/* Información general de la ruta */}
        <p className="uppercase tracking-wider text-gray-600">Ruta</p>
        <h1 className="text-3xl font-bold mb-4">{route.title}</h1>
        <p className="text-lg mb-6">{route.description}</p>
        <button className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-700 text-white">
          Empieza ya
        </button>

        {/* Categorías y Cursos */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Cursos de la Ruta</h2>
          {route.categories && route.categories.length > 0 ? (
            route.categories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <li
                      key={courseIndex}
                      className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow"
                    >
                      <div className="flex items-center">
                        <img
                          src={course.icon}
                          alt={course.title}
                          className="w-10 h-10 mr-4"
                        />
                        <span className="font-semibold">{course.title}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {course.contentHours}h contenido / {course.practiceHours}h práctica
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No hay categorías disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;
