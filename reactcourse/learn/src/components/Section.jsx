import React from "react";
import "./styles/Section.scss";
import me from "./assets/me.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const Section = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewWork = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("projects");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
      return;
    }

    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <div className="about__image-glow" />
          <img src={me} alt="Vrushali Poojary" className="about__image" />
        </div>

        <div className="about__content">
          <h1 className="about__title">About Me</h1>

          <p className="about__intro">
            Hello! I'm Vrushali A Poojary, a passionate Front-End Developer
            dedicated to crafting engaging and user-friendly web experiences.
            With a strong foundation in HTML, CSS, and JavaScript, I love
            transforming ideas into clean, responsive, and interactive UIs.
          </p>

          <p className="about__intro about__intro--secondary">
            My journey in web development is driven by problem-solving and
            continuous learning. I thrive in collaborative environments where
            I can grow alongside talented professionals and build meaningful
            digital products.
          </p>

          <div className="about__section">
            <h3 className="about__subtitle">Languages I Speak</h3>
            <div className="about__tags">
              <span className="about__tag">English</span>
              <span className="about__tag">Hindi</span>
              <span className="about__tag">Kannada</span>
              <span className="about__tag">Sanskrit</span>
              <span className="about__tag">Tulu</span>
            </div>
          </div>

          <div className="about__section">
            <h3 className="about__subtitle">Skills</h3>
            <ul className="about__list">
              <li className="about__list-item">JavaScript Developer</li>
              <li className="about__list-item">MERN Stack</li>
              <li className="about__list-item">Python</li>
              <li className="about__list-item">Computer Vision</li>
              <li className="about__list-item">
                Artificial Intelligence & Machine Learning
              </li>
            </ul>
          </div>

          <button className="about__button" onClick={handleViewWork}>
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
