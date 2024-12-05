import { useState } from "react";
// Configuración de estilos para cada variante
const pageStyles = {
  default: {

    fontClass: "font-sans ",
    textSize:" text-sm font-semibold ",
    titleSize:"text-3xl font-bold",
  },
  young: {
    fontClass: "font-arcade",
    textSize:" text-xs font-normal ",
    titleSize:" text-md font-bold",
  },
  kids: {

    fontClass: "font-sans",
  },
  adult: {
    fontClass: "font-sans",
  },
};

export default function Preguntas  ({ variant = "default" }) {

  // Obtener estilos dinámicos según la variante
  const {  textSize,titleSize, fontClass } = pageStyles[variant];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo puedo registrarme en SkillConnect?",
      answer: "Puedes registrarte de forma gratuita ingresando tu correo electrónico y una contraseña en nuestra página de registro. También puedes vincular tu cuenta de Google para mayor comodidad.",
    },
    {
      question: "¿Cómo puedo acceder a los cursos que compré?",
      answer: "Una vez que compres un curso, estará disponible en la sección 'Mis Cursos' dentro de tu perfil. Podrás acceder al contenido en cualquier momento desde tu cuenta.",
    },
    {
      question: "¿Qué beneficios obtengo al completar un curso?",
      answer: "Al completar un curso, recibirás un certificado avalado por SkillConnect",
    },
    {
      question: "¿Ofrecen becas en los cursos?",
      answer: "Sí, contamos con becas parciales.También ofrecemos planes accesibles para estudiantes. Consulta nuestra sección de 'Becas' para más información.",
    },
    {
      question: "¿Cómo puedo hacer seguimiento de mi progreso?",
      answer: "Tu progreso se actualizará automáticamente y estará visible en tu perfil. También recibirás notificaciones de hitos importantes como lecciones completadas y logros obtenidos.",
    },
  ];

  return (
  
    <div className={`min-h-screen text-yellow-300 p-8 flex flex-col items-center ${fontClass}`}>
  {/* TÍTULO */}
  <h1 className="text-4xl font-bold mb-10 relative">
    Preguntas frecuentes
  </h1>

  {/* Contenedor principal con dos columnas */}
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4 sm:px-6 ${titleSize}`}>
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
          <p
            className={`mt-2 text-sm text-gray-700 transition-max-height duration-300 ${
              activeIndex === index ? 'max-h-40' : 'max-h-0 overflow-hidden'
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>

    {/* Columna del Formulario */}
    <div className={`text-white mt-10 md:mt-0 ${textSize}`}>
      <h2 className="text-2xl font-medium text-rose-200 mb-4 text-center">¿Tienes alguna otra pregunta?</h2>
      <p className="text-sm text-gray-300 mb-6 text-center">Nos encantaría resolver tus dudas.</p>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-normal mb-2">Nombre completo</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800 transition duration-300 ease-in-out hover:border-red-400 focus:ring-2 focus:ring-red-500"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-normal mb-2">Correo electrónico</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800 transition duration-300 ease-in-out hover:border-red-400 focus:ring-2 focus:ring-red-500"
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
            className="bg-red-600 text-white py-2 px-5 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:outline-none transition duration-300 ease-in-out"
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


