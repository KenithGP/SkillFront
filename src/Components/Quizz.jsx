import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";

// Configuración de estilos para cada variante
const pageStyles = {
  default: {
    bgClass: "bg-gradient-to-b from-[#000000] to-[#EA6558]",
    titleClass: "text-green-700",
    buttonClass: "bg-red-800 hover:bg-green-600",
    feedbackCorrect: "text-green-400",
    feedbackIncorrect: "text-red-500",
    modalBg: "bg-gray-800",
    modalText: "text-green-400",
    fontClass: "font-sans",
  },
  young: {
    bgClass: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
    titleClass: "text-[#ff0070]",
    buttonClass: "bg-blue-600 hover:bg-pink-400",
    feedbackCorrect: "text-blue-400",
    feedbackIncorrect: "text-pink-500",
    modalBg: "bg-black",
    modalText: "text-yellow-500",
    fontClass: "font-arcade",
  },
  kids: {
    bgClass: "bg-gradient-to-b from-[#f0fff4] to-[#b3e5fc]",
    titleClass: "text-blue-900",
    buttonClass: "bg-yellow-500 hover:bg-yellow-300",
    feedbackCorrect: "text-yellow-400",
    feedbackIncorrect: "text-red-500",
    modalBg: "bg-white",
    modalText: "text-blue-600",
    fontClass: "font-comics",
  },
  adult: {
    bgClass: "bg-gradient-to-b from-[#2c2c2c] to-[#6e6e6e]",
    titleClass: "text-gray-300",
    buttonClass: "bg-gray-700 hover:bg-gray-500",
    feedbackCorrect: "text-green-400",
    feedbackIncorrect: "text-red-400",
    modalBg: "bg-gray-700",
    modalText: "text-gray-100",
    fontClass: "font-sans",
  },
};

// Preguntas dinámicas según la variante
const questionsByVariant = {
  default: [
    {
      question: "¿Qué significa la sigla 'HTML'?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "HyperText Machine Language",
      ],
      correct: 0,
    },
    {
      question: "¿Qué es un bucle en programación?",
      options: [
        "Una estructura que permite repetir un bloque de código",
        "Una función que siempre retorna un valor",
        "Un tipo de variable especial",
      ],
      correct: 0,
    },
  ],
  kids: [
    {
      question: "¿Qué es un algoritmo?",
      options: [
        "Un conjunto de pasos para resolver un problema",
        "Un tipo de robot",
        "Una fórmula matemática",
      ],
      correct: 0,
    },
    {
      question: "¿Qué significa 'HTML'?",
      options: [
        "El idioma de las páginas web",
        "El título de una historia",
        "Una forma de dibujar imágenes",
      ],
      correct: 0,
    },
  ],
  young: [
    {
      question: "¿Qué lenguaje se usa para hacer páginas web dinámicas?",
      options: ["Python", "JavaScript", "C++"],
      correct: 1,
    },
    {
      question: "¿Qué significa CSS?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      correct: 0,
    },
  ],
  adult: [
    {
      question: "¿Qué es una base de datos?",
      options: [
        "Un lugar donde se guardan datos organizados",
        "Un tipo de página web",
        "Un programa para hacer cálculos",
      ],
      correct: 0,
    },
    {
      question: "¿Qué es un lenguaje de programación?",
      options: [
        "Un sistema operativo",
        "Un conjunto de reglas para escribir software",
        "Un servidor web",
      ],
      correct: 1,
    },
  ],
};

export default function Quizz() {
  const location = useLocation();

  // Detectar la variante según la URL
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  // Obtener estilos dinámicos según la variante
  const styles = pageStyles[variant];

  // Obtener preguntas según la variante
  const questionsArray = questionsByVariant[variant] || questionsByVariant.default;

  // Estados
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Manejar la selección de una respuesta
  const handleAnswer = (index) => {
    const isAnswerCorrect = index === questionsArray[currentQuestionIndex].correct;
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  };

  // Pasar a la siguiente pregunta
  const handleNextQuestion = () => {
    setShowFeedback(false);

    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsModalVisible(true); // Muestra el modal al finalizar
    }
  };

  const closeModal = () => {
    setIsModalVisible(false); // Cierra el modal
    setCurrentQuestionIndex(0); // Reinicia el quiz
    setScore(0); // Reinicia el puntaje
  };

  // Pregunta actual
  const currentQuestion = questionsArray[currentQuestionIndex];

  return (
    <div className={`${styles.bgClass} ${styles.fontClass} min-h-screen text-white`}>
      <Header variant={variant} />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
        <div className="w-full max-w-xl bg-white/80 rounded-lg shadow-lg p-8 space-y-6">
          <h2 className={`text-3xl font-bold text-center ${styles.titleClass}`}>
            Quiz para Optar a la Beca de Programación
          </h2>

          <h3 className="text-xl font-semibold text-center text-gray-800">
            {currentQuestion.question}
          </h3>

          <div className="flex flex-col space-y-4 mt-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`py-3 px-4 rounded-lg text-sm font-medium ${styles.buttonClass} disabled:bg-gray-600 disabled:cursor-not-allowed transition duration-300`}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg text-center">
              <p
                className={`text-lg font-bold ${
                  isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect
                }`}
              >
                {isCorrect
                  ? "¡Correcto! Excelente trabajo."
                  : "Incorrecto. Intenta la siguiente pregunta."}
              </p>
              <button
                onClick={handleNextQuestion}
                className="mt-4 py-2 px-6 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold transition duration-300"
              >
                {currentQuestionIndex < questionsArray.length - 1
                  ? "Siguiente"
                  : "Finalizar"}
              </button>
            </div>
          )}

          <p className="text-center text-sm font-medium text-gray-500">
            Puntaje: <span className="text-green-400">{score}</span>
          </p>
        </div>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className={`rounded-lg p-8 max-w-sm text-center shadow-lg ${styles.modalBg}`}>
            <h3 className={`text-xl font-bold ${styles.modalText}`}>
              ¡Quiz finalizado!
            </h3>
            <p className="mt-4 text-gray-300">
              Tu puntaje es:{" "}
              <span className={`font-bold ${styles.modalText}`}>
                {score} de {questionsArray.length}
              </span>
              .
            </p>
            <p className="mt-2 text-sm text-gray-300">
              {score >= 8
                ? "¡Felicidades! Eres elegible para optar a la beca."
                : "¡Sigue practicando y vuelve a intentarlo!"}
            </p>
            <button
              className="mt-6 py-2 px-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition duration-300"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
