import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Blog from "./components/Blogs/Blogs";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
