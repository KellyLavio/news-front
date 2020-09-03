import * as constants from './constants';

const login_url = `${constants.UPDATE_FAVORITES_ENDPOINT}`;

export const updateFavorites = (favorites) => {
    const request = new Request(`${login_url}`, {
        method: 'PUT',
        body: JSON.stringify({ favorites }),
        headers: new Headers({
            'Content-Type': 'application/ld+json',
            'Authorization': `Bearer ${localStorage.getItem('front-user')}`
        }),
    });

    return fetch(request);
}