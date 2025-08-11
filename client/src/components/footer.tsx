// client/src/components/Footer.tsx
import React from "react";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contacto"
      className="bg-wibby-surface border-t border-wibby-surface-light py-20 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna 1: logo, descripción y redes */}
          <div className="col-span-2">
            <div className="text-3xl font-bold text-wibby-green mb-6">Wibby</div>
            <p className="text-wibby-text mb-6 max-w-md">
              La plataforma que transforma tu WhatsApp en una potente herramienta de
              ventas y atención al cliente.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-wibby-text-muted hover:text-wibby-green transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-wibby-text-muted hover:text-wibby-green transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-wibby-text-muted hover:text-wibby-green transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Columnas 2 y 3: Funciones y Empresa */}
          <div>
            <h4 className="font-semibold mb-4 text-wibby-text">Funciones</h4>
            <ul className="space-y-2 text-wibby-text-muted">
              {[
                "Inbox Multiusuario",
                "Métricas y Analytics",
                "Asistente IA",
                "Automatización",
              ].map((fn) => (
                <li key={fn}>
                  <button
                    onClick={() =>
                      scrollToSection(fn.toLowerCase().replace(/\s+/g, ""))
                    }
                    className="hover:text-wibby-green transition-colors"
                  >
                    {fn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-wibby-text">Empresa</h4>
            <ul className="space-y-2 text-wibby-text-muted">
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-wibby-green transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="hover:text-wibby-green transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="hover:text-wibby-green transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Enlaces legales y copyright */}
        <div className="border-t border-wibby-surface-light mt-12 pt-8 text-center text-wibby-text-muted space-y-2">
          <p>© 2025 Wibby. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
