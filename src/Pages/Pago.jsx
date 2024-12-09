import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Components/Header";
import ResumenPedido from "../Components/ResumenPedido";
import { kidsCourses, teensCourses, adultsCourses, defaultCourses } from "./Features"; // Importar los cursos

export default function Pago() {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get("variant") || "default";

  // Configuración de estilos, títulos y cursos según el `variant`
  const variantStyles = {
    kids: {
      bgClass: "bg-gradient-to-b from-[#86DCFC] to-[#b3e5fc]",
      title: "Resumen de tu pedido para niños",
      courses: kidsCourses,
    },
    young: {
      bgClass: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
      title: "Resumen de tu pedido para jóvenes",
      courses: teensCourses,
    },
    adult: {
      bgClass: "bg-gradient-to-r to-[#0b583b]/100 from-[black] max-screen",
      title: "Resumen de tu pedido para adultos",
      courses: adultsCourses,
    },
    default: {
      bgClass: "bg-gradient-to-b from-[#000000]/100  to-[#EA6558]/100",
      title: "Resumen de tu pedido",
      courses: defaultCourses,
    },
  };

  // Obtener los estilos actuales según el `variant`
  const currentStyle = variantStyles[variant] || variantStyles.default;

  // Estado para almacenar los cursos seleccionados y el total
  const [cursosSeleccionados, setCursosSeleccionados] = useState([]);
  const [total, setTotal] = useState(0);

  // Efecto para calcular cursos seleccionados y total
  useEffect(() => {
    // Filtrar cursos seleccionados
    const cursosSeleccionadosTemp = currentStyle.courses.filter(curso => curso.seleccionado);

    // Calcular el total de los cursos seleccionados
    const totalTemp = cursosSeleccionadosTemp.reduce((total, curso) => total + curso.precio, 0);

    // Actualizar el estado
    setCursosSeleccionados(cursosSeleccionadosTemp);
    setTotal(totalTemp);
  }, [currentStyle.courses]); // Recalcular al cambiar los cursos del estilo actual

  // Renderizado del componente
  return (
    <div className={`min-h-screen text-white ${currentStyle.bgClass}`}>
      <Header variant={variant}/>
      <div className="p-5">
        <h1 className="text-center text-xl mb-5">{currentStyle.title}</h1>
        <ResumenPedido variant={variant} cursos={cursosSeleccionados} total={total} />
      </div>
    </div>
  );
}
