import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    React.useEffect(() => {
        setName("");
        setLink("");
    }, [props.isOpen]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleLinkChange(event) {
        setLink(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onAddPlace({
            place: name,
            image: link,
        });
    }

    return (
        <PopupWithForm title="Новое место" name="form_add-element" textButtonSubmit="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="text" name="name" id="popup__form-text" className="form__item form__item_input_text" value={name} placeholder="Название" minLength="2" maxLength="30" required onChange={handleNameChange} />
            <span className="form__item-error popup__form-text-error form__span-input-error"></span>
            <input type="url" name="link" id="popup__form-link" className="form__item form__item_input_photo" placeholder="Ссылка на картинку" required value={link} onChange={handleLinkChange} />
            <span className="form__item-error popup__form-link-error form__span-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
