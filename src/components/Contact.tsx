import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construir el mensaje para WhatsApp
    const whatsappMessage = `Hola, soy ${formData.name}\nEmail: ${formData.email}.\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/51927564707?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para hacer de tu experiencia algo memorable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-black">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Dirección</h4>
                  <p className="text-gray-600">
                    Av. Centenario 514
                    <br />
                    Huancayo, Perú
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Teléfono</h4>
                  <a
                    href="tel:920389787"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    920 389 787
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Correo Electrónico
                  </h4>
                  <a
                    href="mailto:lumegourmet@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    lumegourmet@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horarios</h4>
                  <div className="text-gray-600">
                    <p>Martes - Domingo</p>
                    <p>Almuerzo: 12:00 PM - 3:00 PM</p>
                    <p>Cena: 7:00 PM - 11:00 PM</p>
                    <p className="mt-2 font-medium">Cerrado los lunes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-2" />
                <p className="font-medium">Mapa de Google</p>
                <p className="text-sm">Av. Centenario 514, Huancayo</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-black">
              Envíanos un Mensaje
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 flex items-center justify-center">
                  <Check className="mr-2" size={20} />
                  ¡Mensaje enviado exitosamente!
                </div>
                <p className="text-gray-600">
                  Te responderemos lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  <Send className="mr-2" size={18} />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
