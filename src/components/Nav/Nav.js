import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss'
/* JK: Basic Nav */
const Nav = props => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;