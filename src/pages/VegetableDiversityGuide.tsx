import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Sun, Droplet, Soup, Sprout, Calendar, Recycle, Shield } from "lucide-react";

const VegetableDiversityGuide = () => {
  const vegetables = [
    {
      id: 1,
      name: "Lechugas",
      description: "Variedades como romana, hoja de roble y mantecosa. Cultivo rápido ideal para ensaladas. Siembra ideal en agosto.",
      careLevel: "Fácil",
      sunlight: "Sol parcial",
      water: "Riego frecuente",
      harvest: "30-60 días",
      image: "https://i.imgur.com/9h808gi.jpeg",
    },
    {
      id: 2,
      name: "Tomates",
      description: "Desde cherry hasta beefsteak. Necesitan tutorado y poda para máxima producción. Siembra sin riesgos de heladas en octubre.",
      careLevel: "Moderado",
      sunlight: "Sol pleno",
      water: "Riego profundo",
      harvest: "70-100 días",
      image: "https://i.imgur.com/L3KX7hK.jpeg",
    },
    {
      id: 3,
      name: "Albahacas",
      description: "Aromática clave para pestos. Cortar frecuentemente para evitar floración prematura. Siembra segura en octubre.",
      careLevel: "Fácil",
      sunlight: "4-6 horas sol",
      water: "Suelo húmedo",
      harvest: "Todo el año",
      image: "https://i.imgur.com/ubmYWsH.jpeg",
    },
    {
      id: 4,
      name: "Zanahorias",
      description: "Prefieren suelos sueltos y profundos. Variedades naranjas, moradas y amarillas. Siembra de otoño mes de febrero y en primavera en septiembre.",
      careLevel: "Moderado",
      sunlight: "Sol pleno",
      water: "Riego moderado",
      harvest: "60-80 días",
      image: "https://i.imgur.com/lqXitwD.jpeg",
    },
    {
      id: 5,
      name: "Berenjenas",
      description: "Requieren calor constante. Excelentes para guisos y parrillas. Controlar escarabajos. Siembra en Agosto con proteccion por las heladas.",
      careLevel: "Difícil",
      sunlight: "Sol pleno",
      water: "Riego regular",
      harvest: "100-120 días",
      image: "https://i.imgur.com/KLVMro6.jpeg",
    },
    {
      id: 6,
      name: "Acelgas",
      description: "Hojas coloridas ricas en hierro. Cortar hojas externas para cosecha continua. Siembra de otoño en febrero y en primavera en agosto.",
      careLevel: "Fácil",
      sunlight: "Sol parcial",
      water: "Suelo húmedo",
      harvest: "50-60 días",
      image: "https://i.imgur.com/dAADyRb.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Cultivo de Hortalizas Diversas
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo crear un huerto policultural con variedades complementarias que mejoran 
            la productividad y salud del ecosistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {vegetables.map((veg) => (
            <Card
              key={veg.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={veg.image}
                  alt={veg.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {veg.name}
                </h3>
                <p className="text-gray-600 mb-4">{veg.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>{veg.sunlight}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Droplet className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{veg.water}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-green-500" />
                    <span>Cosecha: {veg.harvest}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Leaf className="h-4 w-4 mr-2 text-green-500" />
                    <span>Dificultad: {veg.careLevel}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Técnicas de Cultivo Integrado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Rotación Asociativa
                </h3>
                <p className="text-gray-600">
                  Alterna leguminosas (fijadoras de N) con hortalizas de fruto 
                  para mejorar la fertilidad del suelo.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Soup className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Cultivo para Cocina
                </h3>
                <p className="text-gray-600">
                  Diseña tu huerto según necesidades culinarias: hierbas cerca 
                  de la cocina, tomates con albahaca.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Sucesión Estacional
                </h3>
                <p className="text-gray-600">
                  Programa siembras escalonadas: acelgas en invierno, 
                  berenjenas en verano para producción continua.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Protección Natural
                </h3>
                <p className="text-gray-600">
                  Usa albahaca como repelente de mosquitos y zanahorias 
                  intercaladas con cebollas contra plagas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ¿Quieres un Huerto Diverso Todo el Año?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Unete a nuestra Comunidad y recibe 
            consejos en tiempo oportuno para tu huerta.
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

export default VegetableDiversityGuide;