import React from "react";
import "./styles/Academics.scss";

import admarlogo from "./assets/admarlogo.png";

import sitlogo from "./assets/sitlogo.jpg";

const Academics = () => {
  return (
    
    <div className="sections">
      <div className="sections_container academics_grid">
        <div>
      <h1>
        Education
      </h1>
    </div>

        {/* HIGH SCHOOL */}
        <div className="academic_card">
          <div className="card_header">
            <img src={admarlogo} alt="High School Logo" />
            <h2>High School</h2>
          </div>

          <div className="card_body">
            <p className="institution">
              Poorna Prajna English Medium High School
            </p>

            <a
              href="https://maps.app.goo.gl/AEi66vGDexTkxsLg6"
              target="_blank"
              rel="noopener noreferrer"
              className="location"
            >
              Admar, Udupi District, Karnataka – 574119
            </a>

            <a
              href="https://poornaprajnaadamaru.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="website"
            >
                Visit Website
            </a>

            <div className="tags">
              <span>SSLC</span>
              <span>State Board</span>
            </div>

            <div className="score">
              Percentage: <strong>87.6%</strong>
            </div>
          </div>
        </div>

        {/* PUC */}
        <div className="academic_card">
          <div className="card_header">
            <img src={admarlogo} alt="PUC College Logo" />
            <h2>Pre-University (PUC)</h2>
          </div>

          <div className="card_body">
            <p className="institution">
              Poorna Prajna Pre-University College
            </p>

            <a
              href="https://maps.app.goo.gl/AEi66vGDexTkxsLg6"
              target="_blank"
              rel="noopener noreferrer"
              className="location"
            >
              Admar, Udupi District, Karnataka – 574119
            </a>

            <a
              href="https://poornaprajnaadamaru.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="website"
            >
              Visit Website
            </a>

            <div className="tags">
              <span>Science</span>
              <span>PCMB</span>
            </div>

            <div className="score">
              Percentage: <strong>78.6%</strong>
            </div>
          </div>
        </div>

        {/* ENGINEERING */}
        <div className="academic_card">
          <div className="card_header">
            <img src={sitlogo} alt="Engineering Logo" />
            <h2>Engineering</h2>
          </div>

          <div className="card_body">
            <p className="institution">
              Srinivas Institute of Technology
            </p>

            <a
              href="https://maps.app.goo.gl/BaxKNuT2EXq5DR4h8"
              target="_blank"
              rel="noopener noreferrer"
              className="location"
            >
              Valachi, Post Farangipete, Mangaluru-575001
            </a>

            <a
              href="https://www.sitmng.ac.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="website"
            >
              Visit Website
            </a>

            <div className="tags">
              <span>BE</span>
              <span>Artificial Intelligence and Machine Learning</span>
            </div>

            <div className="score">
              CGPA: <strong>7.6 </strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Academics;
