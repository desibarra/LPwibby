// server/routes.ts

import type { Express } from "express";
import { createServer, type Server } from "http";
import { pool } from "./db";
import { insertDemoRequestSchema } from "@shared/schema";
import { z } from "zod";
import type { ResultSetHeader } from "mysql2";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/demo-request", async (req, res, next) => {
    try {
      // 1) Validación con Zod
      const data = insertDemoRequestSchema.parse(req.body);

      // 2) Inserción en MySQL: pool.execute devuelve [ResultSetHeader, ...]
      const [result] = await pool.execute<ResultSetHeader>(
        `INSERT INTO demo_requests (name, email, company, phone, message)
         VALUES (?, ?, ?, ?, ?)`,
        [data.name, data.email, data.company, data.phone, data.message]
      );

      // 3) Devolver JSON con el insertId
      res.json({
        success: true,
        data: {
          id: result.insertId.toString(), // tu id es varchar(36), conviértelo a string
          ...data,
          created_at: new Date().toISOString(),
        },
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Datos de solicitud inválidos",
          errors: err.errors,
        });
      }
      next(err);
    }
  });

  app.get("/api/demo-requests", async (_req, res, next) => {
    try {
      const [rows] = await pool.query(
        `SELECT id, name, email, company, phone, message, created_at
         FROM demo_requests
         ORDER BY created_at DESC`
      );
      res.json({ success: true, data: rows });
    } catch (err) {
      next(err);
    }
  });

  return createServer(app);
}
