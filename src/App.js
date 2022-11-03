import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shortinfo from "./components/Shortinfo";
import Contact from "./components/Contact";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
    <Navbar/>
  
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Shortinfo />} />
        <Route path="/project" element={<Card />} />
        <Route path="/contact" element={<Contact />} />


    </Routes>
    <Footer/>
  
    </div>
  );
}


export default App;
