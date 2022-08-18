import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./Components/About";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Phones from "./Components/Phones";
import Contact from "./Components/Contact";
import Apple from "./Submenu/Apple";
import Consulting from "./Submenu/Consulting";
import Marketing from "./Submenu/Marketing";
import Samsung from "./Submenu/Samsung";
import Software from "./Submenu/Software";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/phones" element={<Phones />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/software" element={<Software />} />
      </Routes>
    </>
  );
};

export default App;
