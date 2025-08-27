import { Facebook, Instagram, Heart, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-900 text-earth-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-golden-400 rounded-full flex items-center justify-center">
                  <span className="text-earth-800 font-bold text-lg">T</span>
                </div>
                <span className="text-earth-100 text-xl font-bold">TRINKI</span>
              </div>
              <p className="text-earth-300 leading-relaxed mb-4">
                Cerveza artesanal de los Andes, creada con amor familiar en Quiches, Perú. 
                A 3,500 metros sobre el nivel del mar, donde el agua alcalina y la tradición 
                se encuentran para crear algo único.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-earth-300 hover:text-golden-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-earth-300 hover:text-golden-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-earth-300 hover:text-golden-400 transition-colors">
                  <Music size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-earth-100 mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-earth-300 hover:text-golden-400 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#historia" className="text-earth-300 hover:text-golden-400 transition-colors">
                    Historia
                  </a>
                </li>
                <li>
                  <a href="#productos" className="text-earth-300 hover:text-golden-400 transition-colors">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="text-earth-300 hover:text-golden-400 transition-colors">
                    Proceso
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-earth-300 hover:text-golden-400 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-earth-100 mb-4">Contacto</h4>
              <div className="space-y-2 text-earth-300">
                <p>Quiches, Perú</p>
                <p>3,500 msnm</p>
                <p>info@trinki.pe</p>
                <p className="text-sm">TikTok: @cervezas.trinki</p>
                <div className="mt-4 p-3 bg-golden-400/10 rounded-lg border border-golden-400/30">
                  <p className="text-golden-400 font-semibold text-sm">¡Haz tu pedido!</p>
                  <p className="text-earth-300 text-xs mt-1">Contáctanos para disponibilidad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-earth-700 mt-8 pt-8 text-center">
            <p className="text-earth-400 flex items-center justify-center">
              Hecho con <Heart className="mx-2 text-golden-400" size={16} /> en los Andes del Perú
            </p>
            <p className="text-earth-500 text-sm mt-2">
              © 2024 TRINKI. Cervecería Artesanal de Quiches. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;