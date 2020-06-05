import Axios from "axios";
import { ARTICLE_ENDPOINT } from "../utils/constants";

export const getArticles = () => {
    return Axios.get(ARTICLE_ENDPOINT);
};