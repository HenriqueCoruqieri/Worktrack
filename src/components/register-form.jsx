"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/authSchema";
import axios from "axios";
import { Box, VStack, Heading, Input, Button, Text } from "@chakra-ui/react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        user: data.user,
        email: data.email,
        password: data.password,
      });

      console.log("Resposta do servidor:", response.data);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error(
        "Erro ao cadastrar:",
        error.response ? error.response.data : error.message
      );
      alert("Erro ao cadastrar. Verifique o console para mais detalhes.");
    }
  };

  return (
    <Box color="white" p={8} w="100%" maxW="md">
      <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading fontWeight="bold" color="springgreen" as="h1" size="2xl">
          Cadastrar
        </Heading>

        {/* Campo Usuário */}
        <Box mt="7" w="100%">
          <Text mb="8px" fontWeight="bold">
            Nome de Usuário
          </Text>
          <Input
            id="user"
            type="text"
            placeholder="Informe o nome de usuário"
            {...register("user")}
            borderColor={errors.user ? "red.500" : "gray.200"}
          />
          {errors.user && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.user.message}
            </Text>
          )}
        </Box>

        {/* Campo E-mail */}
        <Box w="100%" mt="1.5">
          <Text mb="8px" fontWeight="bold">
            E-mail
          </Text>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            {...register("email")}
            borderColor={errors.email ? "red.500" : "gray.200"}
          />
          {errors.email && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.email.message}
            </Text>
          )}
        </Box>

        {/* Campo Senha */}
        <Box w="100%" mt="1.5">
          <Text mb="8px" fontWeight="bold">
            Senha
          </Text>
          <Input
            id="password"
            type="password"
            placeholder="Crie uma senha"
            {...register("password")}
            borderColor={errors.password ? "red.500" : "gray.200"}
          />
          {errors.password && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.password.message}
            </Text>
          )}
        </Box>

        {/* Campo Confirmar Senha */}
        <Box w="100%" mt="1.5">
          <Text mb="8px" fontWeight="bold">
            Confirmar Senha
          </Text>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
            borderColor={errors.confirmPassword ? "red.500" : "gray.200"}
          />
          {errors.confirmPassword && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </Box>

        <Box mt="4">
          <Button
            type="submit"
            size="lg"
            bg="springgreen"
            color="black"
            rounded="full"
          >
            Cadastrar
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginForm;
