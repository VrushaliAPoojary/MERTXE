import React from "react";
import { ArrowBack } from "@mui/icons-material";
import "./styles/Contact.scss";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact">
      {/* Either go back in history, or link to home */}
      <button
        type="button"
        className="arrow"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <ArrowBack />
      </button>

      {/* If you strictly want a Link instead, use:
      <Link to="/" aria-label="Back to Home">
        <ArrowBack className="arrow" />
      </Link>
      */}
      <div className="inputs">
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="message" className="message" />
        <button>Push</button>
      </div>
    </div>
  );
};

export default Contact;
