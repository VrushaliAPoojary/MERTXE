import React, { useState } from "react";
import "./styles/Contact.scss";
import { FaXTwitter } from "react-icons/fa6";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const WHATSAPP_NUMBER = "919999999999"; // replace with your number

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handlePush = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    setShowOptions(true);
  };

  const formattedMessage = `
New Contact Message 🚀

Name: ${name}
Email: ${email}

Message:
${message}
  `.trim();

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        formattedMessage
      )}`,
      "_blank"
    );
    setShowOptions(false);
  };

  const handleEmail = () => {
    window.location.href = `mailto:yourmail@example.com?subject=${encodeURIComponent(
      "New Contact Message"
    )}&body=${encodeURIComponent(formattedMessage)}`;
    setShowOptions(false);
  };

  return (
    <section className="contact">
      <div className="contact__card">
        <h1 className="contact__title">Contact Me</h1>

        <div className="contact__form">
          <input
            className="contact__input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="contact__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="contact__input contact__input--message"
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="contact__submit" onClick={handlePush}>
            Push
          </button>
        </div>

        {showOptions && (
          <div className="contact__options">
            <p>Contact me via</p>
            <button
              className="contact__option-btn contact__option-btn--whatsapp"
              onClick={handleWhatsApp}
            >
              WhatsApp 📲
            </button>
            <button
              className="contact__option-btn contact__option-btn--email"
              onClick={handleEmail}
            >
              Email ✉️
            </button>
          </div>
        )}

        <div className="contact__icons">
          <a href="https://x.com/VrushaliAP04" target="_blank" rel="noreferrer">
            <FaXTwitter className="contact__icon" />
          </a>

          <a
            href="https://linkedin.com/in/vrushali-a-poojary-73b9a129a"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="contact__icon" />
          </a>

          <a
            href="https://github.com/VrushaliAPoojary"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="contact__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
