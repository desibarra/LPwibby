import { 
  X, 
  Check, 
  MessageCircle, 
  AlertTriangle, 
  Clock, 
  XCircle,
  Zap,
  TrendingUp,
  Shield,
  BarChart3
} from 'lucide-react';

export function BeforeAfterSection() {
  const beforePoints = [
    {
      icon: MessageCircle,
      title: "Respuestas lentas",
      description: "Clientes esperan horas por una respuesta."
    },
    {
      icon: AlertTriangle,
      title: "Leads perdidos", 
      description: "40% de leads se van por falta de atención."
    },
    {
      icon: Clock,
      title: "Trabajo manual",
      description: "8+ horas diarias respondiendo mensajes."
    },
    {
      icon: XCircle,
      title: "Sin seguimiento",
      description: "Clientes potenciales se olvidan sin recordatorios."
    }
  ];

  const afterPoints = [
    {
      icon: Zap,
      title: "Respuesta instantánea",
      description: "Clientes atendidos en menos de 30 segundos."
    },
    {
      icon: TrendingUp,
      title: "Más conversiones",
      description: "280% más ventas con seguimiento automático."
    },
    {
      icon: Shield,
      title: "Atención 24/7",
      description: "Nunca pierdes un cliente por horarios."
    },
    {
      icon: BarChart3,
      title: "Control total",
      description: "Dashboard completo con métricas en tiempo real."
    }
  ];

  return (
    <section id="comparacion" className="py-20 relative z-10" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Before (Sin Wibby) */}
          <div className="text-center lg:text-left p-8 rounded-3xl problem-highlight">
            {/* Header Icon */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <X className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title and Subtitle */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Sin Wibby
            </h3>
            <p className="text-xl text-red-400 mb-12">
              Caos, pérdida de tiempo y clientes
            </p>

            {/* Pain Points */}
            <div className="space-y-8">
              {beforePoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-red-400" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - After (Con Wibby) */}
          <div className="text-center lg:text-left relative before-after-glow">
            <div className="relative solution-highlight rounded-3xl p-8">
              
              {/* Header Icon */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="w-16 h-16 bg-wibby-green rounded-full flex items-center justify-center animate-glow-pulse">
                  <Check className="w-8 h-8 text-wibby-dark" />
                </div>
              </div>

              {/* Title and Subtitle */}
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Con Wibby
              </h3>
              <p className="text-xl text-wibby-green mb-12">
                Automatización, control y más ventas
              </p>

              {/* Solution Points */}
              <div className="space-y-8">
                {afterPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-wibby-green/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-wibby-green" />
                        </div>
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {point.title}
                        </h4>
                        <p className="text-gray-300">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}