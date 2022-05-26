import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, fetchPost } from "../actions";

const PostComments = () => {
    const params = useParams();
    const post = useSelector((state) => state.post);
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

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
        </div>
    );
};

export default PostComments;
