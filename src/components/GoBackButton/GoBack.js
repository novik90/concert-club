import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const GoBack = () => {
    const history = useNavigate();

    return (
        <div className="navigation">
            <Button
                text={"⇠ Go Back"}
                classes={["button", "button-secondary"]}
                onClick={() => history(-1)}
            />
        </div>
    );
};

export default GoBack;
