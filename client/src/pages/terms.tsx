// client/src/pages/terms.tsx
import React from "react";

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-wibby-text">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Aceptación de los Términos</h2>
        <p>
          Al usar <strong>Wibby</strong>, aceptas estos Términos y Condiciones. Si no estás de acuerdo, por favor no utilices el servicio.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Descripción del Servicio</h2>
        <p>
          Wibby proporciona una plataforma para gestionar ventas y atención al cliente a través de WhatsApp. Nos reservamos el derecho de modificar o interrumpir el servicio en cualquier momento.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Registro y Cuenta</h2>
        <ul className="list-disc pl-6">
          <li>Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.</li>
          <li>Debes proporcionar información veraz y completa al registrarte.</li>
          <li>Nos reservamos el derecho de suspender o cancelar cuentas que infrinjan estos Términos.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Uso Aceptable</h2>
        <p>
          No debes usar Wibby para actividades ilegales, envío de spam, o acciones que perjudiquen la infraestructura del servicio o la experiencia de otros usuarios.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Propiedad Intelectual</h2>
        <p>
          Todos los derechos de propiedad intelectual de la plataforma, código, diseño y contenido pertenecen a Wibby o a sus licenciantes. No puedes copiar, reproducir o distribuir sin permiso.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Exención de Garantías</h2>
        <p>
          El servicio se ofrece “tal cual” y sin garantías de ningún tipo. No garantizamos que sea ininterrumpido, libre de errores o se ajuste a tus necesidades específicas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Limitación de Responsabilidad</h2>
        <p>
          Ni Wibby ni sus directivos serán responsables por daños indirectos, incidentales o consecuentes derivados del uso del servicio, hasta el límite permitido por la ley.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Modificaciones de los Términos</h2>
        <p>
          Podemos actualizar estos Términos en cualquier momento. Publicaremos la fecha de “Última actualización” al principio. Tu uso continuado tras cambios significa tu aceptación.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Contacto</h2>
        <p>
          Para dudas o reclamaciones relacionadas con estos Términos escríbenos a{" "}
          <a href="mailto:hola@wibby.online" className="text-wibby-green">
            hola@wibby.online
          </a>.
        </p>
      </section>
    </div>
  );
}
