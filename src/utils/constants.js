export const apiPlatformApiEndpoint = `${process.env.REACT_APP_API_ENTRYPOINT}/api`;
export const ARTICLE_ENDPOINT = apiPlatformApiEndpoint + '/articles';
export const CATEGORY_ENDPOINT = apiPlatformApiEndpoint + '/categories';
export const FAVORITE_CATEGORIES_ENDPOINT = apiPlatformApiEndpoint + '/favorite_categories';
export const FAVORITE_SOURCES_ENDPOINT = apiPlatformApiEndpoint + '/favorite_sources';
export const PERSONNAL_DATA_ENDPOINT = apiPlatformApiEndpoint + '/infos';

export const FAVORITE_SOURCE = 'FavoriteSources';
export const FAVORITE_CATEGORY = 'FavoriteCategories';

export const tokenName = 'front-user';

export const urls = {
  user: {
    register: '/register',
    login: '/login',
    logout: '/logout',
    list: '/users',
    editerprofilpage: '/profil/edit',
    profilpage: '/profil',
    userpage: '/userPage',
  }
};