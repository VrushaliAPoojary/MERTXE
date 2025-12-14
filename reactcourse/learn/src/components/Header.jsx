import React, { useState } from 'react';
import './styles/Header.scss';
import { Close, MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const Header = () => {
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    }
    return (
        <div className="header">
            <div className="header__logo">
                <h1>Vrushali A Poojary</h1>
            </div>

            <nav className="navbar">
                <ul>
                    <div className="closed">
                        <Close className="close" onClick={showMenu}/>
                    </div>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlined className="menu" />
            </div>
        </div>
    );
};

export default Header;
