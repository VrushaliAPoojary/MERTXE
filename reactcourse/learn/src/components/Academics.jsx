import React from "react";
import "./styles/Academics.scss";
import degreeIcon from "./assets/degree.png"; // Add your image

const Academics = () => {
  return (
    <div className="sections">
      <div className="sections_container">
        <div className="section_img">
          <img src={degreeIcon} alt="Academics" />
        </div>
        <div className="section_content">
          <h1>Academics</h1>
          <p>
            Currently pursuing B.E. in Computer Science & Engineering at NIEIT, Mangalore. 
            Strong academic foundation with focus on AI/ML, Web Development, and Computer Vision. 
            CGPA: 8.9/10 (as of 2025).
          </p>
          <p>B.E. Computer Science</p>
          <p>AI/ML Specialization</p>
          <p>2022 - 2026</p>
          <p>CGPA: 8.9</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
