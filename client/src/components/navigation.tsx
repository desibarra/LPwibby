import { Button } from '@/components/ui/button';
import React from 'react';

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-wibby-dark/90 backdrop-blur-md border-b border-wibby-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-wibby-green">Wibby</div>
          </div>

          {/* LINKS */}
          <div className="hidden md:flex space-x-8 text-wibby-text">
            <button
              onClick={() => scrollToSection('beneficios')}
              className="hover:text-wibby-green transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('funciones')}
              className="hover:text-wibby-green transition-colors"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className="hover:text-wibby-green transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="hover:text-wibby-green transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* CTA BUTTON */}
          <Button
            onClick={() => scrollToSection('contacto')}
            className="btn-contact transition-all duration-300"
          >
            Contactar
          </Button>
        </div>
      </div>
    </nav>
  );
}
