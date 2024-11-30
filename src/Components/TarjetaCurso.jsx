import React from 'react';
export default function TarjetaCurso(){
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="bg-blue-500 rounded-2xl shadow-lg w-64 p-4 text-white">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-center mb-2">CSS</h2>
        <p className="text-center">Lenguaje que define estilos</p>
      </div>
      <div className="bg-green-500 rounded-2xl shadow-lg w-64 p-4 text-white">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-center mb-2">React</h2>
        <p className="text-center">Biblioteca de JavaScript para interfaces de usuario</p>
      </div>
      <div className="bg-orange-500 rounded-2xl shadow-lg w-64 p-4 text-white">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-center mb-2">JavaScript</h2>
        <p className="text-center">Lenguaje de programación para la web</p>
      </div>
      <div className="bg-yellow-500 rounded-2xl shadow-lg w-64 p-4 text-white">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-center mb-2">HTML</h2>
        <p className="text-center">Lenguaje de marcado para la web</p>
      </div>
      <div className="bg-purple-500 rounded-2xl shadow-lg w-64 p-4 text-white">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-center mb-2">Tailwind CSS</h2>
        <p className="text-center">Framework de CSS para diseños responsivos</p>
      </div>
    </div>
    )
}