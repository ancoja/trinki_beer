import { useState } from "react";
import { Package, Search, ShoppingCart, CreditCard, Truck, Gift, RotateCcw, Headphones, ChevronRight, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import tradicionalImage from "@/assets/trinki-tradicional.jpg";
import premiumImage from "@/assets/trinki-premium.jpg";
import especialImage from "@/assets/trinki-especial.jpg";

interface ProcesoCompraProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProcesoCompra = ({ isOpen, onClose }: ProcesoCompraProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    productos: [] as any[],
    tipoNegocio: "",
    metodoPago: "",
    tipoEnvio: "",
    datosEntrega: {
      nombre: "",
      direccion: "",
      telefono: "",
      email: ""
    },
    comentarios: ""
  });

  const productos = [
    {
      id: 1,
      nombre: "Trinki Malta",
      precio: 25,
      imagen: tradicionalImage,
      descripcion: "Cerveza artesanal oscura con malta tostada, elaborada a 3,000 msnm",
      disponible: ["Botella 330ml", "Pack x6", "Caja x12"]
    },
    {
      id: 2,
      nombre: "Trinki Rubia",
      precio: 30,
      imagen: premiumImage,
      descripcion: "Cerveza dorada suave y refrescante, perfecta para cualquier ocasión",
      disponible: ["Botella 330ml", "Pack x6", "Caja x12"]
    },
    {
      id: 3,
      nombre: "Trinki Malta Especial",
      precio: 35,
      imagen: especialImage,
      descripcion: "Nuestra cerveza insignia con carácter andino y tradición ancestral",
      disponible: ["Botella 330ml", "Pack x6", "Caja x12"]
    }
  ];

  const steps = [
    { number: 1, title: "Inventario", icon: Package },
    { number: 2, title: "Navegación", icon: Search },
    { number: 3, title: "Selección", icon: ShoppingCart },
    { number: 4, title: "Pago", icon: CreditCard },
    { number: 5, title: "Envío", icon: Truck },
    { number: 6, title: "Entrega", icon: Gift },
    { number: 7, title: "Devolución", icon: RotateCcw },
    { number: 8, title: "Atención al Cliente", icon: Headphones }
  ];

  const nextStep = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addProducto = (producto: any, cantidad: number) => {
    const existingIndex = orderData.productos.findIndex(p => p.id === producto.id);
    if (existingIndex >= 0) {
      const newProductos = [...orderData.productos];
      newProductos[existingIndex].cantidad += cantidad;
      setOrderData({...orderData, productos: newProductos});
    } else {
      setOrderData({
        ...orderData,
        productos: [...orderData.productos, {...producto, cantidad}]
      });
    }
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1: // Inventario
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Selecciona tus productos</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {productos.map((producto) => (
                <div key={producto.id} className="border rounded-lg p-4">
                  <img src={producto.imagen} alt={producto.nombre} className="w-full h-32 object-cover rounded mb-3" />
                  <h4 className="font-semibold text-earth-800">{producto.nombre}</h4>
                  <p className="text-sm text-earth-600 mb-2">{producto.descripcion}</p>
                  <p className="text-lg font-bold text-golden-600">S/ {producto.precio}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Input type="number" placeholder="Cantidad" min="1" className="w-20" id={`cantidad-${producto.id}`} />
                    <Button onClick={() => {
                      const cantidad = parseInt((document.getElementById(`cantidad-${producto.id}`) as HTMLInputElement).value);
                      if (cantidad > 0) addProducto(producto, cantidad);
                    }} size="sm">Agregar</Button>
                  </div>
                </div>
              ))}
            </div>
            {orderData.productos.length > 0 && (
              <div className="bg-golden-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Productos seleccionados:</h4>
                {orderData.productos.map((p, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{p.nombre} x{p.cantidad}</span>
                    <span>S/ {p.precio * p.cantidad}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 2: // Navegación
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Tipo de negocio</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {["Bar/Restaurante", "Hotel", "Tienda Gourmet", "Evento Especial"].map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => setOrderData({...orderData, tipoNegocio: tipo})}
                  className={`p-4 border rounded-lg text-left ${orderData.tipoNegocio === tipo ? 'border-golden-500 bg-golden-50' : 'border-earth-200'}`}
                >
                  {tipo}
                </button>
              ))}
            </div>
          </div>
        );

      case 3: // Selección
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Confirma tu selección</h3>
            <div className="bg-earth-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Resumen del pedido:</h4>
              <div className="space-y-2 mb-4">
                <p><strong>Tipo de negocio:</strong> {orderData.tipoNegocio}</p>
                <p><strong>Productos:</strong></p>
                {orderData.productos.map((p, idx) => (
                  <div key={idx} className="ml-4 flex justify-between">
                    <span>{p.nombre} x{p.cantidad}</span>
                    <span>S/ {p.precio * p.cantidad}</span>
                  </div>
                ))}
                <div className="border-t pt-2 font-bold">
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span>S/ {orderData.productos.reduce((total, p) => total + (p.precio * p.cantidad), 0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4: // Pago
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Método de pago</h3>
            <div className="space-y-3">
              {[
                "Transferencia bancaria",
                "Yape/Plin",
                "Pago a 30 días (clientes recurrentes)",
                "Efectivo contra entrega"
              ].map((metodo) => (
                <button
                  key={metodo}
                  onClick={() => setOrderData({...orderData, metodoPago: metodo})}
                  className={`w-full p-3 border rounded-lg text-left ${orderData.metodoPago === metodo ? 'border-golden-500 bg-golden-50' : 'border-earth-200'}`}
                >
                  {metodo}
                </button>
              ))}
            </div>
          </div>
        );

      case 5: // Envío
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Tipo de envío</h3>
            <div className="space-y-3">
              {[
                { tipo: "Estándar (48-72h)", precio: 15 },
                { tipo: "Express (24h)", precio: 25 },
                { tipo: "Recojo en tienda", precio: 0 }
              ].map((envio) => (
                <button
                  key={envio.tipo}
                  onClick={() => setOrderData({...orderData, tipoEnvio: envio.tipo})}
                  className={`w-full p-3 border rounded-lg text-left ${orderData.tipoEnvio === envio.tipo ? 'border-golden-500 bg-golden-50' : 'border-earth-200'}`}
                >
                  <div className="flex justify-between">
                    <span>{envio.tipo}</span>
                    <span>{envio.precio > 0 ? `S/ ${envio.precio}` : 'Gratis'}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 6: // Entrega
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Datos de entrega</h3>
            <div className="space-y-4">
              <Input
                placeholder="Nombre completo"
                value={orderData.datosEntrega.nombre}
                onChange={(e) => setOrderData({
                  ...orderData,
                  datosEntrega: {...orderData.datosEntrega, nombre: e.target.value}
                })}
              />
              <Input
                placeholder="Dirección completa"
                value={orderData.datosEntrega.direccion}
                onChange={(e) => setOrderData({
                  ...orderData,
                  datosEntrega: {...orderData.datosEntrega, direccion: e.target.value}
                })}
              />
              <Input
                placeholder="Teléfono"
                value={orderData.datosEntrega.telefono}
                onChange={(e) => setOrderData({
                  ...orderData,
                  datosEntrega: {...orderData.datosEntrega, telefono: e.target.value}
                })}
              />
              <Input
                placeholder="Email"
                type="email"
                value={orderData.datosEntrega.email}
                onChange={(e) => setOrderData({
                  ...orderData,
                  datosEntrega: {...orderData.datosEntrega, email: e.target.value}
                })}
              />
            </div>
          </div>
        );

      case 7: // Devolución
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Política de devolución</h3>
            <div className="bg-earth-50 p-6 rounded-lg space-y-3">
              <h4 className="font-semibold">Aceptamos devoluciones por:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Productos dañados durante el transporte</li>
                <li>• Diferencias en el sabor (lotes defectuosos)</li>
                <li>• Errores en el pedido de nuestra parte</li>
              </ul>
              <p className="text-sm text-earth-600 mt-4">
                Tienes 7 días desde la entrega para reportar cualquier problema. 
                Ofrecemos reemplazo sin costo o reembolso completo.
              </p>
              <label className="flex items-center gap-2 mt-4">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Acepto la política de devolución</span>
              </label>
            </div>
          </div>
        );

      case 8: // Atención al cliente
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-earth-800">Finalizar pedido</h3>
            <div className="bg-golden-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">¡Tu pedido está casi listo!</h4>
              <p className="text-sm text-earth-600 mb-4">
                Agrega cualquier comentario adicional y confirma tu pedido. 
                Te contactaremos dentro de las próximas 2 horas para confirmar todos los detalles.
              </p>
              <Textarea
                placeholder="Comentarios adicionales..."
                value={orderData.comentarios}
                onChange={(e) => setOrderData({...orderData, comentarios: e.target.value})}
                className="mb-4"
              />
              <div className="text-center">
                <Button 
                  className="bg-golden-500 hover:bg-golden-600 text-earth-800 px-8 py-3"
                  onClick={() => {
                    alert("¡Pedido enviado! Te contactaremos pronto.");
                    onClose();
                    setCurrentStep(1);
                  }}
                >
                  Confirmar Pedido
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-earth-800 text-center">
            Proceso de Compra
          </DialogTitle>
        </DialogHeader>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step.number ? 'bg-golden-500 text-white' : 'bg-earth-200 text-earth-600'
                }`}>
                  {currentStep > step.number ? '✓' : <IconComponent size={16} />}
                </div>
                <span className={`ml-2 text-xs ${currentStep >= step.number ? 'text-golden-600' : 'text-earth-400'}`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${currentStep > step.number ? 'bg-golden-300' : 'bg-earth-200'}`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="min-h-[400px]">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            Anterior
          </Button>
          
          {currentStep < 8 ? (
            <Button
              onClick={nextStep}
              className="bg-golden-500 hover:bg-golden-600 text-earth-800 flex items-center gap-2"
            >
              Siguiente
              <ChevronRight size={16} />
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProcesoCompra;