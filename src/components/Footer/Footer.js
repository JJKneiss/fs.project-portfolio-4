import React from 'react';
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import './Footer.scss'

/* JK: Basic Footer with Social Media Links */
const Footer = props => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/jjkneiss-aba/"><FaLinkedin /></a>

                </li>
                <li>
                    <a href="https://www.facebook.com/daevus.abaddon.1/"><FaFacebookSquare /></a>

                </li>
                <li>
                    <a href="https://www.instagram.com/jj_kneiss/"><FaInstagram /></a>
                </li>
            </ul>
            <a href="http://marvel.com\" className="attribute"> {props.credit}</a>
        </footer >
    );
}

export default Footer;