import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postComment } from "../../actions";
import Button from "../Button/Button";

import "./CommentForm.css";

const CommentForm = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const [name, setName] = useState("");
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState("Name cannot be empty");

    const [email, setEmail] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email cannot be empty");

    const [body, setBody] = useState("");
    const [bodyDirty, setBodyDirty] = useState(false);
    const [bodyError, setBodyError] = useState("Message cannot be empty");

    const nameHandler = (event) => {
        const value = event.target.value;
        setName(value);
        if (value.length < 4) {
            setNameError("Name must be longer than 4 characters");
            if (!value) {
                setNameError("Name cannot be empty");
            }
        } else {
            setNameError("");
        }
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re = new RegExp(
            /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
        );
        if (event.target.value === "") {
            setEmailError("Email cannot be empty");
        } else if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError("Invalid Email");
        } else {
            setEmailError("");
        }
    };

    const bodyHandler = (event) => {
        const value = event.target.value;
        setBody(value);
        if (!value) {
            setBodyError("Body cannot be empty");
        } else {
            setBodyError("");
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (nameError || emailError || bodyError) {
            setNameDirty(true);
            setEmailDirty(true);
            setBodyDirty(true);
            return;
        }

        dispatch(
            postComment(params.id, { name: name, email: email, body: body })
        );

        console.group("Send to server");
        console.log(`Name: ${name}\nEmail: ${email}\nBody message: ${body}`);
        console.groupEnd();

        // dispatch fetch comments
    };

    const blurHandler = (event) => {
        switch (event.target.name) {
            case "commentName":
                setNameDirty(true);
                break;
            case "commentEmail":
                setEmailDirty(true);
                break;
            case "commentBody":
                setBodyDirty(true);
                break;
            default:
                break;
        }
    };

    return (
        <div className="comment">
            <div className="comment__header">
                <h2 className="comment__header-text">Write a comment</h2>
            </div>
            <div className="comment__wrapper">
                <form>
                    <div className="comment__user-inputs">
                        <div className="comment__name">
                            <input
                                placeholder="Name"
                                className="comment__name-input"
                                type="text"
                                id="commentName"
                                name="commentName"
                                onBlur={(event) => blurHandler(event)}
                                onChange={(event) => nameHandler(event)}
                                value={name}
                            />
                            {nameError && nameDirty && (
                                <span className="error-message">
                                    {nameError}
                                </span>
                            )}
                        </div>
                        <div className="comment__email">
                            <input
                                placeholder="concert@place.com"
                                className="comment__email-input"
                                type="email"
                                id="commentEmail"
                                name="commentEmail"
                                value={email}
                                onBlur={(event) => blurHandler(event)}
                                onChange={(event) => emailHandler(event)}
                            />
                            {emailError && emailDirty && (
                                <span className="error-message">
                                    {emailError}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="comment__body">
                        {bodyError && bodyDirty && (
                            <span className="error-message-top">
                                {bodyError}
                            </span>
                        )}
                        <textarea
                            className="comment__body-input"
                            placeholder="Lorem ipsum dolor sit."
                            id="commentBody"
                            name="commentBody"
                            onChange={(event) => bodyHandler(event)}
                            onBlur={(event) => blurHandler(event)}
                            value={body}
                        ></textarea>
                    </div>
                    <div className="comment__actions">
                        <div className="comment__actions-wrapper">
                            <Button
                                text={"Submit"}
                                classes={["button", "button-fullfilled"]}
                                onClick={submitHandler}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
