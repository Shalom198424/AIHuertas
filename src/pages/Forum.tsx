import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MessageSquare, Users, Clock, Plus, Filter } from "lucide-react";

import ForumThread from "@/components/forum/ForumThread";
import NewThreadForum from "@/components/forum/NewThreadForum";
import { forumData } from "@/data/forumData";

const Forum = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isNewThreadModalOpen, setIsNewThreadModalOpen] = useState(false);
  const [threads, setThreads] = useState(forumData);

  const categories = [
    { id: "all", name: "Todos los temas" },
    { id: "getting-started", name: "Empezar" },
    { id: "soil-composting", name: "Suelo y compostaje" },
    { id: "pest-control", name: "Control de plagas" },
    { id: "seasonal", name: "Estacional" },
    { id: "urban-gardening", name: "Huerta urbana" },
    { id: "techniques", name: "Técnicas" },
    { id: "herbs", name: "Hierbas" },
  ];

  const filteredThreads = threads.filter((thread) => {
    if (
      activeCategory !== "all" &&
      thread.category.toLowerCase().replace(" & ", "-").replace(" ", "-") !==
        activeCategory
    ) {
      return false;
    }

    if (
      searchQuery &&
      !thread.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !thread.preview.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const handleCreateThread = (threadData: {
    title: string;
    content: string;
    category: string;
  }) => {
    const newThread = {
      id: `thread-${Date.now()}`,
      title: threadData.title,
      category: threadData.category,
      replies: 0,
      participants: 1,
      lastActivity: "Just now",
      preview:
        threadData.content.substring(0, 150) +
        (threadData.content.length > 150 ? "..." : ""),
      isSticky: false,
    };

    // Add the new thread to the beginning of the threads array
    setThreads([newThread, ...threads]);
    setIsNewThreadModalOpen(false);

    // Show the thread in the forum instead of navigating to it
    // This will keep the user on the forum page with the new thread visible
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Foro de la Comunidad AIHuertas
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Bienvenido al foro de AIHuertas, un lugar para compartir tus
          experiencias, hacer preguntas y aprender sobre huerta y cultivo
          urbano. Únete a la conversación y conecta con otros entusiastas huerteros.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium mb-3">Categorías</h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${activeCategory === category.id ? "bg-green-100 text-green-800" : "hover:bg-gray-100"}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium mb-3">Estadísticas del foro</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Hilos totales:</span>
                <span className="font-medium">{threads.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total de respuestas:</span>
                <span className="font-medium">
                  {threads.reduce((sum, thread) => sum + thread.replies, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Miembros activos:</span>
                <span className="font-medium">342</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Miembro reciente:</span>
                <span className="font-medium text-green-600">
                  AmoCultivar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Busqueda de hilos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filtro</span>
                </Button>
                <Button
                  className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                  onClick={() => setIsNewThreadModalOpen(true)}
                >
                  <Plus className="h-4 w-4" />
                  <span>Nuevo Hilo</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredThreads.length > 0 ? (
              filteredThreads.map((thread) => (
                <ForumThread
                  key={thread.id}
                  {...thread}
                  onClick={() => navigate(`/forum/thread/${thread.id}`)}
                />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  No se encontraron hilos
                </h3>
                <p className="text-gray-500 mb-4">
                  Intenta ajustar tu búsqueda o filtros
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setIsNewThreadModalOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Crear un nuevo hilo
                </Button>
              </div>
            )}
          </div>

          {filteredThreads.length > 0 && (
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="outline" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="mx-1">
                Proximo
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* New Thread Modal */}
      <NewThreadForum
        isOpen={isNewThreadModalOpen}
        onClose={() => setIsNewThreadModalOpen(false)}
        onSubmit={handleCreateThread}
      />
    </div>
  );
};

export default Forum;
