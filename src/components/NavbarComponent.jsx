"use client"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const NavbarComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Convertilo
                </div>

                {/* Navegación escritorio */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to='/'
                        className="text-gray-700 hover:text-gray-800 font-medium transition-all duration-300 px-4 py-2 rounded-full hover:shadow-md hover:shadow-blue-500/20 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
                    >
                        Inicio
                    </Link>
                    <Link
                        to='/nosotros'
                        className="text-gray-700 hover:text-gray-800 font-medium transition-all duration-300 px-4 py-2 rounded-full hover:shadow-md hover:shadow-purple-500/20 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
                    >
                        Conócenos
                    </Link>
                    <Link
                        to='/contacto'
                        className="text-gray-700 hover:text-gray-800 font-medium transition-all duration-300 px-4 py-2 rounded-full hover:shadow-md hover:shadow-blue-500/20 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
                    >
                        Contacto
                    </Link>
                </div>

                {/* Botón menú móvil */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-white/50 transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="px-6 py-4 bg-white/90 backdrop-blur-sm border-t border-white/20">
                    <div className="flex flex-col gap-4">
                        <a
                            href="#inicio"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-white/50 transition-all duration-200"
                        >
                            Inicio
                        </a>
                        <a
                            href="#sobre"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-white/50 transition-all duration-200"
                        >
                            Conócenos
                        </a>
                        <a
                            href="#contacto"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-white/50 transition-all duration-200"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent
