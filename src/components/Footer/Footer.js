import React from "react";
import "./Footer.css";

const Footer = () => {
    const year = () => {
        console.log(new Date().getFullYear());
        return new Date().getFullYear();
    };

    return (
        <div className="container">
            <div className="footer__block">
                © {year()} Created by:
                <a href="https://github.com/novik90" className="footer__link">
                    <span className="footer__link-novik">novik90</span>
                </a>
            </div>
        </div>
    );
};

export default Footer;
