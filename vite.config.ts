import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// Import estático para evitar top-level await
import { cartographer } from "@replit/vite-plugin-cartographer";

export default defineConfig(({ mode }) => ({
  base: "./",
  root: path.resolve(__dirname, "client"),

  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Solo en desarrollo dentro de Replit
    mode !== "production" && process.env.REPL_ID ? cartographer() : null,
  ].filter(Boolean),

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));
