import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En el corazón de Huancayo, Lume Restaurante nace de la pasión por crear 
              experiencias gastronómicas únicas. Nuestro nombre, que significa "luz" en latín, 
              refleja nuestra misión de iluminar el paladar con sabores extraordinarios.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Combinamos técnicas culinarias contemporáneas con ingredientes locales de la más 
              alta calidad, creando una propuesta gastronómica que honra nuestras raíces 
              mientras abraza la innovación.
            </p>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Excelencia</h3>
                <p className="text-gray-600 text-sm">
                  Cada plato es una obra de arte culinaria
                </p>
              </div>
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Pasión</h3>
                <p className="text-gray-600 text-sm">
                  Amor por la gastronomía en cada detalle
                </p>
              </div>
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Experiencia</h3>
                <p className="text-gray-600 text-sm">
                  Momentos inolvidables para nuestros huéspedes
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Interior del restaurante"
              className="w-full h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;