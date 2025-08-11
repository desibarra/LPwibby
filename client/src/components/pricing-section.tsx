import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precios" className="py-20 relative z-10" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Headline */}
        <div className="mb-8">
          <h2 className="text-6xl lg:text-8xl font-bold mb-4">
            <span className="text-wibby-green">Más del 75%</span>{' '}
            <span className="text-white">de Descuento</span>
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-300">
            Oferta de Lanzamiento - Solo por 24 Horas
          </h3>
        </div>

        {/* Scarcity */}
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Únete a los primeros 100 clientes y obtén acceso completo a Wibby con un precio exclusivo que no volverás a ver.
        </p>

        {/* Countdown */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {[
            { label: 'HORAS', v: String(timeLeft.hours).padStart(2, '0') },
            { label: 'MINUTOS', v: String(timeLeft.minutes).padStart(2, '0') },
            { label: 'SEGUNDOS', v: String(timeLeft.seconds).padStart(2, '0') },
          ].map((x, i) => (
            <div key={x.label} className="flex items-center gap-6">
              {i !== 0 && <div className="text-4xl lg:text-5xl text-wibby-green font-bold">:</div>}
              <div className="text-center">
                <div className="text-6xl lg:text-7xl font-bold text-wibby-green countdown-digit">{x.v}</div>
                <div className="text-sm lg:text-base text-gray-400 uppercase tracking-wider">{x.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '⭐', t: 'Setup Gratuito', v: '$150' },
            { icon: '🚀', t: 'Acceso a IA Avanzada', v: '$200' },
            { icon: '🎁', t: 'Soporte Prioritario', v: '$100' },
          ].map(b => (
            <div key={b.t} className="border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{b.t}</h4>
              <p className="text-gray-400">Valor: <span className="text-wibby-green font-bold">{b.v}</span></p>
            </div>
          ))}
        </div>

        {/* PRECIOS 3 PLANES */}
        <div className="grid gap-6 md:grid-cols-3 text-left">
          {/* Start */}
          <article className="relative rounded-2xl border border-gray-700 bg-black/40 p-6 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
            <h3 className="text-white text-2xl font-bold mb-1">Start</h3>
            <p className="text-gray-400 mb-4">Para equipos que inician y necesitan automatización esencial.</p>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-gray-500 line-through text-2xl">$49</span>
              <span className="text-wibby-green text-5xl font-extrabold">$35</span>
              <span className="text-gray-300">/ mes</span>
            </div>

            <ul className="text-gray-200 space-y-2 mb-6">
              <li>✓ 1 Número de WhatsApp</li>
              <li>✓ 3 Usuarios</li>
              <li>✓ CRM Kanban</li>
              <li>✓ Contactos y Flujos ilimitados</li>
              <li>✓ Integración con WebHooks</li>
              <li>✓ Integración con Typebot</li>
            </ul>

            <Button
              variant="outline"
              className="w-full border-gray-700 text-wibby-green hover:bg-wibby-green hover:text-wibby-dark"
              onClick={() => scrollToSection('demo-form')}
            >
              Comenzar
            </Button>
          </article>

          {/* Grow (destacado) */}
          <article className="relative rounded-2xl border border-wibby-green/40 bg-black/40 p-6 shadow-[0_0_0_1px_rgba(198,255,77,.15),0_20px_60px_rgba(0,0,0,.55)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-bold rounded-full border border-wibby-green/50 text-wibby-green bg-wibby-green/10">Más Popular</div>

            <h3 className="text-white text-2xl font-extrabold mb-1">Grow</h3>
            <p className="text-gray-400 mb-4">Para empresas que buscan automatización avanzada e IA.</p>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-gray-500 line-through text-2xl">$99</span>
              <span className="text-wibby-green text-6xl font-extrabold">$59</span>
              <span className="text-gray-300">/ mes</span>
            </div>

            <ul className="text-gray-200 space-y-2 mb-6">
              <li>✓ <b>3 Números de WhatsApp</b></li>
              <li>✓ <b>5 Usuarios por cada número</b> <small className="text-gray-400">(15 usuarios en total)</small></li>
              <li>✓ Todo lo del plan Start</li>
              <li>✓ Integración con <b>DialogFlow (IA)</b></li>
              <li>✓ Integración con <b>n8n</b></li>
              <li>✓ Soporte Prioritario</li>
            </ul>

            <Button
              className="w-full bg-wibby-green text-wibby-dark hover:bg-wibby-green/90 font-extrabold"
              onClick={() => scrollToSection('demo-form')}
            >
              Elegir Grow
            </Button>
          </article>

          {/* Enterprise */}
          <article className="relative rounded-2xl border border-gray-700 bg-black/40 p-6 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
            <h3 className="text-white text-2xl font-bold mb-1">Enterprise</h3>
            <p className="text-gray-400 mb-4">Para grandes operaciones con necesidades de personalización.</p>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-gray-500 line-through text-2xl">$179</span>
              <span className="text-wibby-green text-5xl font-extrabold">$129</span>
              <span className="text-gray-300">/ mes</span>
            </div>

            <ul className="text-gray-200 space-y-2 mb-6">
              <li>✓ <b>3 Números de WhatsApp</b></li>
              <li>✓ <b>10 Usuarios por cada número</b> <small className="text-gray-400">(30 usuarios en total)</small></li>
              <li>✓ Todo lo del plan Grow</li>
              <li>✓ <b>API Dedicada</b></li>
              <li>✓ Onboarding Asistido</li>
              <li>✓ Soporte VIP</li>
            </ul>

            <Button
              variant="outline"
              className="w-full border-gray-700 text-wibby-green hover:bg-wibby-green hover:text-wibby-dark"
              onClick={() => scrollToSection('contact')}
            >
              Hablar con Ventas
            </Button>
          </article>
        </div>

        {/* Confianza */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
          {['Garantía 30 días','Sin permanencia','Cancelación inmediata'].map(t=>(
            <div key={t} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-wibby-green rounded-full" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
