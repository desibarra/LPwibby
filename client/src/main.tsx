// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Componente de fallback para errores
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="p-4 bg-red-600 text-white rounded">
      <h2 className="font-bold mb-2">Ocurrió un error</h2>
      <pre className="whitespace-pre-wrap">{error.message}</pre>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-white text-red-600 rounded hover:bg-gray-100"
      >
        Recargar
      </button>
    </div>
  );
}

// ErrorBoundary genérico
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error!} />;
    }
    return this.props.children;
  }
}

// Montaje de React
const container = document.getElementById("root");
if (!container) {
  console.error("❌ No se encontró el elemento con ID 'root'");
  document.body.innerHTML = `
    <div style="padding:2rem; text-align:center;">
      <h1>Error de configuración</h1>
      <p>No se pudo encontrar el contenedor <code>root</code>.</p>
    </div>
  `;
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
