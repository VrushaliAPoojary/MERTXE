import React from "react";
import "./styles/Interests.scss";

import videoIcon from "./assets/video.webp";
import photoIcon from "./assets/photography.webp";
import webIcon from "./assets/web.webp";
import cycleIcon from "./assets/cycle.jpeg";
import youtubeIcon from "./assets/youtube.webp";

const interestsData = [
  {
    title: "Videography & Editing",
    icon: videoIcon,
    description: "Creating cinematic videos and storytelling through edits.",
  },
  {
    title: "Photography",
    icon: photoIcon,
    description: "Capturing moments with creative framing and lighting.",
  },
  {
    title: "Web Design",
    icon: webIcon,
    description: "Designing clean, responsive, and user-focused interfaces.",
  },
  {
    title: "Cycling",
    icon: cycleIcon,
    description: "Exploring nature and building endurance on long rides.",
  },
  {
    title: "YouTube Creation",
    icon: youtubeIcon,
    description: "Producing content and learning digital storytelling.",
  },
];

const Interests = () => {
  return (
    <div className="interests">
      <div className="interests_container">
        <h1 className="interests_title">Interests</h1>

        <div className="interests_grid">
          {interestsData.map((interest, index) => (
            <div className="interest_card" key={index}>
              <div className="interest_icon">
                <img src={interest.icon} alt={interest.title} />
              </div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
