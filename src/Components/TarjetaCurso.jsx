import Css from "../assets/Images/Css.svg";
import Html from "../assets/Images/Html.svg";
import Javascript from "../assets/Images/Javascript.svg";
import Php from "../assets/Images/Php.svg";
import react from "../assets/Images/react.svg";

const courses = [
  {
    title: "CSS",
    description: "Lenguaje que define estilos y diseño visual en páginas web.",
    image: Css,
    bgGradient: "from-sky-900 to-blue-1000",
  },
  {
    title: "JavaScript",
    description: "Lenguaje de programación que añade interactividad a sitios web.",
    image: Javascript,
    bgGradient: "from-yellow-500 to-yellow-1000",
  },
  {
    title: "HTML",
    description: "Lenguaje base para estructurar el contenido de páginas web.",
    image: Html,
    bgGradient: "from-orange-700 to-orange-1000",
  },
  {
    title: "PHP",
    description: "Lenguaje del lado del servidor para desarrollo web dinámico.",
    image: Php,
    bgGradient: "from-purple-900 to-purple-1000",
  },
  {
    title: "React",
    description: "Biblioteca de JavaScript para construir interfaces de usuario dinámicas.",
    image: react,
    bgGradient: "from-sky-800 to-sky-1000",
  },
];

export default function TarjetaCurso() {
  return (
    <div className="bg-gradient-to-b from-black/60 to-black/90  w-full mb-40 flex flex-wrap justify-center gap-4 p-4">
      <div className="flex flex-wrap justify-center gap-8 p-4 mt-20 mb-36">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b ${course.bgGradient} h-80 w-72 rounded-2xl shadow-lg w-64 p-4 hover:scale-110 transition-transform duration-500`}
          >
            <img
              src={course.image}
              alt={`${course.title} logo`}
              className="rounded-xl w-30 h-30 mx-auto mb-4 hover:scale-125 transition-transform duration-500"
            />
            <h2 className="text-white text-3xl font-bold text-left mb-2">
              {course.title}
            </h2>
            <p className="text-gray-300 text-center">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
