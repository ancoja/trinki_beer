const Proceso = () => {
  const pasos = [
    {
      numero: "01",
      titulo: "Selección de Ingredientes",
      descripcion: "Utilizamos cebada y trigo cultivados localmente en Quiches, aprovechando la calidad de nuestros suelos andinos."
    },
    {
      numero: "02", 
      titulo: "Agua Alcalina",
      descripcion: "El agua natural de Quiches, a 3,500 msnm, es naturalmente alcalina, lo que le da un carácter único a nuestras cervezas."
    },
    {
      numero: "03",
      titulo: "Proceso Familiar",
      descripcion: "Toda la familia participa en el proceso de producción, manteniendo vivas las tradiciones artesanales."
    },
    {
      numero: "04",
      titulo: "Fermentación Artesanal",
      descripcion: "Utilizamos métodos tradicionales de fermentación que respetan los tiempos naturales del proceso."
    },
    {
      numero: "05",
      titulo: "Control de Calidad",
      descripcion: "Cada lote es cuidadosamente supervisado para mantener los estándares de calidad que nos caracterizan."
    },
    {
      numero: "06",
      titulo: "Producto Final",
      descripcion: "El resultado es una cerveza artesanal única que refleja la esencia de los Andes peruanos."
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              Cada paso de nuestro proceso está diseñado para preservar la tradición 
              y garantizar la máxima calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pasos.map((paso, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-earth-800 font-bold text-lg">{paso.numero}</span>
                    </div>
                    <h3 className="text-lg font-bold text-earth-800">{paso.titulo}</h3>
                  </div>
                  <p className="text-earth-600 leading-relaxed">{paso.descripcion}</p>
                </div>
                
                {/* Conectores para vista desktop */}
                {index < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-golden-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-golden-100 rounded-lg p-8 text-center border-l-4 border-golden-500">
            <h3 className="text-2xl font-bold text-earth-800 mb-4">
              Tradición y Calidad en Cada Gota
            </h3>
            <p className="text-earth-700 max-w-3xl mx-auto leading-relaxed">
              Nuestro compromiso va más allá de producir cerveza. Queremos que cada botella 
              de TRINKI represente el orgullo de nuestro pueblo, la riqueza de nuestras tradiciones 
              y la calidad que solo los Andes pueden brindar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proceso;