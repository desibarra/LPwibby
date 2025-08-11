export function SolutionSection() {
  return (
    <section id="funciones" className="py-20 relative z-10" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Deja de ser esclavo del celular.{' '}
            <span className="text-wibby-green">Toma el control.</span>
          </h2>
          <p className="text-xl text-wibby-text max-w-3xl mx-auto">
            Presentamos <strong className="text-wibby-green">Wibby</strong>: El CRM para WhatsApp que convierte tus chats en ventas.
          </p>
        </div>

        {/* 3 Steps Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center relative">
            <div className="w-20 h-20 bg-wibby-green rounded-full flex items-center justify-center mx-auto mb-6 text-wibby-dark text-2xl font-bold animate-pulse-glow">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 text-wibby-green">Conecta y Centraliza</h3>
            <p className="text-wibby-text">
              Vincula tu número de WhatsApp a nuestro inbox compartido. Todo tu equipo podrá gestionar conversaciones desde un solo lugar, sin usar sus teléfonos personales.
            </p>
          </div>
          
          <div className="text-center relative">
            <div 
              className="w-20 h-20 bg-wibby-green rounded-full flex items-center justify-center mx-auto mb-6 text-wibby-dark text-2xl font-bold animate-pulse-glow"
              style={{ animationDelay: '0.5s' }}
            >
              2
            </div>
            <h3 className="text-2xl font-bold mb-4 text-wibby-green">Organiza y Colabora</h3>
            <p className="text-wibby-text">
              Asigna chats a agentes específicos, deja notas internas, y programa recordatorios de seguimiento para que ninguna oportunidad se enfríe.
            </p>
          </div>
          
          <div className="text-center relative">
            <div 
              className="w-20 h-20 bg-wibby-green rounded-full flex items-center justify-center mx-auto mb-6 text-wibby-dark text-2xl font-bold animate-pulse-glow"
              style={{ animationDelay: '1s' }}
            >
              3
            </div>
            <h3 className="text-2xl font-bold mb-4 text-wibby-green">Mide y Optimiza</h3>
            <p className="text-wibby-text">
              Por primera vez, obtén métricas reales de tu operación en WhatsApp. Mide tiempos de respuesta, volumen de chats por agente y ventas cerradas.
            </p>
          </div>
        </div>

        {/* Visual Flow */}
        <div className="bg-wibby-dark p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-wibby-whatsapp rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
                </svg>
              </div>
              <p className="text-wibby-text">Un número de WhatsApp</p>
            </div>
            
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-wibby-green animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="text-center">
              <div className="grid grid-cols-2 gap-2 max-w-32 mx-auto mb-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-wibby-green rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-wibby-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-wibby-text">Múltiples agentes organizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
