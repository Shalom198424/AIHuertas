import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Star, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface TipCardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  rating?: number;
  isSaved?: boolean;
  onSave?: () => void;
  onClick?: () => void;
}

const TipCard = ({
  id = "1",
  title = "Todos los consejos de jardinería",
  description = "Learn how to grow delicious tomatoes even if you only have a small balcony or patio. These space-saving techniques will help you maximize your harvest.",
  image = "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80",
  category = "Verduras",
  rating = 4.5,
  isSaved = false,
  onSave = () => {},
  onClick = () => {},
}: TipCardProps) => {
  return (
    <Card
      className="w-full max-w-[350px] h-[400px] overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <Badge className="absolute top-3 left-3 bg-green-100 text-green-800 hover:bg-green-200">
          {category}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5"
          onClick={(e) => {
            e.stopPropagation();
            onSave();
          }}
        >
          <Bookmark
            className={cn(
              "h-5 w-5",
              isSaved ? "fill-yellow-400 text-yellow-400" : "text-gray-500",
            )}
          />
        </Button>
      </div>

      <CardHeader className="p-4 pb-2">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center border-t border-gray-100">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-xs"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <Link
            to={
              id === "1"
                ? "/Vegetable-Diversity-Guide"
                : id === "2"
                ? "/seasonal-planting-guide"
                : id === "3"
                ? "/composting-guide"
                : id === "4"
                ? "/herbs-guide"
                : id === "5"
                ? "/pest-control-guide"
                : "/water-conservation-guide"               
            }
            className="text-green-600 hover:text-green-800 font-medium"
          >
            Leer más
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TipCard;
