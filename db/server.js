import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import db from "./db.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Teste de conexão com o banco de dados
db.raw("SELECT 1")
  .then(() => console.log("Conectado ao PostgreSQL via Knex!!"))
  .catch((err) => console.error("Erro na conexão com PostgreSQL:", err));

app.post("/api/register", async (req, res) => {
  try {
    const { user, email, password, active, admin } = req.body;

    if (!user || !email || !password || active || admin) {
      return res.status(400).json({ error: "Dados de cadastro incompletos" });
    }

    // Verificar se o email já existe
    const existingUser = await db("users").where("email", email).first();
    if (existingUser) {
      return res.status(409).json({ error: "Email já cadastrado" });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserir no banco de dados
    const [userId] = await db("users")
      .insert({
        name: user,
        email: email,
        password: hashedPassword,
        active: true,
        admin: false,
        created_at: new Date(),
      })
      .returning("id");

    console.log("Usuário cadastrado com sucesso:", { user, email, userId });

    return res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      user: { id: userId, name: user, email: email },
    });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return res.status(500).json({
      error: "Erro ao cadastrar usuário",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
