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

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação dos dados
    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    // Buscar usuário pelo email
    const user = await db("users").where("email", email).first();

    if (!user) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    // Verificar se o usuário está ativo
    if (!user.active) {
      return res.status(403).json({ error: "Usuário inativo" });
    }

    // Comparando senhas
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    // Retornar dados do usuário
    return res.status(200).json({
      message: "Login bem-sucedido!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      },
    });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return res.status(500).json({
      error: "Erro ao fazer login",
      details: error.message,
    });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const { user, email, password, active, admin } = req.body;

    // Retorna erro caso os dados estiverem incompletos
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
