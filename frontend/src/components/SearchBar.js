import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Box mb="4">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <IconButton
          colorScheme="purple"
          aria-label="Search"
          icon={<SearchIcon />}
          onClick={handleSearch}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;