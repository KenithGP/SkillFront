import Css from "../assets/Images/Css.svg";
import Html from "../assets/Images/Html.svg";
import JavaScript from "../assets/Images/Javascript.svg";
import Php from "../assets/Images/Php.svg";
import ReactLogo from "../assets/Images/React.svg";

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
    image: JavaScript,
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
    image: ReactLogo,
    bgGradient: "from-sky-800 to-sky-1000",
  },
];

export default function TarjetaCurso({ variant = "default" }) {
  const pageStyles = {
    default: {
      textClass: "text-white",
      descClass: "text-gray-300",
      fontClass: "font-sans ",
      textSize: " text-sm font-semibold ",
      titleSize: "text-3xl font-bold",
    },
    young: {
      textClass: "text-yellow-200",
      descClass: "text-pink-100",
      fontClass: "font-arcade",
      textSize: " text-xs font-normal ",
      titleSize: " text-xl font-bold",
    },
    kids: {
      fontClass: "font-comics",
      textSize: " text-1xl",
      titleSize: " text-2xl font-bold",
    },
    adult: {
      textClass: "text-gray-300",
      descClass: "text-gray-500",
      fontClass: "font-sans",
    },
  };

  const { textClass, textSize, titleSize, descClass, fontClass } =
    pageStyles[variant];

  return (
    <div className="relative bg-black/50 w-full h-2/4 overflow-hidden py-12">
      <div className="flex animate-scroll w-[calc(200%)] space-x-8 mb-20 mt-10">
        {courses.concat(courses).map((course, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b ${course.bgGradient} h-80 w-72 flex-shrink-0 rounded-2xl shadow-lg p-4 hover:scale-110 transition-transform duration-500`}
          >
            <img
              src={course.image}
              alt={`${course.title} logo`}
              className="rounded-xl w-30 h-30 mx-auto mb-4 hover:scale-125 transition-transform duration-500"
            />
            <h2
              className={`text-white text-center mb-2 ${fontClass} ${titleSize}`}
            >
              {course.title}
            </h2>
            <p className={`text-gray-300 text-center ${textSize}`}>
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
