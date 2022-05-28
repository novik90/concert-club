import React from "react";
import "./Button.css";

const Button = ({ text, classes = [], onClick = () => {} }) => {
    const className = [...classes].join(" ");

    return (
        <button className={className} type="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
