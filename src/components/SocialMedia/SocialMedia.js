import React from 'react';
import './SocialMedia.scss'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const SocialMedia = props => {
    return (
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/jjkneiss-aba/"><FaLinkedin /></a>

            </li>
            <li>
                <a href="https://www.linkedin.com/in/jjkneiss-aba/"><FaFacebookSquare /></a>

            </li>
            <li>
                <a href="https://www.linkedin.com/in/jjkneiss-aba/"><FaInstagram /></a>
            </li>
        </ul>
    );
}

export default SocialMedia;