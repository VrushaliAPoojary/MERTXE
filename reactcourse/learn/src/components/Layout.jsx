import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Academics from "./Academics";
import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
import Resumes from "./Resumes";
import "./styles/Layout.scss";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Routes>
        {/* original one-page layout on "/" */}
        <Route
          path="/"
          element={
            <main className="content-wrapper">
              <section id="home" className="page-section">
                <Main />
              </section>
              <section id="about" className="page-section">
                <Section />
              </section>
              <section id="academics" className="page-section">
                <Academics />
              </section>
              <section id="projects" className="page-section">
                <Projects />
              </section>
              <section id="interests" className="page-section">
                <Interests />
              </section>
              <section id="contact" className="page-section">
                <Contact />
              </section>
            </main>
          }
        />

        {/* new resumes page */}
        <Route path="/resumes" element={<Resumes />} />
      </Routes>
    </>
  );
};

export default Layout;
