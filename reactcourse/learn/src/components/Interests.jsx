import React from "react";
import "./styles/Interests.scss";
import aiIcon from "./assets/ai.png"; // Add relevant icons/images

const Interests = () => {
  return (
    <div className="sections">
      <div className="sections_container">
        <div className="section_img">
          <img src={aiIcon} alt="Interests" />
        </div>
        <div className="section_content">
          <h1>Interests</h1>
          <p>
            Passionate about cutting-edge technologies and their real-world applications. 
            Actively exploring AI/ML, Computer Vision, Full-Stack Development, and Drone Technology.
          </p>
          <p>AI/ML & Computer Vision</p>
          <p>Full-Stack Development</p>
          <p>Drone Technology</p>
          <p>Agricultural AI</p>
          <p>UI/UX Design</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
