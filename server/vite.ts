// server/vite.ts
import path from "path";
import express, { type Express } from "express";
import { fileURLToPath } from "url";
import { createServer as createViteServer, type ViteDevServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

export async function setupVite(app: Express) {
  const vite: ViteDevServer = await createViteServer({
    configFile: path.resolve(__dirname, "../vite.config.js"),  // apunta a .js
    server: {
      middlewareMode: true,
      watch: { usePolling: true, interval: 100 },
    },
  });

  app.use(vite.middlewares);
}

export function serveStatic(app: Express) {
  const staticPath = path.resolve(__dirname, "../dist/public");
  app.use(express.static(staticPath));
}
