import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import LoginForm from "./components/login-form";
import clockImage from "./assets/clock_device_transparent.webp";

const LoginPage = () => {
  return (
    <Flex
      direction="column"
      spaceY="6"
      minH="100vh"
      align="center"
      justify="center"
      bg="blackAlpha.900"
      p={4}
    >
      <Image src={clockImage} boxSize="300px" />

      <Box p={8} bg="blackAlpha.900" borderRadius="lg" maxW="md" w="100%">
        <LoginForm />
      </Box>
    </Flex>
  );
};

export default LoginPage;
