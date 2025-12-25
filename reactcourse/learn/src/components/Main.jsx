import React from "react";
import './styles/Main.scss';
import { FaXTwitter } from "react-icons/fa6";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Vap from './assets/VAP.jpg';
const Main = () => {
  return (
    <div className="main">           
        <div className="main_container">
        <div className="main_content">
                
            <div className="text">
                <p>Hello Everyone !! </p>
                <h1>I am <span className="color"> Vrushali A Poojary</span></h1>
                <p>Front-End Developer</p>

                <div className="icons">
                  <a href="https://x.com/VrushaliAP04" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <FaXTwitter className="icon"/></a>

                  <a href="http://linkedin.com/in/vrushali-a-poojary-73b9a129a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon className="icon"/></a>
                  <a href="https://github.com/VrushaliAPoojary" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHubIcon className="icon"/></a>

                </div>
                <div className="buttons">
                  <button>See me</button>
                  <button>
                    Hire Me
                  </button>
                </div>
            </div>

         </div>
         <div className="main_img"><img src ={Vap} alt='VAP'/></div>
        </div>
    </div>
  );
}
export default Main;