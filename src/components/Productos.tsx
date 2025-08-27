import tradicionalImage from "@/assets/trinki-tradicional.jpg";
import premiumImage from "@/assets/trinki-premium.jpg";
import especialImage from "@/assets/trinki-especial.jpg";

interface ProductosProps {
  onOpenProcesoCompra: () => void;
}

const Productos = ({ onOpenProcesoCompra }: ProductosProps) => {
  const productos = [
    {
      nombre: "Trinki Malta",
      descripcion: "Cerveza artesanal oscura con malta tostada, elaborada a 3,000 msnm",
      caracteristicas: ["Agua pura de Quiches", "Malta tostada", "Sabor intenso y maltoso"],
      imagen: tradicionalImage,
      disponible: ["Botella 330ml", "Pack x6", "Caja x12"]
    },
    {
      nombre: "Trinki Rubia",
      descripcion: "Cerveza dorada suave y refrescante, perfecta para cualquier ocasión",
      caracteristicas: ["Agua alcalina de altura", "Sabor equilibrado", "Refrescante"],
      imagen: premiumImage,
      disponible: ["Botella 330ml", "Pack x6", "Caja x12"]
    },
    {
      nombre: "Trinki Malta Especial",
      descripcion: "Nuestra cerveza insignia con carácter andino y tradición ancestral",
      caracteristicas: ["Hecha en altura", "Receta tradicional", "Edición premium"],
      imagen: especialImage,
      disponible: ["Botella 330ml", "Pack x6", "Caja x12"]
    }
  ];

  const marketplaces = [
    { nombre: "Juntoz.com", descripcion: "Gran visibilidad nacional" },
    { nombre: "MercadoLibre Perú", descripcion: "Marketplace líder" },
    { nombre: "Rappi", descripcion: "Delivery express" },
    { nombre: "LaTienda.pe", descripcion: "Productos artesanales" }
  ];

  const metodosEntrega = [
    { tipo: "Lima Metropolitana", tiempo: "24-48h", costo: "S/ 15" },
    { tipo: "Ciudades principales", tiempo: "2-3 días", costo: "S/ 25" },
    { tipo: "Recojo en feria", tiempo: "Inmediato", costo: "Gratis" },
    { tipo: "Envío nacional", tiempo: "3-5 días", costo: "S/ 35" }
  ];

  return (
    <section id="productos" className="py-20 bg-earth-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-golden-400 mb-6">
              Nuestros Productos
            </h2>
            <p className="text-xl text-earth-200 max-w-3xl mx-auto">
              Tres presentaciones únicas, cada una con el sello distintivo de los Andes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <div key={index} className="bg-earth-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-golden-400 mb-3">
                    {producto.nombre}
                  </h3>
                  <p className="text-earth-200 mb-4 leading-relaxed">
                    {producto.descripcion}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-earth-100">Características:</h4>
                    <ul className="space-y-1">
                      {producto.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="text-earth-300 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-golden-500 rounded-full mr-2"></span>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comercialización Digital */}
          <div className="mt-16 space-y-12">
            {/* Marketplaces */}
            <div className="bg-earth-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-golden-400 mb-6 text-center">Encuéntranos en</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {marketplaces.map((marketplace, index) => (
                  <div key={index} className="bg-earth-600 rounded-lg p-4 text-center hover:bg-earth-500 transition-colors">
                    <h4 className="font-semibold text-earth-100 mb-2">{marketplace.nombre}</h4>
                    <p className="text-earth-300 text-sm">{marketplace.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Métodos de Entrega */}
            <div className="bg-earth-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-golden-400 mb-6 text-center">Opciones de Entrega</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metodosEntrega.map((entrega, index) => (
                  <div key={index} className="bg-earth-600 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-earth-100 mb-2">{entrega.tipo}</h4>
                    <p className="text-earth-300 text-sm mb-1">Tiempo: {entrega.tiempo}</p>
                    <p className="text-golden-400 font-bold">{entrega.costo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Métodos de Pago */}
            <div className="bg-earth-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-golden-400 mb-6 text-center">Métodos de Pago</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-earth-600 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-earth-100 mb-2">Yape & Plin</h4>
                  <p className="text-earth-300 text-sm">Pago inmediato</p>
                </div>
                <div className="bg-earth-600 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-earth-100 mb-2">Tarjetas</h4>
                  <p className="text-earth-300 text-sm">Visa, Mastercard</p>
                </div>
                <div className="bg-earth-600 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-earth-100 mb-2">Transferencia</h4>
                  <p className="text-earth-300 text-sm">Depósito bancario</p>
                </div>
                <div className="bg-earth-600 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-earth-100 mb-2">Contra entrega</h4>
                  <p className="text-earth-300 text-sm">Pago en efectivo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-golden-400/10 rounded-xl p-8 border border-golden-400/30">
              <h3 className="text-2xl font-bold text-golden-400 mb-4">¡Haz tu Pedido!</h3>
              <p className="text-earth-200 mb-6">
                ¿Interesado en nuestras cervezas artesanales? Contáctanos para disponibilidad y pedidos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenProcesoCompra}
                  className="bg-golden-500 hover:bg-golden-600 text-earth-800 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  WhatsApp Pedidos
                </button>
                <button 
                  onClick={onOpenProcesoCompra}
                  className="border-2 border-golden-400 text-golden-400 hover:bg-golden-400 hover:text-earth-800 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contactar por Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos;