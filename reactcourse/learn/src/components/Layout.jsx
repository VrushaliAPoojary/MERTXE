import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Academics from "./Academics";
import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
import "./styles/Layout.scss";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
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
    </>
  );
};

export default Layout;
