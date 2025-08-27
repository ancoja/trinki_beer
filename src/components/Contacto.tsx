import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-earth-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-golden-400 mb-6">
              Contacto
            </h2>
            <p className="text-xl text-earth-200 max-w-3xl mx-auto">
              ¿Quieres conocer más sobre TRINKI? ¡Contáctanos!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-golden-400 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-earth-800" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-100 mb-1">Ubicación</h4>
                    <p className="text-earth-300">
                      Quiches, Perú<br />
                      3,500 metros sobre el nivel del mar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-earth-800" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-100 mb-1">Teléfono</h4>
                    <p className="text-earth-300">
                      Contáctanos a través de nuestras redes sociales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-earth-800" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-100 mb-1">Email</h4>
                    <p className="text-earth-300">
                      info@trinki.pe
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-earth-600">
                <h4 className="font-semibold text-earth-100 mb-4">Síguenos en Redes Sociales</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 bg-earth-700 hover:bg-golden-500 text-earth-200 hover:text-earth-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 bg-earth-700 hover:bg-golden-500 text-earth-200 hover:text-earth-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                </div>
                <p className="text-earth-300 text-sm mt-2">
                  TikTok: @cervezas.trinki
                </p>
              </div>
            </div>

            <div className="bg-earth-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-golden-400 mb-6">
                Envíanos un Mensaje
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-earth-100 font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-earth-600 border border-earth-500 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:border-golden-400"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-earth-100 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-earth-600 border border-earth-500 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:border-golden-400"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-earth-100 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-earth-600 border border-earth-500 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:border-golden-400 resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-golden-500 hover:bg-golden-600 text-earth-800 font-semibold py-3 rounded-lg transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;