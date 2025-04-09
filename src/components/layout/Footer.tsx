import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-green-900 text-white py-8 px-4 md:px-8 w-full",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AIHuertas Comunidad</h3>
            <p className="text-green-100 mb-4">
            Un lugar para que los entusiastas de la huerta compartan conocimientos, consejos y se 
            conecten con otros huerteros.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064921710646&locale=es_LA" target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/granjashalombb/" target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Hogar
                </Link>
              </li>
              <li>
                <Link
                  to="/tips"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Consejos
                </Link>
              </li>
              <li>
                <Link
                  to="/forum"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Foro
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Vegetable-Diversity-Guide"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Verduras
                </Link>
              </li>
              <li>
                <Link
                  to="/herbs-guide"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Hierbas
                </Link>
              </li>
              <li>
                <Link
                  to="/tips/flowers"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Flores
                </Link>
              </li>
              <li>
                <Link
                  to="/tips/sustainable"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Huerta Sostenible
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contactenos</h3>
            <div className="space-y-3">
              <p className="flex items-center text-green-100">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:info@gardenhub.com"
                  className="hover:text-white transition-colors"
                >
                  aihuertascomunidad@gmail.com
                </a>
              </p>
              <p className="text-green-100">
              Suscríbase a nuestro boletín para recibir los últimos consejos de huerta y actualizaciones 
              de la comunidad. 
              </p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Tu correo electronico"
                  className="px-3 py-2 text-sm text-gray-900 rounded-l-md focus:outline-none w-full max-w-[200px]"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm rounded-r-md transition-colors">
                  Subscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-100">
          <p>&copy; {currentYear} AI Huertas Comunidad. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
