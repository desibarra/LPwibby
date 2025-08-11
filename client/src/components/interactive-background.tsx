import { useEffect, useState, useRef } from 'react';
import { useScrollParallax } from '@/hooks/use-scroll-parallax';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

interface FloatingElementProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  type?: 'cube' | 'sphere' | 'pyramid' | 'ring';
}

function FloatingGeometry({ className = '', style, delay = 0, type = 'cube' }: FloatingElementProps) {
  const scrollY = useScrollParallax();
  const parallaxY = scrollY * (0.3 + delay * 0.05);
  
  const getGeometryElement = () => {
    const baseClasses = "absolute opacity-20 backdrop-blur-sm";
    const animationDelay = { animationDelay: `${delay}s` };
    
    switch (type) {
      case 'sphere':
        return (
          <div 
            className={`${baseClasses} w-24 h-24 rounded-full bg-gradient-to-r from-wibby-green/10 to-wibby-whatsapp/10 border border-wibby-green/20 animate-morph`}
            style={{ ...animationDelay, transform: `translateY(${parallaxY}px)` }}
          />
        );
      case 'pyramid':
        return (
          <div 
            className={`${baseClasses} w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-wibby-green/20 animate-drift`}
            style={{ ...animationDelay, transform: `translateY(${parallaxY}px)` }}
          />
        );
      case 'ring':
        return (
          <div 
            className={`${baseClasses} w-20 h-20 rounded-full border-4 border-wibby-green/30 animate-orbit`}
            style={{ ...animationDelay, transform: `translateY(${parallaxY}px)` }}
          >
            <div className="w-2 h-2 bg-wibby-green rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          </div>
        );
      default:
        return (
          <div 
            className={`${baseClasses} cube-3d animate-float-delayed`}
            style={{ 
              ...animationDelay, 
              transform: `translateY(${parallaxY}px) rotateX(15deg) rotateY(15deg)`
            }}
          >
            <div className="cube-face" style={{ transform: 'translateZ(30px)' }} />
            <div className="cube-face" style={{ transform: 'translateZ(-30px) rotateY(180deg)' }} />
            <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(30px)' }} />
            <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }} />
            <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(30px)' }} />
            <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }} />
          </div>
        );
    }
  };

  return (
    <div className={`${className}`} style={style}>
      {getGeometryElement()}
    </div>
  );
}

function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Crear partículas iniciales
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? 'rgba(189, 238, 52, 0.3)' : 'rgba(37, 211, 102, 0.2)'
        });
      }
      setParticles(newParticles);
    };
    
    createParticles();
    
    // Animación de partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      setParticles(prev => prev.map(particle => {
        // Actualizar posición
        let newY = particle.y - particle.speed;
        let newX = particle.x + Math.sin(newY * 0.01) * 0.5;
        
        // Reiniciar partícula si sale de la pantalla
        if (newY < -10) {
          newY = canvas.height + 10;
          newX = Math.random() * canvas.width;
        }
        
        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Efecto de estela
        const gradient = ctx.createLinearGradient(newX, newY, newX, newY + 20);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = particle.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(newX, newY);
        ctx.lineTo(newX, newY + 15);
        ctx.stroke();
        
        return { ...particle, x: newX, y: newY };
      }));
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

function EnergyWaves() {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ animationDelay: `${i * 2}s` }}
        >
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-wibby-green animate-wave"
            style={{ 
              background: 'radial-gradient(circle, rgba(189, 238, 52, 0.1) 0%, transparent 70%)',
              animationDelay: `${i * 1.5}s`
            }}
          />
        </div>
      ))}
    </>
  );
}

function MouseInteractiveOrb() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div
      ref={orbRef}
      className="fixed w-64 h-64 rounded-full pointer-events-none z-10 opacity-20 transition-all duration-1000 ease-out"
      style={{
        left: mousePosition.x - 128,
        top: mousePosition.y - 128,
        background: 'radial-gradient(circle, rgba(189, 238, 52, 0.2) 0%, rgba(37, 211, 102, 0.1) 30%, transparent 70%)',
        filter: 'blur(40px)',
        transform: 'scale(0.8)',
      }}
    />
  );
}

export function InteractiveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sistema de partículas */}
      <ParticleSystem />
      
      {/* Ondas de energía */}
      <EnergyWaves />
      
      {/* Elementos geométricos flotantes */}
      <FloatingGeometry 
        className="absolute"
        style={{ top: '10%', left: '5%' }}
        delay={0}
        type="cube"
      />
      <FloatingGeometry 
        className="absolute"
        style={{ top: '20%', right: '10%' }}
        delay={2}
        type="sphere"
      />
      <FloatingGeometry 
        className="absolute"
        style={{ top: '60%', left: '8%' }}
        delay={4}
        type="pyramid"
      />
      <FloatingGeometry 
        className="absolute"
        style={{ top: '70%', right: '15%' }}
        delay={1}
        type="ring"
      />
      <FloatingGeometry 
        className="absolute"
        style={{ top: '40%', left: '75%' }}
        delay={3}
        type="cube"
      />
      <FloatingGeometry 
        className="absolute"
        style={{ top: '80%', left: '50%' }}
        delay={5}
        type="sphere"
      />
      
      {/* Orbes con gradientes dinámicos */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse-glow opacity-30"
          style={{
            width: `${80 + i * 20}px`,
            height: `${80 + i * 20}px`,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            background: `radial-gradient(circle, rgba(189, 238, 52, 0.${3 - i}) 0%, rgba(37, 211, 102, 0.${2 - i}) 40%, transparent 70%)`,
            animationDelay: `${i * 0.8}s`,
            filter: 'blur(20px)'
          }}
        />
      ))}
      
      {/* Orbe interactivo que sigue el mouse */}
      <MouseInteractiveOrb />
      
      {/* Líneas de conexión animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 5 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(189, 238, 52, 0.3)" />
            <stop offset="100%" stopColor="rgba(37, 211, 102, 0.1)" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={`${i * 12.5}%`}
            y1="0%"
            x2={`${100 - i * 8}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}