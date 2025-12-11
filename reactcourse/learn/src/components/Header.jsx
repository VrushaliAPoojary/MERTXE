import React from 'react';
import './styles/Header.scss';
import { Close } from '@mui/icons-material';
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
                        <Link to="/">Home</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Header;
