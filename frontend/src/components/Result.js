import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const Result = ({ data, onOpenClick }) => {
  const { imageUrl, title, date } = data;

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
    >
      <Image src={imageUrl} alt={title} objectFit="cover" h="200px" />
      <Box
        p="4"
        display="flex"
        flexDirection="column"
        flex="1"
        justifyContent="space-between"
      >
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Box>
          <Text color="gray.600" mb="1">On {date}</Text>
          <Button colorScheme="purple" onClick={onOpenClick}>
            Open
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
