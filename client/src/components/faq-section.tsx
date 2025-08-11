import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "¿Necesito conocimientos técnicos para usar Wibby?",
      answer: "No en absoluto. Wibby está diseñado para ser intuitivo y fácil de usar. Si sabes usar WhatsApp, sabrás usar Wibby. Además, nuestro setup gratuito te guía en todo el proceso."
    },
    {
      question: "¿Es legal automatizar WhatsApp para mi negocio?",
      answer: "Sí, es 100% legal y seguro. Usamos la API oficial de WhatsApp Business, lo que garantiza que cumples con todas las políticas y términos de servicio de Meta."
    },
    {
      question: "¿Qué pasa si quiero cancelar mi suscripción?",
      answer: "Puedes cancelar tu suscripción en cualquier momento y con un solo clic desde tu panel de control. No hay contratos de permanencia ni complicaciones."
    },
    {
      question: "¿Cuántos mensajes puedo enviar por mes?",
      answer: "Nuestros planes están diseñados para adaptarse a tu crecimiento. Comienzas con un generoso límite de conversaciones y puedes escalar según tus necesidades. No cobramos por mensaje individual."
    },
    {
      question: "¿Incluye soporte técnico y capacitación?",
      answer: "¡Por supuesto! Todos nuestros planes incluyen soporte técnico prioritario para resolver cualquier duda. También ofrecemos una sesión de capacitación inicial para que tú y tu equipo le saquen el máximo provecho a la herramienta."
    },
    {
      question: "¿Puedo integrar Wibby con mis sistemas actuales?",
      answer: "Sí, Wibby está diseñado para conectarse con otras herramientas. Ofrecemos integraciones nativas y la posibilidad de conectar con más de 1,000 apps a través de Zapier."
    },
    {
      question: "¿Qué tan rápido veré resultados en mi negocio?",
      answer: "Verás resultados desde el primer día en organización y eficiencia. La mayoría de nuestros clientes reportan una mejora medible en sus ventas y tiempos de respuesta en las primeras 2 a 4 semanas."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative z-10" style={{ background: 'transparent' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="faq-item border-b border-gray-700/50 last:border-b-0"
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-900/20 transition-colors duration-200 rounded-lg px-4"
              >
                <h3 className="text-lg lg:text-xl font-medium text-white pr-8">
                  {item.question}
                </h3>
                
                <ChevronDown 
                  className={`w-6 h-6 text-wibby-green transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4">
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}