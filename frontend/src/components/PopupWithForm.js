import React from "react";
import Close from "../images/Close-popup.svg";


function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_open" : ""}`}>
            <div className="popup__overlay"></div>
            <div className="popup__content">
                <button type="button" className="popup__close-icon">
                    <img className="popup__close-pic" src={Close} alt="Закрыть" onClick={props.onClose} />
                </button>
                <form name={props.name} className="form " onSubmit={props.onSubmit}>
                    <div className="form__main-container">
                        <h2 className="form__heading">{props.title}</h2>
                        <div className="form__input-container" />
                        {props.children}

                        <div className="form__handlers">
                            <button type="submit" name="buttonSave" className="form__button">
                                {props.textButtonSubmit}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default PopupWithForm;
