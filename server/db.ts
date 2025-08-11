// server/db.ts
import "dotenv/config";
import { createPool } from "mysql2/promise";

console.log("🔌 Conectando a MySQL en:", process.env.DB_HOST);

export const pool = createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});
