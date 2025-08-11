// client/src/pages/privacy.tsx
import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-wibby-text">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introducción</h2>
        <p className="mb-4">
          En <strong>Wibby</strong> valoramos tu privacidad. Esta
          Política de Privacidad describe qué datos recopilamos, cómo los
          usamos, con quién los compartimos y tus derechos.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Datos que recopilamos</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Información de contacto:</strong> nombre, email y empresa
            que introduces al solicitar una demo.
          </li>
          <li>
            <strong>Uso de la plataforma:</strong> métricas de interacción,
            páginas vistas y duración de sesión para mejorar el servicio.
          </li>
          <li>
            <strong>Cookies y tecnologías similares:</strong> para
            autenticarte y personalizar tu experiencia.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Finalidad del tratamiento</h2>
        <p className="mb-4">
          Utilizamos tus datos para:
        </p>
        <ul className="list-disc pl-6">
          <li>Gestionar y responder a tus solicitudes de demo.</li>
          <li>Enviar comunicaciones relacionadas con el servicio.</li>
          <li>Mejorar el producto y analizar su uso.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Compartir datos</h2>
        <p className="mb-4">
          No vendemos tus datos. Podemos compartirlos con:
        </p>
        <ul className="list-disc pl-6">
          <li>Proveedores de hosting (AWS, DigitalOcean).</li>
          <li>Herramientas de analítica (Google Analytics).</li>
          <li>Servicios de email (Mailgun, SendGrid) para notificaciones.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Retención de datos</h2>
        <p className="mb-4">
          Conservamos tu información mientras tengas una cuenta activa o por el
          tiempo necesario para cumplir con obligaciones legales.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Tus derechos</h2>
        <p className="mb-4">
          Puedes solicitar en cualquier momento:
        </p>
        <ul className="list-disc pl-6">
          <li>Acceso a tus datos.</li>
          <li>Rectificación o supresión.</li>
          <li>Limitación u oposición al tratamiento.</li>
          <li>Portabilidad de los datos.</li>
        </ul>
        <p>
          Envía tu solicitud a <a href="mailto:hola@wibby.online" className="text-wibby-green">hola@wibby.online</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta política y publicaremos la fecha de última
          modificación al inicio. Te recomendamos revisarla periódicamente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Contacto</h2>
        <p>
          Si tienes dudas o quieres ejercer tus derechos, escríbenos a{" "}
          <a href="mailto:hola@wibby.online" className="text-wibby-green">
            hola@wibby.online
          </a>.
        </p>
      </section>
    </div>
  );
}
