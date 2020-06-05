import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/categories`;

export const userRegister = (article) => {
    const request = new Request(`${login_uri}`, {
        method: 'GET',
        body: JSON.stringify({ article }),
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    return fetch(request);
}