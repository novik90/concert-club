import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <div className="container header__content">
            <div className="logo">
                <Link to="/" className="logo__text">
                    CONCERT CLUB
                </Link>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link" to="/">
                            Версия для слабовидящих
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/">
                            Мой профиль
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
