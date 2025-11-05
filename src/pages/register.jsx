import RegisterForm from "../components/register-form";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Undo2, UserPlus2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();

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
      <UserPlus2Icon color="springgreen" size="150px" />

      <Button
        onClick={() => nav(-1)}
        variant="outline"
        color="springgreen"
        borderColor="springgreen"
        rounded="full"
        mr="370px"
      >
        <Undo2 />
      </Button>

      <Box
        p={8}
        bg="blackAlpha.900"
        borderRadius="lg"
        boxShadow="xl"
        maxW="md"
        w="100%"
      >
        <RegisterForm />
      </Box>
    </Flex>
  );
};

export default Register;
