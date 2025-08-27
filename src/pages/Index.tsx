import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Productos from "@/components/Productos";
import ProcesoCompra from "@/components/ProcesoCompra";
import Proceso from "@/components/Proceso";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  const [isProcesoCompraOpen, setIsProcesoCompraOpen] = useState(false);

  const handleOpenProcesoCompra = () => {
    setIsProcesoCompraOpen(true);
  };

  const handleCloseProcesoCompra = () => {
    setIsProcesoCompraOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onOpenProcesoCompra={handleOpenProcesoCompra} />
      <Historia />
      <Productos onOpenProcesoCompra={handleOpenProcesoCompra} />
      <Proceso />
      <Contacto />
      <Footer />
      <ProcesoCompra isOpen={isProcesoCompraOpen} onClose={handleCloseProcesoCompra} />
    </div>
  );
};

export default Index;
