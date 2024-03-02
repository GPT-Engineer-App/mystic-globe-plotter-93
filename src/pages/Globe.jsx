import { Container, Heading, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Globe = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Navigation />
      <VStack spacing={8} align="stretch">
        <Heading>Mysteries of the Cosmos - Globe</Heading>
        <Image src="/static/globe-placeholder.jpg" alt="Globe Placeholder" boxSize="500px" objectFit="cover" />
        <Text>Interactive globe model with marked points for significant sites, including the patterns they form such as pentagrams and circles.</Text>
        {}
        <Heading size="lg">Points of Interest</Heading>
        {}
      </VStack>
    </Container>
  );
};

export default Globe;
