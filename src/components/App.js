import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import UserList from "./UserList/UserList";
import User from "./User/User";
import "./App.css";
import Post from "./Post/Post";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="header">
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
                </div>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route
                        path="/post-comments/:id"
                        element={<Post />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default App;
