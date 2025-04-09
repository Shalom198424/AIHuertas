import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TipCard from "../tips/TipCard";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { motion } from "framer-motion";

interface Tip {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  isSaved: boolean;
}

interface FeaturedTipsProps {
  tips?: Tip[];
  title?: string;
  description?: string;
}

const FeaturedTips = ({
  tips = [
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
        "Sepa exactamente qué plantar cada temporada con esta guía completa de huerta estacional para lograr el máximo rendimiento y la salud de su huerta.",
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
        "Comienza tu viaje de compostaje con esta sencilla guía. Convierta los restos de cocina y los desechos del jardin en tierra rica en nutrientes para su huerta.",
      image:
        "https://i.imgur.com/1iKvFyh.jpeg",
      category: "Sostenibilidad",
      rating: 4.3,
      isSaved: false,
    },
  ],
  title = "Consejos destacados de Huerta",
  description = "Descubra consejos y técnicas prácticas para ayudar a que su huerta prospere",
}: FeaturedTipsProps) => {
  const [savedTips, setSavedTips] = useState<string[]>(
    tips.filter((tip) => tip.isSaved).map((tip) => tip.id),
  );

  const categories = ["Todo", ...new Set(tips.map((tip) => tip.category))];
  const [activeCategory, setActiveCategory] = useState("Todo");

  const filteredTips =
    activeCategory === "Todo"
      ? tips
      : tips.filter((tip) => tip.category === activeCategory);

  const handleSaveTip = (id: string) => {
    setSavedTips((prev) =>
      prev.includes(id) ? prev.filter((tipId) => tipId !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Tabs defaultValue="Todo" className="w-full md:w-auto">
            <TabsList className="bg-white border border-gray-200 p-1 overflow-x-auto flex w-full md:w-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-4 py-2 whitespace-nowrap"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex items-center mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filtro</span>
            </Button>
            <div className="flex ml-2">
              <Button variant="outline" size="icon" className="mr-1">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: parseInt(tip.id) * 0.1 }}
            >
              <TipCard
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
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="px-6">
            <a href="/tips">Ver todos los consejos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTips;
