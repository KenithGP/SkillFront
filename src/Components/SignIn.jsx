import Logo from '../assets/Icons/Logo.svg';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000]/95 to-[#EA6558]/100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl space-y-8 bg-white/80 rounded-md p-6 sm:p-10 shadow-lg">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <img className="h-16 w-auto" src={Logo} alt="Logo" />
          </div>
          <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            Inicia sesión
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm mb-1 font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Escribe tu correo electrónico"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-1 font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Escribe tu contraseña"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Recuérdame
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center">
          <div className="absolute px-2 text-gray-800 text-sm">
            o continua con
          </div>
          <div className="border-t border-gray-300 w-full"></div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="group flex items-center space-x-2 bg-white px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 w-full sm:w-auto">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700">Google</span>
          </button>
          <button className="group flex items-center space-x-2 bg-white px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 w-full sm:w-auto">
            <img
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
              alt="GitHub"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700">GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
}
