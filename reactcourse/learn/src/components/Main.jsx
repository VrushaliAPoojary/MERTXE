import React from "react";
import "./styles/Main.scss";
import { FaXTwitter } from "react-icons/fa6";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Vap from "./assets/VAP.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleResumeClick = () => {
    navigate("/resumes");
  };

  const handleHireMeClick = () => {
    // if not on home route, go there first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <div className="text">
            <p>Hello Everyone !! </p>
            <h1>
              I am <span className="color"> Vrushali A Poojary</span>
            </h1>
            <p>Front-End Developer</p>

            <div className="icons">
              <a
                href="https://x.com/VrushaliAP04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter className="icon" />
              </a>

              <a
                href="http://linkedin.com/in/vrushali-a-poojary-73b9a129a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="icon" />
              </a>
              <a
                href="https://github.com/VrushaliAPoojary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon className="icon" />
              </a>
            </div>

            <div className="buttons">
              <button onClick={handleResumeClick}>My Resume</button>
              <button onClick={handleHireMeClick}>Hire Me</button>
            </div>
          </div>
        </div>
        <div className="main_img">
          <img src={Vap} alt="VAP" />
        </div>
      </div>
    </div>
  );
};

export default Main;
