import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

db.raw("SELECT 1")
  .then(() => console.log("Conectado ao PostgreSQÇ via Knex!"))
  .catch((err) => console.error("Erro na conexão com PosgreSQL:", err));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
