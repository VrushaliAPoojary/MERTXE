import React, { useState, useEffect } from 'react';
import './styles/Header.scss';
import { Close, MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const Header = () => {
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    }

//     useEffect(() => {
//     let timeout;

//     const handleMouseMove = () => {
//         document.body.style.backgroundColor = "#faa0b6ff";

//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             document.body.style.backgroundColor = "black";
//         }, 200); // cursor stopped for 300ms
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//         window.removeEventListener("mousemove", handleMouseMove);
//         clearTimeout(timeout);
//     };
// }, []);



    return (
        <div className="header">
            <div className="header__logo">
                <h1>
    <span className="initial">V</span>rushali{" "}
    <span className="initial">A</span>{" "}
    <span className="initial">P</span>oojary
</h1>

            </div>

            <nav className={`navbar ${active ? 'active' : ''}`}>

                <ul>
                    <div className="closed">
                        <Close className="close" onClick={showMenu}/>
                    </div>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlined className="menu" onClick = {showMenu} />
            </div>
        </div>
    );
};

export default Header;
