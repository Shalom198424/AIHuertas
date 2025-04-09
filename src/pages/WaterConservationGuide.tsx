import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplet, CloudRain, Sun, Sprout, Recycle, Shield } from "lucide-react";

const WaterConservationGuide = () => {
  const techniques = [
    {
      id: 1,
      title: "Cosecha de Agua Lluvia",
      description:
        "Instala sistemas de captación pluvial con canaletas y tanques de almacenamiento para uso en riego.",
      impact: "Alto",
      methods: "Barriles, cisternas, zanjas",
      image:
        "https://i.imgur.com/uME0Ho9.jpeg",
    },
    {
      id: 2,
      title: "Riego por Goteo",
      description:
        "Sistema eficiente que aplica agua directamente a las raíces, reduciendo pérdidas por evaporación.",
      impact: "Máximo",
      methods: "Tuberías perforadas, controladores",
      image:
        "https://i.imgur.com/oNdzaoa.jpeg",
    },
    {
      id: 3,
      title: "Mulching o Acolchado",
      description:
        "Cubre el suelo con materia orgánica para retener humedad y reducir riegos hasta un 50%.",
      impact: "Alto",
      methods: "Paja, cortezas, compost",
      image:
        "https://i.imgur.com/SmaN1SI.jpeg",
    },
    {
      id: 4,
      title: "Xerojardinería",
      description:
        "Diseño con plantas nativas y resistentes a sequía que requieren mínimo riego suplementario.",
      impact: "Medio",
      methods: "Plantas autóctonas, gravas",
      image:
        "https://i.imgur.com/s7Id1l1.jpeg",
    },
    {
      id: 5,
      title: "Sensores de Humedad",
      description:
        "Tecnología para regar solo cuando es necesario, evitando el exceso de agua.",
      impact: "Alto",
      methods: "Sensores inteligentes",
      image:
        "https://i.imgur.com/SScxGa0.jpeg",
    },
    {
      id: 6,
      title: "Sistemas de Agua Gris",
      description:
        "Reutiliza agua de lavabos y duchas para riego, con tratamiento básico previo.",
      impact: "Máximo",
      methods: "Filtros, tuberías duales",
      image:
        "https://images.unsplash.com/photo-1614306868776-10c5d662b6a5?w=800&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Gestión Sostenible del Agua
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Técnicas innovadoras para optimizar el uso hídrico en agricultura y jardinería, 
            preservando los recursos naturales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techniques.map((tech) => (
            <Card
              key={tech.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Impacto: {tech.impact}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Recycle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Métodos: {tech.methods}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Principios Hidro-eficientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <CloudRain className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Captación Pluvial
                </h3>
                <p className="text-gray-600">
                  1m² de techo capta 1,000L anuales en zonas con 1000mm de lluvia.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Droplet className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Riego Estratégico
                </h3>
                <p className="text-gray-600">
                  Riega al amanecer usando 50% menos agua que en horas cálidas.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Sprout className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Suelo Vivo
                </h3>
                <p className="text-gray-600">
                  Suelos con materia orgánica retienen 3x más agua que los erosionados.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Sun className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Evapotranspiración
                </h3>
                <p className="text-gray-600">
                  Selecciona plantas con baja ET (consumo hídrico) para tu clima.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ¿Listo para ser un Héroe del Agua?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Únete a nuestra comunidad de huerteros que están
            transformando la forma en que usamos el agua. Comparte tus
            experiencias, aprende de otros y accede a recursos exclusivos.
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

export default WaterConservationGuide;