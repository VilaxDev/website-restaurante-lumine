import React from "react";

const Menu = () => {
  const menuItems = [
    {
      category: "Entradas",
      items: [
        {
          name: "Ceviche de Trucha Andina",
          description:
            "Trucha fresca marinada en leche de tigre, camote morado y cancha serrana",
          price: "S/ 45",
          image: "/images/ceviche.jpg",
        },
        {
          name: "Tiradito de Salmón",
          description:
            "Láminas de salmón con ají amarillo, leche de coco y microgreens",
          price: "S/ 42",
          image: "/images/tiradito-salmon.jpg",
        },
      ],
    },
    {
      category: "Platos Principales",
      items: [
        {
          name: "Lomo Saltado Gourmet",
          description:
            "Lomo fino salteado con papas nativas, cebolla morada y salsa de soja artesanal",
          price: "S/ 68",
          image: "/images/lomo-saltado.jpg",
        },
        {
          name: "Cordero Patagónico",
          description:
            "Rack de cordero con costra de hierbas, puré de papa huayro y reducción de vino",
          price: "S/ 85",
          image: "/images/cordero-patagonico.avif",
        },
        {
          name: "Risotto de Quinua",
          description:
            "Quinua cremosa con hongos silvestres, queso parmesano y trufa negra",
          price: "S/ 55",
          image: "/images/risoto-quinua.jpg",
        },
      ],
    },
    {
      category: "Postres",
      items: [
        {
          name: "Suspiro Limeño Deconstruido",
          description:
            "Manjar blanco, merengue italiano y canela en polvo con texturas modernas",
          price: "S/ 28",
          image: "/images/suspiro-limeño.jpg",
        },
        {
          name: "Chocolate Amazónico",
          description:
            "Mousse de chocolate 70% con frutos rojos y crumble de cacao",
          price: "S/ 32",
          image: "/images/chocolate-amazonico.jpg",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nuestro Menú
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una selección cuidadosa de platos que celebran los sabores peruanos
            con técnicas contemporáneas
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-black">
                        {item.name}
                      </h4>
                      <span className="text-xl font-bold text-black">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Tienes alguna alergia o preferencia alimentaria?
          </p>
          <p className="text-sm text-gray-500">
            Nuestro chef estará encantado de adaptar cualquier plato a tus
            necesidades
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
