import { CheckIcon } from "@heroicons/react/20/solid";
import { useLocation } from "react-router-dom";

const tiers = [
  {
    name: "Basico",
    id: "tier-Basico",
    href: "#",
    priceMonthly: "S/.200",
    description:
      "El plan personal perfecto si recien estas empezado a utilizar nuestro producto",
    features: [
      "Acceso a todos los cursos  de la plataforma",
      "Disponibilidad 24/7",
      "Rutas personalisadas ",
      "Evaluaciones personalizadas",
    ],
    featured: false,
  },
  {
    name: "Golden",
    id: "tier-Golden",
    href: "#",
    priceMonthly: "s/.350",
    description:
      "El plan unico para dos personas , invita a un amigo y aprendan juntos.",
    features: [
      "Acceso a todos los cursos  de la plataforma",
      "Disponibilidad 24/7",
      "Rutas personalisadas ",
      "Evaluaciones personalizadas",
      "Ahorras 50 soles por año",
    ],
    featured: true,
  },
  {
    name: "Premium",
    id: "tier-Premium",
    href: "#",
    priceMonthly: "S/.500",
    description:
      "El plan unico para tres personas , invita a un amigo o familiar y aprendan juntos .",
    features: [
      "Acceso a todos los cursos  de la plataforma",
      "Disponibilidad 24/7",
      "Rutas personalisadas ",
      "Evaluaciones personalizadas",
      "Ahorras 100 soles por año",
    ],
    featured: false,
  },
];

// Configuración centralizada para estilos
const pageStyles = {
  default: {
    fontClass: "font-sans text-base",
    titleClass: "text-5xl font-semibold tracking-tight text-green-600 sm:text-6xl",
    descriptionClass: "mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8",
    cardTextClassFalse: "text-gray-800",
    cardTextClassTrue:"text-yellow-600",
    MoneyTextClassFalse:"text-red-900 text-5xl font-semibold tracking-tight",
    MoneyTextClassTrue:"text-white text-5xl font-semibold tracking-tight",
    FontSizeYear:"text-sm",
    ColorCheckTrue:"text-green-500]",
    ColorCheckFalse:"text-green-700",
  },
  young: {
    fontClass: "font-arcade text-xs",
    titleClass: "text-yellow-400 text-4xl font-bold",
    descriptionClass: "mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-yellow-200 text-sm font-medium",
    cardTextClassFalse: "text-black",
    cardTextClassTrue:"text-yellow-400 ",
    MoneyTextClassFalse:"text-green-800 text-3xl font-semibold tracking-tight",
    MoneyTextClassTrue:"text-white text-3xl font-semibold tracking-tight",
    FontSizeYear:"text-xs",
    ColorCheckTrue:"text-[#ff7f07]",
    ColorCheckFalse:"text-green-700",
  },
};
const pageContent = {
  "/planes": {
    title: "Elige el plan adecuado para ti",
    description:
      "Invierte en ti mismo con nuestros planes exclusivos. Accede a cursos 24/7, herramientas personalizadas y todo lo que necesitas para alcanzar tus metas. ¡Elige el tuyo y comienza hoy!",
  },
  default: {
    title: "Bienvenido a SkillConnect",
    description:
      "Explora nuestras opciones de aprendizaje y comienza tu viaje hacia el éxito.",
  },
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TarjetPlanes() {
  const location = useLocation(); // Obtiene la ruta actual

 // Extraer el contenido dinámico según la ruta actual
 const { title, description } =
 pageContent[location.pathname] || pageContent.default;

    // Determinar la página actual para aplicar estilos
    const currentVariant = location.pathname.includes("/Young") ? "young" : "default";
    const {
      fontClass,
      titleClass,
      descriptionClass,
      cardTextClassFalse,
      cardTextClassTrue,
      MoneyTextClassFalse,
      MoneyTextClassTrue,
      FontSizeYear,
      ColorCheckFalse,
      ColorCheckTrue,
    } = pageStyles[currentVariant];

 
  return (
    <div className={`relative isolate px-6 py-24 sm:py-32 lg:px-8 ${fontClass}`}>
    
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>

    {/* Títulos dinámicos */}
      <div className="mx-auto max-w-4xl text-center">
        <p className={`${titleClass} `}>
          {title}
        </p>
      </div>
      <p className={` ${descriptionClass} `}>
        {description}
      </p>

     <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
              ? currentVariant === "young"
              ? "bg-[#ff0070]/60 shadow-2xl"
              : "bg-red-950/60 shadow-2xl" // Estilo para `featured` basado en la página
            : currentVariant === "young"
            ? "bg-white/70"
            : "bg-white/70", // Estilo para `non-featured` basado en la página
          "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-2xl"
        )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? cardTextClassTrue : cardTextClassFalse,
                "text-base/8  font-bold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? MoneyTextClassTrue : MoneyTextClassFalse,
              
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-800",
                  FontSizeYear
                )}
              >
                /anual
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-100" : "text-gray-800", FontSizeYear,
                "mt-6"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-100" : "text-gray-800", FontSizeYear,
                "mt-8 space-y-3 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? ColorCheckTrue : ColorCheckFalse,
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-yellow-600 text-black font-bold shadow-lg hover:bg-yellow-500 "
                  : "text-white font-bold bg-green-800 hover:bg-green-700 border-green-700",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Empieza ahora
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}