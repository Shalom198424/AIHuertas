import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Droplet, Sun, Wind } from "lucide-react";

const Herbs = () => {
  const herbs = [
    {
      id: 1,
      name: "Albahaca",
      description:
        "Una hierba fragante con un sabor dulce y ligeramente picante. Perfecto para platos italianos, pesto y ensaladas.",
      careLevel: "Fácil",
      sunlight: "A pleno sol",
      water: "Riego regular",
      image:
        "https://i.imgur.com/ZOmpDNe.jpeg",
    },
    {
      id: 2,
      name: "Menta",
      description:
        "Una hierba refrescante con propiedades refrescantes. Ideal para tés, cócteles y platos mediterráneos.",
      careLevel: "Facil",
      sunlight: "Sol parcial",
      water: "Riego regular",
      image:
        "https://i.imgur.com/7H9n6bQ.jpeg",
    },
    {
      id: 3,
      name: "Romero",
      description:
        "Una hierba leñosa y perenne con hojas fragantes en forma de aguja. Excelente para carnes asadas y patatas.",
      careLevel: "Moderado",
      sunlight: "A pleno sol",
      water: "Bajas necesidades de agua",
      image:
        "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800&q=80",
    },
    {
      id: 4,
      name: "Cilantro",
      description:
        "Una hierba versátil con un sabor distintivo. Imprescindible en las cocinas mexicana, india y asiática.",
      careLevel: "Fácil",
      sunlight: "Sol parcial",
      water: "Riego regular",
      image:
        "https://i.imgur.com/tVMDbWI.jpeg",
    },
    {
      id: 5,
      name: "Tomillo",
      description:
        "Una planta perenne resistente con hojas diminutas y aromáticas. Ideal para sopas, guisos y platos de carne.",
      careLevel: "Fácil",
      sunlight: "A pleno sol",
      water: "Bajas necesidades de agua",
      image:
        "https://images.unsplash.com/photo-1594027308808-24b68af6829b?w=800&q=80",
    },
    {
      id: 6,
      name: "Salvia",
      description:
        "Una hierba sabrosa con hojas de color verde grisáceo. Perfecto para platos de aves, rellenos y salsas.",
      careLevel: "Moderado",
      sunlight: "A pleno sol",
      water: "Bajas necesidades de agua",
      image:
        "https://i.imgur.com/MoOUGzG.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Cultivo de hierbas
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubra cómo cultivar y utilizar hierbas culinarias y medicinales en su jardín. 
          Estas plantas versátiles son perfectas tanto para principiantes como para 
          huerteros experimentados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {herbs.map((herb) => (
            <Card
              key={herb.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={herb.image}
                  alt={herb.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {herb.name}
                </h3>
                <p className="text-gray-600 mb-4">{herb.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>{herb.sunlight}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Droplet className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{herb.water}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Leaf className="h-4 w-4 mr-2 text-green-500" />
                    <span>Nivel de atención: {herb.careLevel}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
          Consejos para el cultivo de hierbas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Sun className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Requisitos de luz
                </h3>
                <p className="text-gray-600">
                  La mayoría de las hierbas necesitan al menos 6 horas de luz solar directa al día. 
                  Colóquelos en una ventana orientada al sur o al oeste si cultivan en interiores.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Droplet className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">Riego</h3>
                <p className="text-gray-600">
                Riegue las hierbas cuando la pulgada superior de la tierra se sienta seca. 
                La mayoría prefiere un suelo con buen drenaje y un riego moderado.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Wind className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Circulación de aire
                </h3>
                <p className="text-gray-600">
                  Una buena circulación de aire previene enfermedades fúngicas. 
                  Evite amontonar sus hierbas y pode regularmente.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Cosecha
                </h3>
                <p className="text-gray-600">
                  Coseche las hierbas por la mañana después de que el rocío se haya secado, 
                  pero antes de que el sol sea fuerte. La cosecha regular fomenta un 
                  crecimiento más tupido.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ¿Listo para comenzar tu jardín de hierbas?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Únete a nuestro foro de la comunidad para conectarte con otros entusiastas de las 
            hierbas, compartir tus experiencias y obtener consejos personalizados.
          </p>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            size="lg"
            asChild
          >
            <a href="/forum">Unirse a la Comunidad</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Herbs;
