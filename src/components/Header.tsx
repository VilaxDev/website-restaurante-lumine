import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, AlignJustify } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-black text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>920 389 787</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>lumegourmet@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Av. Centenario 514, Huancayo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-black tracking-wide">
                <span className="flex items-center">
                  <span>LUM</span>
                  <AlignJustify size={26} className="mt-1" />
                </span>
                <span className="block text-sm font-light text-gray-600 tracking-widest mt-1">
                  RESTAURANTE
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-800 hover:text-black font-medium transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-nosotros")}
                className="text-gray-800 hover:text-black font-medium transition-colors duration-200"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-800 hover:text-black font-medium transition-colors duration-200"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-gray-800 hover:text-black font-medium transition-colors duration-200"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-800 hover:text-black font-medium transition-colors duration-200"
              >
                Contacto
              </button>
            </nav>

            {/* Reservation button */}
            <button
              onClick={() => scrollToSection("reservas")}
              className="hidden md:block bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Reservar Mesa
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-800 hover:text-black font-medium text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("sobre-nosotros")}
                  className="text-gray-800 hover:text-black font-medium text-left"
                >
                  Sobre Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-800 hover:text-black font-medium text-left"
                >
                  Menú
                </button>
                <button
                  onClick={() => scrollToSection("galeria")}
                  className="text-gray-800 hover:text-black font-medium text-left"
                >
                  Galería
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-800 hover:text-black font-medium text-left"
                >
                  Contacto
                </button>
                <button
                  onClick={() => scrollToSection("reservas")}
                  className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors duration-200 font-medium w-full text-left"
                >
                  Reservar Mesa
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
