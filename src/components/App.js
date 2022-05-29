import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./UserList/UserList";
import User from "./User/User";
import Post from "./Post/Post";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <>
                <header className="page__header header">
                    <Header />
                </header>
                <main className="page__main">
                    <Routes>
                        <Route path="/" element={<UserList />} />
                        <Route path="/user/:id" element={<User />} />
                        <Route path="/post/:id" element={<Post />} />
                    </Routes>
                </main>
                <footer className="page__footer footer">
                    <Footer />
                </footer>
            </>
        </BrowserRouter>
    );
};

export default App;
