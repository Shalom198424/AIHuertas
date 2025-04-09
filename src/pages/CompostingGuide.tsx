import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Droplet, Sun, Wind, Recycle, Thermometer } from "lucide-react";

const CompostingGuide = () => {
    const tips = [
        {
          id: 1,
          title: "Balance Verde/Marrón",
          description:
            "Mantén una proporción 3:1 de materiales marrones (carbono) y verdes (nitrógeno) para un compost saludable.",
          difficulty: "Moderado",
          materials: "Hojas secas, restos vegetales",
          image:
            "https://images.unsplash.com/photo-1582772040960-8fb3360205ab?w=800&q=80",
        },
        {
          id: 2,
          title: "Tamaño del Material",
          description:
            "Tritura los materiales grandes para acelerar la descomposición. Trozos de 5-10 cm son ideales.",
          difficulty: "Fácil",
          materials: "Tijeras de podar, picadora",
          image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
        },
        {
          id: 3,
          title: "Oxigenación",
          description:
            "Voltea el compost cada 2 semanas para airearlo y estimular la actividad microbiana.",
          difficulty: "Moderado",
          materials: "Horca o pala",
          image:
            "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=800&q=80",
        },
        {
          id: 4,
          title: "Control de Humedad",
          description:
            "Mantén la humedad de una esponja exprimida. Cubre durante lluvias intensas.",
          difficulty: "Fácil",
          materials: "Manguera, lona",
          image:
            "https://images.unsplash.com/photo-1572375755360-fd9db1b6dddf?w=800&q=80",
        },
        {
          id: 5,
          title: "Capas Alternadas",
          description:
            "Alterna capas de materiales gruesos y finos para mejorar el flujo de aire.",
          difficulty: "Fácil",
          materials: "Ramitas, césped",
          image:
            "https://images.unsplash.com/photo-1604293670791-1a6dd3b6a535?w=800&q=80",
        },
        {
          id: 6,
          title: "Temperatura Ideal",
          description:
            "El rango óptimo es 54-65°C. Usa un termómetro para monitorear la actividad.",
          difficulty: "Avanzado",
          materials: "Termómetro de compost",
          image:
            "https://images.unsplash.com/photo-1589357355817-4a87d3dffb09?w=800&q=80",
        },
      ];
    
      return (
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Dominando el Arte del Compostaje
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transforma tus residuos orgánicos en oro negro para tu jardín con
                estos consejos prácticos y técnicas probadas para un compostaje
                exitoso.
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {tips.map((tip) => (
                <Card
                  key={tip.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{tip.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Leaf className="h-4 w-4 mr-2 text-green-500" />
                        <span>Materiales: {tip.materials}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                        <span>Dificultad: {tip.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
    
            <div className="bg-green-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Principios Clave del Compostaje
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">
                      Proporción C/N
                    </h3>
                    <p className="text-gray-600">
                      Mantén una relación 30:1 de carbono a nitrógeno. Usa hojas
                      secas (marrón) y restos de cocina (verde).
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Wind className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Aireación</h3>
                    <p className="text-gray-600">
                      Voltea la pila cada 2-3 semanas para oxigenar y prevenir
                      malos olores.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Droplet className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Humedad</h3>
                    <p className="text-gray-600">
                      Debe sentirse como esponja húmeda. Regar en verano, cubrir
                      en épocas lluviosas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Thermometer className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">
                      Temperatura
                    </h3>
                    <p className="text-gray-600">
                      El calor ideal (55-65°C) mata patógenos y acelera la
                      descomposición.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                ¿Listo para Transformar tus Residuos?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Sigue nuestra guía completa de compostaje doméstico y únete a
                nuestra comunidad de jardineros sostenibles.
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

export default CompostingGuide;