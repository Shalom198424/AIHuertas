import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Bienvenidos a la Comunidad AIHuertas",
  subtitle = "Únase a nuestra comunidad de entusiastas huerteros para compartir conocimientos, obtener consejos y crecer juntos.",
  ctaText = "Explora los Consejos",
  ctaLink = "/tips",
  backgroundImage = "https://i.imgur.com/eQEuFVw.jpeg",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[500px] bg-green-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className={cn(
              "bg-green-600 hover:bg-green-700 text-white",
              "transition-all duration-300 ease-in-out transform hover:scale-105",
            )}
            onClick={onCtaClick}
            asChild
          >
            <a href={ctaLink}>{ctaText}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={cn(
              "bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20",
              "transition-all duration-300 ease-in-out transform hover:scale-105",
            )}
            asChild
          >
            <a href="/forum">Únete a la Comunidad</a>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900/40 to-transparent" />
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
    </div>
  );
};

export default HeroSection;
