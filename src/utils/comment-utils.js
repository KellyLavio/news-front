import * as constants from './constants';

const login_uri = `${constants.apiPlatformApiEndpoint}/users`;

export const userComment = (email,content,date,article,user) => {
    const request = new Request(`${login_uri}`, {
        method: 'PUT',
        body: JSON.stringify({email,content,date,article,user}),
        headers: new Headers({
            'Content-Type': 'application/ld+json',
            'Authorization': `Bearer ${localStorage.getItem('front-user')}`
        }),
    });

    return fetch(request);
}
