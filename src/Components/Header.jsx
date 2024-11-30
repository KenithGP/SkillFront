import logo from '../assets/Icons/Logo-White-mobil.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-transparent shadow ">
    {/* Logo */}
    <div className="flex items-center space-x-2 mt-2 mb-10">
    <img src={logo} alt="Logo" className="h-10 w-10" />
      <span className="text-xl text-white font-semibold">SkillConnect</span>
    </div>

    {/* Navigation Links */}
    <nav className="hidden md:flex space-x-6 text-base font-medium text-white">
      <a href="#product" className="hover:text-green-500">
        Explorar
      </a>
      <a href="#features" className="hover:text-green-500">
        Cursos
      </a>
      <a href="#marketplace" className="hover:text-green-500">
        Becas
      </a>
      <a href="#company" className="hover:text-green-500">
        Planes
      </a>
    </nav>

    {/* Search Bar and Buttons */}
    <div className="flex items-center space-x-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar...."
          className="rounded-full w-[15rem] border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Log In and Sign Up */}
      <button className="text-sm font-medium text-white hover:text-green-500">
        Iniciar Sesión
      </button>
      <button className="rounded-full bg-[#E53935] px-4 py-2 text-sm font-medium text-white hover:bg-red-400">
        Registrarse
      </button>
    </div>
  </header>
  )
}
