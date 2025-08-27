import { Menu, X, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-earth-700/95 backdrop-blur-sm border-b border-earth-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-golden-400 rounded-full flex items-center justify-center">
              <span className="text-earth-800 font-bold text-lg">T</span>
            </div>
            <span className="text-earth-100 text-xl font-bold">TRINKI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-earth-100 hover:text-golden-400 transition-colors">
              Inicio
            </a>
            <a href="#historia" className="text-earth-100 hover:text-golden-400 transition-colors">
              Historia
            </a>
            <a href="#productos" className="text-earth-100 hover:text-golden-400 transition-colors">
              Productos
            </a>
            <a href="#proceso" className="text-earth-100 hover:text-golden-400 transition-colors">
              Proceso
            </a>
            <a href="#contacto" className="text-earth-100 hover:text-golden-400 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-earth-100 hover:text-golden-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-earth-100 hover:text-golden-400 transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-earth-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-earth-600">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#inicio" className="text-earth-100 hover:text-golden-400 transition-colors">
                Inicio
              </a>
              <a href="#historia" className="text-earth-100 hover:text-golden-400 transition-colors">
                Historia
              </a>
              <a href="#productos" className="text-earth-100 hover:text-golden-400 transition-colors">
                Productos
              </a>
              <a href="#proceso" className="text-earth-100 hover:text-golden-400 transition-colors">
                Proceso
              </a>
              <a href="#contacto" className="text-earth-100 hover:text-golden-400 transition-colors">
                Contacto
              </a>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-earth-100 hover:text-golden-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-earth-100 hover:text-golden-400 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;