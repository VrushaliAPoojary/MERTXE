import React from "react";
import "./styles/Projects.scss";
import project1 from "./assets/project1.jpg"; // Add your project images
import project2 from "./assets/project2.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_container">
        <h1 className="projects_title">Featured Projects</h1>
        <div className="projects_grid">
          <div className="project_card">
            <img src={project1} alt="Project 1" />
            <div className="project_info">
              <h3>Arecanut Detection System</h3>
              <p>AI-powered drone-based agricultural yield prediction using YOLOv8 & Computer Vision.</p>
              <div className="project_tech">
                <span>Python</span>
                <span>YOLOv8</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>
          <div className="project_card">
            <img src={project2} alt="Project 2" />
            <div className="project_info">
              <h3>Interior Design Web App</h3>
              <p>Full-stack responsive web application with React.js and modern UI/UX design.</p>
              <div className="project_tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
