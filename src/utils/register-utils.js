import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/users`;

export const userRegister = (login, firstname, name, email, password) => {
    const request = new Request(`${login_uri}`, {
        method: 'POST',
        body: JSON.stringify({ login, firstname, name, email, password}),
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    return fetch(request);
}
