import { useRef } from 'react';
import { useScrollParallax } from '@/hooks/use-scroll-parallax';

interface FloatingCubeProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

function FloatingCube({ className = '', style, delay = 0 }: FloatingCubeProps) {
  const scrollY = useScrollParallax();
  const cubeRef = useRef<HTMLDivElement>(null);
  
  const parallaxY = scrollY * (0.5 + delay * 0.1);
  
  return (
    <div 
      ref={cubeRef}
      className={`cube-3d ${delay > 0 ? 'animate-float-delayed' : 'animate-float'} ${className}`}
      style={{
        ...style,
        transform: `translateY(${parallaxY}px) rotateX(15deg) rotateY(15deg)`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="cube-face" style={{ transform: 'translateZ(50px)' }} />
      <div className="cube-face" style={{ transform: 'translateZ(-50px) rotateY(180deg)' }} />
      <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(50px)' }} />
      <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(50px)' }} />
      <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(50px)' }} />
      <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(50px)' }} />
    </div>
  );
}

interface GlowingOrbProps {
  className?: string;
  style?: React.CSSProperties;
}

function GlowingOrb({ className = '', style }: GlowingOrbProps) {
  return (
    <div 
      className={`w-32 h-32 bg-gradient-to-r from-wibby-green/10 to-wibby-whatsapp/10 rounded-full blur-xl animate-pulse-glow ${className}`}
      style={style}
    />
  );
}

export function ThreeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingCube 
        className="absolute opacity-30"
        style={{ top: '5rem', left: '2.5rem' }}
        delay={0}
      />
      <FloatingCube 
        className="absolute opacity-20"
        style={{ top: '10rem', right: '5rem' }}
        delay={2}
      />
      <FloatingCube 
        className="absolute opacity-10"
        style={{ top: '25rem', right: '10rem' }}
        delay={4}
      />
      <GlowingOrb 
        className="absolute"
        style={{ top: '15rem', left: '33%' }}
      />
      <GlowingOrb 
        className="absolute w-20 h-20"
        style={{ top: '30rem', right: '25%' }}
      />
    </div>
  );
}
