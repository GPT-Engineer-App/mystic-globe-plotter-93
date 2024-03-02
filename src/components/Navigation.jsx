import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" mb={4} justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/globe">
          Globe
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
