import logo from '../assets/Icons/Logo-White-mobil.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-xl text-white font-semibold">SkillConnect</span>
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
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

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          id="mobile-menu-button"
          className="text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Search Bar and Buttons */}
      <div className="hidden md:flex items-center space-x-6">
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="absolute top-16 left-0 z-10 hidden w-full bg-black/90 text-white"
      >
        <div className="flex flex-col items-center space-y-4 py-4">
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
          <button className="text-sm font-medium text-white hover:text-green-500">
            Iniciar Sesión
          </button>
          <button className="rounded-full bg-[#E53935] px-4 py-2 text-sm font-medium text-white hover:bg-red-400">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}
