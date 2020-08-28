import Axios from "axios";
import { CATEGORY_ENDPOINT, SOURCE_ENDPOINT } from '../utils/constants';

export const getCategories = () => {
    return Axios.get(CATEGORY_ENDPOINT);
}

export const getSources = () => {
    return Axios.get(SOURCE_ENDPOINT);
}