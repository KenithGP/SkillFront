import { useState } from 'react';
import Header from '../Components/Header'

export default function Quizz() {
    // Estados
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
  
   // Arrays de preguntas relacionadas con fundamentos de programación
   const questionsArray = [
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
     {
       question: "¿Qué valor devuelve 'true && false' en JavaScript?",
       options: ["true", "false", "undefined"],
       correct: 1,
     },
     {
       question: "¿Cómo defines una variable en JavaScript?",
       options: ["var", "let", "const", "Todas las anteriores"],
       correct: 3,
     },
     {
       question: "¿Qué estructura se utiliza para tomar decisiones en programación?",
       options: ["if/else", "while", "for", "return"],
       correct: 0,
     },
     {
       question: "¿Qué operador se utiliza para la comparación estricta en JavaScript?",
       options: ["==", "===", "!=", "="],
       correct: 1,
     },
     {
       question: "¿Qué tipo de dato es 'true' o 'false'?",
       options: ["String", "Boolean", "Number", "Array"],
       correct: 1,
     },
     {
       question: "¿Qué palabra clave se utiliza para declarar una función en JavaScript?",
       options: ["func", "function", "declare", "method"],
       correct: 1,
     },
     {
       question: "¿Cuál de las siguientes estructuras se usa para iterar un número fijo de veces?",
       options: ["for", "while", "do...while", "if"],
       correct: 0,
     },
     {
       question: "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
       options: [".push()", ".add()", ".append()", ".concat()"],
       correct: 0,
     },
   ];
 
 
 
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
    <>
    <div className="bg-gradient-to-b from-[#000000] to-[#EA6558] min-h-screen text-white">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
        {/* Contenedor del Quiz */}
        <div className="w-full max-w-xl bg-white/80 rounded-lg shadow-lg p-8 space-y-6">
          {/* Quiz Title */}
          <h2 className="text-3xl font-bold text-center text-green-700">
            Quiz para Optar a la Beca de Programación
          </h2>
  
          {/* Current Question */}
          <h3 className="text-xl font-semibold text-center text-gray-800">
            {currentQuestion.question}
          </h3>
  
          {/* Quiz Options (Una Columna) */}
          <div className="flex flex-col space-y-4 mt-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`py-3 px-4 rounded-lg text-sm font-medium bg-red-800 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition duration-300`}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
  
          {/* Feedback Section */}
          {showFeedback && (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg text-center">
              <p
                className={`text-lg font-bold ${
                  isCorrect ? "text-green-400" : "text-red-400"
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
  
          {/* Score */}
          <p className="text-center text-sm font-medium text-gray-500">
            Puntaje: <span className="text-green-400">{score}</span>
          </p>
        </div>
      </div>
    </div>
  
    {/* Modal */}
    {isModalVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg p-8 max-w-sm text-center shadow-lg">
          <h3 className="text-xl font-bold text-green-400">¡Quiz finalizado!</h3>
          <p className="mt-4 text-gray-300">
            Tu puntaje es:{" "}
            <span className="font-bold text-green-400">
              {score} de {questionsArray.length}
            </span>
            .
          </p>
          <p className="mt-2 text-sm text-gray-300">
            {score >= 7
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
  </>
  
  
 );
 };

