"use client"

import {
    SparklesIcon,
    ShieldCheckIcon,
    BoltIcon,
    GlobeAltIcon,
    UserGroupIcon,
    HeartIcon,
    CheckCircleIcon,
    CloudArrowUpIcon,
} from "@heroicons/react/24/outline"

const About = () => {
    const features = [
        {
            icon: <BoltIcon className="w-6 h-6" />,
            title: "Conversión Rápida",
            description: "Procesamiento ultrarrápido de archivos con tecnología FFmpeg optimizada.",
        },
        {
            icon: <ShieldCheckIcon className="w-6 h-6" />,
            title: "100% Seguro",
            description: "Tus archivos se procesan localmente en tu navegador. Nunca se suben a ningún tipo de servidor.",
        },
        {
            icon: <GlobeAltIcon className="w-6 h-6" />,
            title: "Acceso Universal",
            description: "Funciona en cualquier dispositivo con navegador web. No requiere instalación.",
        },
        {
            icon: <SparklesIcon className="w-6 h-6" />,
            title: "Múltiples Formatos",
            description: "Soporte para los formatos más populares de imagen, audio y video.",
        },
    ]

    

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 mt-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 sm:mb-16">
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                            Sobre Nosotros
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Este proyecto surgió de la necesidad de convertir archivos sin necesidad de pagar o tener limitaciones al momento de hacerlo. Es un proyecto personal que busca estar disponible para todos sin fines de lucro.
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Características</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Ofrecemos la mejor experiencia en conversión de archivos con estas características únicas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Stats Section */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg text-white p-8 sm:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nuestro Impacto</h2>
                            <p className="text-blue-100 text-lg">Números que reflejan nuestra dedicación</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
                                <div className="text-blue-100">Gratuito</div>
                            </div>
                            <div>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">0</div>
                                <div className="text-blue-100">Datos Almacenados</div>
                            </div>
                            <div>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">∞</div>
                                <div className="text-blue-100">Conversiones Ilimitadas</div>
                            </div>
                        </div>
                    </div>

                    {/* Technology Section */}
                    <div className="mt-16">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Tecnología de Vanguardia</h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Utilizamos FFmpeg, la biblioteca multimedia más potente del mundo, compilada para funcionar
                                        directamente en tu navegador mediante WebAssembly. Esto significa que obtienes la misma calidad de
                                        conversión que usan los profesionales, pero sin necesidad de instalar software adicional.
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">Procesamiento local en tu dispositivo</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">Calidad profesional garantizada</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">Compatible con todos los navegadores modernos</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                                        <BoltIcon className="w-16 h-16 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">FFmpeg + WebAssembly</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
