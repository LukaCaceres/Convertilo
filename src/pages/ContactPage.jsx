"use client"

import { useState } from "react"
import {
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  BugAntIcon,
  LightBulbIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const inquiryTypes = [
    {
      value: "general",
      label: "Consulta General",
      icon: <QuestionMarkCircleIcon className="w-5 h-5" />,
      description: "Preguntas generales sobre el servicio",
    },
    {
      value: "support",
      label: "Soporte Técnico",
      icon: <BugAntIcon className="w-5 h-5" />,
      description: "Problemas técnicos o errores",
    },
    {
      value: "feature",
      label: "Solicitud de Función",
      icon: <LightBulbIcon className="w-5 h-5" />,
      description: "Sugerencias para nuevas características",
    },
  ]

  const faqs = [
    {
      question: "¿Cómo puedo convertir múltiples archivos a la vez?",
      answer:
        "Simplemente selecciona múltiples archivos al hacer clic en 'Agregar archivos' o arrastra varios archivos a la zona de carga. Puedes convertir cada uno individualmente o todos juntos.",
    },
    {
      question: "¿Por qué mi conversión está tardando mucho?",
      answer:
        "El tiempo de conversión depende del tamaño del archivo y la complejidad del formato. Archivos más grandes o conversiones de video pueden tomar más tiempo. Todo se procesa en tu dispositivo.",
    },
    {
      question: "¿Puedo usar el conversor en mi teléfono móvil?",
      answer:
        "¡Absolutamente! Nuestro conversor está optimizado para funcionar en dispositivos móviles. Solo necesitas un navegador web moderno.",
    },
    {
      question: "¿Qué hago si encuentro un error?",
      answer:
        "Si encuentras algún problema, por favor contáctanos usando el formulario de soporte técnico. Incluye detalles sobre el error y el tipo de archivo que intentabas convertir.",
    },
    {
      question: "¿Planean agregar más formatos de archivo?",
      answer:
        "Sí, constantemente evaluamos nuevos formatos para agregar. Si tienes una solicitud específica, envíanos una sugerencia usando el formulario de solicitud de función.",
    },
  ]

  const contactLinks = [
    {
      name: "Email",
      href: "mailto:cclancy.dev@gmail.com",
      icon: <EnvelopeIcon className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "cclancy.dev@gmail.com",
    },
    {
      name: "GitHub",
      href: "https://github.com/LukaCaceres",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "from-gray-700 to-gray-800",
      description: "github.com/LukaCaceres",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/clancydev/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-700",
      description: "linkedin.com/in/clancydev",
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-10">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Contáctanos
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Ya sea que tengas preguntas, necesites soporte técnico o quieras sugerir una
              nueva función, nos encantaría escucharte.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="xl:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">Envíanos un Mensaje</h2>
                  <p className="text-gray-600">
                    Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>

                {/* Submit Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">¡Mensaje enviado exitosamente! Te responderemos pronto.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3">
                    <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de Consulta *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {inquiryTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.type === type.value
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <input
                            type="radio"
                            name="type"
                            value={type.value}
                            checked={formData.type === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`${
                                formData.type === type.value ? "text-blue-500" : "text-gray-400"
                              } transition-colors duration-200`}
                            >
                              {type.icon}
                            </div>
                            <span
                              className={`font-medium ${
                                formData.type === type.value ? "text-blue-700" : "text-gray-700"
                              }`}
                            >
                              {type.label}
                            </span>
                          </div>
                          <p className={`text-xs ${formData.type === type.value ? "text-blue-600" : "text-gray-500"}`}>
                            {type.description}
                          </p>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Breve descripción del tema"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical bg-white"
                      placeholder="Describe tu consulta, problema o sugerencia en detalle. Mientras más información proporciones, mejor podremos ayudarte."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando Mensaje...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* FAQ Section */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg text-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ClockIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Respuesta Rápida</h3>
                </div>
                <p className="text-blue-100 mb-4 text-sm">
                  Para obtener ayuda más rápida, incluye la siguiente información en tu mensaje:
                </p>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Tipo de archivo que intentas convertir</li>
                  <li>• Formato de destino deseado</li>
                  <li>• Navegador que estás usando</li>
                  <li>• Descripción detallada del problema</li>
                  <li>• Capturas de pantalla si es posible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Links Section */}
          <div className="mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Otras Formas de Contacto</h2>
                <p className="text-gray-600">También puedes encontrarme en estas plataformas</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${link.color} rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      {link.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center break-all">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
