import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserPosts } from "../actions";

class UserPosts extends Component {
    componentDidMount() {
        this.props.fetchUserPosts(this.props.userId);
    }

    render() {
        const posts = this.props.userPosts.find((arr) =>
            arr.find((post) => post.userId === this.props.userId)
        );

        if (!posts) {
            return null;
        }

        return (
            <div>
                <h3>User Posts</h3>
                <ul>
                    {posts.map((post) => (
                        <p key={post.id}>{post.title}</p>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { userPosts: state.userPosts };
};

export default connect(mapStateToProps, { fetchUserPosts })(UserPosts);
