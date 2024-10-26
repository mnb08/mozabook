import React from "react";
import "./Greeting.scss";
import { Button } from "../Button";

export const Greeting = () => {
    return (
        <div className="greet">
            <div className="greet__title">
                <div className="greet__title_top">
                    СОЗДАВАЙТЕ <span>СВОЁ</span>
                </div>
                <div className="greet__title_bottom">
                    РАБОЧЕЕ <span>ПРОСТРАНСТВО</span>
                </div>
            </div>
            <div className="greet__subtitle">
                Создавайте свой кабинет, открывайте тему урока и приглашайте
                своих учеников всего в пару кликов.
            </div>
            <div className="greet__btns">
                <Button
                    icon={"http://localhost:3000/icons/circle-arrow.svg"}
                    onClick={() => console.log("lol")}
                >
                    Регистрация
                </Button>
                <Button
                    icon={"http://localhost:3000/icons/circle-arrow-blue.svg"}
                >
                    Войти
                </Button>
            </div>
            <div className="greet__features">
                <div className="feature">
                    <div className="feature__icon">
                        <img
                            src="http://localhost:3000/icons/compass.svg"
                            alt="compass"
                        />
                    </div>
                    <div className="feature__text">
                        Удобный набор инструментов
                    </div>
                </div>
                <div className="feature">
                    <div className="feature__icon">
                        <img
                            src="http://localhost:3000/icons/pencil.svg"
                            alt="pencil"
                        />
                    </div>
                    <div className="feature__text">
                        Редактирование урока в реальном времени
                    </div>
                </div>
                <div className="feature">
                    <div className="feature__icon">
                        <img
                            src="http://localhost:3000/icons/graduation-cap.svg"
                            alt="cap"
                        />
                    </div>
                    <div className="feature__text">
                        Новый опыт в преподавании
                    </div>
                </div>
            </div>
        </div>
    );
};
