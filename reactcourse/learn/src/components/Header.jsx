import React from 'react';
import './styles/Header.scss';
import { Close, MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>Vrushali A Poojary</h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <Close className="close" />
                    </div>

                    <li>
                        <Link to="/"><b>Home</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>About</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>Portfolio</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>Blog</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>Contact</b></Link>
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
