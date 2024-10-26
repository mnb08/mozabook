import React from "react";
import "./Button.scss";

export const Button = ({ children, onClick, icon }) => {
    return (
        <button onClick={onClick} className="btn">
            <div className="btn__value">{children}</div>
            <div className="btn__icon">
                <img src={icon} alt="" />
            </div>
        </button>
    );
};
