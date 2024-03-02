import { Box, Container, Heading, Text, VStack, HStack, Image, Link, Divider } from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Navigation />
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading>Mysteries of the Cosmos</Heading>
          <Text mt={2}>Exploring the unknown through the lens of conspiracy theories and esoteric knowledge.</Text>
        </Box>

        <HStack justifyContent="center">
          <Box textAlign="center" p={4} borderWidth="1px" borderRadius="lg">
            <FaGlobe size="5em" />
            <Heading size="md" mt={4}>
              Interactive Globe
            </Heading>
            <Text mt={2}>Discover significant sites and patterns related to solar eclipses and more.</Text>
          </Box>
        </HStack>

        <Divider />

        <VStack spacing={4}>
          <Heading size="lg">Significant Sites</Heading>
          {["Stonehenge", "Pyramids of Giza", "Nazca Lines"].map((site) => (
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <HStack spacing={4}>
                <Image src="https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMHNpdGV8ZW58MHx8fHwxNzA5MzUzNDIxfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" objectFit="cover" borderRadius="full" />
                <VStack align="start">
                  <Heading size="md">{site}</Heading>
                  <Text>A hotspot for astronomical and mystical occurrences.</Text>
                  <Link color="teal.500">Learn more</Link>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>

        <Divider />

        <VStack spacing={4}>
          <Heading size="lg">Conspiracy Theories</Heading>
          <Text>Delve into the world of conspiracy theories and uncover the supposed truths hidden from the public eye.</Text>
          <Text>Investigating the shadowy realms of undisclosed secrets, from government cover-ups to hidden agendas.</Text>
        </VStack>

        <Divider />

        <VStack spacing={4}>
          <Heading size="lg">Esoteric Knowledge</Heading>
          <Text>Explore the esoteric knowledge passed down through the ages and how it relates to astronomical events.</Text>
          <Text>Unraveling the mysteries of ancient wisdom and its connection to the universe and our existence.</Text>
        </VStack>

        <Divider />

        <VStack spacing={4}>
          <Heading size="lg">Astronomical Events</Heading>
          <Text>From solar eclipses to celestial alignments, discover the significance of these events in the grand tapestry of the cosmos.</Text>
          <Text>Track and learn about the various celestial phenomena that have captivated humanity throughout history.</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
