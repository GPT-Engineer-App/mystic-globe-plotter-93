import { Container, Heading, VStack, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Navigation from "../components/Navigation";

const markedPoints = [
  { name: "Stonehenge", description: "A prehistoric monument in England and a site of astronomical significance." },
  { name: "Pyramids of Giza", description: "Ancient pyramids in Egypt aligned with celestial events." },
  { name: "Nazca Lines", description: "A series of large ancient geoglyphs in Peru with astronomical alignments." },
];

const Globe = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Navigation />
      <VStack spacing={8} align="stretch">
        <Heading>Mysteries of the Cosmos - Globe</Heading>
        {}
        <Text>Placeholder for an interactive 3D globe model which will include marked points for significant sites and the patterns they form, such as pentagrams and circles. (Interactive globe feature is planned for future development.)</Text>
        <Heading size="lg">Points of Interest</Heading>
        <List spacing={3}>
          {markedPoints.map((point) => (
            <ListItem key={point.name}>
              <ListIcon as={FaStar} color="yellow.500" />
              <strong>{point.name}:</strong> {point.description}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Globe;
