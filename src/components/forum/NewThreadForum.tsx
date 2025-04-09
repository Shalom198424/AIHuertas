import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useForum } from "@/contexts/ForumContext";


interface NewThreadForum {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (threadData: {
    title: string;
    content: string;
    category: string;
  }) => void;
}

const NewThreadForum = ({ isOpen, onClose, onSubmit }: NewThreadForum) => {
  const navigate = useNavigate();
  const { addThread } = useForum();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !category) return;

    setIsSubmitting(true);

    try {
      // Call the onSubmit function passed from the parent component
      onSubmit({ title, content, category });

      // Reset the form
      resetForm();

      // Close the dialog
      onClose();

      // Navigate to the forum page
      navigate("/forum");
    } catch (error) {
      console.error("Error creating thread:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Crear nuevo hilo</DialogTitle>
          <DialogDescription>
            Comparta sus preguntas o experiencias de huerta con la comunidad.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Introduzca un título descriptivo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categoría</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General Discussion">
                Discusión General
                </SelectItem>
                <SelectItem value="Getting Started">Empezar</SelectItem>
                <SelectItem value="Soil & Composting">
                  Suelo y compostaje
                </SelectItem>
                <SelectItem value="Pest Control">Control de plagas</SelectItem>
                <SelectItem value="Seasonal">Estacional</SelectItem>
                <SelectItem value="Urban Gardening">Huerta urbana</SelectItem>
                <SelectItem value="Techniques">Técnicas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenido</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describa su pregunta o comparta su experiencia en detalle"
              rows={8}
              required
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetForm();
                onClose();
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? "Creating..." : "Crear Hilo"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewThreadForum;
