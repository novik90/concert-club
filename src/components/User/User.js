import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUser, fetchUserPosts } from "../../actions";
import Button from "../Button/Button";
import GoBack from "../GoBackButton/GoBack";

import "./User.css";

const User = () => {
    const params = useParams();
    const posts = useSelector((state) => state.userPosts);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [postCount, setPostCount] = useState(3);

    useEffect(() => {
        dispatch(fetchUserPosts(params.id));
        dispatch(fetchUser(params.id));
    }, [dispatch, params.id]);

    const previewPosts = (p, n) => {
        const slicedPosts = p.slice(0, n);
        return slicedPosts;
    };

    const showAllPosts = () => {
        if (postCount === 10) {
            setPostCount(3);
        } else {
            setPostCount(10);
        }
    };

    const renderUser = () => {
        return (
            (!user && <h2>Loading</h2>) || (
                <div className="user">
                    <div className="user__title">
                        <h2 className="user__title-text">User Card</h2>
                    </div>
                    <div className="user__nickname">
                        <h2>{user.username}</h2>
                    </div>
                    <div className="user__info">
                        <div className="user__item user__name">
                            <p>{user.name}</p>
                        </div>
                        <div className="user__item user__email">
                            <p>{user.email}</p>
                        </div>
                        <div className="user__item user__phone">
                            <p>{user.phone}</p>
                        </div>
                        <div className="user__item user__website">
                            <p>{user.website}</p>
                        </div>
                    </div>
                    <div className="user__company">
                        <div className="user__item user__company-name">
                            <p>{user.company.name}</p>
                        </div>
                        <div className="user__item user__company-bs">
                            <p>{user.company.bs}</p>
                        </div>
                    </div>
                </div>
            )
        );
    };

    const renderPosts = () => {
        return (
            (!posts && <h2>Loading</h2>) || (
                <div className="posts">
                    <div className="posts__header">
                        <h2 className="posts__header-text">Posts</h2>
                    </div>
                    <ul className="posts__list">
                        {posts &&
                            previewPosts(posts, postCount).map((i) => (
                                <li className="posts__item" key={i.id}>
                                    <Link
                                        className="posts__link"
                                        to={"/post/" + i.id}
                                    >
                                        <div className="posts__title">
                                            <h3 className="posts__title-text">
                                                {i.title}
                                            </h3>

                                            <div className="posts__date">
                                                <p className="posts__date-text">
                                                    12.01.22
                                                </p>
                                            </div>
                                        </div>
                                        <div className="posts__body">
                                            <p className="posts__body-text">
                                                {i.body}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                    <div>
                        <Button
                            onClick={showAllPosts}
                            text={postCount === 3 ? "See all posts" : "Less"}
                            classes={["button", "button-secondary"]}
                        />
                    </div>
                </div>
            )
        );
    };

    return (
        <div className="container">
            <GoBack />
            {renderUser()}
            {renderPosts()}
        </div>
    );
};

export default User;
