import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Bookmark, Share2 } from "lucide-react";

const TipDetail = () => {
  const { id } = useParams<{ id: string }>();
  // This would normally come from an API or database
  const tipDetails = {
    id: id || "1",
    title: "Cultivo de tomates",
    description:
      "Aprenda a cultivar deliciosos tomates incluso si solo tiene un pequeño balcón o patio.",
    content: `
      <h2>Primeros pasos con los tomates</h2>
      <p>Los tomates son una de las verduras más gratificantes para cultivar tanto en tierra como en contenedores. Con la variedad, el suelo y el cuidado adecuados, puede cosechar tomates frescos durante toda la temporada incluso en los espacios más pequeños.</p>
      
      <h3>Selección de variedades de tomate</h3>
      <p>Elegir una variedad de Cherrys nos ayuda a lograr frutos prontamente ademas de ser una variedad rustica.</p>
      
      <h3>Suelo y Nutricion</h3>
      <p>Un suelo rico en materia organica es clave para lograr una excelente salud de nuestras plantas y en consecuencia frutos.</p>
      
      <h3>Consejos de riego</h3>
      <p>Humedad constante. Evite mantener la tierra empapada. Una capa de mantillo en la parte superior puede ayudar a retener la humedad.</p>
      
      <h3>Tutorado</h3>
      <p>Incluso las variedades compactas se benefician de cierto apoyo. Es fundamental tutorar para mantener las plantas en posición vertical y mejorar la circulación del aire.</p>
      
      <h3>Cosecha</h3>
      <p>La cosecha regular fomenta una mayor producción.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=1200&q=80",
    category: "Verduras",
    rating: 4.5,
    author: "AIHuertas",
    publishDate: "28 de marzo 2025",
    readTime: "8 min de lectura",
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/tips" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Consejos
          </Link>
        </Button>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {tipDetails.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="mr-4">Por {tipDetails.author}</span>
              <span className="mr-4">{tipDetails.publishDate}</span>
              <span className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                {tipDetails.rating.toFixed(1)}
              </span>
              <span className="ml-4">{tipDetails.readTime}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-lg overflow-hidden">
        <img
          src={tipDetails.image}
          alt={tipDetails.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="prose prose-green max-w-none">
        <p className="text-xl text-gray-700 mb-8">{tipDetails.description}</p>
        <div dangerouslySetInnerHTML={{ __html: tipDetails.content }} />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Consejos relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-medium mb-2">Control de plagas agroecologico para tomates</h4>
            <p className="text-gray-600 text-sm">
            Mantenga sus plantas de tomate saludables con estos métodos naturales de control de plagas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetail;
