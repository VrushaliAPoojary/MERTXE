import React from "react";
import "./styles/Section.scss";
import me from "./assets/me.jpg";

const Section = () => {
  return (
    <div className="sections">
      <div className="sections_container">
        <div className="section_img">
          <img src={me} alt="me" />
        </div>
        <div className="section_content">
          <h1>About Me</h1>
          <p>
            Hello! I'm Vrushali A Poojary, a passionate Front-End Developer
            dedicated to crafting engaging and user-friendly web experiences.
            With a keen eye for design and a strong foundation in HTML, CSS, and
            JavaScript, I specialize in bringing creative visions to life on the
            web. My journey in web development is fueled by a love for
            problem-solving and a commitment to continuous learning. I thrive in
            collaborative environments where I can contribute my skills and grow
            alongside talented professionals. Let's connect and create something
            amazing together!
          </p>
          <p>JavaScript Developer</p>
          <p>MERN</p>
          <p>Python</p>
          <p>Computer Vision</p>
          <p>Artificial Intelligence And Mchine Learning</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
