import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Text,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Result from "../components/Result";
import SearchBar from "../components/SearchBar";

function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authorDetails, setAuthorDetails] = useState(null);
  const [fileMetaData, setFileMetaData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects/")
      .then((response) => {
        const data = response.data;
        data.forEach((project, index) => {
          project.id = nanoid();
          project.imageUrl = `https://picsum.photos/id/${index}/200/300/`;
          project.date = faker.date.past().toLocaleDateString();
        });
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Filter projects based on the search query
  const searchedProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handleOpenClick = (projectId) => {
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
    setIsModalOpen(true);

    // Fetch additional details based on the selected project's title
    const encodedTitle = encodeURIComponent(project.title);
    axios
      .get(`http://localhost:8000/api/details/${encodedTitle}/`)
      .then((response) => {
        console.log(response.data);
        const {
          creates: { author },
          file: { file },
          project: { description },
        } = response.data;
        setAuthorDetails(author);
        setFileMetaData({ file, description });
        console.log(fileMetaData);
      })
      .catch((error) => {
        console.error("Error fetching author details:", error);
      });
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <Container maxW="container.lg" py="8">
      <Flex direction={"column"} flexWrap="wrap">
        <SearchBar onSearch={handleSearch} />
        <Box>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="4">
            {searchedProjects.map((project) => (
              <Result
                key={nanoid()}
                data={project}
                onOpenClick={() => handleOpenClick(project.id)}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Date: {selectedProject?.date}</Text>
              <Text>Author: {authorDetails?.name}</Text>
              <Text>Major(s): {authorDetails?.major}</Text>
              <Text>Year: {authorDetails?.year}</Text>
              <Text>Description: {fileMetaData.description}</Text>
            </Box>
            {fileMetaData.file && isValidURL(fileMetaData.file) && (
              <iframe
                title="Google Drive File"
                src={fileMetaData.file}
                width="100%"
                height="500px"
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
