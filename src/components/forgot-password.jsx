"use client";

import { Dialog, Button, Input, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const ForgotPassword = ({ isOpen, onClose }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content bg="gray.800" color="white">
          <Dialog.CloseTrigger />
          <Dialog.Header fontWeight="bold" color="springgreen">
            <Dialog.Title>Recuperar Senha</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <VStack spacing={4}>
              <Text>
                Insira seu e-mail para receber um link de redefinição de senha.
              </Text>
              <Box w="100%">
                <Text mb="8px" fontWeight="bold">
                  E-mail:
                </Text>
                <Input
                  id="forgot-email"
                  type="email"
                  placeholder="seu@email.com"
                  borderColor="gray.200"
                />
              </Box>
            </VStack>
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              color="black"
              bg="springgreen"
              size="md"
              w="100%"
              rounded="full"
              onClick={onClose} // Simular o envio e fechar o modal
            >
              Enviar Link de Redefinição
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default ForgotPassword;
