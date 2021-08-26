 class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._checkRequestResult(res));
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._checkRequestResult(res));
    }

    updateUserInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        }).then((res) => this._checkRequestResult(res));
    }

    createCard(place, image) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: place,
                link: image,
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
        return fetch(`${this._url}/cards/${id}/likes/`, {
            method: isLiked ?  "PUT" : "DELETE",
            headers: this._headers,
        }).then((res) => this._checkRequestResult(res));
    }

    setAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link,
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
        url: "https://mesto-back.darya55k.nomoredomains.club",
        headers: {
            
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('jwt')}`,
        },
    });
export default api;
