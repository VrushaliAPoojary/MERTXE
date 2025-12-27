import React, { useState, useEffect } from "react";
import "./styles/Header.scss";
import { Close, MenuBookOutlined } from "@mui/icons-material";

const Header = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActive(false);
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "academics", "projects", "interests", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__logo">
        <h1>
          <span className="initial">V</span>rushali{" "}
          <span className="initial">A</span>{" "}
          <span className="initial">P</span>oojary
        </h1>
      </div>

      <nav className={`navbar ${active ? "active" : ""}`}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <button onClick={() => scrollToSection("home")} className={activeSection === "home" ? "active" : ""}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className={activeSection === "about" ? "active" : ""}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("academics")} className={activeSection === "academics" ? "active" : ""}>
              Academics
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")} className={activeSection === "projects" ? "active" : ""}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("interests")} className={activeSection === "interests" ? "active" : ""}>
              Interest
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className={activeSection === "contact" ? "active" : ""}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuBookOutlined className="menu" onClick={showMenu} />
      </div>
    </header>
  );
};

export default Header;
