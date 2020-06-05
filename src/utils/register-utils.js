import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/users`;

export const userRegister = (name, firstname, email, password, login) => {
    const request = new Request(`${login_uri}`, {
        method: 'POST',
        body: JSON.stringify({ name, firstname, email, password, login }),
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    return fetch(request);
}
