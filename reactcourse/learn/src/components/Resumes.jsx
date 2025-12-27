import React from "react";
import "./styles/Resumes.scss";
import ResumeGeneral from "./assets/ResumeGeneral.pdf";
import ResumeFrontend from "./assets/ResumeFrontend.pdf";
import Coverletter from "./assets/Coverletter.pdf";

const Resumes = () => {
  const resumeList = [
    {
      name: "General Resume",
      file: ResumeGeneral,
      description: "Overall profile with academics and projects."
    },
    {
      name: "Front-End Developer Resume",
      file: ResumeFrontend,
      description: "Focused on React and UI development skills."
    },
    {
      name: "Cover Letter",
      file: Coverletter,
      description: "Short version tailored for internships."
    }
  ];

  return (
    <div className="resumes">
      <div className="resumes_container">
        <h2>Resume</h2>
        <p></p>

        <div className="resume_cards">
          {resumeList.map((resume) => (
            <div className="resume_card" key={resume.name}>
              <h3>{resume.name}</h3>
              <p>{resume.description}</p>
              <a
                href={resume.file}
                target="_blank"
                rel="noreferrer"
                className="resume_link"
              >
                Open PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resumes;
