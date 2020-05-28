import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/login_check`;

const login = (username, password) => {
    const request = new Request(`${login_uri}`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return fetch(request);
}

export default login;