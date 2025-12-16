import React from "react";
import './styles/Main.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


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
                    <TwitterIcon className="icon"/>
                    <LinkedInIcon className="icon"/>
                    <GitHubIcon className="icon"/>

                </div>
            </div>
         </div>
        </div>
    </div>
  );
}
export default Main;