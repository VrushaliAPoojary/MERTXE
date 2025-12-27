import React, { useState } from "react";
import "./styles/Header.scss";
import { Close, MenuBookOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
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
            <Link to="/" onClick={() => setActive(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setActive(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setActive(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setActive(false)}>
              Interest
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setActive(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuBookOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
