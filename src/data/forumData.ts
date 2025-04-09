export interface ForumThread {
    id: string;
    title: string;
    category: string;
    replies: number;
    participants: number;
    lastActivity: string;
    preview: string;
    isSticky?: boolean;
  }
  
  export const forumData: ForumThread[] = [
    {
      id: "1",
      title: "¿Cómo mejorar la calidad del suelo de forma natural?",
      category: "soil-composting",
      replies: 24,
      participants: 12,
      lastActivity: "hace 2 horas",
      preview:
        "He estado tratando de mejorar la tierra de mi jardín sin productos químicos. ¿Alguien ha tenido éxito con los posos de café o las cáscaras de huevo?",
      isSticky: true,
    },
    {
      id: "2",
      title: "¿Las mejores verduras para principiantes?",
      category: "getting-started",
      replies: 18,
      participants: 9,
      lastActivity: "hace 5 horas",
      preview:
        "Soy nuevo en la jardinería y quiero comenzar con verduras fáciles. ¿Cuáles son tus recomendaciones para un jardinero primerizo?",
    },
    {
      id: "3",
      title: "Tratar las plagas de la huerta de forma agroecológica",
      category: "pest-control",
      replies: 32,
      participants: 15,
      lastActivity: "hace 1 día",
      preview:
        "Mis plantas de tomate están siendo atacadas por arañuelas. Buscar soluciones agroecológicas que no dañen a los insectos beneficiosos.",
    },
    {
      id: "4",
      title: "Consejos de jardinería de invierno para climas fríos",
      category: "seasonal",
      replies: 14,
      participants: 8,
      lastActivity: "hace 2 días",
      preview:
        "¿Qué verduras puedo cultivar durante el invierno en la zona de Bahia Blanca? Buscando variedades resistentes al frío y métodos de protección.",
    },
    {
      id: "5",
      title: "Jardinería en macetas para apartamentos",
      category: "urban-gardening",
      replies: 27,
      participants: 13,
      lastActivity: "hace 3 días",
      preview:
        "Vivo en un pequeño apartamento con un balcón que recibe unas 6 horas de sol. ¿Cuáles son las mejores plantas para cultivar en contenedores?",
    },
    {
      id: "6",
      title: "Discusión de la guía de plantación complementaria",
      category: "techniques",
      replies: 21,
      participants: 11,
      lastActivity: "hace 4 días",
      preview:
        "Compartamos nuestras experiencias con la siembra complementaria. ¿Qué combinaciones te han funcionado bien y cuáles han fracasado?",
    },
    {
      id: "7",
      title: "Cultivo de hierbas en interiores durante todo el año",
      category: "herbs",
      replies: 16,
      participants: 8,
      lastActivity: "hace 5 días",
      preview:
        "Quiero montar un jardín de hierbas de interior que produzca durante todo el año. ¿Qué iluminación, suelo y variedades funcionan mejor?",
    },
    {
      id: "8",
      title: "Compostaje en espacios reducidos",
      category: "soil-composting",
      replies: 19,
      participants: 7,
      lastActivity: "hace 6 días",
      preview:
        "Buscando consejos sobre compostaje en un pequeño espacio urbano. ¿Alguien ha tenido éxito con el bokashi o el compostaje de lombrices en los apartamentos?",
    },
    {
      id: "9",
      title: "Recolección y almacenamiento de semillas de tu huerta",
      category: "techniques",
      replies: 23,
      participants: 14,
      lastActivity: "hace 1 semana",
      preview:
        "Me gustaría empezar a guardar semillas de mis plantas con mejor rendimiento. ¿Cuál es la mejor manera de recolectarlos, secarlos y almacenarlos para la próxima temporada?",
    },
    {
      id: "10",
      title: "Materiales de construcción de camas elevadas",
      category: "getting-started",
      replies: 29,
      participants: 17,
      lastActivity: "hace 1 semana",
      preview:
        "¿Qué materiales recomiendas para construir camas elevadas? Me preocupan los productos químicos de lixiviación de la madera tratada en el suelo.",
    },
  ];
  