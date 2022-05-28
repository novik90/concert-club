import React, { useState } from "react";

const CommentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`Name: ${name}\nEmail: ${email}\nBody message: ${body}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="commentName">Your name</label>
                <input
                    type="text"
                    name="commentName"
                    onChange={handleNameChange}
                    value={name}
                />
            </div>
            <div>
                <label htmlFor="commentEmail">Your Email</label>
                <input
                    type="email"
                    name="commentEmail"
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="commentBody">Your comment</label>
                <textarea
                    name="commentBody"
                    onChange={handleBodyChange}
                    value={body}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;
