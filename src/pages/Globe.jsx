import { Container, Heading, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Globe = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Navigation />
      <VStack spacing={8} align="stretch">
        <Heading>Mysteries of the Cosmos - Globe</Heading>
        <p>3D Globe Model Placeholder</p>
        {}
        <Heading size="lg">Points of Interest</Heading>
        {}
      </VStack>
    </Container>
  );
};

export default Globe;
