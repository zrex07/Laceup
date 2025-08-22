import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Navbar onSearch={setSearchQuery} /> {/* pass setter */}
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
