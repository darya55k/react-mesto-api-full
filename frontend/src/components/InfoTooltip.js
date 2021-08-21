import React from "react";

import successImg from "../images/res.svg";
import errorImg from "../images/rej.svg";
import Close from "../images/Close-popup.svg";

export default function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_open" : ""}`}>
            <div className="popup__overlay"></div>
            <div className="popup__content">
                <button type="button" className="popup__close-icon">
                    <img className="popup__close-pic" src={Close} alt="Закрыть" onClick={props.onClose} />
                </button>

                <div className="popup__tooltip">
                    <img className="popup__tooltip-icon" src={props.success ? successImg : errorImg} alt="Иконка" />
                    <p className="popup__tooltip-text">{props.success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
                </div>
            </div>
        </div>
    );
}
