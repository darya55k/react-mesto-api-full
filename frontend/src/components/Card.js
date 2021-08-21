import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    const cardDeleteButtonClassName = `cards__button-delete ${!isOwn && "cards__button-delete_invisible"}`;

    const cardLikeButtonClassName = `cards__button-like ${isLiked ? "cards__button-like_active" : ""}`;

    function handleImageClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="cards__item">
            <button type="button" name="button-delete" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <img className="cards__photo cards__photo-open" src={card.link} alt={card.name} onClick={handleImageClick} />

            <div className="cards__info">
                <h2 className="cards__text cards__text-photo">{card.name}</h2>
                <div className="cards__like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="cards__number-likes">{card.likes.length > 0 ? card.likes.length : ""}</p>
                </div>
            </div>
        </li>
    );
}
export default Card;
