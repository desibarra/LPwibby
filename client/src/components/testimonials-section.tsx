import { AnimatedCounter } from './animated-counter';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Juan Martínez",
      role: "CEO, TechSolutions",
      initials: "JM",
      text: "Antes, era un infierno saber quién había hablado con qué cliente. Con Wibby, nuestro equipo de ventas en WhatsApp duplicó su capacidad de gestión en el primer mes."
    },
    {
      name: "Ana Rodríguez", 
      role: "Dir. Ventas, InnovaRetail",
      initials: "AR",
      text: "El caos se acabó. Ahora tenemos métricas reales, seguimiento profesional y ningún cliente se nos escapa. Es como tener un CRM dentro de WhatsApp."
    },
    {
      name: "Carlos López",
      role: "Fundador, EcoCommerce", 
      initials: "CL",
      text: "Implementamos Wibby y en 3 meses aumentamos 300% nuestras conversiones por WhatsApp. La IA nos ayuda a responder más rápido y mejor."
    }
  ];

  const stats = [
    { value: 1247, label: "Chats Atendidos" },
    { value: 89, label: "Tasa Conversión", suffix: "%" },
    { value: 23, label: "Tiempo Respuesta", suffix: "s" },
    { value: 156, label: "Ventas Cerradas" }
  ];

  const techLogos = [
    "Python", "JavaScript", "Google", "AWS", "Cloudflare"
  ];

  return (
    <section id="testimonios" className="py-20 relative z-10" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Empresas como la tuya ya{' '}
            <span className="text-wibby-green">profesionalizaron su WhatsApp</span>
          </h2>
          <p className="text-xl text-wibby-text max-w-4xl mx-auto">
            En Wibby, somos obsesivos con la eficiencia en ventas. Hemos ayudado a cientos de empresas a dejar de usar WhatsApp como un simple chat y convertirlo en su canal de adquisición de clientes #1.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-wibby-surface p-6 rounded-xl border border-wibby-green/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-wibby-green rounded-full flex items-center justify-center text-wibby-dark font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-wibby-text-muted">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-wibby-text mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex text-wibby-green">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Dashboard */}
        <div className="bg-wibby-surface p-8 rounded-2xl border border-wibby-green/20 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Panel de Control - Métricas Reales</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-wibby-green mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix || ""} />
                </div>
                <div className="text-wibby-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Trust Indicators */}
        <div className="text-center">
          <p className="text-wibby-text-muted mb-6">Desarrollado con la tecnología más robusta y segura</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {techLogos.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-2xl">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
