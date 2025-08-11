import { Button } from '@/components/ui/button';
import { DashboardMockup } from './dashboard-mockup';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative pt-20 bg-transparent"
             style={{ background: 'transparent' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-block bg-wibby-surface px-4 py-2 rounded-full text-sm text-wibby-green border border-wibby-green/30">
            La herramienta que tu WhatsApp necesita
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Estás usando WhatsApp, pero te está{' '}
            <span className="text-wibby-green">costando dinero</span>
          </h1>
          
          <h2 className="text-xl lg:text-2xl text-wibby-text leading-relaxed">
            Tu enemigo no es la competencia. Es usar una app personal para gestionar un negocio profesional. El caos de chats sin asignar, la falta de seguimiento y la mezcla de conversaciones personales con ventas te hacen ver poco profesional y perder clientes valiosos todos los días.
          </h2>
          
          <div className="bg-wibby-surface p-6 rounded-xl border border-red-500/30">
            <p className="text-wibby-text-muted">
              ¿Qué pasa cuando tu mejor vendedor se va y se lleva todos los chats con los clientes en su teléfono? ¿O cuando dos agentes le responden lo mismo a un cliente importante? Seguir así no solo frena tu crecimiento, condena a tu negocio a operar como un amateur para siempre.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-wibby-green text-wibby-dark hover:bg-wibby-green/90 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-wibby-green/30 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('demo-form')}
            >
              Transforma tu WhatsApp
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-wibby-green text-wibby-green hover:bg-wibby-green hover:text-wibby-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              onClick={() => scrollToSection('demos')}
            >
              Ver un demo en 15 min{' '}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}
