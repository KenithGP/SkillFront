import React from 'react'
import { useNavigate } from "react-router-dom";
import RouteCard from "../Components/RouteCard";
export default function RoutePage ({ variant = "default" }) {
    const navigate = useNavigate();

    // Configuración de estilos por variante
    const variantStyles = {
      default: {
        bgColor: "bg-transparent",
        cardBgColor: "bg-gray-800",
        textColor: "text-white",
        buttonColor: "bg-blue-500 hover:bg-blue-700 text-white",
      },
      kids: {
        bgColor: "bg-transparent",
        cardBgColor: "bg-white",
        textColor: "text-yellow-800",
        buttonColor: "bg-yellow-500 hover:bg-yellow-700 text-white",
      },
      young: {
        bgColor: "bg- tansparent",
        cardBgColor: "bg-pink-600",
        textColor: "text-white",
        buttonColor: "bg-pink-500 hover:bg-pink-700 text-white",
      },
      adult: {
        bgColor: "bg-transaprent",
        cardBgColor: "bg-gray-800",
        textColor: "text-white",
        buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      },
    };
  
    const styles = variantStyles[variant] || variantStyles.default;

 const routes = [
  {
    title: "Introducción a Backend",
    description: "Aprende a construir servidores con Node.js.",
    icon: "/icons/backend.png",
    courses: 5,
    hours: 12,
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
    description:
      "Analiza grandes volúmenes de datos con Python y Excel.",
    icon: "/icons/data-science.png",
    courses: 4,
    hours: 10,
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
];

    
  
    return (
      <div className={`min-h-screen p-6 ${styles.bgColor}`}>
        <h1 className={`text-center text-3xl font-bold mb-8 ${styles.textColor}`}>
          Explora Nuestras Rutas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <RouteCard
              key={index}
              {...route}
              bgColor={styles.cardBgColor}
              textColor={styles.textColor}
              buttonColor={styles.buttonColor}
              onClick={() =>
                navigate(`/ruta/${route.id}?variant=${route.variant}`, {
                  state: { route },
                })
              }
              
            />
          ))}
        </div>
      </div>
    );
  };
  