import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Contact from "./Contact";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[location.pathname]);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Section />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
