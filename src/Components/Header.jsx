
export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img
        src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.b3800bcd.svg"
        alt="Logo"
        className="h-6 w-6"
      />
      <span className="text-xl font-semibold">MyApp</span>
    </div>

    {/* Navigation Links */}
    <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
      <a href="#product" className="hover:text-gray-500">
        Explorar
      </a>
      <a href="#features" className="hover:text-gray-500">
        Cursos
      </a>
      <a href="#marketplace" className="hover:text-gray-500">
        Becas
      </a>
      <a href="#company" className="hover:text-gray-500">
        Planes
      </a>
    </nav>

    {/* Search Bar and Buttons */}
    <div className="flex items-center space-x-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar...."
          className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Log In and Sign Up */}
      <button className="text-sm font-medium text-gray-800 hover:text-gray-500">
        Iniciar Sesión
      </button>
      <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Registrarse
      </button>
    </div>
  </header>
  )
}
