// server/vite.ts
import path from "path";
import { createServer as createViteServer, type ViteDevServer } from "vite";
import type { Server as HttpServer, Express } from "express";

export async function setupVite(app: Express, server: HttpServer) {
  // 1) Crea un servidor Vite en modo middleware (SSR “custom”)
  const vite: ViteDevServer = await createViteServer({
    configFile: path.resolve(__dirname, "../vite.config.ts"),    // ◀︎ aquí
    root: path.resolve(__dirname, "../client"),
    server: {
      middlewareMode: true,
      watch: {
        // para que no falle si tu FS está detrás de un WSL o VM
        usePolling: true,
        interval: 100,
      },
    },
  });

  // 2) Monta los middlewares de Vite **antes** de tus propias rutas
  app.use(vite.middlewares);

  // 3) Deja que tu `registerRoutes` (y tu errorHandler) vayan **después**
}
