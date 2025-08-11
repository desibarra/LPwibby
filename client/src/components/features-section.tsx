export function FeaturesSection() {
  const features = [
    {
      title: "Inbox Multiusuario",
      description: "Todo tu equipo en un solo número de WhatsApp."
    },
    {
      title: "Métricas Reales",
      description: "Mide el rendimiento de tu equipo y la satisfacción del cliente."
    },
    {
      title: "Asignación de Chats", 
      description: "Orden y claridad para saber quién atiende a quién."
    },
    {
      title: "Notas y Recordatorios",
      description: "Seguimiento profesional para no perder ninguna venta."
    },
    {
      title: "Asistente IA",
      description: "Responde más rápido y sugiere los mejores argumentos de venta."
    }
  ];

  return (
    <section id="beneficios" className="py-20 relative z-10" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Todo lo que necesitas para{' '}
            <span className="text-wibby-green">vender más por WhatsApp</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-wibby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-wibby-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-wibby-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Box */}
          <div className="bg-wibby-dark p-8 rounded-2xl border-2 border-wibby-green">
            <div className="text-center">
              <div className="w-16 h-16 bg-wibby-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-wibby-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-wibby-green mb-4">Garantía "WhatsApp Bajo Control"</h3>
              <p className="text-wibby-text mb-6">
                Te garantizamos que en 30 días tendrás un control total sobre tu operación en WhatsApp. Si no logramos organizar tus conversaciones y darte métricas claras que te ayuden a mejorar, te devolvemos el 100% de tu dinero. Así de seguros estamos.
              </p>
              <div className="flex items-center justify-center space-x-2 text-wibby-green">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="font-semibold">30 días de garantía</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
