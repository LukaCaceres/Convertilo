"use client"

const FooterComponent = ({ language = "es" }) => {
    const texts = {
        es: {
            copyright: "© 2024 Conversor. Todos los derechos reservados.",
            madeBy: "Desarrollado y Diseñado por",
        },
        en: {
            copyright: "© 2024 Conversor. All rights reserved.",
            madeBy: "Developed and designed by",
        },
    }

    const t = texts[language]
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 shadow-lg shadow-black/5 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright Section */}
                    <div className="text-gray-600 text-sm font-medium">
                        © {currentYear} Conversor. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
                    </div>

                    {/* Made by Section */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">{t.madeBy}</span>
                        <a
                            href="https://github.com/LukaCaceres"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                        >
                            clancydev
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
