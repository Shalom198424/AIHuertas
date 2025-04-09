import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bug, SprayCan, Plane, Shield, Droplet } from "lucide-react";

const PestControlGuide = () => {
  const methods = [
    {
      id: 1,
      title: "Aceite de Neem",
      description:
        "Insecticida natural efectivo contra pulgones, ácaros y cochinillas. Mezcla 5ml por litro de agua.",
      effectiveness: "Alta",
      ingredients: "Aceite de neem, jabón neutro",
      image:
        "https://i.imgur.com/ndnJyvE.jpeg",
    },
    {
      id: 2,
      title: "Plantas Companeras",
      description:
        "Albahaca repele mosquitos, caléndula contra nematodos, y ajo protege de hongos.",
      effectiveness: "Media",
      ingredients: "Plantas aromáticas",
      image:
        "https://i.imgur.com/jlrIF0i.jpeg",
    },
    {
      id: 3,
      title: "Insectos Beneficiosos",
      description:
        "Atrae mariquitas (come pulgones) y crisopas. Planta flores pequeñas como margaritas.",
      effectiveness: "Alta",
      ingredients: "Plantas nectaríferas",
      image:
        "https://i.imgur.com/AXQEcPi.jpeg",
    },
    {
      id: 4,
      title: "Tierra de Diatomeas",
      description:
        "Polvo mineral que elimina insectos de cuerpo blando. Aplicar en suelo y hojas.",
      effectiveness: "Moderada",
      ingredients: "Polvo de diatomeas",
      image:
        "https://i.imgur.com/l58hPmS.jpeg",
    },
    {
      id: 5,
      title: "Jugo de Ajo-Chile",
      description:
        "Mezcla 2 cabezas de ajo + 5 chiles en 1L agua. Filtra y pulveriza cada 15 días.",
      effectiveness: "Moderada",
      ingredients: "Ajo, chiles, agua",
      image:
        "https://i.imgur.com/dKagb0a.jpeg",
    },
    {
      id: 6,
      title: "Trampas Manuales",
      description:
        "Trampas amarillas adhesivas para mosca blanca o cerveza para caracoles.",
      effectiveness: "Alta",
      ingredients: "Placas adhesivas, recipientes",
      image:
        "https://i.imgur.com/J8uY6hw.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Control Ecológico de Plagas
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Protege tus cultivos de forma natural con estos métodos efectivos y
            sostenibles que mantienen el equilibrio de tu ecosistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methods.map((method) => (
            <Card
              key={method.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={method.image}
                  alt={method.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield className="h-4 w-4 mr-2 text-green-500" />
                    <span>Efectividad: {method.effectiveness}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Droplet className="h-4 w-4 mr-2 text-brown-500" />
                    <span>Ingredientes: {method.ingredients}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Principios del Control Biológico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Plane className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Prevención
                </h3>
                <p className="text-gray-600">
                  Cultivos fuertes con suelo saludable son menos vulnerables.
                  Usa abonos orgánicos y rotación de cultivos.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Plane className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Control Biológico
                </h3>
                <p className="text-gray-600">
                  Fomenta depredadores naturales: aves, insectos beneficiosos y
                  murciélagos.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <SprayCan className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Métodos Mecánicos
                </h3>
                <p className="text-gray-600">
                  Barreras físicas, trampas y recolección manual. Primera línea
                  de defensa.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Bug className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Monitoreo
                </h3>
                <p className="text-gray-600">
                  Revisa plantas regularmente. Detecta problemas temprano para
                  actuar rápido.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ¿Necesitas Ayuda con una Plaga?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Únete a nuestra red de huerta agroecológica y recibe asesoramiento
            personalizado de expertos en control biológico.
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

export default PestControlGuide;