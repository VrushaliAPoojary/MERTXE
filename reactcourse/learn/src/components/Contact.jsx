import React from "react";
import { ArrowBack } from "@mui/icons-material";
import "./styles/Contact.scss";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact">
      {/* back button */}
      <button
        type="button"
        className="arrow"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <ArrowBack />
      </button>

      <div className="inputs">
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="message" className="message" />
        <button>Push</button>

        {/* social icons inside card */}
        <div className="contact-icons">
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
      </div>
    </div>
  );
};

export default Contact;
