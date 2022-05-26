import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUser, fetchUserPosts } from "../actions";

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

    return (
        <div className="container">
            {(!user && <h2>Loading</h2>) || (
                <>
                    <h1>{user.username}</h1>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>phone: {user.phone}</p>
                    <p>website: {user.website}</p>
                    <p>
                        company: {user.company.name} - {user.company.bs}
                    </p>
                </>
            )}
            <h2>Posts</h2>
            {(!posts && <h2>Loading</h2>) || (
                <ul>
                    {posts &&
                        previewPosts(posts, postCount).map((i) => (
                            <li key={i.id}>
                                <h3>
                                    <Link to={"/post-comments/" + i.id}>
                                        {i.title}
                                    </Link>
                                </h3>
                                <p>{i.body}</p>
                            </li>
                        ))}
                </ul>
            )}
            <div>
                <button type="button" onClick={showAllPosts}>
                    {postCount === 3 ? "See all posts" : "Less"}
                </button>
            </div>
        </div>
    );
};

export default User;
