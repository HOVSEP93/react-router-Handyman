import React from "react";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router";
import Contact from "./Contact";
import Error from "./Error";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Pages;
