import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister(email, password);
    }

    return (
        <main className="content">
            <section className="sign">
                <div className="sign__container">
                    <h2 className="sign__title">Регистрация</h2>

                    <form noValidate className="sign__form" name="sign-form" onSubmit={handleSubmit} action="#" method="post">
                        <label className="sign__form-field">
                            <input name="email" placeholder="Email" id="email" type="email" className="sign__input" value={email} onChange={handleChange} required minLength="2" maxLength="40" />
                            <span className="popup__error popup__error_visible" id="email-error"></span>
                        </label>
                        <label className="sign__form-field">
                            <input name="password" placeholder="Пароль" id="password" type="password" className="sign__input" value={password} onChange={handleChange} required minLength="2" maxLength="200" />
                            <span className="popup__error popup__error_visible" id="password-error"></span>
                        </label>
                        <button name="submit" type="submit" className="sign__btn-submit" value="Сохранить">
                            Зарегистрироваться
                        </button>
                        <p className="sign__form-link-question">
                            <Link to="/sign-in" className="sign__form-link header__link">
                                Уже зарегистрированы? Войти
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}








