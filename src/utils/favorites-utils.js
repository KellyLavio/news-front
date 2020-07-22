import * as constants from './constants';

export const userCategories = () => {
    const request = new Request(`${constants.CATEGORY_ENDPOINT}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    return fetch(request);
}

export const userFavoriteCategories = () => {
    const request = new Request(`${constants.FAVORITE_CATEGORIES_ENDPOINT}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/ld+json'
        }),
    });

    return fetch(request);
}