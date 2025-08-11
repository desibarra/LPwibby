import { useScrollParallax } from '@/hooks/use-scroll-parallax';

interface SectionBackgroundProps {
  variant?: 'testimonials' | 'features' | 'solution';
  intensity?: 'low' | 'medium' | 'high';
}

export function SectionBackground({ variant = 'solution', intensity = 'medium' }: SectionBackgroundProps) {
  const scrollY = useScrollParallax();
  
  const getVariantElements = () => {
    switch (variant) {
      case 'testimonials':
        return (
          <>
            {/* Estrellas flotantes para testimonios */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute opacity-20"
                style={{
                  top: `${15 + i * 12}%`,
                  left: `${5 + i * 15}%`,
                  transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`,
                  animationDelay: `${i * 0.5}s`
                }}
              >
                <svg className="w-6 h-6 text-wibby-green animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            ))}
            
            {/* Líneas de datos animadas */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(4)].map((_, i) => (
                <div
                  key={`data-line-${i}`}
                  className="absolute h-px bg-gradient-to-r from-transparent via-wibby-green to-transparent animate-wave"
                  style={{
                    top: `${25 + i * 20}%`,
                    width: '60%',
                    left: `${20 + i * 5}%`,
                    animationDelay: `${i * 0.8}s`
                  }}
                />
              ))}
            </div>
          </>
        );
        
      case 'features':
        return (
          <>
            {/* Íconos de características flotantes */}
            {[
              { icon: '✓', pos: { top: '20%', left: '10%' } },
              { icon: '📊', pos: { top: '60%', right: '15%' } },
              { icon: '🤖', pos: { top: '40%', left: '80%' } },
              { icon: '💬', pos: { top: '70%', left: '20%' } },
              { icon: '⚡', pos: { top: '30%', right: '25%' } }
            ].map((item, i) => (
              <div
                key={`feature-icon-${i}`}
                className="absolute text-2xl opacity-20 animate-particle-float"
                style={{
                  ...item.pos,
                  transform: `translateY(${scrollY * (0.08 + i * 0.02)}px)`,
                  animationDelay: `${i * 0.6}s`
                }}
              >
                {item.icon}
              </div>
            ))}
            
            {/* Patrones geométricos */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" className="absolute inset-0">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-wibby-green"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </>
        );
        
      default: // solution
        return (
          <>
            {/* Flechas de proceso */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`arrow-${i}`}
                className="absolute opacity-30"
                style={{
                  top: `${30 + i * 15}%`,
                  left: `${25 + i * 25}%`,
                  transform: `translateY(${scrollY * (0.05 + i * 0.01)}px)`,
                  animationDelay: `${i * 1}s`
                }}
              >
                <svg className="w-8 h-8 text-wibby-green animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            ))}
            
            {/* Ondas de conexión */}
            {[...Array(2)].map((_, i) => (
              <div
                key={`connection-wave-${i}`}
                className="absolute opacity-20"
                style={{
                  top: `${40 + i * 30}%`,
                  left: '10%',
                  width: '80%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(189, 238, 52, 0.5), transparent)',
                  animationDelay: `${i * 1.5}s`
                }}
              >
                <div className="w-full h-full animate-wave" />
              </div>
            ))}
          </>
        );
    }
  };
  
  const intensityOpacity = {
    low: 0.3,
    medium: 0.5,
    high: 0.7
  };
  
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: intensityOpacity[intensity] }}
    >
      {getVariantElements()}
      
      {/* Partículas base comunes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`base-particle-${i}`}
          className="absolute w-1 h-1 bg-wibby-green rounded-full opacity-40 animate-particle-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * (0.02 + Math.random() * 0.03)}px)`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
}