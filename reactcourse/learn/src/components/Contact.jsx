import React, { useState } from "react";
import "./styles/Contact.scss";
import { FaXTwitter } from "react-icons/fa6";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const WHATSAPP_NUMBER = "919999999999"; // ← replace with your number

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

  const whatsappMessage = `
New Contact Message 🚀

Name: ${name}
Email: ${email}

Message:
${message}
  `.trim();

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
    setShowOptions(false);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("New Contact Message");
    const body = encodeURIComponent(whatsappMessage);
    window.location.href = `mailto:yourmail@example.com?subject=${subject}&body=${body}`;
    setShowOptions(false);
  };

  return (
    <div className="contact">
      <div className="inputs">
        <h1>Contact Me</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handlePush}>Push</button>

        {/* Contact Options Modal */}
        {showOptions && (
          <div className="contact-options">
            <p>Contact me via</p>
            <button className="whatsapp-btn" onClick={handleWhatsApp}>
              WhatsApp 📲
            </button>
            <button className="email-btn" onClick={handleEmail}>
              Email ✉️
            </button>
          </div>
        )}

        {/* Social Icons */}
        <div className="contact-icons">
          <a href="https://x.com/VrushaliAP04" target="_blank" rel="noreferrer">
            <FaXTwitter className="icon" />
          </a>

          <a
            href="http://linkedin.com/in/vrushali-a-poojary-73b9a129a"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon" />
          </a>

          <a
            href="https://github.com/VrushaliAPoojary"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
