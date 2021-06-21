import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Footer.scss'

const Footer = props => {
    return (
        <footer>
            <SocialMedia />
            <a href="http://marvel.com\" className="attribute"> {props.credit}</a>
        </footer >
    );
}

export default Footer;