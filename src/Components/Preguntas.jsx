import { useState } from "react";

const Preguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo puedo registrarme en la plataforma?",
      answer: "Puedes registrarte creando una cuenta con tu correo electrónico y contraseña en la página de registro.",
    },
    {
      question: "¿Cómo puedo ver mi progreso en un curso?",
      answer: "El progreso se muestra en la sección 'Mi cuenta', donde puedes ver las lecciones completadas.",
    },
    {
      question: "¿Es necesario pagar para acceder a los cursos?",
      answer: "Algunos cursos son gratuitos y otros son de pago. Los detalles están disponibles en la descripción del curso.",
    },
    {
      question: "¿Hay pruebas o evaluaciones en los cursos?",
      answer: "Sí, algunos cursos incluyen pruebas y ejercicios para evaluar tu progreso.",
    },
    {
      question: "¿Hay clases en vivo o solo material grabado?",
      answer: "Ofrecemos ambos: material grabado y clases en vivo según el curso.",
    },
  ];

  return (
  
    <div className="min-h-screen text-white p-8 flex flex-col items-center">
    {/* TÍTULO */}
    <h1 className="text-3xl mb-8">Preguntas frecuentes</h1>
  
    {/* Contenedor principal con dos columnas */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
      {/* Columna de cuadro de Preguntas */}
      <div className="space-y-7">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-100 text-gray-800 rounded-md shadow-md p-4 transition-transform transform duration-300 ease-in-out hover:scale-105"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <p className="text-lg font-medium">{faq.question}</p>
              <button
                className="text-xl font-bold text-gray-600 transition-transform transform duration-300 ease-in-out hover:scale-110"
                aria-label="Toggle Answer"
              >
                {activeIndex === index ? (
                  <span className="text-gray-700">-</span>
                ) : (
                  <span className="text-gray-700">+</span>
                )}
              </button>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
  
      {/* Columna del Formulario */}
      <div className=" text-white">
        <h2 className="text-2xl mb-4 text-center">¿Tienes alguna otra pregunta?</h2>
        <p className="text-sm text-gray-200 mb-6 text-center">Nos encantaría resolver tus dudas.</p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-normal mb-2">Nombre completo</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-normal mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div>
            <label className="block text-sm font-normal mb-2">Mensaje</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800 transition duration-300 ease-in-out focus:border-red-500 focus:ring-1 focus:ring-red-500"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-5 rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  
  
  );
};

export default Preguntas;
