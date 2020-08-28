import Axios from "axios";
import { FAVORITE_CATEGORIES_ENDPOINT, FAVORITE_SOURCES_ENDPOINT } from "../utils/constants"


export const getFavoriteCategories = () => {
    return Axios.get(FAVORITE_CATEGORIES_ENDPOINT, { headers: {"Authorization": `Bearer ${localStorage.getItem('front-user')}`}});
}

export const getFavoriteSources = () => {
    return Axios.get(FAVORITE_SOURCES_ENDPOINT, {headers: {"Authorization": `Bearer ${localStorage.getItem('front-user')}`}});
}
