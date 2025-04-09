import React from "react";
import { MessageSquare, Users, Clock, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ForumThreadProps {
  id: string;
  title: string;
  category: string;
  replies: number;
  participants: number;
  lastActivity: string;
  preview: string;
}

const ForumThread = ({
  title = "¿Cómo mejorar la calidad del suelo de forma natural?",
  category = "Suelo y Compostaje",
  replies = 24,
  participants = 12,
  lastActivity = "Hace 2 horas",
  preview = "He estado tratando de mejorar la tierra de mi jardín sin productos químicos. ¿Alguien ha tenido éxito con los posos de café o las cáscaras de huevo?",
}: Partial<ForumThreadProps>) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold hover:text-green-600 transition-colors cursor-pointer">
              {title}
            </CardTitle>
            <Badge
              variant="secondary"
              className="mt-1 bg-green-100 text-green-800"
            >
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {preview}
        </CardDescription>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{replies} respuestas</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{participants} participantes</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{lastActivity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ForumPreviewProps {
  threads?: ForumThreadProps[];
  title?: string;
  description?: string;
}

const ForumPreview = ({
  threads = [
    {
      id: "1",
      title: "¿Las mejores verduras para principiantes?",
      category: "Empezar",
      replies: 18,
      participants: 9,
      lastActivity: "Hace 5 horas",
      preview:
        "Soy nuevo en huerta y quiero comenzar con verduras fáciles. ¿Cuáles son tus recomendaciones para un huertero primerizo?",
    },
    {
      id: "2",
      title: "Tratar las plagas de la huerta de forma agroecológica",
      category: "Control de plagas",
      replies: 32,
      participants: 15,
      lastActivity: "Hace 1 dia",
      preview:
        "Mis plantas de tomate están siendo atacadas por arañuelas. Buscar soluciones orgánicas que no dañen a los insectos beneficiosos.",
    },
  ],
  title = "Foro de la Comunidad AIHuertas",
  description = "Únase a la conversación con otros entusiastas de la huerta. Explore las conversaciones más recientes o inicie su propio hilo.",
}: ForumPreviewProps) => {
  return (
    <section className="py-12 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {threads.map((thread) => (
            <ForumThread key={thread.id} {...thread} />
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <a href="/forum">Visitar el Foro</a>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForumPreview;
