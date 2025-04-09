import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TipCard from "@/components/tips/TipCard";

interface Tip {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  isSaved: boolean;
}

const tipsData: Tip[] = [
  {
    id: "1",
    title: "Diversidad de Cultivos",
    description:
      "Descubre cómo transformar cualquier espacio, desde un balcón urbano hasta un rincón de tu jardín, en un oasis de variedades de verduras.",
    image:
      "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800&q=80",
    category: "Verduras",
    rating: 4.5,
    isSaved: false,
  },
  {
    id: "2",
    title: "Guía de siembra estacional",
    description:
      "Sepa exactamente qué plantar cada temporada con esta guía completa de jardinería estacional para lograr el máximo rendimiento y la salud del jardín.",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    category: "Planificacion",
    rating: 4.7,
    isSaved: false,
  },
  {
    id: "3",
    title: "Compostaje para principiantes",
    description:
      "Comienza tu viaje de compostaje con esta sencilla guía. Convierta los restos de cocina y los desechos del jardín en tierra rica en nutrientes para su jardín.",
    image:
      "https://i.imgur.com/1iKvFyh.jpeg",
    category: "Sostenibilidad",
    rating: 4.3,
    isSaved: false,
  },
  {
    id: "4",
    title: "Elementos esenciales del jardín de hierbas",
    description:
      "Descubra las hierbas esenciales que todo jardinero debe cultivar y cómo mantenerlas para obtener el mejor sabor y propiedades medicinales.",
    image:
      "https://i.imgur.com/wPrW6Tl.jpeg",
    category: "Hierbas",
    rating: 4.8,
    isSaved: true,
  },
  {
    id: "5",
    title: "Control natural de plagas",
    description:
      "Mantenga las plagas alejadas de su jardín utilizando métodos naturales que sean seguros para sus plantas, insectos beneficiosos y el medio ambiente.",
    image:
      "https://i.imgur.com/uDhtOeD.jpeg",
    category: "Mantenimiento",
    rating: 4.6,
    isSaved: true,
  },
  {
    id: "6",
    title: "Técnicas de conservación del agua",
    description:
      "Aprenda métodos efectivos de conservación de agua para mantener su jardín próspero incluso durante períodos secos y al mismo tiempo ser responsable con el medio ambiente.",
    image:
      "https://i.imgur.com/SScxGa0.jpeg",
    category: "Sostenibilidad",
    rating: 4.4,
    isSaved: false,
  },
];

const Tips = () => {
  const { category } = useParams<{ category: string }>();
  const [savedTips, setSavedTips] = useState<string[]>(
    tipsData.filter((tip) => tip.isSaved).map((tip) => tip.id),
  );

  const filteredTips = category
    ? tipsData.filter(
        (tip) => tip.category.toLowerCase() === category.toLowerCase(),
      )
    : tipsData;

  const handleSaveTip = (id: string) => {
    setSavedTips((prev) =>
      prev.includes(id) ? prev.filter((tipId) => tipId !== id) : [...prev, id],
    );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {category ? `${category} Tips` : "Todos los consejos de huerta"}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubra consejos y técnicas prácticas para ayudar a que su huerta prospere  
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map((tip) => (
          <TipCard
            key={tip.id}
            id={tip.id}
            title={tip.title}
            description={tip.description}
            image={tip.image}
            category={tip.category}
            rating={tip.rating}
            isSaved={savedTips.includes(tip.id)}
            onSave={() => handleSaveTip(tip.id)}
            onClick={() => console.log(`Navigating to tip ${tip.id}`)}
          />
        ))}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700">
            No tips found
          </h2>
          <p className="text-gray-500 mt-2">
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  );
};

export default Tips;
