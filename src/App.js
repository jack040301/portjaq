import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shortinfo from "./components/Shortinfo";

function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <Shortinfo/>

    <Card/>

    <Footer/>
    
    </div>
  );
}


export default App;
