import React from "react";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./routes/Search";
import ProjectForm from "./components/ProjectForm";
import AdminPage from "./routes/AdminPage";

const App = () => {
  const handleSearch = (query) => {
    // Implement search functionality here
    console.log("Search query:", query);
  };

  return (
    <ChakraProvider>
      <Router>
        <CSSReset />
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/project" element={<ProjectForm/>} />

        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;