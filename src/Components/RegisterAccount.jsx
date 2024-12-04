import Logo from "../assets/Icons/Logo.svg";

export default function RegisterAccount() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#000000]/95 to-[#EA6558]/100 flex flex-col justify-center items-center py-12 px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 border bg-white/90 border-gray-300 rounded-lg p-10 shadow-2xl">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mt-5 items-center">
            <img className="h-16 w-30" src={Logo} alt="Logo" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crea tu cuenta
          </h2>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="group flex items-center w-1/4 space-x-2 bg-white px-8 py-2 border border-gray-300 rounded-md hover:bg-gray-200">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700">Google</span>
          </button>
          <button className="group flex items-center space-x-2 W-1/4 bg-white px-8 py-2 border border-gray-300 rounded-md hover:bg-gray-200">
            <img
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
              alt="GitHub"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700">GitHub</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <span className="absolute px-4 text-gray-500 text-sm">
            o continua con
          </span>
        </div>

        <form className="mt-8 space-y-6" action="#">
          {/* Fila para Nombre y Apellido */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
                placeholder="Escribe tu nombre"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
                placeholder="Escribe tu apellido"
              />
            </div>
          </div>

          {/* Correo Electrónico */}
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
              placeholder="Escribe tu correo electrónico"
            />
          </div>

          {/* Fecha de Nacimiento */}
          <div>
            <label
              htmlFor="birthdate"
              className="block text-sm font-medium text-gray-700"
            >
              Fecha de nacimiento
            </label>
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              required
              className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
            />
          </div>

          {/* Contraseña y Confirmar Contraseña */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
                placeholder="Escribe tu contraseña"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmar contraseña
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
                placeholder="Confirma tu contraseña"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm mb-5 font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}