import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/categories`;

export const userCategories = () => {
    const request = new Request(`${login_uri}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    return fetch(request);
}