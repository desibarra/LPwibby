import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function WhatsAppFloatButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Configuración personalizable
  const whatsappConfig = {
    phoneNumber: "524791428122", // Número sin el +
    message: "¡Hola! Estoy interesado en Wibby y me gustaría obtener más información.", // Mensaje predeterminado
    businessHours: { // Opcional: horario de atención
      start: 9, // 9 AM
      end: 18   // 6 PM
    }
  };

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsappConfig.message);
    const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
    
    // Mejor práctica para abrir en nueva pestaña
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Opcional: Registrar el evento de clic
    console.log('WhatsApp button clicked');
  };

  // Efecto para animación de aparición
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Verificar si está dentro del horario laboral (opcional)
  const isBusinessHours = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= whatsappConfig.businessHours.start && 
           hours < whatsappConfig.businessHours.end;
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16 rounded-full
          text-white shadow-xl transition-all
          transform ${isHovered ? 'scale-110' : 'scale-100'}
          bg-gradient-to-br from-[#25D366] to-[#128C7E]
          hover:shadow-2xl hover:from-[#128C7E] hover:to-[#25D366]
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
        `}
        aria-label="Contactar por WhatsApp para más información"
      >
        {/* Icono principal */}
        <MessageCircle 
          className={`w-6 h-6 transition-transform ${isHovered ? 'rotate-12' : 'rotate-0'}`} 
        />
        
        {/* Punto de notificación */}
        {!isBusinessHours() && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
        
        {/* Efecto de onda */}
        <span className={`absolute -inset-2 rounded-full bg-green-300 opacity-0 ${isHovered ? 'animate-ping opacity-40' : ''}`}></span>
        
        {/* Tooltip en hover (solo desktop) */}
        {isHovered && (
          <div className="hidden md:block absolute right-full mr-3 px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-md shadow-lg whitespace-nowrap">
            ¡Contáctanos!<br/>
          </div>
        )}
      </button>
      
      {/* Etiqueta móvil (alternativa al tooltip) */}
      <div className="md:hidden absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md shadow-sm whitespace-nowrap">
        WhatsApp
      </div>
    </div>
  );
}