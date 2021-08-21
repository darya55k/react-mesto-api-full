import Plus from "../images/profile-plus.svg";
import React from "react";
import Card from "./Card";
import Edit from "../images/profile-edit-button.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={currentUser.avatar} alt="Изображение профиля" />
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                    <button type="button" className="profile__button-edit" onClick={props.onEditProfile}>
                        <img className="profile__button-pict" src={Edit} alt="Редактировать профиль" />
                    </button>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}>
                    <img className="profile__plus" src={Plus} alt="Добавить карточку" />
                </button>
            </section>

            <section className="elements">
                <ul className="cards">
                    {props.cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                    ))}
                </ul>
            </section>
        </main>
    );
}
export default Main;
