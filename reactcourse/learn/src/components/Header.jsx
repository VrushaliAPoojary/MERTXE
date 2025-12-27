import React, { useState, useEffect } from "react";
import "./styles/Header.scss";
import { Close, MenuBookOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const showMenu = () => {
    setActive(!active);
  };

  const scrollToSection = (sectionId) => {
    // If not on the main page, go to "/" first, then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setActive(false);
        setActiveSection(sectionId);
      }, 0);
      return;
    }

    // Normal behavior when already on "/"
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
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("academics")}>
              Academics
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("interests")}>
              Interest
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>
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
