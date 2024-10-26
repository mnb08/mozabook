import React from "react";
import "./Index.scss";
import { Greeting } from "../components/Greeting";

export const Index = () => {
    return (
        <div className="main">
            <div className="main__left">
                <div className="main__logo">
                    <img src={"http://localhost:3000/logo.png"} alt="" />
                </div>
                <div className="main__content">
                    <Greeting />
                </div>
                <div className="main__links">
                    <a href="http://localhost:3000/">Условия пользования </a>
                    <span> и </span>
                    <a href="http://localhost:3000/">
                        политика конфиденциальности
                    </a>
                </div>
            </div>
            <div className="main__right">
                <img src={"http://localhost:3000/main-teacher.png"} alt="" />
            </div>
            <div className="main__circles">
                <img
                    className="big"
                    src="http://localhost:3000/icons/ellipse.svg"
                    alt=""
                />
                <img
                    className="small"
                    src="http://localhost:3000/icons/ellipse-small.svg"
                    alt=""
                />
            </div>
        </div>
    );
};
