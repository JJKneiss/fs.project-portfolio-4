import React from 'react';
import './Header.scss'
import Nav from '../Nav/Nav';

const Header = props => {
    return (
        <header>
            <ul>
                <li>
                    <h1>Marvel Wiki</h1>
                </li>
                <li>
                    <Nav />
                </li>
            </ul>
        </header >
    );
}

export default Header;