import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
