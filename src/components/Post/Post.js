import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, fetchPost } from "../../actions";
import CommentForm from "../CommentForm/CommentForm";

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

    const renderPost = () => {
        return !post ? (
            <h2>Loading</h2>
        ) : (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        );
    };

    const onShowForm = () => {
        setShowForm((state) => !state);
    };

    const renderComments = () => {
        return !comments ? (
            <h2>Loading</h2>
        ) : (
            <ul>
                {comments.map((i) => (
                    <li key={i.id}>
                        <div>
                            <p>{i.body}</p>
                            <div>
                                <p>Author: {i.name}</p>
                                <p>Email: {i.email}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="container">
            <h1>POST</h1>
            <div>{renderPost()}</div>
            <h2>COMMENTS</h2>
            <div>{renderComments()}</div>
            {(!showForm && (
                <button type="button" onClick={onShowForm}>
                    Write a comment
                </button>
            )) || <CommentForm />}
        </div>
    );
};

export default Post;
