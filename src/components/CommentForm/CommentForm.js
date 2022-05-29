import React, { useState } from "react";
import Button from "../Button/Button";

import "./CommentForm.css";

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
        <div className="comment">
            <div className="comment__header">
                <h2 className="comment__header-text">Write a comment</h2>
            </div>
            <div className="comment__wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="comment__user-inputs">
                        <div className="comment__name">
                            <input
                                placeholder="Name"
                                className="comment__name-input"
                                type="text"
                                id="commentName"
                                name="commentName"
                                onChange={handleNameChange}
                                value={name}
                            />
                        </div>
                        <div className="comment__email">
                            <input
                                placeholder="concert@place.com"
                                className="comment__email-input"
                                type="email"
                                id="commentEmail"
                                name="commentEmail"
                                onChange={handleEmailChange}
                                value={email}
                            />
                        </div>
                    </div>
                    <div className="comment__body">
                        <textarea
                            className="comment__body-input"
                            placeholder="Lorem ipsum dolor sit."
                            id="commentBody"
                            name="commentBody"
                            onChange={handleBodyChange}
                            value={body}
                        ></textarea>
                    </div>
                    <div className="comment__actions">
                        <div className="comment__actions-wrapper">
                            <Button
                                text={"Submit"}
                                classes={["button", "button-fullfilled"]}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
