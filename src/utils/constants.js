export const apiPlatformApiEndpoint = `${process.env.REACT_APP_API_ENTRYPOINT}/api`;
export const ARTICLE_ENDPOINT = apiPlatformApiEndpoint + '/articles';
export const CATEGORY_ENDPOINT = apiPlatformApiEndpoint + '/categories';

export const tokenName = 'front-user';

export const urls = {
  user: {
    register: '/register',
    login: '/login',
    logout: '/logout',
    list: '/users',
    userpage: '/userPage'
  }
};