import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, fetchPost } from "../../actions";
import CommentForm from "../CommentForm/CommentForm";
import Button from "../Button/Button";

import "./Post.css";
import GoBack from "../GoBackButton/GoBack";

const Post = () => {
    const params = useParams();
    const post = useSelector((state) => state.post);
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchComments(params.id));
        dispatch(fetchPost(params.id));
    }, [dispatch, params.id]);

    const onShowForm = () => {
        setShowForm((state) => !state);
    };

    const renderPost = () => {
        return !post ? (
            <h2>Loading</h2>
        ) : (
            <div className="post">
                <div className="post__header">
                    <h1 className="post__header-text">POST</h1>
                </div>
                <div className="post__details">
                    <h1 className="post__title">{post.title}</h1>
                    <p className="post__body">{post.body}</p>
                </div>
            </div>
        );
    };

    const renderComments = () => {
        return !comments ? (
            <h2>Loading</h2>
        ) : (
            <div className="comments">
                <div className="comments__header">
                    <h2 className="comments__header-text">Comments</h2>
                </div>
                <ul className="comments__list">
                    {comments.map((i, index) => (
                        <li className="comments__item" key={i.id}>
                            <div className="comments__body">
                                <p className="comments__body-text">
                                    <span className="comments__body-number">{index + 1}</span>
                                    {i.body}
                                </p>
                            </div>
                            <div className="comments__info">
                                <p className="comments__author">
                                    Author: {i.name}
                                </p>
                                <p className="comments__email">
                                    Email: {i.email}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="container">
            <GoBack />
            {renderPost()}
            {renderComments()}
            <div className="feedback">
                {(!showForm && (
                    <Button
                        text="Write a comment"
                        classes={["button", "button-primary"]}
                        onClick={onShowForm}
                    />
                )) || <CommentForm />}
            </div>
        </div>
    );
};

export default Post;
