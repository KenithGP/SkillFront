import React from "react";
import { useLocation } from "react-router-dom";
import { RouteService } from "../services/routes.service";
import { useState, useEffect } from "react";

const RouteDetails = () => {
  const routeService = new RouteService();
  const location = useLocation();
  const route = location.state?.route;
  const [routed, setRoute] = useState({});

  const loadRouteInfo = async () => {
    try {
      const routeId = location.pathname.split("/").pop();
      const route = await routeService.getRouteById(routeId);
      setRoute(route);
      console.log("Datos de la ruta cargados:", route);
    } catch (error) {
      console.error("Error al cargar la información de la ruta:", error);
    }
  }

  const redirectSubject = (subject) => {
    console.log("Redirigiendo a la categoría:", subject);
  };

  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>No se encontró información sobre esta ruta.</p>
      </div>
    );
  }
  console.log("Datos recibidos en RouteDetails:", route);

  useEffect(() => {
    loadRouteInfo();    
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="max-w-4xl mx-auto bg-gray-100 text-black shadow-lg rounded-lg p-8">
        {/* Información general de la ruta */}
        <p className="uppercase tracking-wider text-gray-600">Ruta</p>
        <h1 className="text-3xl font-bold mb-4">{routed.title}</h1>
        <p className="text-lg mb-6">{routed.description}</p>
        <button className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-700 text-white">
          Empieza ya
        </button>

        {/* Categorías y Cursos */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Cursos de la Ruta</h2>
          {routed.subjects && routed.subjects.length > 0 ? (
            routed.subjects.map((category) => (
              <div className="mb-6">
                <button className="text-xl font-semibold text-gray-800 mb-2"         onClick={() => redirectSubject(category._id)}               >
                  {category.title}
                </button>
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
