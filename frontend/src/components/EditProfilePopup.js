import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm title="Редактировать профиль" name="popup-profile" textButtonSubmit="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="text" name="name" id="form-profile" className="form__item form__item_input_title" placeholder="Имя" minLength="2" maxLength="40" value={name || ""} onChange={handleNameChange} required />
            <span className="form__item-error popup__form-title-error form__span-input-error"></span>
            <input
                type="text"
                name="about"
                id="popup__form-subtitle"
                className="form__item form__item_input_subtitle"
                placeholder="Занятие"
                minLength="2"
                maxLength="200"
                value={description || ""}
                onChange={handleDescriptionChange}
                required
            />
            <span className="form__item-error popup__form-subtitle-error form__span-input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
