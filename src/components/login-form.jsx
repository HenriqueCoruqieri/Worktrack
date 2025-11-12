"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchema";
import { Link as RouterLink } from "react-router-dom";
import ForgotPassword from "./forgot-password";
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Dados do formulário:", data);
    alert("Login simulado com sucesso! Verifique o console para os dados.");
  };

  return (
    <Box color="white" p={8} w="100%" maxW="md">
      <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading fontWeight="bold" color="springgreen" as="h1" size="2xl">
          Worktrack Management
        </Heading>

        {/* Campo E-mail */}
        <Box mt="6" w="100%">
          <Text mb="8px" fontWeight="bold">
            E-mail:
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
        <Box w="100%">
          <Text mb="8px" fontWeight="bold">
            Senha:
          </Text>
          <Input
            id="password"
            type="password"
            placeholder="Sua senha"
            {...register("password")}
            borderColor={errors.password ? "red.500" : "gray.200"}
          />
          {errors.password && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.password.message}
            </Text>
          )}
        </Box>

        {/* Botão de Entrar */}
        <Button
          type="submit"
          color="black"
          bg="springgreen"
          size="lg"
          w="100%"
          rounded="full"
          mt={4}
        >
          Entrar
        </Button>

        {/* Botão de Entrar como ADM */}
        <Button
          type="submit"
          color="springgreen"
          variant="outline"
          size="lg"
          w="100%"
          rounded="full"
          mt={2}
        >
          Entrar como ADM
        </Button>

        {/* Links Adicionais */}
        <VStack spacing={2} w="100%" mt={4}>
          <Link as={RouterLink} to="/register" font="inherit" color="white">
            Cadastrar
          </Link>
          <Link
            onClick={() => setIsForgotPasswordOpen(true)}
            to="/forgot-password"
            font="inherit"
            color="white"
          >
            Esqueceu a senha?
          </Link>
        </VStack>
      </VStack>

      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </Box>
  );
};

export default LoginForm;
