import React from "react";
import "./styles/Projects.scss";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.webp";
import project3 from "./assets/project3.webp";
import project4 from "./assets/project4.webp";
import project5 from "./assets/project5.webp";
import project6 from "./assets/project6.png";

const projectsData = [
  {
    title: "AI Resume Analyzer",
    image: project1,
    link: "https://github.com/VrushaliAPoojary/Ai-Resume-Analyzer",
    description:
      "AI-powered resume analysis system that extracts skills and insights using NLP.",
    tech: ["Python", "NLP", "FastAPI", "Streamlit"],
  },
  {
    title: "Multi-Feature Object Detection System",
    image: project2,
    link: "https://github.com/VrushaliAPoojary/colordetection",
    description:
      "Real-time multi-object detection using YOLOv8 integrated with OpenCV.",
    tech: ["Python", "OpenCV", "YOLOv8"],
  },
  {
    title: "EdumelmsFS – Learning Management System",
    image: project3,
    link: "https://github.com/VrushaliAPoojary/EdumelmsFS",
    description:
      "Full-stack LMS platform with authentication, dashboards, and course management.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
  },
  {
    title: "Medical Report Analyzer",
    image: project4,
    link: "https://github.com/VrushaliAPoojary/medical_report_analyser",
    description:
      "NLP-based tool to extract and structure insights from medical reports.",
    tech: ["Python", "NLP", "Streamlit"],
  },
  {
    title: "Digit Recognizer",
    image: project5,
    link: "https://github.com/VrushaliAPoojary/DigitRecognizer",
    description:
      "Web-based ML system for handwritten digit recognition.",
    tech: ["Python", "scikit-learn", "FastAPI", "JavaScript"],
  },
  {
    title: "Interior Design Web Page",
    image: project6,
    link: "https://interior-design-web-topaz.vercel.app/", // No GitHub link provided in LaTeX
    description:
      "A responsive web page showcasing modular kitchen designs with offers and a free consultation booking feature.",
    tech: ["React", "Node.js", "Express.js"],
  },
];

const Projects = () => {
  const openProject = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="projects">
      <div className="projects_container">
        <h1 className="projects_title">Projects</h1>

        <div className="projects_grid">
          {projectsData.map((project, index) => (
            <div
              className="project_card"
              key={index}
              onClick={() => openProject(project.link)}
            >
              <img src={project.image} alt={project.title} />

              <div className="project_info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project_tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
