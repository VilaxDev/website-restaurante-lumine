import React from "react";
import { AlignJustify } from "lucide-react";

const Hero = () => {
  const scrollToReservations = () => {
    const element = document.getElementById("reservas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fondo.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          <span className="flex items-center justify-center">
            LUM
            <AlignJustify className="mt-2 w-14 h-14 mb-0 sm:w-16 sm:h-16 md:w-[78px] md:h-[78px]" />
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 tracking-widest">
          RESTAURANTE GOURMET
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Una experiencia culinaria única en el corazón de Huancayo. Cocina
          contemporánea que despierta todos los sentidos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToReservations}
            className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Reservar Mesa
          </button>
          <button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-200"
          >
            Ver Menú
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
