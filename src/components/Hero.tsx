import heroImage from "@/assets/hero-mountains.jpg";

interface HeroProps {
  onOpenProcesoCompra: () => void;
}

const Hero = ({ onOpenProcesoCompra }: HeroProps) => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-earth-800/50 to-earth-900/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-golden-400">
          TRINKI
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-earth-100">
          Cerveza Artesanal de los Andes
        </p>
        <p className="text-lg mb-8 text-earth-200 max-w-2xl mx-auto">
          Desde Quiches, Perú - A 3,500 metros sobre el nivel del mar, 
          creamos cerveza artesanal única con agua alcalina de los Andes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onOpenProcesoCompra}
            className="bg-golden-500 hover:bg-golden-600 text-earth-800 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            ¡Haz tu Pedido!
          </button>
          <button className="border-2 border-golden-400 text-golden-400 hover:bg-golden-400 hover:text-earth-800 px-8 py-3 rounded-lg font-semibold transition-colors">
            Ver Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;