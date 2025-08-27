import familiaImage from "@/assets/familia-proceso.jpg";

const Historia = () => {
  return (
    <section id="historia" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              Una tradición familiar que nace en las alturas de los Andes peruanos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-earth-800">
                Desde el Corazón de Quiches
              </h3>
              <p className="text-earth-700 leading-relaxed">
                Somos una familia del norte del Perú, de un hermoso pueblito llamado Quiches, 
                ubicado a 3,500 metros sobre el nivel del mar. Aquí, donde el aire es puro y 
                el agua es naturalmente alcalina, hemos decidido emprender con nuestra cervecería 
                artesanal TRINKI.
              </p>
              <p className="text-earth-700 leading-relaxed">
                Toda nuestra familia está involucrada en el proceso de producción. Creemos en 
                mantener vivas las tradiciones artesanales de nuestro pueblo, que es rico en 
                trigo y cebada, ingredientes fundamentales para nuestras cervezas únicas.
              </p>
              <div className="bg-golden-100 p-6 rounded-lg border-l-4 border-golden-500">
                <h4 className="font-bold text-earth-800 mb-2">Nuestra Misión</h4>
                <p className="text-earth-700">
                  Fomentar el empleo local y mantener viva la tradición artesanal, 
                  creando cervezas que representen la esencia de nuestro pueblo andino.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={familiaImage} 
                alt="Familia Trinki trabajando en el proceso de producción"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-earth-800/20 rounded-lg"></div>
              <div className="bg-golden-200 rounded-lg p-8 shadow-lg">
                <h4 className="text-xl font-bold text-earth-800 mb-4">
                  Lo que nos hace únicos
                </h4>
                <ul className="space-y-3 text-earth-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-golden-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ubicación a 3,500 msnm con agua alcalina natural
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-golden-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Proceso 100% artesanal y familiar
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-golden-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ingredientes locales: trigo y cebada de Quiches
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-golden-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Compromiso con la comunidad local
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;