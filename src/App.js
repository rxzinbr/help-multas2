import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Sobre from "./pages/Sobre";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar 
        brand="Help Multas" 
        links={[
          { label: "Home", path: "/" },
          { label: "Serviços", path: "/services" },
          { label: "Sobre", path: "/sobre" },
          { label: "Contato", path: "/contact" }
        ]}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
