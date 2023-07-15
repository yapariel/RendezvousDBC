import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import "./Blogs.css";
import { Container } from "react-bootstrap";

const Blog = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <Container className="centered-container">
      <Navbar />
      <h2>blogs</h2>
    </Container>
  );
};

export default Blog;
