import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/users`;

export const editProfil = (login, firstname, name, email, password) => {
    const request = new Request(`${login_uri}`, {
        method: 'PUT',
        body: JSON.stringify({ login, firstname, name, email, password}),
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    return fetch(request);
}
