// server/index.ts
import 'dotenv/config';
import express, { Request, Response, NextFunction, Express } from 'express';
import http from 'http';
import { registerRoutes } from './routes';
import { setupVite, serveStatic } from './vite';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 5000);
const isDev = process.env.NODE_ENV !== 'production';

// Logger para rutas /api
function createLoggerMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.path.startsWith('/api')) return next();
    const start = Date.now();
    const { method, path } = req;
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`${method} ${path} ${res.statusCode} (${duration}ms)`);
    });
    next();
  };
}

// Manejador central de errores
function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) return next(err);
  console.error('❌ Route Error:', isDev ? err : err.message);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: isDev ? err.message : 'Internal Server Error'
  });
}

async function setupServer(): Promise<http.Server> {
  const app: Express = express();
  const server = http.createServer(app);

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(createLoggerMiddleware());

  // Rutas API
  await registerRoutes(app);

  if (isDev) {
    // VITE en modo middleware para hot-reload
    await setupVite(app, server);
  } else {
    // Sirve estáticos en producción
    serveStatic(app);
  }

  // Error handler al final
  app.use(errorHandler);

  return server;
}

async function start() {
  try {
    const server = await setupServer();
    server.listen(PORT, HOST, () => {
      console.log(`🚀 Server listening on http://${HOST}:${PORT} [${isDev ? 'dev' : 'prod'}]`);
    });
    server.on('error', err => {
      console.error('Server error:', err);
      process.exit(1);
    });
  } catch (err) {
    console.error('Fatal startup error:', err);
    process.exit(1);
  }
}

start();
