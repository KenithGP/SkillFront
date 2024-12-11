import React from "react";
import { useNavigate } from "react-router-dom";
import RouteCard from "../Components/RouteCard";
import { RouteService } from "../services/routes.service";
import { useState, useEffect } from "react";

export default function RoutePage({ variant = "default" }) {
  const navigate = useNavigate();
  const routeService = new RouteService();
  const [routesx, setRoutes] = useState([]);
  // Configuración de estilos por variante
  const variantStyles = {
    default: {
      bgColor: "bg-transparent",
      cardBgColor: "bg-gray-800",
      buttonColor: "bg-blue-500 hover:bg-blue-700 text-white",
      titleSize: "text-3xl",
      descriptionSize: "text-sm",
    },
    kids: {
      bgColor: "bg-transparent",
      cardBgColor: "bg-yellow-100",
      buttonColor: "bg-yellow-500 hover:bg-yellow-700 text-white",
      titleSize: "text-2xl font-comics",
      descriptionSize: "text-base font-comics",
    },
    young: {
      bgColor: "bg-transparent",
      cardBgColor: "bg-black/50",
      buttonColor: "bg-pink-700 hover:bg-pink-500 text-white",
      titleSize: "text-3xl text-yellow-500 text-shadow-neon animate-neonFlicker font-arcade",
      descriptionSize: "text-xs text-green-500 font-arcade",
    },
    adult: {
      bgColor: "bg-transparent",
      cardBgColor: "bg-gray-800",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      titleSize: "text-4xl font-bree",
      descriptionSize: "text-lg font-bree",
    },
  };

  const styles = variantStyles[variant] || variantStyles.default;

  // Datos ficticios de ejemplo
  const routes = [
    {
      title: "Introducción a Backend",
      description: "Aprende a construir servidores con Node.js.",
      icon: "/icons/backend.png",
      courses: 5,
      hours: 12,
      is_active: true,
      created_at: "2023-12-01",
      categories: [
        {
          name: "Fundamentos de Backend",
          courses: [
            {
              title: "Curso Básico de Node.js",
              icon: "/icons/nodejs.png",
              contentHours: 4,
              practiceHours: 8,
            },
            {
              title: "API Rest con Express.js",
              icon: "/icons/express.png",
              contentHours: 5,
              practiceHours: 10,
            },
          ],
        },
        {
          name: "Bases de Datos",
          courses: [
            {
              title: "Introducción a MongoDB",
              icon: "/icons/mongodb.png",
              contentHours: 3,
              practiceHours: 6,
            },
            {
              title: "ORM con Sequelize y MySQL",
              icon: "/icons/sequelize.png",
              contentHours: 4,
              practiceHours: 8,
            },
          ],
        },
      ],
    },
    {
      title: "Frontend con React",
      description: "Domina las bases de React para crear interfaces dinámicas.",
      icon: "/icons/frontend.png",
      courses: 6,
      hours: 15,
      is_active: true,
      created_at: "2023-11-15",
      categories: [
        {
          name: "Fundamentos de Frontend",
          courses: [
            {
              title: "HTML y CSS Avanzado",
              icon: "/icons/html-css.png",
              contentHours: 5,
              practiceHours: 10,
            },
            {
              title: "JavaScript Moderno",
              icon: "/icons/javascript.png",
              contentHours: 6,
              practiceHours: 12,
            },
          ],
        },
        {
          name: "React Avanzado",
          courses: [
            {
              title: "Hooks y Estado Global",
              icon: "/icons/hooks.png",
              contentHours: 4,
              practiceHours: 8,
            },
            {
              title: "Rutas con React Router",
              icon: "/icons/router.png",
              contentHours: 3,
              practiceHours: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Ciencia de Datos",
      description: "Analiza grandes volúmenes de datos con Python y Excel.",
      icon: "/icons/data-science.png",
      courses: 4,
      hours: 10,
      is_active: true,
      created_at: "2023-10-25",
      categories: [
        {
          name: "Fundamentos de Ciencia de Datos",
          courses: [
            {
              title: "Introducción a Python",
              icon: "/icons/python.png",
              contentHours: 4,
              practiceHours: 8,
            },
            {
              title: "Análisis de Datos con Pandas",
              icon: "/icons/pandas.png",
              contentHours: 5,
              practiceHours: 9,
            },
          ],
        },
        {
          name: "Visualización de Datos",
          courses: [
            {
              title: "Creación de Gráficos con Matplotlib",
              icon: "/icons/matplotlib.png",
              contentHours: 3,
              practiceHours: 5,
            },
            {
              title: "Dashboards con Power BI",
              icon: "/icons/powerbi.png",
              contentHours: 4,
              practiceHours: 6,
            },
          ],
        },
      ],
    },
    {
      title: "Desarrollo Móvil",
      description: "Crea aplicaciones móviles con Flutter y React Native.",
      icon: "/icons/mobile-development.png",
      courses: 5,
      hours: 14,
      is_active: true,
      created_at: "2023-09-10",
      categories: [
        {
          name: "Fundamentos de Desarrollo Móvil",
          courses: [
            {
              title: "Introducción a Flutter",
              icon: "/icons/flutter.png",
              contentHours: 6,
              practiceHours: 12,
            },
            {
              title: "React Native Básico",
              icon: "/icons/react-native.png",
              contentHours: 5,
              practiceHours: 10,
            },
          ],
        },
        {
          name: "Interfaces de Usuario",
          courses: [
            {
              title: "Diseño de Interfaces con Figma",
              icon: "/icons/figma.png",
              contentHours: 4,
              practiceHours: 6,
            },
            {
              title: "UX/UI para Aplicaciones Móviles",
              icon: "/icons/ux-ui.png",
              contentHours: 3,
              practiceHours: 7,
            },
          ],
        },
      ],
    },
    {
      title: "Inteligencia Artificial",
      description: "Aprende los fundamentos de Machine Learning y Deep Learning.",
      icon: "/icons/ai.png",
      courses: 7,
      hours: 20,
      is_active: true,
      created_at: "2023-08-05",
      categories: [
        {
          name: "Machine Learning",
          courses: [
            {
              title: "Regresión y Clasificación",
              icon: "/icons/ml.png",
              contentHours: 6,
              practiceHours: 10,
            },
            {
              title: "Redes Neuronales Básicas",
              icon: "/icons/neural-networks.png",
              contentHours: 5,
              practiceHours: 9,
            },
          ],
        },
        {
          name: "Deep Learning",
          courses: [
            {
              title: "Introducción a TensorFlow",
              icon: "/icons/tensorflow.png",
              contentHours: 4,
              practiceHours: 8,
            },
            {
              title: "Modelos Avanzados con Keras",
              icon: "/icons/keras.png",
              contentHours: 5,
              practiceHours: 10,
            },
          ],
        },
      ],
    },
  ];

  const loadRoutes = async () => {
    const response = await routeService.getAllRoutes();
    setRoutes(response);
    
  }
  
  useEffect(() => {
    loadRoutes();
  }, []);

  // Filtrar rutas activas
  const activeRoutes = routes.filter((route) => route.is_active);


  return (
    <div className={`min-h-screen p-6 ${styles.bgColor}`}>
      <h1 className={`text-center mb-8 ${styles.titleSize}`}>
        Explora Nuestras Rutas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routesx.map((route, index) => (
      <RouteCard
        key={route.title}
        {...route}
        bgColor={styles.cardBgColor}
        textColor={`${styles.descriptionSize}`}
        textColorSubTitle={`${styles.subTitleSize}`}
        buttonColor={styles.buttonColor}
        onClick={() =>
        navigate(`/ruta/${route._id}?variant=${variant}`, {
          state: { route },
        })
      }
          />
        ))}
      </div>
    </div>
  );
}
