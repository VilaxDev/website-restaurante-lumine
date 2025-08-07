import React, { useState } from "react";
import { Calendar, Clock, Users, Check } from "lucide-react";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Hola, tengo una nueva reserva:\n\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Fecha: ${formData.date}\n` +
      `Hora: ${formData.time}\n` +
      `Nº de personas: ${formData.guests}\n` +
      `Mensaje: ${formData.message}`;

    // Codificamos el mensaje para usarlo en una URL
    const encodedMessage = encodeURIComponent(message);

    // Abrimos el enlace de WhatsApp en una nueva pestaña
    window.open(`https://wa.me/51920389787?text=${encodedMessage}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservas" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reserva tu Mesa
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Asegura tu lugar en una experiencia gastronómica inolvidable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Reservation Form */}
          <div className="bg-white text-black p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Información de Reserva</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 flex items-center justify-center">
                  <Check className="mr-2" size={20} />
                  ¡Reserva enviada exitosamente!
                </div>
                <p className="text-gray-600">
                  Te contactaremos pronto para confirmar tu reserva.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre completo *
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
                    <label className="block text-sm font-medium mb-2">
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
                  <label className="block text-sm font-medium mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="920 389 787"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Fecha *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Hora *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Seleccionar</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Comensales *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensaje adicional
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Ocasión especial, alergias, preferencias..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  Confirmar Reserva
                </button>
              </form>
            )}
          </div>

          {/* Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Información Importante
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-white mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Horarios de Atención</h4>
                    <p className="text-gray-300">
                      Almuerzo: 12:00 PM - 3:00 PM
                      <br />
                      Cena: 7:00 PM - 11:00 PM
                      <br />
                      Cerrado los lunes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-white mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Política de Reservas</h4>
                    <p className="text-gray-300">
                      Las reservas se confirman por teléfono o email.
                      Cancelaciones con 24 horas de anticipación.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-white mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Grupos Grandes</h4>
                    <p className="text-gray-300">
                      Para grupos de más de 8 personas, contacta directamente al
                      restaurante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="font-bold mb-3">¿Prefieres llamar?</h4>
              <p className="text-gray-300 mb-4">
                Nuestro equipo estará encantado de ayudarte con tu reserva
              </p>
              <a
                href="tel:920389787"
                className="inline-block bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                Llamar: 920 389 787
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
