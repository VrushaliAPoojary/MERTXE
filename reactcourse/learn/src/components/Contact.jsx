import React from "react";
import { ArrowBack } from "@mui/icons-material";
import './styles/Contact.scss';
import {Link} from 'react-router-dom';

const Contact=() =>{
    return(
        <div className="contact">
            <Link to ='/contact'>
             <ArrowBack className='arrow'/>
            </Link>
            <div className="inputs">
                <h1>Contact Me</h1>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="message" className="message"/>
                <button>Push</button>
            </div>

        </div>
    )
}
export default Contact;