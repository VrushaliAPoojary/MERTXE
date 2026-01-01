import React from "react";
import "./styles/Projects.scss";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";

const Projects = () => {
  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projects">
      <div className="projects_container">
        <h1 className="projects_title">Featured Projects</h1>

        <div className="projects_grid">
          {/* PROJECT 1 */}
          <div
            className="project_card"
            onClick={() =>
              openProject("https://github.com/yourusername/arecanut-detection")
            }
          >
            <img src={project1} alt="Arecanut Detection System" />
            <div className="project_info">
              <h3>Arecanut Detection System</h3>
              <p>
                AI-powered drone-based agricultural yield prediction using
                YOLOv8 & Computer Vision.
              </p>
              <div className="project_tech">
                <span>Python</span>
                <span>YOLOv8</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>
          <div
            className="project_card"
            onClick={() =>
              openProject("https://github.com/yourusername/arecanut-detection")
            }
          >
            <img src={project1} alt="Arecanut Detection System" />
            <div className="project_info">
              <h3>Arecanut Detection System</h3>
              <p>
                AI-powered drone-based agricultural yield prediction using
                YOLOv8 & Computer Vision.
              </p>
              <div className="project_tech">
                <span>Python</span>
                <span>YOLOv8</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>
          <div
            className="project_card"
            onClick={() =>
              openProject("https://github.com/yourusername/arecanut-detection")
            }
          >
            <img src={project1} alt="Arecanut Detection System" />
            <div className="project_info">
              <h3>Arecanut Detection System</h3>
              <p>
                AI-powered drone-based agricultural yield prediction using
                YOLOv8 & Computer Vision.
              </p>
              <div className="project_tech">
                <span>Python</span>
                <span>YOLOv8</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>
          <div
            className="project_card"
            onClick={() =>
              openProject("https://github.com/yourusername/arecanut-detection")
            }
          >
            <img src={project1} alt="Arecanut Detection System" />
            <div className="project_info">
              <h3>Arecanut Detection System</h3>
              <p>
                AI-powered drone-based agricultural yield prediction using
                YOLOv8 & Computer Vision.
              </p>
              <div className="project_tech">
                <span>Python</span>
                <span>YOLOv8</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>
          <div
            className="project_card"
            onClick={() =>
              openProject("https://github.com/yourusername/arecanut-detection")
            }
          >
            <img src={project1} alt="Arecanut Detection System" />
            <div className="project_info">
              <h3>Arecanut Detection System</h3>
              <p>
                AI-powered drone-based agricultural yield prediction using
                YOLOv8 & Computer Vision.
              </p>
              <div className="project_tech">
                <span>Python</span>
                <span>YOLOv8</span>
                <span>FastAPI</span>
              </div>
            </div>
          </div>


          {/* PROJECT 2 */}
          <div
            className="project_card"
            onClick={() =>
              openProject("https://github.com/yourusername/interior-design-app")
            }
          >
            <img src={project2} alt="Interior Design Web App" />
            <div className="project_info">
              <h3>Interior Design Web App</h3>
              <p>
                Full-stack responsive web application with React.js and modern
                UI/UX design.
              </p>
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
