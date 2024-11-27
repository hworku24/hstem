import React, { useState } from "react";
import { Box, Heading, Input, Button, Center, Text } from "@chakra-ui/react"; // Adjust Chakra UI imports as needed

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    cohort: "",
    audience: "",
  });

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/projects/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form data after successful submission
        setFormData({
          title: "",
          description: "",
          cohort: "",
          audience: "",
        });
        alert("Project created successfully!");
      } else {
        console.error("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <Center h="100vh">
      <Box p="4" shadow="lg" rounded="md" bg="white">
        <Heading mb="4" textAlign="center">
          Create a Project
        </Heading>
        <Input
          type="text"
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => handleInputChange(e, "title")}
          mb="4" 
        />
        <Input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => handleInputChange(e, "description")}
          mb="4" 
        />
        <Input
          type="text"
          placeholder="Cohort"
          value={formData.cohort}
          onChange={(e) => handleInputChange(e, "cohort")}
          mb="4" 
        />
        <Input
          type="text"
          placeholder="Audience"
          value={formData.audience}
          onChange={(e) => handleInputChange(e, "audience")}
          mb="4"
        />
        <Center>
          <Button colorScheme="purple" onClick={handleSubmit}>
            Create Project
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default ProjectForm;