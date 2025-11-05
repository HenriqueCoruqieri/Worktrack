import z from "zod";

//Login
export const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "E-mail é obrigatório"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

//Cadastro de usuário
export const registerSchema = z
  .object({
    user: z.string().min(1, "Usuário é obrigatório"),
    email: z.string().email("Email inválido").min(1, "E-mail é obrigatório"),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z
      .string()
      .min(1, "Confirmação de senha é obrigatória", {}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

//Esqueci minha senha
export const forgotPasswordSchema = z.object({
  email: z.string().email("Email não cadastrado").min(1, "Email obrigatório"),
});
