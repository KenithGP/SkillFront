import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // Asegúrate de importar el icono de la X

const ResumenPedidos = ({ variant = "default" }) => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar los cursos almacenados al cargar el componente
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCourses);
  }, []);

  // Función para calcular el total
  const getTotal = () => {
    const total = cartItems.reduce((total, course) => {
      const price = parseFloat(course.price); // Convertir a número
      if (!isNaN(price)) {
        return total + price; // Solo sumamos si price es un número válido
      }
      return total;
    }, 0);
    
    return total.toFixed(2); // Retorna el total con dos decimales
  };

  // Función para eliminar un curso del carrito
  const removeCourse = (courseId) => {
    const updatedCart = cartItems.filter((course) => course.id !== courseId); 
    setCartItems(updatedCart); // Actualizamos el estado del carrito
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Actualizamos en localStorage
  };

  // Estilos según la variante
  const variantStyles = {
    default: {
      cardBgColor: "bg-[#ffe4e6]/70",
      textColor: "text-black ",
      buttonColor: "bg-blue-500 hover:bg-blue-700",
      titleSize: "text-3xl font-bold",
      priceColor: "text-lg",
    },
    kids: {
      cardBgColor: "bg-yellow-100",
      textColor: "text-gray-800",
      buttonColor: "bg-yellow-500 hover:bg-yellow-700",
      titleSize: "text-2xl font-comics",
      priceColor: "text-lg font-comics",
    },
    young: {
      cardBgColor: "bg-black/50",
      textColor: "text-white",
      buttonColor: "bg-pink-700 hover:bg-pink-500",
      titleSize: "text-2xl text-yellow-500 font-arcade",
      priceColor: "text-sm text-green-500 font-arcade",
    },
    adult: {
      cardBgColor: "bg-gray-800",
      textColor: "text-white",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      titleSize: "text-2xl font-bree",
      priceColor: "text-lg font-bree",
    },
  };

  const styles = variantStyles[variant] || variantStyles.default;

  return (
    <div className={`flex w-full p-6 relative ${styles.bgColor}`}>
      {/* Contenedor principal con fondo difuso y blanco con opacidad */}
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-lg z-[-1]"></div>

      {/* Contenedor de los cursos */}
      <div className={`w-4/5 ${styles.cardBgColor} ${styles.textColor} p-6 rounded-lg shadow-lg z-10`}>
        <h3 className={`${styles.titleSize} mb-4`}>Resumen de tu pedido</h3>
        {cartItems.length === 0 ? (
          <p>No hay cursos en el carrito.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mt-4 items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="text-lg">{item.title}</span>
                </div>
                <div className="flex items-center">
                  <span className={`text-lg ${styles.priceColor}`}>${parseFloat(item.price).toFixed(2)}</span>
                  <button
                    onClick={() => removeCourse(item.id)} 
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))}
            <hr className="my-4" />
          </div>
        )}
      </div>

      {/* Contenedor del precio y el botón */}
      <div className={`w-1/5 ${styles.cardBgColor} ${styles.textColor} p-6 ml-6 rounded-lg shadow-lg z-10`}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between text-lg mb-4">
            <span>Total:</span>
            <span className="font-bold">${getTotal()}</span>
          </div>
          <button className={`${styles.buttonColor} text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700 transition duration-300`}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumenPedidos;
