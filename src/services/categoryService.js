import Axios from "axios"
import { CATEGORY_ENDPOINT, FAVORITE_CATEGORIES_ENDPOINT } from "../utils/constants"

export const getCategories = () => {
    return Axios.get(CATEGORY_ENDPOINT);
}

export const getFavoriteCategories = () => {
    return Axios.get(FAVORITE_CATEGORIES_ENDPOINT, { headers: {"Authorization": `Bearer ${localStorage.getItem('front-user')}`}});
}