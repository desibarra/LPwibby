import { useEffect, useRef } from 'react';

interface DigitalGridBackgroundProps {
  className?: string;
}

export function DigitalGridBackground({ className = '' }: DigitalGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid configuration
    const gridSize = 40;
    const nodeSize = 2;
    const glowNodes: Array<{ x: number; y: number; intensity: number; phase: number }> = [];
    
    // Initialize glowing nodes
    for (let i = 0; i < 25; i++) {
      glowNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        intensity: Math.random() * 0.8 + 0.2,
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;
    let offsetX = 0;
    let offsetY = 0;

    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.fillStyle = '#111211';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Apply parallax effect based on scroll
      const parallaxFactor1 = scrollRef.current * 0.2;
      const parallaxFactor2 = scrollRef.current * 0.4;
      const parallaxFactor3 = scrollRef.current * 0.6;

      // Slow drift animation
      offsetX = Math.sin(time * 0.3) * 20;
      offsetY = Math.cos(time * 0.2) * 15;

      // Layer 1: Background grid (slowest parallax)
      drawGridLayer(ctx, gridSize * 1.5, 0.1, offsetX * 0.3 - parallaxFactor1, offsetY * 0.3 - parallaxFactor1);
      
      // Layer 2: Middle grid (medium parallax)
      drawGridLayer(ctx, gridSize, 0.2, offsetX * 0.6 - parallaxFactor2, offsetY * 0.6 - parallaxFactor2);
      
      // Layer 3: Front grid (fastest parallax)
      drawGridLayer(ctx, gridSize * 0.7, 0.3, offsetX - parallaxFactor3, offsetY - parallaxFactor3);

      // Draw glowing nodes
      drawGlowingNodes(ctx, glowNodes, time);

      // Draw connecting lines between nearby nodes
      drawConnections(ctx, glowNodes);

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawGridLayer = (
      ctx: CanvasRenderingContext2D, 
      size: number, 
      opacity: number, 
      offsetX: number, 
      offsetY: number
    ) => {
      ctx.strokeStyle = `rgba(189, 238, 52, ${opacity})`;
      ctx.lineWidth = 0.5;

      // Draw vertical lines
      for (let x = -size + (offsetX % size); x < canvas.width + size; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -size + (offsetY % size); y < canvas.height + size; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw grid intersection nodes
      for (let x = -size + (offsetX % size); x < canvas.width + size; x += size) {
        for (let y = -size + (offsetY % size); y < canvas.height + size; y += size) {
          if (Math.random() > 0.92) { // Sparse nodes
            ctx.fillStyle = `rgba(189, 238, 52, ${opacity * 2})`;
            ctx.beginPath();
            ctx.arc(x, y, nodeSize * opacity * 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const drawGlowingNodes = (
      ctx: CanvasRenderingContext2D,
      nodes: Array<{ x: number; y: number; intensity: number; phase: number }>,
      time: number
    ) => {
      nodes.forEach((node, index) => {
        const pulseIntensity = (Math.sin(time * 2 + node.phase) + 1) / 2;
        const opacity = node.intensity * pulseIntensity * 0.8;
        
        // Glow effect
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20);
        gradient.addColorStop(0, `rgba(189, 238, 52, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(189, 238, 52, ${opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(189, 238, 52, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = `rgba(189, 238, 52, ${Math.min(opacity * 2, 1)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Slowly move nodes
        node.x += Math.sin(time * 0.1 + index) * 0.2;
        node.y += Math.cos(time * 0.1 + index) * 0.2;

        // Wrap around screen
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;
      });
    };

    const drawConnections = (
      ctx: CanvasRenderingContext2D,
      nodes: Array<{ x: number; y: number; intensity: number; phase: number }>
    ) => {
      const maxDistance = 150;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            ctx.strokeStyle = `rgba(189, 238, 52, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Handle scroll for parallax effect
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ background: '#111211' }}
    />
  );
}