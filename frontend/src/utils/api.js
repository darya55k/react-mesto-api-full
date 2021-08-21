 class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        }).then((res) => this._checkRequestResult(res));
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        }).then((res) => this._checkRequestResult(res));
    }

    updateUserInfo(formData) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                about: formData.about,
            }),
        }).then((res) => this._checkRequestResult(res));
    }

    createCard(formData) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: formData.place,
                link: formData.image,
            }),
        }).then((res) => this._checkRequestResult(res));
    }

    removeCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => this._checkRequestResult(res));
    }
    setLikeStatus(id, isLiked) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: isLiked ?  "PUT" : "DELETE",
            headers: this._headers,
        }).then((res) => this._checkRequestResult(res));
    }

    setAvatar(formData) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: formData.link,
            }),
        }).then((res) => this._checkRequestResult(res));
    }

    _checkRequestResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Возникла ошибка: ${res.status}`);
    }
}
    const api = new Api({
        url: "https://mesto.nomoreparties.co/v1/cohort-24",
        headers: {
            authorization: "165e4d32-519f-4771-b3bb-371d3aa2b234",
            "Content-Type": "application/json",
        },
    });
export default api;
