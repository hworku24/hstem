import React from "react";
import { chakra } from "@chakra-ui/system";
import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";

const ChakraLink = chakra(Link);

const Navbar = ({ onSearch }) => {
  return (
    <Box bg="purple.500" p="4" color="white">
      <Flex alignItems="center">
        <Heading as="h1" size="lg">
          HStem DB
        </Heading>
        <Spacer />
        <Box>
        <ChakraLink to="/" ml="4" color="white">
            Home
          </ChakraLink>
          <ChakraLink to="/admin" ml="4" color="white">
            Admin
          </ChakraLink>
          <ChakraLink to="/project" ml="4" color="white">
            Create Project
          </ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;