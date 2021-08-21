import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const inputRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            link: inputRef.current.value,
        });
    }

    return (
        <PopupWithForm title="Обновить аватар" name="form_update-avatar" textButtonSubmit="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="url" name="link" id="link-avatar-input" className="form__item form__item_input_avatar" placeholder="Ссылка на аватар" required ref={inputRef} />
            <span className="form__item-error popup__form-avatar-error form__span-input-error"></span>
        </PopupWithForm>
    );
}
export default EditAvatarPopup;
