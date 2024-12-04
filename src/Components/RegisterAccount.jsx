
import { useState } from 'react';
import Logo from "../assets/Icons/Logo.svg";

export default function RegisterAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-12 px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 border border-gray-300 rounded-lg p-6 shadow-2xl">
        <div className="text-center">
          <div className="flex justify-center mt-5 items-center">
            <img className="h-16 w-30" src={Logo} alt="Logo" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crea tu cuenta
          </h2>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="group flex items-center space-x-2 bg-white px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700">Google</span>
          </button>
          <button className="group flex items-center space-x-2 bg-white px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <img
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
              alt="GitHub"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700">GitHub</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <span className="absolute px-4 text-gray-500 text-sm bg-white">
            o continua con
          </span>
        </div>

        <form className="mt-8 space-y-6" action="#">
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

          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
                placeholder="Escribe tu contraseña"
              />
              <span
                className="absolute top-2/3 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.965 3.057-4.755 6-9.542 6-4.477 0-8.268-2.943-9.542-6z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3l18 18M9.257 9.257a3 3 0 004.486 4.486M14.743 14.743a3 3 0 01-4.486-4.486M15.536 8.464c2.598 2.598 3.104 5.678 1.344 7.438M8.464 15.536c-2.598-2.598-3.104-5.678-1.344-7.438"
                    />
                  )}
                </svg>
              </span>
            </div>
            <div className="w-1/2 relative">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmar contraseña
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                className="mt-1 block w-full rounded-md px-2 h-10 shadow-md sm:text-sm border border-gray-300"
                placeholder="Confirma tu contraseña"
              />
              <span
                className="absolute top-2/3 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showConfirmPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.965 3.057-4.755 6-9.542 6-4.477 0-8.268-2.943-9.542-6z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3l18 18M9.257 9.257a3 3 0 004.486 4.486M14.743 14.743a3 3 0 01-4.486-4.486M15.536 8.464c2.598 2.598 3.104 5.678 1.344 7.438M8.464 15.536c-2.598-2.598-3.104-5.678-1.344-7.438"
                    />
                  )}
                </svg>
              </span>
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
