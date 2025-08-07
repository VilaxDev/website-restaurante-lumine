import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 tracking-wide">
              LUME
              <span className="block text-sm font-light text-gray-400 tracking-widest">
                RESTAURANTE
              </span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Una experiencia culinaria única en el corazón de Huancayo. Cocina
              contemporánea que despierta todos los sentidos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=100083470743909"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300">920 389 787</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300">lumegourmet@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gray-400 mt-1" />
                <span className="text-gray-300">
                  Av. Centenario 514
                  <br />
                  Huancayo, Perú
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-300">
              <p>Lunes - Sabado</p>
              <p>Almuerzo: 1:00 PM - 3:00 PM</p>
              <p>Cena: 7:00 PM - 10:00 PM</p>
              <p className="text-gray-400 mt-3">Cerrado los Domingos</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Lume Restaurante. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
