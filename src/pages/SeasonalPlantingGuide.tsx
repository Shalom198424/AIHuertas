import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Thermometer, Cloud, Sprout } from "lucide-react";

const SeasonalPlantingGuide = () => {
  const seasons = [
    {
      id: 1,
      name: "Primavera",
      months: "Septiembre - Diciembre",
      temperature: "10°C - 20°C",
      description:
        "La temporada ideal para plantar la mayoría de vegetales y flores anuales. El suelo comienza a calentarse y las heladas disminuyen.",
      plants: ["Tomates", "Pimientos", "Zapallitos", "Pepinos", "Chauchas"],
      tips: "Prepare el suelo con compost y espere a que pase el último riesgo de heladas antes de plantar cultivos sensibles al frío.",
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    },
    {
      id: 2,
      name: "Verano",
      months: "Diciembre - Marzo",
      temperature: "20°C - 30°C",
      description:
        "Tiempo para mantener los cultivos existentes y plantar para la cosecha de otoño. Enfóquese en el riego adecuado durante los períodos calurosos.",
      plants: [
        "Coles",
        "Brócoli",
        "Coliflor",
        "Lechugas resistentes al calor",
        "Rábanos",
      ],
      tips: "Riegue temprano en la mañana para reducir la evaporación y proporcione sombra parcial a las plantas sensibles al calor.",
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&q=80",
    },
    {
      id: 3,
      name: "Otoño",
      months: "Marzo - Junio",
      temperature: "10°C - 20°C",
      description:
        "Excelente temporada para plantar cultivos de clima fresco y árboles. El suelo aún está cálido pero el aire es más fresco.",
      plants: ["Espinacas", "Coles", "Ajos", "Cebollas", "Mostazas/Mizunas", "Acelgas"],
      tips: "Agregue mantillo para proteger las raíces a medida que se acerca el invierno como asi tambien manta antihelada para protejer la parte aerea de nuestros cultivos.",
      image:
        "https://i.imgur.com/6Q7Y6rL.jpeg",
    },
    {
      id: 4,
      name: "Invierno",
      months: "Junio - Septiembre",
      temperature: "0°C - 10°C",
      description:
        "Tiempo para planificar, preparar y plantar cultivos resistentes al frío en climas más suaves. En zonas frías, enfóquese en la planificación de la huerta de primavera.",
      plants: [
        "Habas",
        "Arvejas",
        "Espinacas",
        "Puerros",
        "Inicios de cultivos de primavera",
      ],
      tips: "Utilice microtuneles o invernaderos para protejer las plantas. Tambien podemos usar manta antihelada para protejer nuestra huerta.",
      image:
        "https://i.imgur.com/VyczvAW.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Guía de Plantación Estacional
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra cuándo plantar diferentes cultivos a lo largo del año para
            obtener los mejores resultados. Seguir el ritmo natural de las
            estaciones mejorará significativamente el éxito de su jardín.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {seasons.map((season) => (
            <Card
              key={season.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={season.image}
                  alt={season.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {season.name}
                </h3>
                <p className="text-gray-600 mb-4">{season.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-green-500" />
                    <span>{season.months}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Thermometer className="h-4 w-4 mr-2 text-red-500" />
                    <span>{season.temperature}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-green-700 mb-1">
                    Qué Plantar:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                    {season.plants.map((plant, index) => (
                      <li key={index}>{plant}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 mb-1">Consejos:</h4>
                  <p className="text-sm text-gray-600">{season.tips}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Consejos Generales para la Plantación Estacional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Rotación de Cultivos
                </h3>
                <p className="text-gray-600">
                  Evite plantar el mismo tipo de cultivo en el mismo lugar cada
                  año. La rotación de cultivos ayuda a prevenir enfermedades y
                  agotamiento de nutrientes.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Microclimas
                </h3>
                <p className="text-gray-600">
                  Identifique microclimas en su jardín (áreas más cálidas, frías
                  o protegidas) y úselos para extender sus temporadas de
                  cultivo.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Mantenga un Diario de su Huerta
                </h3>
                <p className="text-gray-600">
                  Registre sus fechas de siembra, condiciones climáticas y
                  resultados para mejorar la planificación en años futuros.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Thermometer className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Temperatura del Suelo
                </h3>
                <p className="text-gray-600">
                  Muchas semillas requieren temperaturas específicas del suelo
                  para germinar. Use un termómetro de suelo para determinar el
                  momento óptimo para la siembra.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ¿Listo para Planificar su Huerta estacionalmente?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Únase a nuestra comunidad de huerteros para compartir experiencias
            y obtener consejos personalizados para su zona climática específica.
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

export default SeasonalPlantingGuide;
