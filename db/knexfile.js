// eslint-disable-next-line no-unused-vars
/* eslint-disable no-undef */

import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(fileURLToPath(import.meta.url)),
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.PGHOST || "localhost",
      user: process.env.PGUSER || "postgres",
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE || "worktrackdb",
      port: Number(process.env.PGPORT) || 5432,
    },
    migrations: {
      directory: path.join(__dirname, "migrations"),
      extension: "js",
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
};
